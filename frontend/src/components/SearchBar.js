
import React from 'react'
import { Button } from 'react-bootstrap'
// import axios from " axios "
// import  { useState } from "react"

// function Search() {

// const [eventname, setName] = useState("");

// async function serch(event) {
//   event.preventDefault();

//   try {
//     axios.post("http://localhost:5467/events/" + eventname
   
//     ).then((res) => 
//     {
//       console.log(res.data.data.name);

//       if (res.data.data =="User not found")
//       {
//         alert("User not found");

//       }, fail => {
//         console.error(fail); //Error
//       }
//     })
//   }
// }

const SearchBar = ({placeholder, data}) => {
  return (
    <div className="search">

        <input type="text" 
        placeholder={placeholder} 
        className="searchInputs"
        // value={eventname}
        // // onChange={(event) => {
        // //   // setName(event.target.value);
        // }}
        />
        <Button className='searchIcon'><i className="fa-solid fa-magnifying-glass"></i></Button>
        
    </div> 

  )
}

export default SearchBar
