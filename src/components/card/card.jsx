import React, { useState } from 'react'
import { Button, Card,Input,Typography,Form} from 'antd'
import Cardbody from '../cardbody/Cardbody';

const card = () => {
    const [inpValue, setInpValue] = useState('')
    const [todolist, setTodolist] = useState([])


    const handleAdd = ()=>{
        
            
        
    }
    const handleSebmit = (e)=>{
      e.preventDefault()
    setTodolist([...todolist,inpValue])
    setInpValue("")
           }
           console.log(todolist);
  return (
   <>
    
   <form  onSubmit={handleSebmit}>
   <Input style={{width:"400px"}} defaultValue="Write somethings" value={inpValue} onChange={(e)=>setInpValue(e.target.value)}/>
      <button type="submit" >Submit</button>
   </form>
<Cardbody todolist={todolist}/>
    </>

  )
}
export default card