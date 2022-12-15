const chai = require("chai");
const expect = chai.expect;

let user = require("./user");

describe("User", () => {
  context("getFullAddress", () => {
    it("should return the full address", () => {
      let result = user.getFullAddress({
        street: "100 king",
        city: "London",
        province: "ON",
        postal: "1111",
      });
      expect(result).to.equal("100 king, London, ON. 1111");
    });

    it("should return an error",()=> {
        let result = user.getFullAddress({
            street: null,
            city: "London",
            province: "ON",
            postal: "1111",
          });
          expect(result).to.equal("Invalid address")
    })
  });
});
