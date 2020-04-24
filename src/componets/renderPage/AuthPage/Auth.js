import React, { Component } from 'react';
import './Auth.css';
import {AuthController, userFetchData} from "../../../Controller/user/UserController";
import {connect} from "react-redux";

class FormAuth extends Component {
    constructor(props) {
        super(props);
        this.open_ok = this.open_ok.bind(this);
        this.AuthController = new AuthController();
    }
    componentDidMount() {
        global.userInfo=( {
            user_login: 4,
            user_password: 4,
            role: 4
        });
        console.log(global.userInfo);

    }

     getUserInfo(){
        return this.global.userInfo;
     }

    async open_ok() {

        let user_login = document.getElementById("login").value; //получить значение из поля по ид
        let user_pass = document.getElementById("password").value;
        var user = await this.AuthController.logIN(user_login,user_pass);

        console.log(user.user_password);
        if (user_login===user.user_login && user_pass===user.user_password) {
            this.props.fetchData("http://localhost:8080/User/loginUser?user_login="+user_login+"&user_password="+user_pass);
            this.setState({
                userInf: this.props.users
            });

            window.location.assign('http://localhost:3000/userpage');
        }
        else {
            alert("Не верный логин или пароль! Повторите ввод.");
        }
    }

    render() {
        return (
            <div>
                <h3 id="footerPage" >Автоматизированная система учета изменений информационно-телекоммуникационной системы</h3>
                <div id="app-form-auth">
                    <h3 id="headerForm" >Авторизация</h3>
                    <div>
                        <span id="auth_log1" >Логин: </span>
                        <input className="textAuth" type='text' name="textboxLogin" id="login" placeholder="Логин" ></input>
                        <br />
                        <span id="auth_pass2">Пароль:</span>
                        <input className="textAuth" type='password' name="textboxPassword" id="password" placeholder="Пароль" ></input>
                    </div>
                    <div>
                        <input type="checkbox" name="multiVxod" id="multiVxod" />
                        <span id="span_multy" >Остаться в системе</span>
                    </div>
                    <div>
                        <button id='buttonVxod' name="buttonVxod" onClick={this.open_ok} props = {this.props.children}>Войти</button>

                    </div>
                </div>
            </div>
        );
    }

}
const  mapStateToProps = state =>{
    return {
        users: state.users
    };
};

const  mapDispatchToProps = dispatch =>{
    return {
        fetchData: url => dispatch(userFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAuth);
