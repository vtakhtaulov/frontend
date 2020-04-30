import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import { Network_pool_controller} from '../../../controllers/network_controllers/network_pool_controller.js';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';

import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class NetworkPool extends Component {
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
        this.NetworkPoolController = new Network_pool_controller();
    }

    componentDidMount() {
        this.NetworkPoolController.getAll().then(data => this.setState({ pool: data }));
        
        this.setState({
            visible: false,
            pool: {
                id_pool_address: null,
                name_pool: null,
                ip_addres_start: null,
                ip_addres_end: null,
                date_reg: null,
                date_old: null,
                user_old: null,
                user_reg: null
            }
        });
    }


    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Выделенные пулы сети">
                    <DataTable value={this.state.pool}>
                        <Column field="id_pool_address" header="id_pool_address"></Column>
                        <Column field="name_pool" header="Наименование"></Column>
                        <Column field="ip_addres_start" header="Начальный адрес"></Column>
                        <Column field="ip_addres_end" header="Конечный адрес"></Column>
                        <Column field="date_reg" header="Дата создания"></Column>
                        <Column field="user_reg" header="Создал"></Column>
                        <Column field="date_old" header="Дата изменения"></Column>
                        <Column field="user_old" header="Изменил"></Column>
                    </DataTable>
                </Panel>
                
            </div>
        );
    }

}