// adding some state into the equation to see how 
//re-rendering the component by updating state interacts with useEffect hook
import React, {useState,useEffect} from "react";

function App(){
  const[count,setCount] = useState(0);
  const[text,setText] = useState("");

  useEffect(()=>{
    console.log("useEffect is called")
  });
  console.log("component rendering")

  return(
    <div>
      <button onClick={()=>setCount((count)=>count +1)}>
        I've been clicked {count} times
      </button>
      <input
       type="text"
       placeholder="Type away ..."
       value={text}
       onChange={(e)=>setText(e.target.value)}
      />
    </div>
  );
}

export default App;

//try clicking the button or typing input field to trigger updates
//everytime a state is set we should see
//our two console messages in order.
//By default, useEffect will run our side effect function every time the component re-renders.

//render -> useEffect -> setState -> re-render -> useEffect

