import React from 'react';
import profileImg from '../../images/face-pic.jpeg';


function About() {
  return (
    <div className='aboutMe'>
      <div className='col-md-12 row justify-content-center background'>
        <p className='col-md-6 order-2 aboutText'>
          My name is Nicholas Bales, a recent graduate from the Full-Stack developer bootcamp student at The Ohio State University (Grad date - 10/17/22). My skillset includes PWA's, Full-Stack web development, MySQL Databases, NoSQL databases, and React. I would love to progress my learning so that I can be proficient in any language/framework a job might call for! In order to stay up to date on my practices I enjoy continuously working on personal projects.
          On the "Work" page, you can find my current work. I am always coding so check in once in a while, my home page may include some new work! Click on the contact
          tab if you want to get in touch with me, whether it's for collaboration on a project, a job offer, or even any questions! I would love to talk to you!
        </p>
        <div className='col-md-3 order-3 faceCont'>
          <img src={profileImg} className="facePic" alt="author" width="285" height="325"></img>
        </div>
      </div>
    </div>
  );
}

export default About