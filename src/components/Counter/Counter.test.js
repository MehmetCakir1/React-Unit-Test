import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import Counter from "./Counter"

beforeEach(()=>{
    render(<Counter/>)
})
test('testing if the counter equals to 0 initially', () => {
    const counterEl=screen.getByTestId("counter")
    expect(counterEl).toHaveTextContent(0)
    });

test('testing if increase function works correctly ', () => {
    const counterEl=screen.getByTestId("counter")
    const increaseBtn=screen.getByRole("button",{
        name:/increase/i,
    });
    expect(counterEl).toHaveTextContent(0);
    userEvent.click(increaseBtn)
    expect(counterEl).toHaveTextContent(1)
});
test('testing if decrease function works correctly when cliked twice ', () => {
    const counterEl=screen.getByTestId("counter")
    const decreaseBtn=screen.getByRole("button",{
        name:/decrease/i,
    });
    expect(counterEl).toHaveTextContent(0);
    userEvent.click(decreaseBtn)
    userEvent.click(decreaseBtn)
    expect(counterEl).toHaveTextContent(-2)
});

