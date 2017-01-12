import React from 'react'
import { Button } from 'react-bootstrap'

export default class FacebookButton extends React.Component {
  constructor (props) {
    super(props)

    this.connectFB = this.connectFB.bind(this)
  }

  connectFB () {
    const changeToken = this.props.onConnect
    FB.getLoginStatus(function (response) {
      console.log(response)
      if (response.status === 'connected') {
        console.log('Logged in.')
        changeToken(response.authResponse.accessToken)
      } else {
        FB.login()
      }
    })
  }

  render () {
    return <Button bsStyle='primary' onClick={this.connectFB}>
      Facebook
    </Button>
  }
}
