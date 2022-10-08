/* eslint-disable */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap'
//import bg from './img/moonbg1.jpg' 
// bg부분은 자유롭게 작명
// style={{ backgroundImage : 'url(' + bg + ')' }} // 자스는 +기호 필요
//import 작명 from './data.js'
import data from './data.js'
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from "./Routes/detail.js"


function App() {

  /* 
    useNavigate 라는 훅 -> 페이지 이동을 도와주는 함수를 담고 잇음.
    보통 변수에 담아서 사용함 
  */
  let [padset, setPadset] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      
      <Navbar bg="light" variant="light">
        <Container className="Navbar">
          <Navbar.Brand onClick={()=>{ navigate('/') }}>🌜월간, 문</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Store</Nav.Link>
            <Nav.Link >Service</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about')}}>Moon Story</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Link는 a태그 기능 */}
      {/* <Link to="/">홈</Link>
      <br/>
      <Link to="/detail">상세페이지</Link> */}

      {/* Route라는 컴포넌트는 하나의 페이지라고 생각하면 됨 */}
      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>

          {/* 상품 레이아웃 3개 만들기 */}
          <div className="container">
            <div className="row">
              
              {/* 
                <Card></Card>쓸 때마다 살짝 다른 내용 보여주고 싶으면 props를 잘써라
                1. 아래 버전은 컴포넌트만 사용

                <Card padset={padset[0]} i={1}></Card>
                <Card padset={padset[1]} i={2}></Card>
                <Card padset={padset[2]} i={3}></Card> 
              */}

              {
                // 2. 컴포넌트에서 map을 추가해서 발전시키기
                padset.map(function(a, i){
                  return (
                    // 자식컴포넌트로 state 전송
                    <Card key={i} padset={padset[i]} i={i}></Card>
                  
                  )
                })
              }

            </div> {/* end of row */}
          </div> {/* end of container */}
          </>
        }/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="*" element={<h1>잘못된 경로입니다😕</h1>}/> {/* 404페이지 */}
        
        {/* Nested Routes */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} /> {/* /about/member */}
          <Route path="location" element={<div>위치정보</div>} /> {/* /about/location */}
        </Route>
      </Routes>

    
    </div> /* end of App */
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}


// 개별 상품 컴포넌트 생성
function Card(props) {
  return(
    <div className="col-md-4">
      {/* <img src="./img/padset (1).png" width="80%"/> */}
      {/* <img src={'./img/padset ('+ props.i +').png'} width="80%" /> */}
      <img src={'./img/padset ('+ (props.i+1) +').png'} width="80%" />
      <h4>{ props.padset.title }</h4>
      <p> { props.padset.content }</p>
      <p> { props.padset.price }원</p>
    </div>
  )
}

export default App;
