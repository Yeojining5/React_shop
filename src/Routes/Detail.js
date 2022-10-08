import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import styled from 'styled-components'

// 변수명은 자유롭게 작명 -> 컴포넌트 생성됨
let YellowBtn = styled.button `
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px;
  margin : 10px;
`

let RedInput = styled.input `
  border : 2px solid red;
`

function Detail(props) {

  let {id} = useParams();
  let product = props.padset.find((data) => data.id == id)

  let [ alert, setAlert ] = useState(true);
  let [ numalert, setnumAlert ] = useState(false);
  let [ input, setInput ] = useState('');

  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) }, 5000) /* 1000은 1초 */
    
    return () => {
      /* 
        return문은 useEffect 동작 전에 실행됨 
        기존 데이터요청은 제거해달라는 코드 (버그방지, 백지상태에서 데이터 요청)
        기존 타이머는 제거해주세용.
      */
      clearTimeout(a)
    }
  }, []) /* 컴포넌트 mount 시 1회만 실행하고 싶으면 이렇게! */

  useEffect(() => {
    //console.log(isNaN(input))
    if(isNaN(input)) {
      setnumAlert(true)
    } else {
      setnumAlert(false)
    }
  }, [input])

  
  return (
    <>
      <Header />

      <div className="container">

        {
          /* 삼항연산자를 통해 alert 스위치 온오프하기. true가 아니면 null! */
          alert == true ?
          <div className="alert alert-warning">
          5초 이내 구매 시 할인
          </div>
          : null
        }
        
        <div className="row">

          <div className="col-md-6">
            <img src={'../../img/padset ('+(product.id)+').png'} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price}</p>
            <button className="btn btn-danger">주문하기</button> 
            <YellowBtn bg="blue">장바구니</YellowBtn>
            <YellowBtn bg="orange">장바구니</YellowBtn>

            {
              numalert == true ? 
              <div className="alert alert-danger">
                경고 : 숫자만 입력하세요
              </div>
              : null
            }

            <RedInput onChange={(e) => {
              console.log(e.target.value);
              setInput(e.target.value)
            }} />
          </div>

        </div>
      </div> 
    </>
  )
};

export default Detail;
