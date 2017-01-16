import React from 'react'
import { ControlLabel, FormGroup, FormControl, Panel, Button, Col } from 'react-bootstrap'
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
          <Col md={6}>
            <Button>
              Log-in
            </Button>
          </Col>
          <Col md={6}>
            <a href=''>Register</a>
          </Col>
        </FormGroup>
        <FormGroup>
          <FacebookButton onConnect={this.props.onChangeToken} />
        </FormGroup>
      </form>
    </Panel>
  }
}
