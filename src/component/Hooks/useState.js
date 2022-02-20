import React, { useState } from 'react';
import "./style.css";

const UseState = () => {
    // const initialData = 0;
    const[myNum, SetMynum] = useState(0)
  return (
    <>
        <div className="center_div">
         <p>{myNum}</p>
            <div class="button2"onClick={()=> SetMynum(myNum+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div class="button2"
                onClick={()=>(myNum > 0 ? SetMynum(myNum-1) : SetMynum(0)) }>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>   
        </div>

    </>
  )
}

export default UseState