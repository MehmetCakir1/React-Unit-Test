import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-xl font-semibold flex justify-center items-center gap-x-5 p-4'>
        <button
        data-testid='home'
        >Home</button>
        <button
         data-testid='about'
        >About</button>
        <button
         data-testid='contact'>Contact</button>
        <button
         data-testid='projects'>Projects</button>
    </nav>
    )
}

export default Navbar