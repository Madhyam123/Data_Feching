import React, { useState } from 'react'
export default function Add(props) {
    const[Num1,setNum1] = useState(0);
    const[Num2,setNum2] = useState(0);
    const [result,setRes] = useState(0);

    function addFun(){
     setRes(Num1+Num2)
    }
    function subFun(){
        setRes(Num1-Num2)
       }
  return (

    <div>
       <h1> Addition</h1>
       {/* <h1>{props.x+props.y}</h1> */}
       Num1<input type="text"  onChange={e=>setNum1(parseInt(e.target.value))}/>
       Num2<input type="text"  onChange={e=>setNum2(parseInt(e.target.value))} /><br></br>
       <div>{result}</div>
       <br></br><button onClick={addFun} class="btn btn-primary">Addition</button>
        </div>

  )
}

