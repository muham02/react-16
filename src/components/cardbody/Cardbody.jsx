import React from 'react'
import {Card,Button,Typography} from "antd"
import { useDispatch } from 'react-redux';
const { Text } = Typography;
import { icrament,decrement } from '../../redux/countSlice';
const Cardbody = ({todolist}) => {
  const dispatch = useDispatch()
  console.log(todolist);
    const handleAdd = ()=>{
      dispatch(icrament())
    }
  return (
<div>

      {
        todolist.map(item=>{
          return(
            <Card style={{height:"60px",position:"relative",marginTop:"15px"}}>
           
            <Text style={{position:"absolute",left:"10px",top:"18px"}}>{item}</Text>
            <Button style={{position:"absolute",right:"10px",top:"16px"}} type="primary" onClick={handleAdd}>
                Add
              </Button>
              
        </Card>
          )
        })
         
      }

</div>
  )
}

export default Cardbody