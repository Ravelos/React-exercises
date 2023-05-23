import { getHeroeByIdAsync } from "../../src/base-test/09-promises";

describe("Testing 09-promises", () => {
  it("should return a hero", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
      done();
    });
  });

  it("should show an error message if the hero does not exist", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch(err => {
        expect(err).toBe(`We could not find the hero`)      
        done();
    });
  });

});
