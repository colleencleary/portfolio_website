import React, { Component } from 'react';
import Header from './header-nav.js';
import HomeMap from './map.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import About from './About.js';
import Science from './Science.js';

class HomePage extends Component {
  constructor(props){
  super(props)
  this.state = {
    homepageIsVisible: true,
    navIsVisible: false,
    aboutIsVisible: false,
    contactIsVisible: false,
    projectsIsVisible: false,
    scienceIsVisible: false
  }
  this.toggleHome = this.toggleHome.bind(this)
  this.toggleNav = this.toggleNav.bind(this)
  this.toggleAbout = this.toggleAbout.bind(this)
  this.toggleContact = this.toggleContact.bind(this)
  this.toggleProjects = this.toggleProjects.bind(this)
  this.toggleScience = this.toggleScience.bind(this)
  }

  toggleHome(){
    this.setState({
      ['homepageIsVisible']: true,
      ['navIsVisible']: false,
      ['aboutIsVisible']: false,
      ['projectsIsVisible']: false,
      ['scienceIsVisible']: false,
      ['contactIsVisible']: false,
    })
}
toggleNav(){
  this.setState({
    ['navIsVisible']: !this.state['navIsVisible'],
  })
}
toggleAbout(){
  this.setState({
    ['homepageIsVisible']: false,
    ['navIsVisible']: false,
    ['aboutIsVisible']: true,
    ['projectsIsVisible']: false,
    ['scienceIsVisible']: false,
    ['contactIsVisible']: false,
  })
}
toggleProjects(){
  this.setState({
    ['homepageIsVisible']: false,
    ['navIsVisible']: false,
    ['aboutIsVisible']: false,
    ['projectsIsVisible']: true,
    ['scienceIsVisible']: false,
    ['contactIsVisible']: false,
  })
}
toggleScience(){
  this.setState({
    ['homepageIsVisible']: false,
    ['navIsVisible']: false,
    ['aboutIsVisible']: false,
    ['projectsIsVisible']: false,
    ['scienceIsVisible']: true,
    ['contactIsVisible']: false,
  })
}
toggleContact(){
  this.setState({
    ['homepageIsVisible']: false,
    ['navIsVisible']: false,
    ['aboutIsVisible']: false,
    ['projectsIsVisible']: false,
    ['scienceIsVisible']: false,
    ['contactIsVisible']: true,
  })
}

  render() {
    return (
      <div>
      <i onClick={()=>{
          this.toggleNav()}}className="fa fa-bars nav-btn"></i>
      { this.state.navIsVisible ?
        <Header toggleHome={this.toggleHome}
          toggleAbout={this.toggleAbout}
          toggleNav={this.toggleNav}
          toggleContact={this.toggleContact}
          toggleScience={this.toggleScience}
          toggleProjects={this.toggleProjects}
          /> : ''}

        { this.state.homepageIsVisible ?
          <HomeMap toggleHome={this.toggleHome}
          toggleAbout={this.toggleAbout}
          toggleNav={this.toggleNav}
          toggleContact={this.toggleContact}
          toggleScience={this.toggleScience}
          toggleProjects={this.toggleProjects}
          /> : ''}

        { this.state.aboutIsVisible ?
          <About toggleHome={this.toggleHome}
          toggleAbout={this.toggleAbout}
          toggleNav={this.toggleNav}
          toggleContact={this.toggleContact}
          toggleScience={this.toggleScience}
          toggleProjects={this.toggleProjects}
          /> : ''}

        { this.state.contactIsVisible ?
          <Contact /> : ''}

        { this.state.projectsIsVisible ?
          <Projects /> : ''}

        { this.state.scienceIsVisible ?
          <Science /> : ''}
      </div>
    );
  }
}

export default HomePage;
