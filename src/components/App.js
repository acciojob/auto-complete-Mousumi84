
import React from "react";
import './../styles/App.css';
import { useState } from "react";


let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const App = () => {
const [searchFruits,setSearchFruits]=useState(" ");
  
  return (
    <div>
        {/* Do not remove the main div */}

    <h1>Search item</h1>
    <input type="search" value={searchFruits} onChange={(e)=>setSearchFruits(e.target.value)} />
    <ul>
    
    </div>
  )
}

export default App
