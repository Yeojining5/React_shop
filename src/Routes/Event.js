import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from './../components/Header';

function Event () {

  return (
    <>
      <Header />

      <h3>오늘의 이벤트</h3>
      
      <Outlet></Outlet>
    </>
  )
};

export default Event;
