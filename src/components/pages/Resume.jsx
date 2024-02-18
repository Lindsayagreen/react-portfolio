import React from "react";
import "../../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>
      <p className="resume-content">
        hjsgrtjkhgerjthg
      </p>
    </div>
  );
};

export default Resume;

// Okay, I see. My advice is copying all of the CSS that you put in separate files into one file that would be under your src folder and name it 'index.css'. Once you have copied everything you can then just go to your main.jsx file and uncomment import './index.css' and everything should work. You won't need to constantly import your CSS anymore.
// For your portfolio information in your code, you need to also change the different values so that it doesn't say the same thing because it does show an error when you look at your console.
// The icons that you have also chosen are not showing up so maybe go look at the code that was given, where ever you got the icons from and copy it as it is, as any change will result in you not seeing the actual icon.