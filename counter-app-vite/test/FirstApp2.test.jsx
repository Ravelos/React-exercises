import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Testing FirstApp', () => {
    
    const title = 'Hello it is me';
    const subtitle = 'I am a subtitle'

    test('should match the snapshot', () => {
      const { container } = render(<FirstApp title={title}/>);
      expect( container ).toMatchSnapshot();
    })
    
    test('should show the message "hello it is me"', () => {
      render(<FirstApp title={title}/>);
      expect( screen.getByText(title)).toBeTruthy();
      //screen.debug();     
    })

    test('should show the title in a h1 tag', () => {
      render(<FirstApp title={title}/>);
      expect( screen.getByRole('heading', { level:1 }).innerHTML ).toContain( title );      
    })

    test('should show the subtitle as a prop', () => { 
        render(<FirstApp title={title} subtitle={subtitle}/>);
        expect( screen.getAllByText(subtitle).length ).toBe(2)                
     })
    
    
 })