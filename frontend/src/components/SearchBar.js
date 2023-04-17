/*  ignore */
import React from 'react'
import { Button } from 'react-bootstrap'
const SearchBar = ({placeholder, data}) => {
  return (
    <div className="search">

        <input type="text" placeholder={placeholder} className="searchInputs"/>
        <Button className='searchIcon'><i className="fa-solid fa-magnifying-glass"></i></Button>
        
    </div> 

  )
}

export default SearchBar


