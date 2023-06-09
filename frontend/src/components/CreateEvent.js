import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
const CreateEvent=()=> {

// States for registration
const [eventName, setEventName] = useState('');
const [categoryName, setCategoryName] = useState('Music');
const [description, setDescription] = useState('');
const [location, setLocation] = useState('');
const [price, setPrice] = useState();
const [date, setDate] = useState('');
const [image, setImage] = useState(null);
const [count, setCount] = useState();
const dateInputRef = useRef(null);
const navigate = useNavigate()

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setEventName(e.target.value);
setSubmitted(false);
};

//Handling the date change
const handleDate = (e) => {
setDate(e.target.value);
setSubmitted(false);
};

// Handling the Description change
const handleDescription = (e) => {
setDescription(e.target.value);
setSubmitted(false);
};


// Handling the Category change
const handleCategory = (e) => {
setCategoryName(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handleLocation = (e) => {
setLocation(e.target.value);
setSubmitted(false);
};

// Handling the price 
const handleCount = (e) => {
    setCount(e.target.value);
    setSubmitted(false);
    };

// Handling the price 
const handlePrice = (e) => {
setPrice(e.target.value);
setSubmitted(false);
};

//Handling the image upload change
const handleImageUpload = (e) =>{
    setImage(e.target.files[0]);
}

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (eventName === '' || description === '' || location === '' || date === '') {
setError(true);
} else {
const newEvent={ 
    EventName:eventName,
    CategoryName:categoryName,
    Description:description,
    Image:image,
    Location:location,
    Price:price, 
    count:count,
    Date:date
}

const postEvents=async()=>{

    const formData=axios.toFormData(newEvent);
    const data= await axios.post('/api/events/create',formData);

    
}
postEvents()
setSubmitted(true);
setError(false);
navigate('/')
}
};

// Showing success message
const successMessage = () => {
    return (
        <div style={{display: submitted ? '' : 'none' }}>
            <h1 className="success">New Event created Successfully!!</h1>
        </div>
    );
};

// Showing error message if error is true
const errorMessage = () => {
    return (
        <div  style={{display: error ? '' : 'none'}}>
            <h1 className="error">***Please enter all the fields***</h1>
        </div>
    );
};

return (
<div className="form">
<div className="createEventHeading">
<h1>Create New Event</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
    <div>
        {/* Labels and inputs for form data */}
<label className="label">EventName*</label>
<input onChange={handleName} className="input"
value={eventName} type="text" />
<br/>
<label className="label">CategoryName* </label>
<select name='category' className='drop' onChange={handleCategory} value={categoryName}>
    <option>Music</option>
    <option>Sports & Fitness</option>
    <option>Food and Drinks</option>
</select>
<br/>
<label className="label">Description*</label>
<textarea onChange={handleDescription} className='textArea'></textarea>
<br/>
<label className="label">Date*</label>
<input type="date" onChange={handleDate} ref={dateInputRef}  className="input"/>
<br/>
<label className="label">Location*</label>
<input onChange={handleLocation} className="input"
value={location} type="text" />
<br/>
<label className="label">CountInStock</label>
<input onChange={handleCount} className="input"
value={count} type="text" />
<br/>
<label className="label">Price</label>
<input onChange={handlePrice} className="input"
value={price} type="text" />
<br/>

<label className="label">Upload Image</label>
<input type='file' onChange={handleImageUpload} className="image"
/>
<br/>

<button onClick={handleSubmit} className="btn submitBtn" type="submit">
Submit
</button>

    </div>

</form>
</div>
);
}
export default CreateEvent;