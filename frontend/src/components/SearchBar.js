
import React from 'react'

const SearchBar = ({placeholder, data}) => {
  return (
    <div className="search">
  <div className="searchInputs">
      <div className="dataResult">
        <input type="text" placeholder={placeholder}/>
           <div className="searchIcon">
            </div>
        </div> 
    </div>
    </div> 

  )
}

export default SearchBar






