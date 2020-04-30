import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import PageFooter from '../../footer/PageFooter';

import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {connect} from "react-redux";
import {getAllUser} from "../../../controllers/user_controllers/user_controller";

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
        this.state = {
            globalFilter: null,
            visible: false
        };

        this.table_users = this.table_users(this);
        this.dialog_show = this.dialog_show(this);
    }

    componentDidMount() {
        this.props.fetchAllUser("http://localhost:8080/User/AllUser");
    }

    table_users(){
        return <DataTable value={this.props.user_info} responsive={true} scrollable={true}>
            <Column field="user_id" header="user_id"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="last_name" header="Фамилия"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="first_name" header="Имя"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="middle_name" header="Отчество"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="email" header="Email"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="phone" header="Номер телефона"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="user_login" header="Логин"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="user_role" header="Роль"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
        </DataTable>
    }

    dialog_show(){
    return <Dialog header="Crear user" visible={this.state.visible}  style={{ width: '60%' }} modal={true} onHide={() => this.setState({ visible: false })}>
                    <span className="p-float-label">
                        <InputText id = "user_ligin" />
                        <label htmlFor="user_ligin">Логин</label>
                    </span>
        <span className="p-float-label">
                        <InputText id = "user_password"/>
                        <label htmlFor="user_password">Пароль</label>
                    </span>
        <span className="p-float-label">
                        <InputText id = "last_name" value={this.state.value} onChange={(e) => {return this.props.user_info.last_name}} />
                        <label htmlFor="last_name">Фамилия</label>
                    </span>
        <span className="p-float-label">
                        <InputText id = "ferst_name" value={this.state.value} onChange={(e) => {return this.props.user_info.ferst_name}} />
                        <label htmlFor="ferst_name">Имя</label>
                    </span>
        <span className="p-float-label">
                        <InputText id = "middle_name" value={this.state.value} onChange={(e) => {return this.props.user_info.middle_name}} />
                        <label htmlFor="middle_name">Отчество</label>
                    </span>
        <span className="p-float-label">
                        <InputText id = "email" value={this.state.value} />
                        <label htmlFor="email">Email</label>
                    </span>
        <span className="p-float-label">
                        <InputText id = "phone" value={this.state.value} />
                        <label htmlFor="phone">Телефон</label>
                    </span>
    </Dialog>
    }

    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items}/>
                <Panel header="Пользователи системы">
                    {this.table_users}
                </Panel>
                    {this.dialog_show}
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        user_info: state.user_reduser.user_info,
        user_auth_info: state.user_reduser.user_auth_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllUser: url => dispatch(getAllUser(url))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Users)



