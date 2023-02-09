import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Todo = () => {
    //UseState
    var [userEnter, setuserEnter] = useState ('');
    var [todoList, settodoList] = useState ([]);
    const handleSubmit = () =>{
      settodoList(prev=> [...prev,userEnter])
      setuserEnter('')
      
    }
  return (
    <div>
      <Typography variant = 'h4'>ToDo Application </Typography>
      <br></br>
      <TextField variant='outlined' label="Enter Todo" value={userEnter} onChange={e => setuserEnter(e.target.value)}></TextField>
      <br></br>
      <br></br>
      <Button variant='contained' color='primary'onClick={handleSubmit}>Add Todo</Button>
      <ol >
        {todoList.map((userEnter,index)=>(
          <li key={index}>{userEnter}</li>
        )
        )}
      </ol>
    </div>
  )
}

export default Todo
