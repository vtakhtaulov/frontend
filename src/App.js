import React, { Component } from 'react';
import './App.css';
import FormAuth from './componets/renderPage/AuthPage/Auth.js';
import UserPage from './componets/renderPage/UserPage/UserPage.js';
import JurnalIP from './componets/renderPage/JurnalPage/JurnalIP.js';
import JurnalCross from './componets/renderPage/JurnalPage/JurnalCross.js';
import JurnalChanges from './componets/renderPage/JurnalPage/JurnalСhanges.js';
import IpAddr from './componets/renderPage/IPAddrPage/IpAddr.js';
import ComponentAddUSPage from './componets/renderPage/AddUserPage/adduspage.js';
import AllUser from './componets/renderPage/UserPage/AllUser.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UserPageReduser from './reducers/ReduserUserPage';


const store = createStore(UserPageReduser)



class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/auth" or component={FormAuth}></Route>
        <Provider store={store}>
          <Route path="/userpage" component={UserPage}></Route>
        </Provider>
        <Route path="/jurnalip" component={JurnalIP}></Route>
        <Route path="/jurnalcross" component={JurnalCross}></Route>
        <Route path="/jurnalchenges" component={JurnalChanges}></Route>
        <Route path="/ipaddr" component={IpAddr}></Route>
        <Route path="/adduser" component={ComponentAddUSPage}></Route>
        <Route path="/AllUser" component={AllUser}></Route>
      </Router>
    );
  }
}
export default (App)