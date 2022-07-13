import React from 'react'
import { useState , useEffect } from 'react'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const App = () => {

  useEffect(()=>{
    display()
  },[])

  const [input, setInput] = useState("")
  const [items, setItems] = useState([])
  

  const handleInput = (e)=>{
    e.preventDefault();
    setInput(e.target.value)
  }

  const handleChange = async () =>{
    if(!input){
      window.alert("Please enter your task")
    }else{
      const res = await fetch('https://todo-mern-usama.herokuapp.com/' , {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({input})
      })

      const data = await res.json()

      if(res.status === 400){
        setInput("")
        display()
      }
      else{
        window.alert("Failed to add task")
      }
    }
  }

  const delItem = async (id)=>{
    // console.log(ind)
    // const updateItems = items.filter((element , index) =>{
    //   return(
    //     index != ind  
    //   )
    // })
    console.log(id)
    const res = await fetch("https://todo-mern-usama.herokuapp.com/delete/" + id, {
      method: "DELETE"
    })
    await res.json()
    setItems(items => items.filter(item => item._id !== res._id))
    display()
  } 

  const removeAll = async () =>{
    const res = await fetch("https://todo-mern-usama.herokuapp.com/deleteAll" , {
      method:"DELETE"
    })
    await res.json()
    display()
  }

  const display = async () =>{
    console.log("running")
    const res = await fetch('https://todo-mern-usama.herokuapp.com/display')
    const data = await res.json()
    setItems(data)
    // setItems([...items, data])
    // setInput("")
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
        {items.map((index) =>{
          return(
            <div className='items' key={index.id}> 
              <h1 className='h1'>{index.task}</h1>
              {/* <button className='del' onClick={() => delItem(index)}>Delete</button> */}
              <DeleteIcon className='del' onClick={() => delItem(index._id)}></DeleteIcon>
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