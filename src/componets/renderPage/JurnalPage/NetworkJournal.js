import React, { Component } from 'react';
import PageFooter from '../../Footer/PageFooter';
import {UserController} from "../../../Controller/user/UserController";
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

export default class NetworkJournal extends Component {
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
        // this.UserController.getAll().then(data => this.setState({ users: data }));

        this.setState({
            visible: false,
            networkJournal: {
                id_network: null,
                network: null,
                ip_address: null,
                DNS_zone: null,
                id_user_reg: null,
                user_reg: null,
                id_devices: null,
                devices: null,
                date_reg: null,
                id_user_old: null,
                user_old: null,
                date_old: null,
                actual: null,
            }
        });
    }
    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Журнал ip-адресного пространства">
                    <DataTable value={this.state.networkJournal}>
                        <Column field="network" header="Сеть"></Column>
                        <Column field="ip_address" header="ip-адресс"></Column>
                        <Column field="DNS_zone" header="DNS зона"></Column>
                        <Column field="devices" header="Hostname устройства"></Column>
                        <Column field="date_reg" header="Дата регистрации"></Column>
                        <Column field="user_old" header="Пользователь изменивший запись"></Column>
                        <Column field="date_old" header="Дата изменения"></Column>
                        <Column field="actual" header="Актуальность"></Column>
                    </DataTable>
                </Panel>
            </div>
        );
    }
    showSaveDialog() {
        this.setState({
            visible: true
        })
    }
}