import { createSlice } from "@reduxjs/toolkit"
  
const intialState = {
    count:0
}
// const counterSlice = createSlice({
//     name:"counter",
//     intialState,
//     reducers:{
//         icrament:(state)=>{
//             state.count ++
//         },
//         decrement:(state)=>{
// state.count --
//         }

//     }
// })
// console.log(counterSlice);
// export const {icrament,decrement} = counterSlice.actions
// export const {reducer}= counterSlice;