import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter]=useState(0)
  return (
    <div className='flex justify-center items-center flex-col gap-6'>
        <div className='flex gap-6'>
            <button className='bg-cyan-500 py-1 px-5 text-white font-semibold text-lg'
            onClick={()=>setCounter(counter+1)}
            >Increase</button>
            <button className='bg-red-500 py-1 px-5 text-white font-semibold text-lg'
                        onClick={()=>setCounter(counter-1)}
            >Decrease</button>
        </div>
        <h1 className='text-3xl font-bold' data-testid="counter">{counter}</h1>
    </div>
  )
}

export default Counter