import React from 'react';
import * as LoginJS from '../pages/javascript/login.js';
import '../pages/css/SketchLogin.css';
import '../pages/css/utilities.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

const button = {
    backgroundColor: '#60c7c1',
    border: 'none',
    top: '25%',
    textDecoration: 'none'
}

const signUp = {
    
}

const forgotPassword = {

}

class SketchLogin extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: ''
        };

        this.handleInformation = this.handleInformation.bind(this);
        this.handleUsernameChangeState = this.handleUsernameChangeState.bind(this);
        this.handlePasswordChangeState = this.handlePasswordChangeState.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInformation(event) {
        this.setState({
            username: this.state.username,
            password: this.state.password
        });

        event.preventDefault();
    }

    handleClick(event) {
        var username = this['state']['username'];
        var password = this['state']['password'];
        var combinedQuery = username + "/" + password;

        axios.post('/api/login/' + combinedQuery).then((response) => {
            console.log(combinedQuery);
            console.log(response);
            if(response['data'] !== null) {
                console.log('Login successful.');
                var uploadScreen = [];
                // uploadScreen.push(<UploadScreen appContext={this.props.appContext}/>)
                // this.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
            } else {
                console.log("The username and password don't match, or do not exist.");
            }
        }).catch((error) => {
            console.log(error);
        });
        
        event.preventDefault();
    }

    handleUsernameChangeState(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChangeState(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <div className='text-center vertical-center'>              
                        <div id='login-box' className='card'>
                            <div className='card-header font-weight-bold'>Login</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleClick}>
                                    <div className='form-group'>
                                        <input type='text' className='form-control' name='username' placeholder='Username' required='required' value={this.state.username} onChange={this.handleUsernameChangeState} />
                                    </div>
                                    <div className='form-group'>
                                        <input type='text' className='form-control' name='password' placeholder='Password' required='required' value={this.state.password} onChange={this.handlePasswordChangeState} />
                                    </div>
                                    <div className='form-group'>
                                        <button type='submit' value="Submit" className='btn btn-primary btn-lg btn-block login-btn' style={button}>Login</button>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6' style={signUp}>
                                            <Link to="/sign-up">Sign up!</Link>
                                        </div>
                                        <div className='col-6' style={forgotPassword}>
                                            <Link to="/forgot">Forgot password?</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default SketchLogin;