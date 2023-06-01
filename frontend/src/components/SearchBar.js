import React from 'react';
import { Button } from 'react-bootstrap'
import EventCard from './EventCard'
import { useState } from 'react'

const SearchBar = ({events, placeholder}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    
      const handleSearchSubmit = (e) => {
        e.preventDefault();
        const results = events.filter((event) =>
          event.EventName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      };
    
  return (
   <form onSubmit={handleSearchSubmit}>
    <div className="search">

<form>
        <input 
        type="text" 
        placeholder={placeholder} 
        value={searchTerm}
        onChange={handleSearchChange}
        className="searchInputs"/>
        <Button className='searchIcon'><i className="fa-solid fa-magnifying-glass"></i></Button>
</form>
 
     <div>
       {searchResults.map((event) => (
        <EventCard key={event._id} eve={event} />
      ))}
  </div>
</div>
</form>
  )}
export default SearchBar




































