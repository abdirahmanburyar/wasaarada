import React, { useState, Component } from 'react'
import './search.styles.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getCurrentUSer } from '../../../redux/user/user.reselect'
import { searchName } from '../../../redux/staff/staff.actions'

class Search extends Component {
    render(){
        const { currentUser } = this.props
        return (
            <div className="search-box">
                <div className="navs">
                    <Link to="/shaqaale" style={{ marginRight: '5px'}} className="home-page"><i className="fas fa-home"></i></Link>/
                    <span style={{ marginLeft: '5px', width: '230px'}}>{`${currentUser.fullName} / ${currentUser.role}`}</span>
                </div>
                <input type="text" className="search" onChange={this.props.handleSearch} 
                value={this.props.search}
                name="search" placeholder="Search By Name"/>
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: getCurrentUSer
})
const dispatchStateToProps = dispatch => ({
    searchName: search => dispatch(searchName(search))
})
export default connect(mapStateToProps, dispatchStateToProps)(Search)