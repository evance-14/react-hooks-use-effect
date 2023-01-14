  import React,{useState,useEffect} from "react";

  function DogPics(){
    const[images,setImages] = useState([]);

    useEffect(()=>{
      fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((response)=>response.json())
      .then((data)=>{
        //setting state in the useEffect callback
        setImages(data.message);
      });
    },[]);

    return(
      <div>
        {images.map((image)=>(
          <img src={image} key={image} />
        ))}
      </div>
    );
  }

  export default DogPics;


  //we can fix the infinite loop by
  //passing an empty array of dependencies as an argument
  
  //useEffect(() => {
  //fetch("https://dog.ceo/api/breeds/image/random/3")
  //.then((r) => r.json())
  //.then((data) => {
  //  setImages(data.message);
  //});
//}, []);