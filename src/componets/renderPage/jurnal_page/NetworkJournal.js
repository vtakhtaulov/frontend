import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';

import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {getAllNetworkJournal} from "../../../action_creator/journal_creator/networkJoural_creator";

class NetworkJournal extends Component {
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
        this.networkJournal_table = this.networkJournal_table(this);
    }

    componentDidMount() {
        this.props.fetchAllNetworkJournal("http://localhost:8080/NetworkJournal/NetworkJournalAll");
    }

    networkJournal_table(){
        return <DataTable value={this.props.network_journal_info} responsive={true} scrollable={true}>
            <Column field="network" header="Сеть" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="ip_address" header="ip-адресс" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="DNS_zone" header="DNS зона" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="devices" header="Hostname устройства" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="date_reg" header="Дата регистрации" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="user_old" header="Пользователь изменивший запись" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="date_old" header="Дата изменения" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="actual" header="Актуальность" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
        </DataTable>
    }
    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Журнал ip-адресного пространства">
                    {this.networkJournal_table}
                </Panel>
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        network_journal_info: state.networkJournal_reduser.network_journal_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllNetworkJournal: url => dispatch(getAllNetworkJournal("all",url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(NetworkJournal)