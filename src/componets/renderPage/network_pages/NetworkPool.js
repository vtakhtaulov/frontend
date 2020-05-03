import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';

import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {connect} from "react-redux";
import {getAllNetworkPool} from "../../../controllers/network_controllers/network_pool_controller";

class NetworkPool extends Component {
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
        this.tableNetworkPool =this.tableNetworkPool(this);
    }

    componentDidMount() {
        this.props.fetchAllNetworkPool("http://localhost:8080/Pool/PoolAll");
    }
    tableNetworkPool(){
        return <DataTable value={this.props.all_network_pool} responsive={true} scrollable={true}>
            <Column field="id_pool_address" header="id_pool_address"
                 style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="name_pool" header="Наименование"
                 style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="ip_addres_start" header="Начальный адрес"
                 style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="ip_addres_end" header="Конечный адрес"
                 style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="date_reg" header="Дата создания"
                 style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="user_reg" header="Создал"
                 style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="date_old" header="Дата изменения"
                 style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="user_old" header="Изменил"
                 style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
        </DataTable>
    }

    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Выделенные пулы сети">
                    {this.tableNetworkPool}
                </Panel>
                
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        all_network_pool: state.networ_pool_reduser.all_network_pool
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllNetworkPool: url => dispatch(getAllNetworkPool(url))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(NetworkPool)