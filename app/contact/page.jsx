"use client";
import Copyright from "../../components/Copyright";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    const params = {
      name,
      email,
      subject,
      message,
    };

    e.preventDefault();
    if (name) params.data = name;
    if (email) params.data = email;
    if (subject) params.data = subject;
    if (message) params.data = message;
  }

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <SectionTitle title="Contact Us" />
              <div className="contact-form">
                <form onSubmit={ handleSubmit }>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <Copyright />
          </div>
        </div>
      </div>      
    </>
  )
}

export default ContactPage