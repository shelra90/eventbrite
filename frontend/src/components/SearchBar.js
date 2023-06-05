/*  ignore */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { listSearchEvents } from '../actions/eventActions'
import {useNavigate } from 'react-router-dom'

const SearchBar = ({placeholder, data}) => {
  const [input,setInput]=useState('');

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleEnter = (e)=>{
    if(e.key==='Enter'){
      navigate(`/?input=${input}`);
    }
  };

  const handleclick = ()=>{
    navigate(`/?input=${input}`);
  };

  return (
    <div className="search">

        <input type="text" onKeyUp={handleEnter} onChange={(e)=>setInput(e.target.value)} placeholder={placeholder} className="searchInputs"/>
        <Button className='searchIcon' onClick={handleclick}><i className="fa-solid fa-magnifying-glass"></i></Button>
        
    </div> 

  )
}

export default SearchBar


