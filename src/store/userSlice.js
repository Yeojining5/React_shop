import { createSlice } from '@reduxjs/toolkit'

// useState() 역할임
// name 속성은 state이름 작명, initialState 속성은 실제 state 값
// state 하나를 slice라고 부름
let user = createSlice({
  name : 'user',
  //initialState : 'kim'
  initialState : { name : 'kim', age : 20 },

  // 1. state 수정해주는 함수 만들기
  reducers : {
    changeName(state){
      // return 'john ' + state
      //return { name : 'park', age : 20 } 이방법도 되고 아래방법도 됨
      state.name = 'park'
    },
    changeAge(state, action){
      state.age += action.payload  // increase(10), increase(100) 파라미터문법으로 사용시 필요
    }
  }
})

export let { changeName, changeAge } = user.actions

export default user
