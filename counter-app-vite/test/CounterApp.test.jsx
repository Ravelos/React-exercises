import { fireEvent, render,screen } from "@testing-library/react"
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
    
    test('should increment with +1 button', () => { 
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11')).toBeTruthy();
    });

    test('should increment with -1 button', () => { 
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9')).toBeTruthy();
    });

    test('should reset the value', () => {
        render(<CounterApp value={23}/>);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );

        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }));
        expect( screen.getByText(23)).toBeTruthy();
    });

});