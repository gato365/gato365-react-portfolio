import React, { useState } from 'react';

// Create a form to get name, email, and message from the user and send it to the developer after submit button is clicked

function ContactForm() {
    //name, email, and message are the state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    //error is the state variable
    const [errorMessage, setErrorMessage] = useState('');

    // handleNameChange is the event handler for the name input
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    // handleEmailChange is the event handler for the email input
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    // handleMessageChange is the event handler for the message textarea
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    // handleSubmit is the event handler for the submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        // if statement to check if the name, email, and message are empty
        if (!name ) {
            setErrorMessage('Please enter name.');
            alert('enter name');
        } else if(! email ) {
            setErrorMessage('Please enter a valid email address.');
        } else if(!message) {
            setErrorMessage('Please enter a message.');
        } else {
            setErrorMessage('');
            
        }
    }


    // Add notification to contact form if a field is left blank

    return (
        <section>

            <div style={{ marginLeft: '40px', marginTop: '15px' }}>
                <h1 data-testid="h1tag">Contact me</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label><br></br>
                        <input type="text" size="50" defaultValue={name} onBlur={handleNameChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label> <br></br>
                        <input type="email" size="50" defaultValue={email} onBlur={handleEmailChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label> <br></br>
                        <textarea name="message" rows="12" cols="50" defaultValue={message} onBlur={handleMessageChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;


