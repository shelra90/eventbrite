import React, { useState } from 'react';
import events from '../events';
// import { Form } from 'react-bootstrap'
// var data = require('./events.js');




const SearchBar = () => {
const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(events).then((response) => response.js()).then(js => {
    console.log(js);
    }) ;
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value) 
  }

  return (
    <div className="input-wrapper">
      <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
  }
  export default SearchBar

//   const[query, setQuery ] = useState("");
//   const {events} = events;
//   const {items} = events;

//   const filteredItems = getFilteredItems = (query, items); 

//   // const getFilteredItems = (query, items) => {
//   //   if (!query) {
//   //     return items;
//   //   }
//   //   return items.filter(events => event.name.includes(query))
//   // }

//   return (
//     <div className="SearchBar">
//       <label>Search</label>
//       <input type="text" onChange={e => setQuery(e.target.value)} />
//     </div>
//   )
// }









 
