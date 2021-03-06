import {
  Controller,
  Get,
  PlatformContext,
  PlatformTest,
  QueryParams,
  ResponseFilter,
  ResponseFilterMethods
} from "@tsed/common";
import {isArray} from "@tsed/core";
import {PlatformTestUtils} from "@tsed/platform-test-utils";
import {
  CollectionOf,
  Default,
  Description,
  Generics,
  getSpec,
  Integer,
  MaxItems,
  Min,
  MinLength,
  Property,
  Required,
  Returns,
  SpecTypes
} from "@tsed/schema";
import {expect} from "chai";
import * as qs from "querystring";
import * as SuperTest from "supertest";
import {PlatformExpress} from "../src";
import {rootDir, Server} from "./app/Server";

class Sort {
  @Required()
  property: string;

  @Property()
  direction: "asc" | "desc" = "asc";

  constructor(options?: [string, "asc" | "desc"][] | Sort) {
    if (isArray<string>(options)) {
      this.property = options[0];
      this.direction = options[1] as "asc" | "desc";
    } else if (options) {
      const {property, direction} = options as Sort;
      this.property = property;
      this.direction = direction;
    }
  }
}

class Pageable {
  @Integer()
  @Min(0)
  @Default(0)
  @Description("Page number.")
  page: number = 0;

  @Integer()
  @Min(1)
  @Default(20)
  @Description("Number of objects per page.")
  size: number = 20;

  private _sort: Sort;

  constructor(options: Partial<Pageable>) {
    options.page && (this.page = options.page);
    options.size && (this.size = options.size);
    options.sort && (this._sort = options.sort);
  }

  get offset() {
    return this.page ? this.page * this.limit : 0;
  }

  @CollectionOf(String, Array)
  @MaxItems(2)
  @Description("Sorting criteria: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.")
  get sort(): Sort {
    return this._sort;
  }

  set sort(sort: Sort) {
    this._sort = new Sort(sort);
  }

  get limit() {
    return this.size;
  }
}

@Generics("T")
class Pagination<T> extends Pageable {
  @CollectionOf("T")
  data: T[];

  @Integer()
  @MinLength(0)
  totalCount: number = 0;

  constructor({data, totalCount, pageable}: Partial<Pagination<T>> & { pageable: Pageable }) {
    super(pageable);
    data && (this.data = data);
    totalCount && (this.totalCount = totalCount);
  }

  get isPaginated() {
    return this.data.length < this.totalCount;
  }
}

class Product {
  @Property()
  id: string;

  @Property()
  title: string;

  constructor({id, title}: Partial<Product> = {}) {
    id && (this.id = id);
    title && (this.title = title);
  }
}

const utils = PlatformTestUtils.create({
  rootDir,
  platform: PlatformExpress,
  server: Server
});

@Controller("/pageable")
class TestPageableCtrl {
  @Get("/")
  @Returns(206, Pagination).Of(Product).Title("PaginatedProduct")
  @Returns(200, Pagination).Of(Product).Title("PaginatedProduct")
  async get(@QueryParams() pageableOptions: Pageable, @QueryParams("all") all: boolean) {
    return new Pagination<Product>({
      data: [new Product({
        id: "100",
        title: "CANON D3000"
      })],
      totalCount: all ? 1 : 100, // just for test
      pageable: pageableOptions
    });
  }
}

@ResponseFilter("application/json")
class PaginationFilter implements ResponseFilterMethods {
  transform(data: unknown, ctx: PlatformContext): any {
    if (ctx.data instanceof Pagination) {// get the unserialized data
      if (ctx.data.isPaginated) {
        ctx.response.status(206);
      }
    }

    return data;
  }
}

