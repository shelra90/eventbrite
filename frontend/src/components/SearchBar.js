/*  ignore */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { listSearchEvents } from '../actions/eventActions'

const SearchBar = ({placeholder, data}) => {
  const [input,setInput]=useState('');

  const dispatch=useDispatch()

  const handleEnter = (e)=>{
    if(e.key==='Enter'){
      dispatch(listSearchEvents(input))
    }
  };

  const handleclick = ()=>{
    console.log(input)
    dispatch(listSearchEvents(input))
  };

  return (
    <div className="search">

        <input type="text" onKeyUp={handleEnter} onChange={(e)=>setInput(e.target.value)} placeholder={placeholder} className="searchInputs"/>
        <Button className='searchIcon' onClick={handleclick}><i className="fa-solid fa-magnifying-glass"></i></Button>
        
    </div> 

  )
}

export default SearchBar


