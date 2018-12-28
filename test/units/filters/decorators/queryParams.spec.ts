import {ParamTypes} from "@tsed/common";
import {QueryParamsFilter} from "../../../../packages/common/src/filters/components/QueryParamsFilter";
import {QueryParams} from "../../../../packages/common/src/filters/decorators/queryParams";
import {ParamRegistry} from "../../../../packages/common/src/filters/registries/ParamRegistry";
import * as Sinon from "sinon";

class Test {}

describe("QueryParams", () => {
  before(() => {
    this.decorateStub = Sinon.stub(ParamRegistry, "decorate");
    QueryParams("test", Test);
  });

  after(() => {
    this.decorateStub.restore();
  });

  it("should have been called ParamFilter.decorate method with the correct parameters", () =>
    this.decorateStub.should.have.been.calledOnce.and.calledWithExactly(QueryParamsFilter, {
      expression: "test",
      useType: Test,
      useConverter: true,
      useValidation: true,
      paramType: ParamTypes.QUERY
    }));
});
