import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { changeName, changeAge } from './../store/userSlice.js';

const Cart = () => {

  // useSelector() -> Redux store 가져와줌
  // 기본문법임. state만 리턴하면 store 안에있던 모든 store를 의미
  // return state.user  이런식으로 활용 가능
  //let a = useSelector((state) => { return state }) 
  let state = useSelector((state) => state) 
  console.log(state.user); // kim
  console.log(state.cart); // [{}, {}] 배열안에 오브젝트 형식으로 저장되어잇음

  let dispatch = useDispatch()

  return (
    <>
      <Header />

      <h5>{state.user.name} ({state.user.age})의 장바구니</h5>
      <button onClick={() => {
        dispatch(changeAge(10))
      }}>나이증가</button>

      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>

          {
            state.cart.map(function(cart, i){
              return (
                <tr key={i}>
                  <td>{state.cart[i].id}</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <td>
                  <button onClick={() => {
                    dispatch(changeName())
                    }}>+</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>

    </>
  );
};

export default Cart;