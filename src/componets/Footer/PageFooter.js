import 'bootstrap/dist/css/bootstrap.min.css';
import './pagef.css'
import React, { Component } from 'react';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap'

class Jurnal extends Component {
    render() {
        return (
            <NavDropdown title="Журналы">
                <NavDropdown.Item href="/jurnalip">Журнал ip-адресного пространста</NavDropdown.Item>
                <NavDropdown.Item href="/jurnalcross">Кросировачный журнал</NavDropdown.Item>
                <NavDropdown.Item href="/jurnalchenges">Журнал изменений</NavDropdown.Item>
            </NavDropdown>
        );
    }
}

class Address extends Component {
    render() {
        return (
            <Nav.Link href="/ipaddr">Расчет ip-адресного пространства</Nav.Link>
        );
    }
}

class Device extends Component {
    render() {
        return (
            <Nav.Link href="#">Конфигурация оборудования</Nav.Link>
        );
    }
}
class Topolog extends Component {
    render() {
        return (
            <Nav.Link href="#">Топология сети</Nav.Link>
        );
    }
}

class Adduser extends Component {
    render() {
        return (
            <NavDropdown title="Пользователи">
                <NavDropdown.Item href="/AllUser">Посмотреть информацию о пользователях</NavDropdown.Item>
                <NavDropdown.Item href="/adduser">Добавить пользователя</NavDropdown.Item>
            </NavDropdown>
        );
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeser: (new Date()).toLocaleString()
        }
        this.datetime()
    }
    datetime () {
        setInterval(() => {
            this.setState({ timeser: (new Date()).toLocaleString()});     
        }, 1000)
    }

    render() {
        return (
            <div>
                {this.state.timeser}
            </div>
        );
    }
}

class ElementFooter extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Jurnal></Jurnal>
                    <Topolog></Topolog>
                    <Address></Address>
                    <Device></Device>
                    <Adduser></Adduser>
                </Nav>
                <Nav>
                    <Nav.Link href="/userpage">На главную
                    <Clock></Clock>
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default class PageFut extends Component {
    render() {
        return (
            <div><ElementFooter />
            </div>
        );
    }
}
