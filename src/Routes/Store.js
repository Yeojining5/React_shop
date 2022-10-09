import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data.js'
import '../App.css';
import Product from './../components/Product';
import Header from './../components/Header';
import { Outlet, useParams } from "react-router-dom";
import axios from 'axios'

function Store() {

  let {id} = useParams();

  let [padset, setPadset] = useState(data)
  let [shoes, setshoes] = useState('')

  return(
    <>
      <Header />

      {/* 상품 레이아웃 3개 만들기 */}
      <div className="container">
        <div className="row">
    
          {
            padset.map(function(a, i){
              return (
                // 자식컴포넌트로 state 전송
                <Product key={i} padset={padset[i]} i={i} />
              )
            })
          }
        

        </div> {/* end of row */}
      </div> {/* end of container */}
      
      <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{ 
          //console.log(result.data) /* 파라미터 data와 같이 아무렇게나 작명하면됨 */
          setshoes(result.data)
          /* axios로 가져온 데이터를 기존 padset배열에 추가하기 */
          //let newpad = padset.concat(shoes)
          let copy = [...padset, ...result.data]
          setPadset(copy)
          console.log(copy); /* (6) [{…}, {…}, {…}, {…}, {…}, {…}] */
        }) 
        .catch(()=> {
          console.log('실패함ㅅㄱ') /* 예외처리 */
        })
      }}>더보기</button>

    </>
  )
}

export default Store;