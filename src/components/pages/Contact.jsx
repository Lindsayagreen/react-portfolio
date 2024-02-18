// import React from "react";

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact Me</h1>
//       <p>
//         Email: <a href="mailto:"> </a>
//       </p>
//     </div>
//   );
// };

// export default Contact;

// import React from "react";
// import "../../styles/Contact.css"; // Import CSS file for Contact component

// const Contact = () => {
//   return (
//     <div className="contact-container"> {/* Apply CSS class to the container */}
//       <h1 className="contact-heading">Contact Me</h1> {/* Apply CSS class to the heading */}
//       <p className="contact-email"> {/* Apply CSS class to the email paragraph */}
//         Email: <a href="mailto:">lindsgree@gmail.com</a> {/* Apply styles to the email link */}
//       </p>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import "../../styles/Contact.css"; // Import CSS file for Contact component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend or display a success message
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
