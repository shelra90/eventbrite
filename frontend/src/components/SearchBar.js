/*  ignore */
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



/*  ignore */
CODE FOR HOMESCREEN

IMPORT the following homescreen
import React from 'react'
import {Col, Row} from 'react-bootstrap'
import events from '../events'
import Event from '../components/Event'



<h1>Events</h1>
<Row>
  {events.map((e) => (
    <Col sm={12} md{6} lg={4} x1={3}>
    <Event event={e} />
    </Col>
  ))}
</Row>

/*  ignore */

