import React from 'react';
import Navigation from "../components/Navigation.js";
import Logo from "../components/Logo.js";


const About = () => {
  return (<div>
    <Navigation />
    <h1>About</h1>
    <br/>
    <Logo />
    <p>React World Countries is a react project using the
      <a className="link"
         target="_blank"
         href="https://restcountries.com"> rest countries API </a>
      It's been coded with Javascript, html, and sass
      and with the help of a
      <a target="_blank"
         href="https://www.youtube.com/watch?v=K3D2rjAUQ3o"
         className="link"> french tutorial </a>
       from the Youtube channel
      <a target="_blank"
         href="https://www.youtube.com/channel/UCHGLV13U7YRbjrKpqfbtyYg"
         className="link"> From Scratch. </a>
         You can modify different settings to only see certain categories of countries.
      </p>
    <br/>
    <p>Made by Camille Granier</p>
  </div>)
};

export default About;
