import { expect } from 'chai';
import { checkStudentKnowledge } from '../src/studentKnowledgeCheckerUtil.js';

describe('Student Knowledge Checker', () => {
  describe('checkStudentKnowledge', () => {
    it('returns true if all answers are correct', () => {
      const student = { q1: 'a', q2: 'b' };
      const correct = { q1: 'a', q2: 'b' };
      expect(checkStudentKnowledge(student, correct)).to.be.true;
    });

    it('returns false if any answer is wrong', () => {
      const student = { q1: 'a', q2: 'wrong' };
      const correct = { q1: 'a', q2: 'b' };
      expect(checkStudentKnowledge(student, correct)).to.be.false;
    });

    it('returns false if key order differs', () => {
      const student = { q2: 'b', q1: 'a' };
      const correct = { q1: 'a', q2: 'b' };
      expect(checkStudentKnowledge(student, correct)).to.be.false;
    });

    it('returns false if number of keys differs', () => {
      const student = { q1: 'a' };
      const correct = { q1: 'a', q2: 'b' };
      expect(checkStudentKnowledge(student, correct)).to.be.false;
    });
  });
});
