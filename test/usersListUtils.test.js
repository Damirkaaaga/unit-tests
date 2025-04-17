import { expect } from "chai";
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from "../src/usersListUtils.js";

describe("Users List Utils", () => {
  const users = [
    { id: 1, name: "Alice", age: 30, email: "alice@mail.com" },
    { id: 2, name: "Bob", age: 20, email: "bob@mail.com" },
    { id: 3, name: "Charlie", age: 25, email: "charlie@mail.com" },
  ];

  describe("filterUsersByAge", () => {
    it("фильтрует пользователей по возрасту", () => {
      const result = filterUsersByAge(users, 25);
      expect(result.length).to.equal(2);
    });

    it("ошибка, если не массив", () => {
      expect(() => filterUsersByAge("abc", 25)).to.throw();
    });
  });

  describe("sortUsersByName", () => {
    it("сортирует по имени", () => {
      const result = sortUsersByName([...users]);
      expect(result[0].name).to.equal("Alice");
    });
  });

  describe("findUserById", () => {
    it("находит пользователя по id", () => {
      const result = findUserById(users, 2);
      expect(result.name).to.equal("Bob");
    });
  });

  describe("isEmailTaken", () => {
    it("проверяет, существует ли email", () => {
      expect(isEmailTaken(users, "bob@mail.com")).to.be.true;
    });

    it("false если email не найден", () => {
      expect(isEmailTaken(users, "no@mail.com")).to.be.false;
    });
  });
});
