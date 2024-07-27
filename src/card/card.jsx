import React, { useState } from 'react'
import { Button, Card,Input,Typography} from 'antd'
const { Text } = Typography;

const card = () => {
    const [position, setPosition] = useState('end')
    const handleAdd = ()=>{
        
            
        
    }
  return (
    <Card style={{
        width:"600px"
    }} title="To Do List">
    <Input style={{width:"400px"}} defaultValue="Write somethings" />
      <Button type="primary">Submit</Button>
    <Card style={{height:"60px",position:"relative",marginTop:"15px"}}>
        <Text style={{position:"absolute",left:"10px",top:"18px"}}>Add</Text>
        <Button style={{position:"absolute",right:"10px",top:"16px"}} type="primary" onClick={handleAdd}>
            Add
          </Button>
          
    </Card>
    </Card>
  )
}

export default card