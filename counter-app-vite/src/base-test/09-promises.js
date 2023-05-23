import { getHeroesById } from "./08-imp-exp";

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroesById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("We could not find the hero");
      }
    }, 1000);
  });
};
