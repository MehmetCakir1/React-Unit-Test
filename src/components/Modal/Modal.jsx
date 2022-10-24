import React, { useState } from 'react'

const Modal = () => {
  const [isShow,setIsShow]=useState(false)
  return (
    <div className='flex justify-center items-center flex-col gap-8 p-6'>
      <button className='bg-pink-300 font-semibold rounded-lg py-1 px-5'
      onClick={()=>setIsShow(!isShow)}
      >SHOW MODAL</button>
      
        <h1 className='text-center border border-slate-400 w-[20rem] p-[40px] ' data-testid="modal-div">
            {isShow ?
          "THIS IS A MODAL" : "CLICK THE BUTTON"
            }
          </h1>
      
      
    </div>
  )
}

export default Modal