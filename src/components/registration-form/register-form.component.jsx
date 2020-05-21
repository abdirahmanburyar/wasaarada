import React, { Component } from 'react'
import './registration.styles.scss'
import axios from 'axios'
export default class Registration extends Component {

    state = {
        fullName: '',
        email: '',
        address: '',
        jobTitle: '',
        avatarPath: {},
        res: null
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    handleImg = e => {
        console.log(e.target.files[0])
        this.setState({
            avatarPath: e.target.files[0]
        })
    }
    handleSubmit = async event => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('avatar', this.state.avatarPath)
        formData.append('email', this.state.email)
        formData.append('fullName', this.state.fullName)
        formData.append('address', this.state.address)
        formData.append('jobTitle', this.state.jobTitle)
        await axios.post('http://localhost:5000/api/staff/register', formData, {
            headers: {
                'Authorization': localStorage.userToken
            }
        })
            .then(data => this.setState({ res: data.data.staffData.fullName }))
            .catch(e => console.log(e))
    }
    render() {
        return (
            <div className="register-form">
                {
                    this.state.res ? (<span>{`Mr/Ms ${this.state.res} has been registred`}</span>) : ''
                }
                <h3 className="title">Formka Diiwaan Galinta Shaqaalaha Wasaarada</h3>
                <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                    <div className="form_controll">
                        <label htmlFor="fullName">FullName</label>
                        <input type="text" id="fullName" 
                        value={this.state.fullName}
                        onChange={this.handleChange}
                        name="fullName" placeholder="Gali magaca shaqaalaha"/>
                    </div>
                    <div className="form_controll">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email" placeholder="Gali Email shaqaalaha"/>
                    </div>
                    <div className="form_controll">
                        <label htmlFor="jobTitle">Occupation</label>
                        <input type="text" id="jobTitle" 
                        value={this.state.jobTitle}
                        onChange={this.handleChange}
                        name="jobTitle" placeholder="Gali shaqada shaqaalaha"/>
                    </div>
                    <div className="form_controll">
                        <label htmlFor="address">Address</label>
                        <input type="address" id="address" 
                        value={this.state.address}
                        onChange={this.handleChange}
                        name="address"  placeholder="Gali Addresska shaqaalaha"/>
                    </div>
                    <div className="form_controll">
                        <label htmlFor="photograph">Sawir</label>
                        <input type="file" id="photograph"
                        onChange={this.handleImg}
                        name="avatar" placeholder="Gali Addresska shaqaalaha"/>
                    </div>
                    <button className="register_btn">Submit</button>
                </form>
            </div>
        )
    }
}
