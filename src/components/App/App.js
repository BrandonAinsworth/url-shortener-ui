import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      checkBool: false
    }
  }

  boolChanger = () => {
    this.setState({
      checkBool: true
    })
  }

  componentDidMount() {
    getUrls()
    .then(data => {
      this.setState({
        urls: data.urls
      })
    })
  }

  componentDidUpdate() {
    if (this.state.checkBool) {
    getUrls()
    .then(data => {
      this.setState({
        urls: data.urls,
        checkBool: false
      })
    })
  }
  }


  render() {
    return (
      <main className="App">
        <header>
          <h1 data-cy="page-title" >URL Shortener</h1>
          <UrlForm boolChanger={this.boolChanger}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
