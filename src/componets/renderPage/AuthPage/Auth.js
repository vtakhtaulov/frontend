import React, { Component } from 'react';
import './Auth.css';

class FormAuth extends Component {

    constructor(props) {
        super(props)
        this.open_ok = this.open_ok.bind(this)
    }
    open_ok() {
        let t1 = document.getElementById("login").value; //получить значение из поля по ид
        let t2 = document.getElementById("password").value;
        if (t1 === "admin" && t2 === "admin") {
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
                        <button id='buttonVxod' name="buttonVxod" onClick={this.open_ok}>Войти</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default FormAuth;
