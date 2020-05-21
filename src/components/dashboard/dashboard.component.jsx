import React from 'react'
import './dashboard.styles.scss'
import { logoutUser } from '../../redux/user/user.action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const Dashboard = (props) => {
    const { logoutUser } = props
    return (
        <div className="dashboard">
            <h1 className="title"><i className="fas fa-tachometer-alt"></i>{' / '}Dashboard</h1>
            <ul className="dash-ul">
                <li><Link className="links" to="/shaqaale/registration">Registration</Link></li>
                <li><Link className="links" to="/shaqaale/information">information</Link></li>
            </ul>
            <button className="logout_btn" onClick={() => logoutUser()}>Logout <i className="fas fa-sign-out-alt"></i></button>
        </div>
    )
}
const dispatchStateToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})
  
  export default connect(null, dispatchStateToProps)(Dashboard);