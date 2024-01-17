import { useState } from 'react';

function ContactForm() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  this.state = {
    warning: ''
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a function to check whether an email is valid or not
    const validateEmail = (inputEmail) => { 
      return inputEmail.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    }
    // check if a name was given
    if (!username) {
      return (
        this.setState({ warning: 'Name is required'})
      )
    }
    // check if a valid email was given
    if (!validateEmail(email)) {
      return (
        this.setState({ warning: 'Email is invalid'})
      )
    }
    // check if a message was given
    if (!message) {
      return (
        this.setState({ warning: 'Name is required'})
      )
    }
    if (username && email && message) {
      alert(`Thank you, ${username}, your message has been received and I will respond as soon as I can.`);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div>
      <label>Contact Me:</label>
      <ul>
        <li>Phone: 787-602-2874</li>
        <li>Email: nataniel-carras@hotmail.com</li>
      </ul>
      <label>Send me a message:</label>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Type your name here"
          value={username}
          name="username"
          className="contact-input"
        ></input>
        <label>Email address:</label>
        <input
          type="text"
          placeholder="Type your email address here"
          value={email}
          name="email"
          className="contact-input"
        ></input>
        <label>Message:</label>
        <input
          type="text"
          placeholder="Type your message here"
          value={message}
          name="message"
          className="contact-input"
        ></input>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div>
        {this.state.warning}
      </div>
    </div>
  )
}

export default ContactForm;
