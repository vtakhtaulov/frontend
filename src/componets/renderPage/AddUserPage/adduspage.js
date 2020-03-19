import React, { Component } from 'react';
import './addup.css';
//import PageFooter from '../componets/Footer/PageFooter.js';
import PageFooter from '../../../../src/componets/Footer/PageFooter';

import { Button } from 'react-bootstrap';

class ComponentAddUSPage extends Component {
    constructor(props) {
        super(props)
        this.adduser = this.adduser.bind(this)
        this.userlogo = this.userlogo.bind(this)
    }

    adduser() {

        let pas1 = document.getElementById("pas1").value;
        let pas2 = document.getElementById("pas2").value;
        let fio = document.getElementById("fio").value;
        let databd = document.getElementById("databd").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let login = document.getElementById("login").value;

        if (pas1 === pas2 && pas1 !== "") {
            if (fio !== "" && databd !== "" && email !== "" && phone !== "" && login !== "") {
                return (
                    alert("Заполните обязательные поля")
                );
            }
            else {
                return (
                    alert("Пользователь добавлен")
                );
            }
        }
        else {
            return (
                alert("Пароли не совпадают")
            );
        }

    }

    userlogo(){
        var logo = "https://img2.freepng.ru/20180418/sgw/kisspng-computer-icons-symbol-directory-clip-art-video-icon-5ad782e29c6945.7086997415240731866407.jpg";
        return logo;
    }
    render() {
        return (
            <div className="page">
                <PageFooter />
                <div className="formauth">
                    <div className="userlogo">
                       <img className = "userlogo" alt="Загрузить фотографию" src = {this.props.userlogo}></img>
                    </div>
                    <div className="containerAddUs">
                        <div><span>ФИО* </span> <input className="forminput" id="fio" type="text"></input></div>
                        <br />
                        <div><span>Дата рождения* </span> <input className="forminput" id="databd" type="text"></input></div>
                        <br />
                        <div><span>e-mail* </span> <input className="forminput" id="email" type="text"></input></div>
                        <br />
                        <div><span>Номер телефона* </span> <input className="forminput" id="phone" type="text"></input></div>
                        <br />
                        <div><span>Логин* </span> <input className="forminput" id="login" type="text"></input></div>
                        <br />
                        <div><span>Пароль* </span> <input className="forminput" id="pas1" type="text"></input></div>
                        <br />
                        <div><span>Подтвердите пароль* </span> <input className="forminput" id="pas2" type="text"></input></div>
                        <br />
                        <br />
                        <Button className="forminput" variant="dark" onClick={this.adduser}>Добавить пользователя</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentAddUSPage