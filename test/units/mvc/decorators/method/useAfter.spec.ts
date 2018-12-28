import {Store} from "@tsed/core";
import {UseAfter} from "../../../../../packages/common/src/mvc/decorators/method/useAfter";
import {EndpointRegistry} from "../../../../../packages/common/src/mvc/registries/EndpointRegistry";
import {decoratorArgs, descriptorOf} from "@tsed/core";
import {expect} from "chai";
import * as Sinon from "sinon";

class Test {
  test() {}
}

describe("UseAfter()", () => {
  describe("when the decorator is use on a method", () => {
    before(() => {
      this.endpointRegistryStub = Sinon.stub(EndpointRegistry, "useAfter");

      this.returns = UseAfter(() => {})(...decoratorArgs(Test, "test"));
    });

    after(() => {
      this.endpointRegistryStub.restore();
    });

    it("should add the middleware on the use stack", () => {
      this.endpointRegistryStub.should.be.calledWithExactly(Test, "test", [Sinon.match.func]);
    });

    it("should return a descriptor", () => {
      this.returns.should.be.deep.eq(descriptorOf(Test, "test"));
    });
  });

  describe("when the decorator is use on a class", () => {
    before(() => {
      this.returns = UseAfter(() => {})(Test);

      this.store = Store.from(Test).get("middlewares");
    });

    it("should add the middleware on the use stack", () => {
      expect(this.store.useAfter[0]).to.be.a("function");
    });

    it("should return nothing", () => {
      expect(this.returns).to.eq(undefined);
    });
  });
});
