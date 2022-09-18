import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if(!errorMessage) {
  //         setFormState({ [e.target.name]: e.target.value });
  //     }
  // };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h940vgo",
        "template_t34f3ih",
        form.current,
        "P6vOo_xv_WsKQJiHo"
      )
      .then(
        (result) => {
          setFormState({ [e.target.name]: e.target.value });
          console.log("Message sent");
          // Clear form after a successful send.
          e.target.reset();
        },
        (error) => {
          setErrorMessage("Something went wrong.");
        }
      );
  };

  return (
    <section>
      <h1 id="contact">Contact Me</h1>
      <form id="contact-form" className="contact-flex" onSubmit={sendEmail} ref={form}>
        <div className="field-padding">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            defaultValue={name}
            name="Name"
            onBlur={handleChange}
            className="contact-field"
          />
        </div>
        <div className="field-padding">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            defaultValue={email}
            name="Email"
            onBlur={handleChange}
            className="contact-field"
          />
        </div>
        <div className="field-padding">
          <label htmlFor="message">Message</label>
          <textarea
            name="Message"
            defaultValue={message}
            rows="5"
            onBlur={handleChange}
            className="contact-field"
          />
        </div>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
