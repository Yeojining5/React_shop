import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import styled from 'styled-components'
import { Nav } from 'react-bootstrap';
import TabContent from "../components/TabContent";

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
  let product = props.padset.find((data) => data.id == id) // 자세한 설명 노션 참고

  let [ alert, setAlert ] = useState(true);
  let [ numalert, setnumAlert ] = useState(false);
  let [ input, setInput ] = useState('');
  let [ tab, setTab ] = useState(0); // 0이면 0번째 내용 보이게, 1이면 1번째 내용 ...


  // 상품id 가져와서 localStorage watched 항목에 추가하기
  // useEffect(() => {
  //   let data = localStorage.getItem('watched')
  //   data = JSON.parse(data)
  //   //array에 자료 추가하기 push()
  //   data.push(product.id) // product 변수는 위에 잇음
  //   data = new Set(data) // array 자료형에서 중복 제거하기 set!
  //   data = Array.from(data) // 다시 위 자료를 array로 만들기
  //   localStorage.setItem('watched', JSON.stringify(data)) 

  // })

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

  /****************** 숫자체크 *******************/
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
            <img src={'../../img/padset ('+(product.id+1)+').png'} width="100%" />
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

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        
        {/* tab이라는 상태를 TabContent 컴포넌트로 전송 + App.js에서 전송한 padset */}
        <TabContent tab={tab} padset={props.padset} />

        {/* 각 탭별로 들어갈 내용을 만들어 두고 -> 탭 상태 저장해둘 state도 위에 선언! */}
        {/* 
          state가 0이면 내용0 보이기, 1이면 내용1 보이기 .... 
          {
            tab == 0 ? <div>내용0</div> : null  // 삼항연산자가 연달아 3개 나와야해서 복잡
          }
          but, 삼항 연산자가 3개 연달아 나와야 하므로 복잡 -> if 조건문 사용
          -> html 내부에서 if조건문 사용 불가 -> 바깥에서 사용! -> 컴포넌트를 만들면 바깥에서 선언할 필요도 없어짐
          */}

      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    </>
  )
};

export default Detail;