describe("Pageable", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  before(
    utils.bootstrap({
      mount: {
        "/rest": [TestPageableCtrl]
      },
      responseFilters: [
        PaginationFilter
      ],
      swagger: [
        {
          path: "/v2/docs",
          specVersion: "2.0" // by default
        },
        {
          path: "/v3/docs",
          specVersion: "3.0.1"
        }
      ]
    })
  );
  after(utils.reset);

  before(() => {
    request = SuperTest(PlatformTest.callback());
  });

  it("should generate spec", async () => {
    const spec = getSpec(TestPageableCtrl, {specType: SpecTypes.OPENAPI});
    expect(spec).to.deep.eq({
      "paths": {
        "/pageable": {
          "get": {
            "operationId": "testPageableCtrlGet",
            "parameters": [{
              "in": "query",
              "required": false,
              "name": "page",
              "schema": {"type": "integer", "description": "Page number.", "default": 0, "minimum": 0, "multipleOf": 1}
            }, {
              "in": "query",
              "required": false,
              "name": "size",
              "schema": {
                "type": "integer",
                "description": "Number of objects per page.",
                "default": 20,
                "minimum": 1,
                "multipleOf": 1
              }
            }, {
              "in": "query",
              "required": false,
              "name": "sort",
              "schema": {
                "type": "array",
                "description": "Sorting criteria: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.",
                "maxItems": 2,
                "items": {"type": "string"}
              }
            }, {"in": "query", "name": "all", "required": false, "schema": {"type": "boolean"}}],
            "responses": {
              "200": {
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/PaginatedProduct"}}},
                "description": "Success"
              },
              "206": {
                "content": {"application/json": {"schema": {"$ref": "#/components/schemas/PaginatedProduct"}}},
                "description": "Partial Content"
              }
            },
            "tags": ["TestPageableCtrl"]
          }
        }
      },
      "tags": [{"name": "TestPageableCtrl"}],
      "components": {
        "schemas": {
          "Product": {
            "type": "object",
            "properties": {"id": {"type": "string"}, "title": {"type": "string"}}
          },
          "PaginatedProduct": {
            "type": "object",
            "properties": {
              "page": {
                "type": "integer",
                "description": "Page number.",
                "default": 0,
                "minimum": 0,
                "multipleOf": 1
              },
              "size": {
                "type": "integer",
                "description": "Number of objects per page.",
                "default": 20,
                "minimum": 1,
                "multipleOf": 1
              },
              "sort": {
                "type": "array",
                "description": "Sorting criteria: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.",
                "maxItems": 2,
                "items": {"type": "string"}
              },
              "data": {"type": "array", "items": {"$ref": "#/components/schemas/Product"}},
              "totalCount": {"type": "integer", "minLength": 0, "multipleOf": 1}
            }
          }
        }
      }
    });
  });

  it("should get paginated products with a status 206", async () => {
    const options = {
      page: 1,
      size: 10,
      sort: ["field", "asc"]
    };

    const {body} = await request.get("/rest/pageable?" + qs.stringify(options)).expect(206);

    expect(body).to.deep.eq({
      "data": [
        {
          "id": "100",
          "title": "CANON D3000"
        }
      ],
      "page": 1,
      "size": 10,
      "sort": {
        "direction": "asc",
        "property": "field"
      },
      "totalCount": 100
    });
  });

  it("should get all products with a status 206", async () => {
    const options = {
      all: true
    };

    const {body} = await request.get("/rest/pageable?" + qs.stringify(options)).expect(200);

    expect(body).to.deep.eq({
      data: [{id: "100", title: "CANON D3000"}],
      totalCount: 1,
      page: 0,
      size: 20
    });
  });

  it("should not return a bad request when sort is not given", async () => {
    const options = {
      page: 1,
      size: 10
    };

    const {body} = await request.get("/rest/pageable?" + qs.stringify(options)).expect(206);

    expect(body).to.deep.eq({
      "data": [
        {
          "id": "100",
          "title": "CANON D3000"
        }
      ],
      "page": 1,
      "size": 10,
      "totalCount": 100
    });
  });

  it("should apply default pagination parameters", async () => {
    const options = {};

    const {body} = await request.get("/rest/pageable?" + qs.stringify(options)).expect(206);

    expect(body).to.deep.eq({
      data: [{id: "100", title: "CANON D3000"}],
      totalCount: 100,
      page: 0,
      size: 20
    });
  });

  it("should throw bad request when options isn\'t correct", async () => {
    const options = {
      page: -1
    };

    const {body} = await request.get("/rest/pageable?" + qs.stringify(options)).expect(400);

    expect(body).to.deep.eq({
      "errors": [
        {
          "data": -1,
          "dataPath": ".page",
          "keyword": "minimum",
          "message": "should be >= 0",
          "modelName": "Pageable",
          "params": {
            "comparison": ">=",
            "exclusive": false,
            "limit": 0
          },
          "schemaPath": "#/properties/page/minimum"
        }
      ],
      "message": "Bad request on parameter \"request.query\".\nPageable.page should be >= 0. Given value: -1",
      "name": "AJV_VALIDATION_ERROR",
      "status": 400
    });
  });
});
