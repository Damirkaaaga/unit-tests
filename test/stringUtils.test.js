import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../src/stringUtils.js';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('capitalizes the first letter', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('throws error if input is not a string', () => {
      expect(() => capitalize(123)).to.throw('Input must be a string');
    });
  });

  describe('reverseString', () => {
    it('reverses a string', () => {
      expect(reverseString('abc')).to.equal('cba');
    });

    it('throws error if input is not a string', () => {
      expect(() => reverseString(null)).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome', () => {
    it('returns true for a palindrome', () => {
      expect(isPalindrome('madam')).to.be.true;
    });

    it('returns false for a non-palindrome', () => {
      expect(isPalindrome('hello')).to.be.false;
    });

    it('throws error if input is not a string', () => {
      expect(() => isPalindrome({})).to.throw('Input must be a string');
    });
  });
});
