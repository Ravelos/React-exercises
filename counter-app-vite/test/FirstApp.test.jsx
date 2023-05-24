import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Testing FirstApp', () => { 
    test('should match the snapshot', () => {
        const title = 'Hello, it is me'
        const { container } = render( <FirstApp title={title}/> );

        expect(container).toMatchSnapshot()
    })

    test('should show the title in a h1 tag', () => {
        const title = 'Hello, it is me'
        const { container, getByText } = render( <FirstApp title={title}/> );        
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect( h1.innerHTML ).toContain( title );
    })
    
    
 })