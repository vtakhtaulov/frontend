import React, {Component} from 'react';
import PageFooter from '../../../../src/componets/Footer/PageFooter';
import "./user.css";
import {connect} from "react-redux";

class UserPage extends Component{
constructor(props) {
    super(props);
}
    render() {
        return (
            <div>
                <PageFooter/>
                <div className="blockuser">
                    <div className="ConteinerUserLogo">
                        <p>
                            <img className="logoUser" alt="Аватар"
                                src="https://android.w-dog.info/wallpapers/0/18/438954103727068/xameleon-rango-oboi-glaza-fon-prikoly-morda.jpg"/>
                        </p>
                    </div>
                    <div className="ConteinerUserInfo">
                        <div className="pole">
                            <div>ФИО: {this.props.user_inf.fioUser}</div>
                            <div>Логин: {this.props.user_inf.user_login}</div>
                            <div>Номер телефона: {this.props.user_inf.phone}</div>
                            <div>Е-маил: {this.props.user_inf.email}</div>
                            <div>Роль: {this.props.user_inf.user_role}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        user_inf: state.user_info
    };
};
export default connect(mapStateToProps,null)(UserPage);
