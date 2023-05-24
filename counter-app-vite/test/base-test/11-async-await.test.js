import { getImage } from '../../src/base-test/11-async-await'

describe('Testing 11-async-await', () => { 
    it('should return a url', async() =>{

        const url = await getImage();
        expect(typeof url).toBe('string');
    });
 });