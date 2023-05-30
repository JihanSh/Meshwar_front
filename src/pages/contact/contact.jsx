import React,{useState} from 'react'
import "./contact.css"
import "../../components/headnav/header-navbar.css"
import { Navbar } from '../../components/headnav/navbar'
import MAP from "../../assets/MAP.png"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const onlyLetters = /^[a-zA-Z\s]*$/;
  const onlyEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateForm = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setSubjectError("");
    setMessageError("");

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Please enter your name");
      isValid = false;
    }

    if (!name.match(onlyLetters)) {
      setNameError("Please enter only letters");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Please enter your email");
      isValid = false;
    }

    if (!email.match(onlyEmail)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (subject.trim() === "") {
      setSubjectError("Please enter your subject");
      isValid = false;
    }

    if (!subject.match(onlyLetters)) {
      setSubjectError("Please enter only letters");
      isValid = false;
    }

    if (message.trim() === "") {
      setMessageError("Please enter your message");
      isValid = false;
    }

    if (isValid) {
      // Perform form submission or further actions
      console.log("Form is valid");
    }
  };
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h1 className="h1-contact">Join us.</h1>
        <p className="p-contact">
          <strong> Be part of our amazing team </strong>
        </p>
        <p className="p-contact">
          If you are a travel consultant committed to providing exceptional
          customer service, come join our team in Lebanon.
        </p>
        <br />
        <br />
        <h1 className="h1-contact">Get in Touch</h1>
        <form className="contact-form" onSubmit={validateForm}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <div className="error">{nameError}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {subjectError && <div className="error">{subjectError}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              cols="60"
              className="form-control"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {messageError && <div className="error">{messageError}</div>}
          </div>

          <div className="text-center margin-top-25">
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </div>
        </form>{" "}
      </div>{" "}
      <div>
        <img className="jumbotron" src={MAP}></img>
      </div>
    </div>
  );
}

export default Contact