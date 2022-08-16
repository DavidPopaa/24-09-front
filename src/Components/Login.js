import React, {Component} from 'react';


class Login extends Component {
    // login = event => {
    //     fetch("http://127.0.0.1:8000/auth/", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(this.state.credentials)
    //     })
    //     .then(data => data.json())
    //     .then(data => this.props.userLogin(data.token))
    //     .catch(err => console.log(err))
    // }


    register = event => {
        fetch("http://127.0.0.1:8000/accounts/users/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(data => console.log(data.token))
        .catch(err => console.log(err))
    }


    state = {
        credentials: { 
            username: "",
            password: "",
        }
    }


    inputChanged = event => {
        const cred = this.state.credentials
        cred[event.target.name] = event.target.value
        this.setState({credentials: cred})
    } 

    
    render() {
        return (
            <div className='Login'>
                <a href="http://localhost:3000/books">Books</a>
                <br></br>
                <h1>Login User</h1>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.credentials.username} onChange={this.inputChanged}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.inputChanged}/>
                </label>
                {/* <button onClick={this.login}>Login</button> */}
                <button onClick={this.register}>Register</button>
            </div>
        );
    }


}

export default Login;