import {JsonSchemesRegistry} from "../../../../packages/common/src/jsonschema/registries/JsonSchemesRegistry";
import {JsonFoo2} from "../../../helper/classes";
import {expect} from "chai";

const j = (o: any): any => JSON.parse(JSON.stringify(o));

describe("JsonSchemesRegistry", () => {
  describe("property()", () => {
    it("should have created a schema for Foo2", () => {
      expect(j(JsonSchemesRegistry.get(JsonFoo2))).to.deep.eq({
        properties: {
          ageModel: {
            $ref: "#/definitions/JsonAgeModel"
          },
          arrayOfString: {
            items: {
              type: "string"
            },
            type: "array"
          },
          dateStart: {
            type: "string"
          },
          foo: {
            $ref: "#/definitions/JsonFoo"
          },
          foos: {
            items: {
              $ref: "#/definitions/JsonFoo"
            },
            type: "array"
          },

          foos2: {
            items: {
              $ref: "#/definitions/JsonFoo1"
            },
            type: "array"
          },
          mapOfString: {
            additionalProperties: {
              type: "string"
            }
          },
          name: {
            minLength: 3,
            type: "string"
          },
          nameModel: {
            $ref: "#/definitions/JsonNameModel"
          },
          password: {
            type: "string"
          },
          object: {
            type: "object"
          },
          test: {
            minLength: 3,
            type: "string"
          },
          theMap: {
            additionalProperties: {
              $ref: "#/definitions/JsonFoo1"
            }
          },
          theSet: {
            additionalProperties: {
              $ref: "#/definitions/JsonFoo1"
            }
          },
          uint: {
            type: "number"
          }
        },
        required: ["test", "foo"],
        type: "object"
      });
    });
  });
});
