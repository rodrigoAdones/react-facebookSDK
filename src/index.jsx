import React from 'react'
import ReactDOM from 'react-dom'
import { Col } from 'react-bootstrap'
import Login from './login'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      token: '',
      action: 'login'
    }

    this.changeToken = this.changeToken.bind(this)
  }
  render () {
    if (this.state.action === 'login') {
      return (
        <Col mdOffset={4} md={4} xsOffset={2} xs={8}>
          <Login onChangeToken={this.changeToken} />
        </Col>
      )
    } else {
      // register
    }
  }

  changeToken (value = '') {
    this.setState({
      token: value
    })
    console.log(this.state.token)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
