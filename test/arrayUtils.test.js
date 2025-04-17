import { expect } from "chai";
import { findMax, findMin, removeDuplicates } from "../src/arrayUtils.js";

describe("Array Utils", () => {
  describe("findMax", () => {
    it("находит максимальное число", () => {
      expect(findMax([1, 5, 10])).to.equal(10);
    });

    it("ошибка, если не массив", () => {
      expect(() => findMax("123")).to.throw();
    });
  });

  describe("findMin", () => {
    it("находит минимальное число", () => {
      expect(findMin([3, -2, 5])).to.equal(-2);
    });
  });

  describe("removeDuplicates", () => {
    it("удаляет дубликаты", () => {
      expect(removeDuplicates([1, 2, 2, 3])).to.deep.equal([1, 2, 3]);
    });
  });
});
