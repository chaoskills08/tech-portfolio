import React from 'react';

function Resume() {
  return (
    <div>
      <div>
        {/* eslint-disable-next-line */}
        <a href="https://drive.google.com/file/d/1r6-2siUfFITax61qH_y5fYx8QV9QlXbZ/view?usp=sharing" target="_blank" className='resumeText'>View Resume</a>
      </div>
      <div className='skills' >
        <div className='col-4 centered'>
          <h4 className='resText'>Front-end Proficiencies:</h4>
          <div className='pTag'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>JQuery</p>
            <p>Responsive design</p>
            <p>React</p>
            <p>Bootstrap</p>
          </div>
        </div>
        <div className='col-4 centered'>
          <h4 className='resText'>Back-end Proficiencies:</h4>
          <div className='pTag'>
            <p>APIs</p>
            <p>Node</p>
            <p>Express</p>
            <p>MySql Sequelize</p>
            <p>MongoDB, Mongoose</p>
            <p>REST</p>
            <p>GraphQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume