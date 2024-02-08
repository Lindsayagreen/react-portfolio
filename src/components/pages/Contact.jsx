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

import React from "react";
// import "../styles/Contact.css"; // Import CSS file for Contact component

const Contact = () => {
  return (
    <div className="contact-container"> {/* Apply CSS class to the container */}
      <h1 className="contact-heading">Contact Me</h1> {/* Apply CSS class to the heading */}
      <p className="contact-email"> {/* Apply CSS class to the email paragraph */}
        Email: <a href="mailto:">example@example.com</a> {/* Apply styles to the email link */}
      </p>
    </div>
  );
};

export default Contact;
