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
import {getAllDHCP} from "../../../controllers/network_controllers/DHCP_controller";


class DHCP extends Component {
    constructor(props) {
        super(props);
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
        this.dhcp_table = this.dhcp_table(this);
    }

    componentDidMount() {
        this.props.fetchAllDhcp("http://localhost:8080/DHCP/DHCPAll");
    }

    dhcp_table(){
        return <DataTable value={this.props.dhcp_info} responsive={true} scrollable={true}>
            <Column field="id_DHСP_pool" header="id_DHСP_pool"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="address_start" header="Начальный адрес"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="address_end" header="Конечный адрес"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
        </DataTable>
    }

    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Выделенные DHCP пулы сети">
                    {this.dhcp_table}
                </Panel>
                
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        dhcp_info: state.dhcp_reduser.dhcp_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllDhcp: url => dispatch(getAllDHCP("all",url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(DHCP)