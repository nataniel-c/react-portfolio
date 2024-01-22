import { useState } from 'react';

function Contact() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [warning, setWarning] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.name)
    if (e.target.name === 'username') {
      setName(e.target.value);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'message') {
      setMessage(e.target.value);
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    if (!username) {
      return (
        setWarning('**Name is required**')
      )
    }
    // check if a valid email was given
    if (!validateEmail(email)) {
      return (
        setWarning('**Email is invalid**')
      )
    }
    // check if a message was given
    if (!message) {
      return (
        setWarning('**Message is required**')
      )
    }
    if (username && email && message) {
      alert(`Thank you, ${username}, your message has been received and I will respond as soon as I can.`);
      setName('');
      setEmail('');
      setMessage('');
      setWarning('');
    }   


    // Make a function to check whether an email is valid or not
    
    
  };

  const validateEmail = (inputEmail) => { 
    return inputEmail.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  return (
    <div>
    <h1>Contact Me:</h1> 
    <div className='info-card' style={{ flexDirection: 'column' }}>
        <li>Phone: 787-602-2874</li>
        <li>Email: nataniel-carras@hotmail.com</li>
      <label><h3><br></br>Send me a message:</h3></label>
      <form className="contact-form" onSubmit={handleSubmit} onChange={handleInputChange}>
        <label for="name"><p>Name:</p></label>
        <input
          type="text"
          placeholder="Type your name here"
          name="username"
          className="contact-input"
          // onChange={handleInputChange}
        ></input>
        <label for="email"><p>Email address:</p></label>
        <input
          type="text"
          placeholder="Type your email address here"
          name="email"
          // onChange={handleInputChange}
          className="contact-input"
        ></input>
        <label for="message"><p>Message:</p></label>
        <textarea
          type="text"
          placeholder="Type your message here"
          name="message"
          className="contact-input"
          // onChange={handleInputChange}
          style={{ height: '100px', alignItems: 'start', justifyItems: 'start' }}
        ></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div>
        <h2>{warning}</h2>
      </div>
      
    </div>
    </div>
  )
}

export default Contact;