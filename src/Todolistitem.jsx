import React from 'react'

const Todolistitem = (props) => {
  return (
    <div className='flex gap-3 text-center mt-4 items-center justify-center' >
      <li className="text-center text-gray-700 text-xl">{props.text}</li>
      <button className='bg-emerald-700 h-[30px] w-[30px] rounded-full text-white text-lg font-bold hover:bg-red-600'
       onClick={()=>{
        props.onSelect(props.id);
      }}>x</button>
    </div>
  )
}

export default Todolistitem
