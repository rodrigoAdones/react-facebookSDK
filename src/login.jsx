import React from 'react'
import { ControlLabel, FormGroup, FormControl, Panel, Button } from 'react-bootstrap'
import FacebookButton from './facebookButton'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <Panel>
      <h1>Bienvenido a PeepTours</h1>
      <form>
        <FormGroup controlId='formEmailLogin'>
          <ControlLabel>Email:</ControlLabel>
          <FormControl
            type='email'
            placeholder='Your Email'
          />
        </FormGroup>
        <FormGroup controlId='formPasswordLogin'>
          <ControlLabel>Password:</ControlLabel>
          <FormControl
            type='password'
          />
        </FormGroup>
        <FormGroup>
          <Button>
            Log-in
          </Button>
          <a href=''>Register</a>
        </FormGroup>
        <FormGroup>
          <FacebookButton onConnect={this.props.onChangeToken} />
        </FormGroup>
      </form>
    </Panel>
  }
}
