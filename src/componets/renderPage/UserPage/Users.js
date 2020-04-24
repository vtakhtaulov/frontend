import React, { Component } from 'react';
import { UserController } from '../../../Controller/user/UserController.js';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import PageFooter from '../../Footer/PageFooter';

import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class Users extends Component {
    constructor() {
        super();
        this.state = {};
        this.items = [
            {
                label: 'Добавить',
                icon: 'pi pi-fw pi-plus',
                command: () => { this.showSaveDialog()}
            },
            {
                label: 'Изменить',
                icon: 'pi pi-fw pi-pencil',
                command: () => { alert('Сохранено!') }
            },
            {
                label: 'Удалить',
                icon: 'pi pi-fw pi-trash',
                command: () => { alert('Удалено!') }
            }
        ];
        this.UserController = new UserController();
    }

    componentDidMount() {
        this.UserController.getAll().then(data => this.setState({ users: data }));
        
        this.setState({
            visible: false,
            user: {
                user_id: null,
                familyUser: null,
                nameUser: null,
                otUser: null,
                email: null,
                phone: null,
                userLogin: null,
                userPassword: null
            }
        });
    }
    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Пользователи системы">
                    <DataTable value={this.state.users}>
                        <Column field="user_id" header="user_id"></Column>
                        <Column field="last_name" header="Фамилия"></Column>
                        <Column field="first_name" header="Имя"></Column>
                        <Column field="middle_name" header="Отчество"></Column>
                        <Column field="email" header="Email"></Column>
                        <Column field="phone" header="Номер телефона"></Column>
                        <Column field="user_login" header="Логин"></Column>
                        <Column field="user_role" header="Роль"></Column>
                    </DataTable>
                </Panel>
                <Dialog header="Crear user" visible={this.state.visible}  style={{ width: '60%' }} modal={true} onHide={() => this.setState({ visible: false })}>
                    <span className="p-float-label">
                        <InputText id = "userLogin" />
                        <label htmlFor="userLogin">Логин</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id = "userPassword"/>
                        <label htmlFor="userPassword">Пароль</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id = "familyUser" value={this.state.value} onChange={(e) => this.setState({
                            listuser : {
                                
                            }
                        })} />
                        <label htmlFor="familyUser">Фамилия</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id = "nameUser" value={this.state.value} onChange={(e) => this.setState(this.state.users.nameUser)} />
                        <label htmlFor="nameUser">Имя</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id = "otUser" value={this.state.value} onChange={(e) => this.setState(this.state.users.otUser)} />
                        <label htmlFor="otUser">Отчество</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id = "email" value={this.state.value} onChange={(e) => this.setState(this.state.users.email)} />
                        <label htmlFor="email">Email</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id = "phone" value={this.state.value} onChange={(e) => this.setState(this.state.users.phone)} />
                        <label htmlFor="phone">Телефон</label>
                    </span>

                </Dialog>
            </div>
        );
    }
    showSaveDialog() {
        this.setState({
            visible: true
        })
    }
}





