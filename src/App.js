import './App.css';
import React , { Component } from 'react';
import aetheticpics from "./aetheticpics";
import data from "./data"
import Forms from './components/forms1';
import QuoteGenerator from "./components/quoteGenerator";
import Navigation from  './components/navigation'
import Intro from "./components/element"
import Jumbotron from "./components/jumbotron"
import Methods from "./components/ourMethods"
import ContactUs from "./components/contactUs"
import Footer from './components/footer';

class App extends Component {
  state = {};

  render () {


    return (
      <React.Fragment>

          <Navigation data={data}/>

          <Intro />

           <QuoteGenerator 
           aetheticpics = {aetheticpics}/>

          <Forms
           aetheticpics = {aetheticpics}
           />

           <Jumbotron />

           <Methods />

           <ContactUs />

           <Footer />

      </React.Fragment>
    );
  } 
}
// user can add image from pc or img api
// add blur option to img and quotes background
// rotate and resize qoutes

export default App;