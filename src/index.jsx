import React from 'react'
import ReactDOM from 'react-dom'
import { Col } from 'react-bootstrap'
import Login from './login'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      token: '',
      action: 'login',
      sdkLoaded: false
    }

    this.changeToken = this.changeToken.bind(this)
    this.checkConnection = this.checkConnection.bind(this)
  }

  componentDidMount () {
    const auxConnection = this.checkConnection
    const changeToken = this.changeToken
    const loadFacebook = new Promise(
      function (resolve, reject) {
        window.fbAsyncInit = function() {
          FB.init({
            appId      : '344810559195112',
            xfbml      : true,
            version    : 'v2.8'
          });
          FB.AppEvents.logPageView()
        };

        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id
           js.src = "//connect.facebook.net/en_US/sdk.js"
           fjs.parentNode.insertBefore(js, fjs)
         }(document, 'script', 'facebook-jssdk'))

          window.setTimeout(
            function() {
              // ¡Cumplimos la promesa!
              resolve('thisPromiseCount')
          }, Math.random() * 2000 + 1000);
      }
    )

    loadFacebook.then(
      this.setState({
        sdkLoaded: true
      })
      function (message) {
        console.log(message)
        FB.getLoginStatus(function (response) {
          if (response.status === 'connected') {
            changeToken(response.authResponse.accessToken)
          }
        })
      }
    )
  }

  checkConnection () {
    changeToken = this.changeToken
    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        changeToken(response.authResponse.accessToken)
      }
    })
  }

  render () {
    if (this.state.sdkLoaded) {
      if (this.state.token === '') {
        if (this.state.action === 'login') {
          return (
            <Col mdOffset={4} md={4} xsOffset={2} xs={8}>
              <Login onChangeToken={this.changeToken} />
            </Col>
          )
        } else {
          // register
          <h1>Ventana de Registro</h1>
        }
      } else {
        // Ya esta registrado con facebook
        return <h1>Ya registrado</h1>
      }
    } else {
      // a loading window
      return <h1>Loading</h1>
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
