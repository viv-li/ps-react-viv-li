import React from 'react';
import RegistrationFormContainer from 'ps-react/RegistrationFormContainer';

export default class ExampleRegistrationFormContainer extends React.Component {
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return <RegistrationFormContainer onSubmit={this.onSubmit} />
  }
}