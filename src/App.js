import React, { Component } from 'react';
import './App.css';
import FormAuth from './componets/renderPage/AuthPage/Auth.js';
import UserPage from './componets/renderPage/UserPage/UserPage.js';
import NetworkJournal from './componets/renderPage/JurnalPage/NetworkJournal.js';
import CrossesDevice from './componets/renderPage/JurnalPage/CrossesDevice.js';
import ConfigurationDevices from './componets/renderPage/JurnalPage/ConfigurationDevices.js';
import Users from './componets/renderPage/UserPage/Users.js';
import Crosses from './componets/renderPage/NetworkPages/Crosses.js';
import Devices from './componets/renderPage/Device/Devices.js';
import TypeDevices from './componets/renderPage/Device/TypeDevices.js';
import DHCP from './componets/renderPage/NetworkPages/DHCP.js';
import Network from './componets/renderPage/NetworkPages/Network.js';
import Nodes from './componets/renderPage/NetworkPages/Nodes.js';
import VLAN from './componets/renderPage/NetworkPages/VLAN.js';
import NetworkPool from './componets/renderPage/NetworkPages/NetworkPool.js';
import AnalysisIP from './componets/renderPage/NetworkPages/AnalysisIP.js';
import Room from './componets/renderPage/Rooms/Room.js';
import Topologi from './componets/renderPage/TopologPage/Topologi.js';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

class App extends Component {
    render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={FormAuth}></Route>
        <Route path="/userpage" component={UserPage}></Route>
        <Route path="/NetworkJournal" component={NetworkJournal}></Route>
        <Route path="/CrossesDevice" component={CrossesDevice}></Route>
        <Route path="/ConfigurationDevices" component={ConfigurationDevices}></Route>
        <Route path="/Users" component={Users}></Route>
        <Route path="/Crosses" component={Crosses}></Route>
        <Route path="/Devices" component={Devices}></Route>
        <Route path="/TypeDevices" component={TypeDevices}></Route>
        <Route path="/Network" component={Network}></Route>
        <Route path="/VLAN" component={VLAN}></Route>
        <Route path="/DHCP" component={DHCP}></Route>
        <Route path="/Nodes" component={Nodes}></Route>
        <Route path="/NetworkPool" component={NetworkPool}></Route>
        <Route path="/AnalysisIP" component={AnalysisIP}></Route>
        <Route path="/Rooms" component={Room}></Route>
        <Route path="/Topologi" component={Topologi}></Route>
          {console.log(this.props.user_inf)}
        </Switch>
       </Router>

    );
  }
}
const  mapStateToProps  = state => {
  return {
    user_inf: state.user_info
  };
};
export default connect(mapStateToProps,null)(App);