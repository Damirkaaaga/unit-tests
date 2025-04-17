import { expect } from "chai";
import { capitalize, reverseString, isPalindrome } from "../src/stringUtils.js";

describe("String Utils", () => {
  describe("capitalize", () => {
    it("делает первую букву заглавной", () => {
      expect(capitalize("hello")).to.equal("Hello");
    });

    it("ошибка, если не строка", () => {
      expect(() => capitalize(123)).to.throw("Input must be a string");
    });
  });

  describe("reverseString", () => {
    it("разворачивает строку", () => {
      expect(reverseString("abc")).to.equal("cba");
    });

    it("ошибка, если не строка", () => {
      expect(() => reverseString(null)).to.throw("Input must be a string");
    });
  });

  describe("isPalindrome", () => {
    it("true для палиндрома", () => {
      expect(isPalindrome("madam")).to.be.true;
    });

    it("false для обычной строки", () => {
      expect(isPalindrome("hello")).to.be.false;
    });

    it("ошибка, если не строка", () => {
      expect(() => isPalindrome({})).to.throw("Input must be a string");
    });
  });
});
