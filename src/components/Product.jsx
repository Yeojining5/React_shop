import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 작명 from './data.js'
import data from '../data.js'
import '../App.css';
import { useNavigate } from "react-router-dom";

const Product = (props) => {

  let navigate = useNavigate();

  return (
    // 개별 상품 컴포넌트 생성
    <div className="col-md-4">
      {/* <img src="./img/padset (1).png" width="80%"/> */}
      {/* <img src={'./img/padset ('+ props.i +').png'} width="80%" /> */}
      <img src={'../../img/padset ('+ (props.i+1) +').png'} width="80%" />
      <h4 onClick={()=>{ navigate('/store/detail/1')}}>{ props.padset.title }</h4>
      <p> { props.padset.content }</p>
      <p> { props.padset.price }원</p>
      <p> { props.padset.price }원</p>
    </div>
  )
}

export default Product;

