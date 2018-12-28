import {Store} from "@tsed/core";
import {Broadcast} from "../../../../packages/socketio/src";
import {expect} from "chai";

describe("Broadcast", () => {
  class Test {}

  before(() => {
    Broadcast("eventName")(Test, "test", {} as any);
    this.store = Store.from(Test);
  });

  it("should set metadata", () => {
    expect(this.store.get("socketIO")).to.deep.eq({
      handlers: {
        test: {
          returns: {
            eventName: "eventName",
            type: "broadcast"
          }
        }
      }
    });
  });
});
