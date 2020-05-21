import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard.component'
import Shaqaalaha from './components/shaqaalaha/shaqaalaha.component'
import Staff from './components/shaqaale/staff-form/staff.component'
import Search from './components/form/search-form/serch.component'
import Login from './components/authentications/login/login.component'
import ViewStaff from './components/view-staff/view-staff.component'
import Registration from './components/registration-form/register-form.component'
import ProtectedRoute from './components/protected-route/protected-route.component'
import { connect } from 'react-redux';
import { loginUser, logoutUser } from './redux/user/user.action';
import NotFound from './components/notFound-page/nodFound.component'
class App extends Component {
  state = {
    search: ''
  }
  handleSearch = e => {
    this.setState({ search: e.target.value})
  }
  render(){
    return (
      <div className="App">
        <ProtectedRoute path="/shaqaale" component={Dashboard} />
            <ProtectedRoute path="/shaqaale" search={this.state.search} handleSearch={this.handleSearch} component={Search} />
        <div className="component">
          <Switch>
            <Route exact path="/" component={Login}/>
            <ProtectedRoute exact path="/shaqaale" component={Shaqaalaha} />
            <ProtectedRoute exact path="/shaqaale/list/:staffId" component={ViewStaff} />
            <ProtectedRoute exact path="/shaqaale/list" component={Staff} />
            <ProtectedRoute exact path="/shaqaale/registration" component={Registration} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
const dispatchStateToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser())
})

export default withRouter(connect(null, dispatchStateToProps)(App));
