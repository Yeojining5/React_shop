import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

// useState() 역할임
// name 속성은 state이름 작명, initialState 속성은 실제 state 값
// state 하나를 slice라고 부름

export let { changeName, changeAge } = user.actions

// 재고관련 state
let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : '실속세트 3종', count : 2},
    {id : 2, name : '소중세트 2종', count : 1}
  ]
})


// 만든 slice는 reducer에 등록해야 사용가능
// 작명 : user.reducer (뒤에 .reducer 꼭 붙여야함)
export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 