import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {getAllNetwork} from "../../../action_creator/network_creator/network_creator";

class Network extends Component {
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
        this.network_table = this.network_table(this);
    }

    componentDidMount() {
        this.props.fetchAllNetwork("http://localhost:8080/Network/NetworkAll");
    }

    network_table() {
        return <DataTable value={this.props.all_network} responsive={true} scrollable={true}>
            <Column field="pool_address" header="Пул сети"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="ip_address_network" header="ip-адресс сети"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="networkMask" header="Маска"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="defaultGeteway" header="Default Geteway"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="vlan" header="Наименование VLAV"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="dhcp_pool" header="DHCP пул"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="number_mstp" header="Номер MSTP"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="user_reg" header="Пользователь создавший запись"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="date_reg" header="Дата создания"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="user_old" header="Пользователь изменивший запись"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="date_old" header="Дата изменения"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="actual" header="Актуальность"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
        </DataTable>
    }
    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Сети">
                    {this.network_table}
                </Panel>
            </div>
        );
    }
}

const  mapStateToProps  = state => {
    return {
        all_network: state.network_reduser.all_network
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllNetwork: url => dispatch(getAllNetwork("all",url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Network)