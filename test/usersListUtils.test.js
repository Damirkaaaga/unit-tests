import { expect } from "chai";
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken
} from "../src/usersListUtils.js";

describe("Users List Utils", () => {
  const users = [
    { id: 1, name: "Alice", age: 30, email: "alice@mail.com" },
    { id: 2, name: "Bob", age: 20, email: "bob@mail.com" },
    { id: 3, name: "Charlie", age: 25, email: "charlie@mail.com" },
  ];

  describe("filterUsersByAge", () => {
    it("filters users by age range", () => {
      const result = filterUsersByAge(users, 21, 35);
      expect(result.length).to.equal(2);
    });

    it("throws an error if input is not an array", () => {
      expect(() => filterUsersByAge("abc", 25)).to.throw();
    });
  });

  describe("sortUsersByName", () => {
    it("sorts users alphabetically by name", () => {
      const result = sortUsersByName([...users]);
      expect(result[0].name).to.equal("Alice");
    });
  });

  describe("findUserById", () => {
    it("finds user by ID", () => {
      const result = findUserById(users, 2);
      expect(result.name).to.equal("Bob");
    });
  });

  describe("isEmailTaken", () => {
    it("returns true if email exists", () => {
      expect(isEmailTaken(users, "bob@mail.com")).to.be.true;
    });

    it("returns false if email not found", () => {
      expect(isEmailTaken(users, "no@mail.com")).to.be.false;
    });
  });
});
