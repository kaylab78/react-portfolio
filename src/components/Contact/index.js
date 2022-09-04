import React, { useState } from "react";

function Contact() {
    const [formState, setFormState] = useState({ name:'', email:'', message:'' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    return (
        <section>
            <h1 id="contact">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" defaultValue={email} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
  );
}

export default Contact;
