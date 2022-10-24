import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import Modal from "./Modal"

it('calls onClick function when clicked', () => {
render(<Modal/>)
const modalDiv=screen.queryByTestId("modal-div")
const btn=screen.getByRole("button")
expect(btn).toHaveTextContent(/change content/i)
expect(modalDiv).toHaveTextContent(/click the button/i)
userEvent.click(btn)
expect(modalDiv).toHaveTextContent(/hello world/i)
})

it('testing the first child element content', () => {
const {container}=render(<Modal/>)
expect(container.firstChild).toHaveTextContent(/hi I am the first child/i)
})