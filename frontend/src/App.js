import React from 'react'
import { useState } from 'react'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const App = () => {

  const [input, setInput] = useState("")
  const [items, setItems] = useState([])
  

  const handleInput = (e)=>{
    e.preventDefault();
    setInput(e.target.value)
  }

  const handleChange = () =>{
    if(!input){
      window.alert("Please enter your task")
    }else{
      setItems([...items, input])
      setInput("")
    }
  }

  const delItem = (ind)=>{
    console.log(ind)
    const updateItems = items.filter((element , index) =>{
      return(
        index != ind  
      )
    })

    setItems(updateItems)
  } 

  const removeAll = () =>{
    setItems([])
  }

  return (
    <div className='main'>
      <div className='header'>
        <h1 className='add-task'>Add a Task</h1>
      </div>
      <div className='input-div'>
        <input placeholder='Add a Task' className='i1' onChange={handleInput} value={input}></input>
        {/* <button className='submit' onClick={handleChange}>Submit</button> */}
        <AddIcon className='plus' onClick={handleChange}></AddIcon>
      </div>
      <div className='items-main'>
        {items.map((element, index) =>{
          return(
            <div className='items' key={index}> 
              <h1 className='h1'>{element}</h1>
              {/* <button className='del' onClick={() => delItem(index)}>Delete</button> */}
              <DeleteIcon className='del' onClick={() => delItem(index)}></DeleteIcon>
            </div>
            
          )})}
        
      </div>

      <div className='rem-div'>
        {/* <button className='remove' onClick={removeAll}>Remove All</button> */}
        <RemoveCircleOutlineIcon className='remove' onClick={removeAll}></RemoveCircleOutlineIcon>
      </div>
      
    </div>
          )}
  

export default App