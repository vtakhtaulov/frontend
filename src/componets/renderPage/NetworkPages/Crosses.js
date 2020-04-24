import React, { Component } from 'react';
import PageFooter from '../../Footer/PageFooter';
import { CrossesController } from '../../../Controller/network/CrossesController.js';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';

import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default class Crosses extends Component {
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
        this.CrossesController = new CrossesController();
    }

    componentDidMount() {
        this.CrossesController.getAll().then(data => this.setState({ crosses: data }));
        
        this.setState({
            visible: false,
            crosses: {
                id_crosses_first: null,
                id_crosses_end: null,
                shkaf: null,
                slot: null,
                port: null
            }
        });
    }


    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Кроссировки">
                    <DataTable value={this.state.crosses}>
                        <Column field="id_crosses_first" header="id_crosses_first"></Column>
                        <Column field="id_crosses_end" header="id_crosses_end"></Column>
                        <Column field="shkaf" header="Шках"></Column>
                        <Column field="slot" header="Слот подключения"></Column>
                        <Column field="port" header="Порт подключения"></Column>
                    </DataTable>
                </Panel>
                
            </div>
        );
    }

}