/* eslint-disable */

import data from './data.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import bg from './img/moonbg1.jpg' 
// bg부분은 자유롭게 작명
// style={{ backgroundImage : 'url(' + bg + ')' }} // 자스는 +기호 필요
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from "./Routes/Detail.js"
import Main from './Routes/Main';
import Store from './Routes/Store';
import Event from './Routes/Event';
import Cart from './Routes/Cart';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify( [] ))
  }, [])

  let obj = {name : 'kim'}
  //localStorage.setItem('data', obj) // object 자료형은 저장이 안됨
  localStorage.setItem('data', JSON.stringify(obj)) // -> object자료를 JSON으로 변환

  let data = localStorage.getItem('data')
  console.log(data); // {"name":"kim"}
  console.log(JSON.parse(data)); // {name: 'kim'} -> JSON자료를 object변환J하기
  console.log(JSON.parse(data).name); // kim


  let [padset, setPadset] = useState(data) // ./data.js

  return (
    <div className="App">
      
      {/* Link는 a태그 기능 */}
      {/* <Link to="/">홈</Link>
      <br/>
      <Link to="/detail">상세페이지</Link> */}

      {/* Route라는 컴포넌트는 하나의 페이지라고 생각하면 됨 */}
      <Routes>
        <Route path="*" element={<h1>잘못된 경로입니다😕</h1>}/> {/* 404페이지 */}

        <Route path="/" element={<Main />}/>
        <Route path="/store" element={<Store />} />
        <Route path="/store/detail/:id" element={<Detail padset={padset} />}/>
        
        <Route path="/cart" element={<Cart />} />

        {/* Nested Routes */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} /> {/* /about/member */}
          <Route path="location" element={<div>위치정보</div>} /> {/* /about/location */}
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문 시 온열팩 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
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


export default App;
