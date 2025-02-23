import React, { Component } from 'react';
import { postUrls } from '../../apiCalls';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    postUrls(this.state.urlToShorten, this.state.title)
    this.props.boolChanger()
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          data-cy="title-input"
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          data-cy="url-input"
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button 
        onClick={e => this.handleSubmit(e)}
        data-cy="submit-button"
        >
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
