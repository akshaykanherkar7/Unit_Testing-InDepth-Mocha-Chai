const assert = require("assert");

describe("file to be tested", () => {
  context("function to be tested", () => {
    // before(() => {
    //   console.log("=======Before");
    // });
    // after(() => {
    //   console.log("=======After");
    // });
    // beforeEach(() => {
    //   console.log("=======beforeEach");
    // });
    // afterEach(() => {
    //   console.log("=======afterEach");
    // });
    it("should do something", () => {
      assert.equal(1, 1);
      console.log("ENV: ", process.env.NODE_ENV);
      if (process.env.NODE_ENV === "development") {
        console.log("DEVELOPMENT MODE");
      }
    });
    it("should do something else", () => {
      assert.deepEqual({ name: "Akshay" }, { name: "Akshay" });
    });
    it("this is a pending test");
  });

  context("another function", () => {
    it("this is a pending test2");
  });
});
