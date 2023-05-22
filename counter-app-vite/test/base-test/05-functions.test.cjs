import { getActiveUser, getUser } from "../../src/base-test/05-functions";

describe("Test on 05-functions.js", () => {
  const testUser = {
    uid: "ABCD123",
    userName: "Lucho",
  };

  const user = getUser();

  expect(testUser).toEqual(user);
});

test("getUsuario must return an objetc with the name I am sending", () => {
  const name = "Orlando";
  const activeUser = getActiveUser(name);
  expect(activeUser).toEqual({
    uid: "AFG563",
    userName: name,
  });
});
w