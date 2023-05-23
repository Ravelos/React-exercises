import { reArray } from "../../src/base-test/07-deses-array";

describe('Test on 07-deses-array', () => { 
    test('should return a string and a number', () => { 

        const [letters, numbers] = reArray();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        expect( typeof letters).toBe('string');
        expect( typeof numbers ).toBe('number');    
     });
 });