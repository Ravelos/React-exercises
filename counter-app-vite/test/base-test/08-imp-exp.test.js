import {
  getHeroesById,
  getHeroesByOwner,
} from "../../src/base-test/08-imp-exp";
import { heroes } from "../../src/data/heroes";

describe("Testing 08-imp-exp", () => {
  it("should return a heroe by its id", () => {
    const id = 1;
    const heroe = getHeroesById(id);
    expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
});

describe("Testing 08-imp-exp", () => {
  it("should return undefined if the id does not exist", () => {
    const id = 3000;
    const heroe = getHeroesById(id);
    expect(heroe).toBeFalsy();
  });
});

describe("Testing 08-imp-exp", () => {
  it("should return all Dc heroes", () => {
    const owner = "DC";
    const dcHeroes = getHeroesByOwner(owner);

    expect(dcHeroes.length).toBe(3);

    expect(dcHeroes).toStrictEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);

    expect(dcHeroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  it("should return all Marvel heroes", () => {
    const owner = "Marvel";
    const marvelHeroes = getHeroesByOwner(owner);

    expect(marvelHeroes).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
    
    expect(marvelHeroes).toEqual(
      heroes.filter((heroe) => heroe.owner === owner)
    );
  });
});
