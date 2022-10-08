import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data.js'
import '../App.css';
import Product from './../components/Product';
import Header from './../components/Header';
import { Outlet, useParams } from "react-router-dom";

function Store() {

  let [padset, setPadset] = useState(data)

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

    </>
  )
}

export default Store;