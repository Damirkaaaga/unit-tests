import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('Array Utils', () => {
  describe('findMax', () => {
    it('returns the maximum number from an array', () => {
      expect(findMax([1, 5, 3])).to.equal(5);
    });

    it('throws an error if input is not an array', () => {
      expect(() => findMax('abc')).to.throw('Input must be an array');
    });
  });

  describe('findMin', () => {
    it('returns the minimum number from an array', () => {
      expect(findMin([2, -4, 10])).to.equal(-4);
    });
  });

  describe('removeDuplicates', () => {
    it('removes duplicate values from an array', () => {
      expect(removeDuplicates([1, 2, 2, 3])).to.deep.equal([1, 2, 3]);
    });
  });
});
