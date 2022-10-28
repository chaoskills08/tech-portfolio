import React from 'react';
import socialNetwork from '../../images/social-network-img.png'
import teamProfile from '../../images/team-profile.png'
import noteTaker from '../../images/note-taking-img.png'
import textEditor from '../../images/text-editor.png'
import reShift from '../../images/reshift.png'
import momentum from '../../images/momentum.png'
import gamerFoods from '../../images/gamerfoods.png'
import weatherApp from '../../images/weather-app.png'

function Portfolio() {
  return (
    <div>
        <h3 className='portText'>Recent Work</h3>
      <div className='cardCont'>

      <div className="card portCards"><a href="https://reshift-servermonks.herokuapp.com/" target="_blank">
          <img src={reShift} className="card-img-top imgResize" alt="App for measuring mood of employees before and after shift"></img>
          </a>
          <div className="card-body">
            <p className="cardText">ReShift</p>
          </div>
        </div>
      <div className="card portCards"><a href="https://momentum-initial.herokuapp.com/" target="_blank">
          <img src={momentum} className="card-img-top imgResize" alt="App to track study/reading time"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Momentum Study/Reading tracker</p>
          </div>
        </div>
      <div className="card portCards"><a href="https://chaoskills08.github.io/gamerfoods" target="_blank">
          <img src={gamerFoods} className="card-img-top imgResize" alt="App to pair foods with video games"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Gamerfoods</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://github.com/chaoskills08/social-network-api" target="_blank">
          <img src={socialNetwork} className="card-img-top imgResize" alt="Backend for social media"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Social Network API</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://note-taking-phantom.herokuapp.com/" target="_blank">
          <img src={noteTaker} className="card-img-top imgResize" alt="Note taking website"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Note Taker App</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://github.com/chaoskills08/team-profile-generator" target="_blank">
          <img src={teamProfile} className="card-img-top imgResize" alt="Backend for creating teams of employees"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Team Profile Generator</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://yet-another-text-editor.herokuapp.com/" target="_blank">
          <img src={textEditor} className="card-img-top imgResize" alt="PWA application of a functioning text editor"></img>
          </a>
          <div className="card-body">
            <p className="cardText">PWA Text Editor App</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://chaoskills08.github.io/weather-dashboard/" target="_blank">
          <img src={weatherApp} className="card-img-top imgResize" alt="Weather dashboard"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Weather forecast app</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio