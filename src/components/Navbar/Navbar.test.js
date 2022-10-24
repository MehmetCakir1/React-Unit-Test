import {render,screen} from "@testing-library/react";
import Navbar from "./Navbar";

beforeEach(()=>{
    render(<Navbar/>)
})

test("testing if the number of buttons equals to 4",()=>{
    const btnEl=screen.getAllByRole("button");
    expect(btnEl).toHaveLength(4)
});
test("testing if the first btn name Home",()=>{
    const homeButton = screen.getByTestId("home")
    expect(homeButton.innerHTML).toMatch("Home")
});
test("testing if it has an About button",()=>{
    const homeButton = screen.getByTestId("about")
    expect(homeButton.innerHTML).toMatch("About")
});
test("testing if it has a Contact button",()=>{
    const homeButton = screen.getByTestId("contact")
    expect(homeButton.innerHTML).toMatch("Contact")
});
test("testing if it has a Projects button",()=>{
    const homeButton = screen.getByTestId("projects")
    expect(homeButton.innerHTML).toMatch("Projects")
});