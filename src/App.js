import React, { Component } from 'react';
import Header from './Components/Header';
import Section from './Components/mainSection';
import Content from './Components/Content';
import Most from './Components/mostVisited';
import './Styles/reset.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Section Content={Content}></Section>
        <Most />
      </>
    );
  }
}
