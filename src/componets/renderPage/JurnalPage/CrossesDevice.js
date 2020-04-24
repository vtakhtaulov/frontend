import React, { Component } from 'react';
import PageFooter from '../../Footer/PageFooter';
import {UserController} from "../../../Controller/user/UserController";
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";



export default class CrossesDevice extends Component {
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
            crossesDevicesJournal: {
                Id_crossdevices: null,
                id_devices_first: null,
                host_name_start: null,
                id_devices_end: null,
                host_name_end: null,
                id_network_journal: null,
                description: null,
                id_vlan: null,
                name_vlan: null,
                id_crosses: null,
                info_crosses: null,
                id_user_otv: null,
                user_otv: null,
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
                <Panel header="Журнал сетевых подключений телекоммуникационного оборудования">
                    <DataTable value={this.state.crossesDevicesJournal}>
                        <Column field="host_name_start" header="Hostname начального уст-ва"></Column>
                        <Column field="host_name_end" header="Hostname подключаемого устройства"></Column>
                        <Column field="id_network_journal" header="Запись в журнале ip-адресного пр-ва"></Column>
                        <Column field="description" header="Изменения"></Column>
                        <Column field="name_vlan" header="Наименование VLAN"></Column>
                        <Column field="info_crosses" header="Информация о подключении"></Column>
                        <Column field="user_otv" header="Пользователь создавший запись"></Column>
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