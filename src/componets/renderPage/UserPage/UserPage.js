import React, { Component } from 'react';
//import PageFooter from 'D:/Diplom/front/frontend/src/componets/Footer/PageFooter.js';
import PageFooter from '../../../../src/componets/Footer/PageFooter';
import "./user.css";
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        FIO: state.userInfo.FIO,
        DateBD: state.userInfo.DateBD,
        login: state.userInfo.login,
        email: state.userInfo.email,
        phone: state.userInfo.phone,
        dat: state.userInfo.dat,
    }
  }
class UserPage extends Component {
    render() {
        return (
            <div>
                <PageFooter />
            <div className="blockuser">
                <div className="ConteinerUserLogo">
                    <p><img className="logoUser" alt="Аватар" src="https://android.w-dog.info/wallpapers/0/18/438954103727068/xameleon-rango-oboi-glaza-fon-prikoly-morda.jpg" /></p>
                </div>
                <div className="ConteinerUserInfo">
                    <div className="pole">
                        <div>ФИО: {this.props.FIO}</div>
                        <div>Дата рождения: {this.props.DateBD}</div>
                        <div>Логин: {this.props.login}</div>
                        <div>Почта: {this.props.email}</div>
                        <div>Телефон: {this.props.phone}</div>
                        <div>Последняя дата входа: {this.props.dat}</div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(UserPage)
