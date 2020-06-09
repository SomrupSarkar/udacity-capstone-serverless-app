import * as React from 'react'
import Auth from '../auth/Auth'
import { Button } from 'semantic-ui-react'

interface LogInProps {
  auth: Auth
}

interface LogInState {}

export class LogIn extends React.PureComponent<LogInProps, LogInState> {
  onLogin = () => {
    this.props.auth.login()
  }

  render() {
    return (
      <div>
        <h1 style={{display: 'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        height: '10vh',
        color: 'grey',
        font: 'Geneva',
        fontWeight:'bold'
        }}>Capstone ToDo App</h1>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '2vh'}}>
          <Button onClick={this.onLogin} size="huge" color="twitter">
            Log in
          </Button>
        </div> 
      </div>
    )
  }
}
