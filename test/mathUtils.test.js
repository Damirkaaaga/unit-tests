import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../src/mathUtils.js';

describe('Math Utils', () => {
  describe('add', () => {
    it('returns the sum of two numbers', () => {
      expect(add(2, 3)).to.equal(5);
    });

    it('works with negative numbers', () => {
      expect(add(-1, -2)).to.equal(-3);
    });
  });

  describe('subtract', () => {
    it('returns the difference of two numbers', () => {
      expect(subtract(5, 2)).to.equal(3);
    });
  });

  describe('multiply', () => {
    it('returns the product of two numbers', () => {
      expect(multiply(3, 4)).to.equal(12);
    });
  });

  describe('divide', () => {
    it('returns the result of division', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('throws an error when dividing by zero', () => {
      expect(() => divide(5, 0)).to.throw('Cannot divide by zero');
    });
  });
});
