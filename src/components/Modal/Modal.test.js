import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import Modal from "./Modal"

test('calls onClick function when clicked', () => {
render(<Modal/>)
const modalDiv=screen.queryByTestId("modal-div")
const btn=screen.getByRole("button")
expect(modalDiv).toHaveTextContent(/click the button/i)
userEvent.click(btn)
expect(modalDiv).toHaveTextContent(/this is a modal/i)
})