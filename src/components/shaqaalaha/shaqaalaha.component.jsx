import React, { Component } from 'react'
import './shaqaalaha.styles.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as StaffLogo } from './staffs.svg'
import { logoutUser } from '../../redux/user/user.action'
import axios from 'axios'
import { fetchStaffs, isAuthorized } from '../../redux/staff/staff.actions'
import { createStructuredSelector } from 'reselect'
import { getCurrentUSer } from '../../redux/user/user.reselect'
class Shaqaalaha extends Component {
    async componentDidMount(){
      
      return await axios.get('http://localhost:5000/api/staff', {
        headers: {
          'Content-Type':'application/json',
          'Authorization': localStorage.userToken
        }
      })
      .then(res => 
        {
          console.log(res.data)
        const { staffs} = res.data
        this.props.fetchStaffs(staffs)
      })
      .catch(err => {
        this.props.isAuthorized(err.response)
      })
    }
    render(){
      return (
          <div className="ws">
              <Link className="staff" to="/shaqaale/list">
                  <StaffLogo />
                  <span className="title">Shaqaalaha wasaarada</span>
              </Link>
          </div>
      )
  }
}

const dispatchStateToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    fetchStaffs: (staff) => dispatch(fetchStaffs(staff)),
    isAuthorized: (staff) => dispatch(isAuthorized(staff)),
})

const mapStateToProps = createStructuredSelector({
  currentUSer: getCurrentUSer
}) 

export default connect(mapStateToProps, dispatchStateToProps)(Shaqaalaha)
