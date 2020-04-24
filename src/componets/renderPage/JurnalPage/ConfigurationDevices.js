import React, { Component } from 'react';
import PageFooter from '../../Footer/PageFooter';
import {UserController} from "../../../Controller/user/UserController";
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


export default class ConfigurationDevices extends Component{
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
            configurationJournak: {
                id_config: null,
                id_divice: null,
                host_name: null,
                config_first: null,
                config_last: null,
                deference: null,
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
                <Panel header="Журнал конфигурации телекоммуникационного оборудования">
                    <DataTable value={this.state.configurationJournak}>
                        <Column field="id_config" header="id конфигурации"></Column>
                        <Column field="host_name" header="Hostname устройства"></Column>
                        <Column field="config_first" header="Начальная конфигурация"></Column>
                        <Column field="config_last" header="Конфигурация после изменений"></Column>
                        <Column field="deference" header="Разница"></Column>
                        <Column field="user_reg" header="Пользователь создавший запись"></Column>
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