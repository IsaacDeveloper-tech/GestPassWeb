import { createPass } from "./common-functions";

test("createPass create correctly a password", () => {
  expect(typeof createPass()).toBe("string");
  expect(createPass().length).toBe(26);
});