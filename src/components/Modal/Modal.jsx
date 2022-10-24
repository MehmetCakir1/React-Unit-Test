import React, { useState } from 'react'

const Modal = () => {
  const [isShow,setIsShow]=useState(false)
  return (
    <div className='flex justify-center items-center flex-col gap-8 p-6'>
         <h1>Hi I am the first child</h1>
      <button className='bg-pink-300 font-semibold rounded-lg py-1 px-5 uppercase'
      onClick={()=>setIsShow(!isShow)}
      >Change Content</button>
      
        <h1 className='text-center border border-slate-400 w-[20rem] p-[40px] ' data-testid="modal-div">
            {isShow ?
          "HELLO WORLD" : "CLICK THE BUTTON"
            }
          </h1>
      
      
    </div>
  )
}

export default Modal