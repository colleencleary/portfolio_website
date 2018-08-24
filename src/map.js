import React, { Component } from 'react';

class HomeMap extends Component {
  render() {
    return (
      <div>
      
      <div className="line1"></div>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <img className="star" id="star1" src="/assets/blue_star.png" alt="star" />
      <img className="star" id="star2" src="/assets/blue_star.png" alt="star" />
      <img className="star" id="star3" src="/assets/blue_star.png" alt="star" />
      <img className="star" id="star4" src="/assets/yellow_star.png" alt="star" />
      <img className="star" id="star5" src="/assets/yellow_star.png" alt="star" />
      <img className="star" id="star6" src="/assets/yellow_star.png" alt="star" />
      <img className="star" id="star7" src="/assets/gray_star.png" alt="star" />
      <img className="star" id="star8" src="/assets/gray_star.png" alt="star" />
      <img className="star" id="star9" src="/assets/gray_star.png" alt="star" />
      <div className="content container" id="homepage">
      <div id="home-map" className="justify-center">
        <div className="toprow row justify-space-between">
          <div className="icon col tip">
            <img onClick={()=>{
                this.props.toggleProjects()}} id="work-icon" src="/assets/satellite.png" alt="Projects"/>
          </div>
          <div className="icon col tip">
            <img onClick={()=>{
                this.props.toggleContact()}} id="contact-icon" className="pull-right" src="/assets/ufo.png" alt="Contact"/>
          </div>
        </div>
        <div className="middlerow icon tip">
            <img onClick={()=>{
                this.props.toggleAbout()}} className="tip" id="about-icon" src="/assets/astronaut.png" alt="About"/>
        </div>
        <div className="bottomrow row">
          <div className="icon col tip">
            <img onClick={()=>{
                this.props.toggleScience()}} className="tip" id="science-icon" src="/assets/galaxy.png" alt="Science"/>
          </div>
          <div className="icon col tip">
            <a href="/assets/ColleenCleary_resume.pdf"><img id="resume-icon" className="pull-right tip" src="/assets/saturn.png" alt="Resume"/></a>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default HomeMap;
