import React, { useState ,useEffect} from 'react';
import "./style.css";

const UseEffect = () => {
    // const initialData = 15;
    const[myNum, SetMynum] = useState(0)

    useEffect(()=>{
        document.title = `Chats(${myNum})`;
    });
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
             
        </div>

    </>
  )
}

export default UseEffect