import React from 'react'
import Counter from './components/Counter/Counter'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Modal/>
        <Counter/>
    </div>
  )
}

export default App