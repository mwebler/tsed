import {Middleware, registerMiddleware} from "../../../../../packages/common/src/mvc";
import {expect} from "chai";

describe("Middleware", () => {
  it("should use registerMiddleware", () => {
    expect(Middleware()).to.eq(registerMiddleware);
  });
});
