import { expect } from "chai";
import { add, subtract, multiply, divide } from "../src/mathUtils.js";

describe("Math Utils", () => {
  describe("add", () => {
    it("возвращает сумму двух чисел", () => {
      expect(add(2, 3)).to.equal(5);
    });

    it("работает с отрицательными числами", () => {
      expect(add(-4, 6)).to.equal(2);
    });
  });

  describe("subtract", () => {
    it("возвращает разность двух чисел", () => {
      expect(subtract(7, 2)).to.equal(5);
    });
  });

  describe("multiply", () => {
    it("возвращает произведение двух чисел", () => {
      expect(multiply(3, 4)).to.equal(12);
    });
  });

  describe("divide", () => {
    it("делит два числа", () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it("выбрасывает ошибку при делении на 0", () => {
      expect(() => divide(5, 0)).to.throw("Cannot divide by zero");
    });
  });
});
