import React, { Component } from 'react';

import Autosuggest from 'react-autosuggest';

import MessagesMessageFooter from '../shared/MessagesMessageFooter';
import MessagesMessageHeader from '../shared/MessagesMessageHeader';

import typeaheadStyles from '../../css/components/typeahead.module.css';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : mockRecipients.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    <p>{suggestion.name} - {suggestion.email}</p>
  </div>
);


class MailCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, {newValue}) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Add a recipient',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <MessagesMessageHeader>
          <Autosuggest
              theme={typeaheadStyles}
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
        </MessagesMessageHeader>
        <MessagesMessageFooter />
      </div>
    );
  }
}

export default MailCreate;


// Mock recipient Array
const mockRecipients = [
  {
    name: 'Clay Carpenter',
    email: 'clay.carpenter@email.com'
  },
  {
    name: 'Joey Kirk',
    email: 'joey.kirk@email.com'
  },
  {
    name: 'Bonnie Adams',
    email: 'bonnie.adams@email.com'
  },
  {
    name: 'Brian Doran',
    email: 'brian.doran@email.com'
  },
  {
    name: 'Caitlyn Zahn',
    email: 'caitlyn.zahn@email.com'
  },
  {
    name: 'Sam Fulmer',
    email: 'sam.fulmer@email.com'
  },
];
