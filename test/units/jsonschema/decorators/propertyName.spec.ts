import {PropertyRegistry} from "../../../../packages/common/src/jsonschema/registries/PropertyRegistry";
import * as Sinon from "sinon";
import {PropertyName} from "../../../../packages/common/src/jsonschema/decorators/propertyName";

describe("PropertyName", () => {
  before(() => {
    this.decorateStub = Sinon.stub(PropertyRegistry, "decorate");
    this.propertyMetadata = {};

    PropertyName("test2");
    this.decorateStub.getCall(0).args[0](this.propertyMetadata);
  });
  after(() => {
    this.decorateStub.restore();
  });

  it("should store data", () => {
    this.propertyMetadata.name.should.eq("test2");
  });
});
