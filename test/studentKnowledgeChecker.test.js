import { expect } from "chai";
import { checkStudentKnowledge } from "../src/studentKnowledgeCheckerUtil.js";

describe("Student Knowledge Checker", () => {
  describe("checkStudentKnowledge", () => {
    it("возвращает true если все ответы совпадают", () => {
      const student = { q1: "a", q2: "b" };
      const correct = { q1: "a", q2: "b" };
      expect(checkStudentKnowledge(student, correct)).to.be.true;
    });

    it("false если хоть один ответ неверный", () => {
      const student = { q1: "a", q2: "c" };
      const correct = { q1: "a", q2: "b" };
      expect(checkStudentKnowledge(student, correct)).to.be.false;
    });

    it("false если порядок ключей разный", () => {
      const student = { q2: "b", q1: "a" };
      const correct = { q1: "a", q2: "b" };
      expect(checkStudentKnowledge(student, correct)).to.be.false;
    });

    it("false если количество ключей разное", () => {
      const student = { q1: "a" };
      const correct = { q1: "a", q2: "b" };
      expect(checkStudentKnowledge(student, correct)).to.be.false;
    });
  });
});
