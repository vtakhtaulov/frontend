import React, { Component } from 'react';
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
import {connect} from "react-redux";
import {getAllUser} from "../../../Controller/user/UserController";

class Users extends Component {
    constructor(props) {
        super(props);
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

        this.table_users = this.table_users(this);
    }

    componentDidMount() {
        this.props.fetchAllUser("http://localhost:8080/User/AllUser");
    }

    table_users(){
        return <DataTable value={this.props.user_info}>
            <Column field="user_id" header="user_id"
                    style={{textAlign:'center'}} sortable={true}></Column>
            <Column field="last_name" header="Фамилия"
                    style={{textAlign:'center'}} sortable={true}></Column>
            <Column field="first_name" header="Имя"
                    style={{textAlign:'center'}} sortable={true}></Column>
            <Column field="middle_name" header="Отчество"
                    style={{textAlign:'center'}} sortable={true}></Column>
            <Column field="email" header="Email"
                    style={{textAlign:'center'}} sortable={true}></Column>
            <Column field="phone" header="Номер телефона"
                    style={{textAlign:'center'}} sortable={true}></Column>
            <Column field="user_login" header="Логин"
                    style={{textAlign:'center'}} sortable={true}></Column>
            <Column field="user_role" header="Роль"
                    style={{textAlign:'center'}} sortable={true}></Column>
        </DataTable>
    }

    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items}/>
                <Panel header="Пользователи системы">
                    {this.table_users}
                </Panel>
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        user_info: state.userReduser.user_info,
        user_auth_info: state.userReduser.user_auth_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllUser: url => dispatch(getAllUser(url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Users)



