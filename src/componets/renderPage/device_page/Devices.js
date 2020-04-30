import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {User_controller} from "../../../controllers/user_controllers/user_controller";
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

export default class Devices extends Component {
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
        this.UserController = new User_controller();
    }

    componentDidMount() {
       // this.User_controller.getAll().then(data => this.setState({ users_reduser: data }));

        this.setState({
            visible: false,
            devices: {
                id_devices: null,
                id_type_devices: null,
                type_device: null,
                id_user_otv: null,
                user_otv: null,
                hostname: null,
                mac_address: null,
                id_room: null,
                room: null,
                id_props_port: null,
                countOptPort: null,
                countEthernetPort: null
            }
        });
    }
    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Оборудование организации">
                    <DataTable value={this.state.users}>
                        <Column field="id_devices" header="Код устройства"></Column>
                        <Column field="type_device" header="Тип устройства"></Column>
                        <Column field="hostname" header="Hostname"></Column>
                        <Column field="mac_address" header="MAC-адрес"></Column>
                        <Column field="countEthernetPort" header="Кол-во Ethernet портов"></Column>
                        <Column field="countOptPort" header="Кол-во портов под оптоволокно"></Column>
                        <Column field="user_otv" header="Ответственный"></Column>
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