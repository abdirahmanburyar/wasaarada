import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { isAuthenticated } from '../../redux/user/user.reselect'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

class ProtectedRoute extends Component {
    render(){
        const { component: Component, isAuthenticated, ...rest} = this.props
        return <Route {...rest}  render={(props) => {
            return isAuthenticated ? <Component {...props} /> : 
            <Redirect to={
                {
                    pathname: '/',
                    state: {
                        from: props.location
                    }
                }
            } />
        }}/>
    }
}
const mapStateToProps = createStructuredSelector({
    isAuthenticated
})

export default withRouter(connect(mapStateToProps)(ProtectedRoute))