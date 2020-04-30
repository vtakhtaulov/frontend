import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import { DHCP_controller } from '../../../controllers/network_controllers/DHCP_controller.js';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';

import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default class DHCP extends Component {
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
        this.DHCPController = new DHCP_controller();
    }

    componentDidMount() {
        this.DHCPController.getAll().then(data => this.setState({ dhcp: data }));
        
        this.setState({
            visible: false,
            dhcp: {
                id_DHСP_pool: null,
                address_start: null,
                address_end: null
            }
        });
    }


    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Выделенные DHCP пулы сети">
                    <DataTable value={this.state.dhcp}>
                        <Column field="id_DHСP_pool" header="id_DHСP_pool"></Column>
                        <Column field="address_start" header="Начальный адрес"></Column>
                        <Column field="address_end" header="Конечный адрес"></Column>
                    </DataTable>
                </Panel>
                
            </div>
        );
    }

}