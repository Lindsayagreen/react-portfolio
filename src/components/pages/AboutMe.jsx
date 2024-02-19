// import "../../styles/AboutMe.css";
// import React from "react";

// export default function Aboutme() {
//   return (
//     <div className="card">
//       <img src="..." className="card-img-top" alt="..." />
//       <div className="card-body">
//         <p className="card-text">
          
//         </p>

//         <div className="headerName">
//           <p> Hi, I'm Lindsay, a passionate and creative leader, learner, and trainer based in DFW. I have a strong foundation in management, coaching, and elevating and I am constantly seeking opportunities to further develop my skills and expertise. </p>
//         </div>
//         <div className="aboutMeQuote">
//           <p> to add to my skills,I completed a full-stack web development program with Southern MEthodist University. I received my bachelors in political scvience from the University of Oklahoma</p>
//         </div>
//         <div className="aboutmeSection">
//           <div className="paragraph">
//             <p>My previous experience is in retail and food and beverage management. </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import "../../styles/AboutMe.css";
import React from "react";

export default function Aboutme() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img src="/my-image.jpg" className="img-fluid" alt="Profile" />
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <div className="headerName">
                <p> Hi, I'm Lindsay, a passionate and creative leader, learner, and trainer based in DFW. I have a strong foundation in management, coaching, and elevating and I am constantly seeking opportunities to further develop my skills and expertise. </p>
              </div>
              <div className="aboutMeQuote">
                <p> to add to my skills,I completed a full-stack web development program with Southern MEthodist University. I received my bachelors in political scvience from the University of Oklahoma</p>
              </div>
              <div className="aboutmeSection">
                <div className="paragraph">
                  <p>My previous experience is in retail and food and beverage management. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



