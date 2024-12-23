import React, { useState } from 'react'
import Todoitem from './todoitem'
import {v4 as uuidv4} from 'uuid'
const todolist=[
    {
        id:uuidv4(),
        title:'excel',
        description:'event to do',
        time:'03:00-06:30',
    }
]

const Todo = () => {

    const [title,setTitle]=useState()
    const [description,setDescription]=useState()
    const [time,setTime]=useState()
    const [todos,settodos]=useState(todolist)
    
    const onTitleChange=(event)=>{
        setTitle(event.target.value)
    }

    const onDescChange=(event)=>{
        setDescription(event.target.value)
    }

    const onTimeChange=(event)=>{
        setTime(event.target.value)
    }

    const addTodo=()=>{
        const newTOdo={
            id:uuidv4(),
            title,
            description,
            time
        }
        settodos([...todos,newTOdo])

        
        
    }
   

    const deleteTodo=(id)=>{
        const filterTodos = todos.filter((eachItem)=>{
            return(
                eachItem.id!=id
            )
        })
        settodos(filterTodos)
    }
  return (
    <>
    
    <p className='flex justify-center font-bold '>TODO List</p>
    
    
    <div className=' flex justify-center items-center h-8  p-10 gap-2'>
      
      <input type="text" value={title}  placeholder='Title:' className='w-3/10 border-2 rounded-lg' onChange={onTitleChange}/>
      <input type="text" value={description} placeholder='Discription:' className='w-3/10 border-2 rounded-lg' onChange={onDescChange}/>
      <input type="text" value={time} placeholder='Time:' className='w-2/10 border-2 rounded-lg' onChange={onTimeChange}/>
      <button className='w-2/10 border-2 rounded-lg bg-green-400 p-1 font-semibold' onClick={addTodo} >Add</button>
    </div>
    {
        todos.map((eachItem)=>{
            return(
                <Todoitem id={eachItem.id} title={eachItem.title} description={eachItem.description} time={eachItem.time} deleteTodo={deleteTodo}/>
            )
        })
    }
    
    </>
  )
}

export default Todo
