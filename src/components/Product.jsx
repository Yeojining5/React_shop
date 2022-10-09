import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data.js'
import '../App.css';
import { useNavigate } from "react-router-dom";

const Product = (props) => {

  let navigate = useNavigate();
  let result = props.padset

  return (
    // 개별 상품 컴포넌트 생성
    <div className="col-md-4">
      {/* <img src="./img/padset (1).png" width="80%"/> */}
      {/* <img src={'./img/padset ('+ props.i +').png'} width="80%" /> */}
      <img src={'../../img/padset ('+ (props.i+1) +').png'} width="80%" />
      <h4 onClick={()=>{ navigate('/store/detail/'+props.i)}}>
        { result.title }
      </h4>
      <p> { result.content }</p>
      <p> { result.price }원</p>
    </div>
  )
}

export default Product;

