import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";



export default class Network extends Component {
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
    }

    componentDidMount() {
        // this.User_controller.getAll().then(data => this.setState({ users_reduser: data }));

        this.setState({
            visible: false,
            networkJournal: {
                id_network: null,
                id_pool_address: null,
                pool_address: null,
                ip_address_network: null,
                networkMask: null,
                defaultGeteway: null,
                id_vlan: null,
                vlan: null,
                id_dhcp_pool: null,
                dhcp_pool: null,
                number_mstp: null,
                id_user_reg: null,
                user_reg: null,
                id_user_old: null,
                user_old: null,
                date_reg: null,
                date_old: null,
                actual: null
            }
        });
    }
    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Сети">
                    <DataTable value={this.state.networkJournal}>
                        <Column field="pool_address" header="Пул сети"></Column>
                        <Column field="ip_address_network" header="ip-адресс сети"></Column>
                        <Column field="networkMask" header="Маска"></Column>
                        <Column field="defaultGeteway" header="Default Geteway"></Column>
                        <Column field="vlan" header="Наименование VLAV"></Column>
                        <Column field="dhcp_pool" header="DHCP пул"></Column>
                        <Column field="number_mstp" header="Номер MSTP"></Column>
                        <Column field="user_reg" header="Пользователь создавший запись"></Column>
                        <Column field="date_reg" header="Дата создания"></Column>
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