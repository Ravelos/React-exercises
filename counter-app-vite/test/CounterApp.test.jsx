import { render,screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Testing CounterApp component', () => {
    
    const value = 10;

    test('should match the snapshot', () => { 
        const {container } = render(<CounterApp value={value}/>);
        expect( container ).toMatchSnapshot();
    });

    test('should show the initial value of 100', () => {
        render(<CounterApp value={100}/>);
        expect( screen.getByText(100)).toBeTruthy();
    });
      
});