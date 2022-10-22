import React from 'react';
import { useEffect, useState } from 'react';

/* tab 상태 props는 Detail.js에서 받아옴 */
/* props 대신 {props명} 즉,{tab} 이렇게 사용 가능! 상태 여러개면 파라미터 여러개로 늘릴 수 있음 */
function TabContent({tab, padset}) {
  
  let [fade, setFade] = useState('')

  useEffect(() => {
    // fade 변수 자리에 end를 className에 부착해줘
    // 부착만 하면 안되고, 뗐다가 부착해야 애니메이션이 보임
    // 따라서 cleanUp Function + setTimeout 사용하기!
    setTimeout(() => {
      setFade('end');
      console.log("setTimeout")
    }, 100) // 0.1 초뒤에 실행

    // useEffect 실행 전에 실행됨
    return () => {
      setFade('');
      console.log("return");
    }

  }, [tab])

  return (
    <div className={`start ${fade}`}>
      { [<div>{padset[0].title}</div>, <div>{padset[1].title}</div>, <div>{padset[2].title}</div> ][tab] }
    </div>
  )

  // 아래 내용이 위와 같음
  // if (tab == 0) {
  //   return <div>내용0</div>
  // } 
  // if (tab == 1) {
  //   return <div>내용1</div>
  // } 
  // if (tab == 2) {
  //   return <div>내용2</div>
  // }
}

export default TabContent;