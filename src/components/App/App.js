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
    console.log('boolin')
    this.setState({
      checkBool: true
    })
  }

  componentDidMount() {
    console.log('Hello but once')
    getUrls()
    .then(data => {
      this.setState({
        urls: data.urls
      })
    })
  }

  componentDidUpdate() {
    console.log('Hello')
    if (this.state.checkBool) {
      console.log('ARE YOU RUNNING')
    getUrls()
    .then(data => {
      this.setState({
        urls: data.urls,
        checkBool: false
      })
      console.log('SHOULD UPDATE NOW')
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
