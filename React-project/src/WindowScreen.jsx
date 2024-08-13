import React, {useState, useEffect} from "react";
function WindowScreen(){
    const[Width, setWidth] = useState(window.innerWidth);
    const[Height, setHeight] = useState(window.innerHeight);

        useEffect(() =>{
            window.addEventListener("resize", handleResize);
            console.log("EvENT LISTENER ADDED")
            return () => {
                window.removeEventListener("resize",  handleResize )
                console.log("EvENT LISTENER REMOVED")
            }
        },[])
        useEffect(() =>{
            document.title = 'size: ${Width} ${Height}'; 
        }, {Width, Height})
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    } 
    return(<>
    <p>window Width: {Width}px</p>
    <p>window Height: {Height}px</p>
    </>);
}
export default WindowScreen
