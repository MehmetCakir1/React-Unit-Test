import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import Header from './Header';

test('testing header conponent', () => {
render(<Header/>)
const headerEl=screen.getByText(/react unit test/i);
expect(headerEl).toBeInTheDocument();
expect(headerEl).toHaveTextContent(/React Unit Test/i);
expect(headerEl).toHaveClass("text-red-600");
})
