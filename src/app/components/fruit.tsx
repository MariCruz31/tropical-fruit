"use client"

import React, {useState} from "react";
import {listFruit} from "./listFruit";



export default function Fruit() {
    const [fruit, setFruit] = useState(0);
    const hasNext = fruit < listFruit.length - 1
    


 function handleClick () {
    if(hasNext) {
      setFruit(fruit + 1);

    } else{
      setFruit(0);

    }
  
}

let tropicalFruit = listFruit[fruit];
return (
  <>
    <button className= "bg-sky-500 px-4 py-2" onClick={handleClick}>
      Next
    </button>
    <h2>
      <i>{tropicalFruit.name} </i> 
     
    </h2>
    <h3>  
      ({fruit + 1} of {listFruit.length})
    </h3>
    <img className= "w-80"
    
      src={tropicalFruit.url} 
      alt={tropicalFruit.alt}
    />
    <p className="h-20">
      {tropicalFruit.description}
    </p>
  </>
);
}























































