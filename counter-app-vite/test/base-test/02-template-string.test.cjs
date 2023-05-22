import { getGreet } from "../../src/base-test/02-template-string";

describe('Test on 02-template-string.js', () => {
    
    test('getGreet must return hello Oswaldo', () => {

        const name = 'Oswaldo';
        const message = getGreet(name);
        expect(message).toBe(`Hello ${name}`)
      
    })   

})