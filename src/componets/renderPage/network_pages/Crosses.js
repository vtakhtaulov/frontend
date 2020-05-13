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
import {getAllCrosses} from "../../../controllers/network_controllers/crosses_controller";

class Crosses extends Component {
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
    }

    componentDidMount() {
        this.props.fetchAllCrosses("http://localhost:8080/Crosses/CrossesAll");

    }

    crosses_table(){
        return <DataTable value={this.props.crosses_info} responsive={true} scrollable={true}>
            <Column field="id_crosses_first" header="id_crosses_first"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="id_crosses_end" header="id_crosses_end"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="shkaf" header="Шках"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="slot" header="Слот подключения"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="port" header="Порт подключения"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
        </DataTable>
    }

    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Кроссировки">
                    {this.crosses_table(this)}
                </Panel>
            </div>
        );
    }
}

const  mapStateToProps  = state => {
    return {
        crosses_info: state.crosses_reduser.crosses_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllCrosses: url => dispatch( getAllCrosses("all",url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Crosses)