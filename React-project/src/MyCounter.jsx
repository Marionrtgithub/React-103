 import React, {useState, useEffect} from "react";
function MyCounter(){
    const [Count, setCount] = useState(0);
    const[color,setcolor] = useState("green");
    useEffect(()=>{
        document.title = `Count ${Count} ${color}`;
    }, [Count])
    function addCount(){
        setCount(C => C + 1);
    }
    function subtractCount(){
        setCount(C => C - 1);
    }
    function changeColor(){
        setcolor(c => c ==="greeb"  ? "red" :  "green")
    }

    return(
        <>
        <p style={{color: color}}>Count: {Count}</p>
        <button onClick = {addCount}>Add</button>
        <button onClick = {subtractCount}>Subtract</button><br />
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}
export  default MyCounter;
