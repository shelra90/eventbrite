import { useState } from 'react';
export default function Form() {

// States for registration
const [eventName, setEventName] = useState('');
const [CategoryName, setCategoryName] = useState('');
const [description, setDescription] = useState('');
const [image, setImage] = useState('');
const [location, setLocation] = useState('');
const [startingPrice, setStartingPrice] = useState();
const [endingPrice, setEndingPrice] = useState();
const [price, setPrice] = useState();


// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleDescription = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handleLocation = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handleStartingPrice = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handleEndingPrice = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePrice = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (eventName === '' || description === '' || location === '' || date === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>New Event created Successfully!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="form">
<div>
<h1>Create New Event</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<label className="label">EventName</label>
<input onChange={handleName} className="input"
value={eventName} type="text" />

<label className="label">Category</label>
<select name='category' className='drop'>
    <option>Music</option>
    <option>Sports & Fitness</option>
    <option>Food and Drinks</option>
</select>

<label className="label">Description</label>
<textarea></textarea>

<label className="label">Location</label>
<input onChange={handleLocation} className="input"
value={location} type="text" />

<label className="label">startingPrice</label>
<input onChange={handleStartingPrice} className="input"
value={startingPrice} type="text" />

<label className="label">endingPrice</label>
<input onChange={handleEndingPrice} className="input"
value={endingPrice} type="text" />

<label className="label">Price</label>
<input onChange={handlePrice} className="input"
value={Price} type="text" />


<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
</div>
);
}