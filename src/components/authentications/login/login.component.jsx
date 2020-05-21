import React, { Component } from 'react'
import './login.styles.scss'
import { connect } from 'react-redux'
import { loginUser, loginUserErr } from '../../../redux/user/user.action'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { createStructuredSelector } from 'reselect'
import { getCurrentUSer, getLoginError } from '../../../redux/user/user.reselect'
import { Redirect } from 'react-router-dom'
class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value})
    }
    handleSubmit = async e => {
        e.preventDefault()
        const { loginUser, loginUserErr } = this.props
        const { email, password } = this.state
        if (email.trim() === "" || password.trim() === ""){
            return
        }
        await axios.post('http://localhost:5000/api/users/login', this.state, {
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => {
            const { token } = res.data
            localStorage.setItem('userToken', token)
            const decode = jwt_decode(token)
            loginUser(decode)
            this.setState({ 
                email: '', 
                password: ''
            })
        })
        .catch(err => {
            loginUserErr(err.response.data)
            this.setState({ 
                email: '', 
                password: ''
            })
        })

        
    }
    render(){
        return this.props.currentUSer ? (<Redirect to="/shaqaale" />) : (
            <div className="login-form">
                {
                    this.props.error ? (
                        <span className="error-handler">{this.props.error.msg}</span>
                    ) : ''
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" onChange={this.handleChange} value={this.state.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            )
        }
}

const dispatchStateToProps = dispatch => ({
    loginUser: user => dispatch(loginUser(user)),
    loginUserErr: err => dispatch(loginUserErr(err)),
})
const mapStateToProps = createStructuredSelector({
    currentUSer: getCurrentUSer,
    error: getLoginError
})
export default connect(mapStateToProps, dispatchStateToProps)(Login)