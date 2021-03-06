import {expect} from "chai";
import * as Sinon from "sinon";
import {PreHook} from "../../src/decorators";
import {schemaOptions} from "../../src/utils/schemaOptions";

const sandbox = Sinon.createSandbox();
describe("@PreHook()", () => {
  describe("when decorator is used as class decorator", () => {
    it("should call applySchemaOptions", () => {
      // GIVEN
      const fn = sandbox.stub();
      const errorCb = sandbox.stub();

      // WHEN
      @PreHook("method", fn, {parallel: true, errorCb: errorCb as any})
      class Test {}

      // THEN
      const options = schemaOptions(Test);

      expect(options).to.deep.eq({
        pre: [
          {
            method: "method",
            parallel: true,
            fn,
            errorCb
          }
        ]
      });
    });
  });

  describe("when decorator is used as method decorator", () => {
    it("should call applySchemaOptions", () => {
      class Test {
        @PreHook("save", {
          parallel: true,
          errorCb: () => {}
        })
        static method() {}
      }

      const {
        pre: [options]
      } = schemaOptions(Test);

      expect(options.method).to.eq("save");
      expect(options.parallel).to.eq(true);
      expect(options.fn).to.be.a("function");
      expect(options.errorCb).to.be.a("function");
    });
  });
});
