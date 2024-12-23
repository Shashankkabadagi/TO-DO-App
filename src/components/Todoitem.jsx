import React, { useState } from 'react'

const Todoitem = ({id,deleteTodo,title,description,time}) => {
    const [done,setdone]=useState(false)

    const Doneit=()=>{
        setdone(!done)
    }

    const onDelete=()=>{
        deleteTodo(id)
    }

  return (
    <div className='flex w-8/12 mx-40 my-1 h-14 p-2 border-4 border-gray-700 rounded-lg'>
      <h2 className='w-4/12 font-semibold'>Title:<span className={`font-semibold text-slate-400 text-lg ${done===true ? 'line-through text-black': ''} `}>{title}</span></h2>
      <p className='w-4/12 font-semibold'>Discription:<span className='font-bold'>{description}</span></p>
      <div className='w-2/12'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>{time}</div>
      <button className='w-1/12' onClick={Doneit}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${done===true ? 'bg-green-300 rounded-full':'bg-blue-300 rounded-full'}   `}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg></button>
      <button className='w-1/12' onClick={onDelete}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
      <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
      </svg></button>
      </div>
  )
}

export default Todoitem
