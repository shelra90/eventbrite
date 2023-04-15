import React from 'react';
import { Form } from 'react-bootstrap'

const SearchBar = ({placeholder, data}) => {
  return (
    <div className="search">
  <div className="searchInputs">
      <div className="dataResult">
        <Form.Control type="text" size="lg" placeholder={placeholder}> 
        </Form.Control>
           <div className="searchIcon">
            </div>
        </div>
        </div>
        </div>
  )
}
export default SearchBar
