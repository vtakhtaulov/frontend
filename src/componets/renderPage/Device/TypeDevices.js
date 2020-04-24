import React, { Component } from 'react';
import PageFooter from '../../Footer/PageFooter';
import {UserController} from "../../../Controller/user/UserController";
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";



export default class TypeDevices extends Component {
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
            type_devices: {
                id_type_dev: null,
                name_type_dev: null
            }
        });
    }
    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Справочник типов устройств">
                    <DataTable value={this.state.users}>
                        <Column field="id_type_dev" header="Код типа устройств"></Column>
                        <Column field="name_type_dev" header="наименование типа устройства"></Column>
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