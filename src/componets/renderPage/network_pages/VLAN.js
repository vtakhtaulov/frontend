import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {connect} from "react-redux";
import {getAllVlan} from "../../../controllers/network_controllers/vlan_controller";
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";

class VLAN extends Component {
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
        this.vlan_table =this.vlan_table(this);
    }

    componentDidMount() {
        this.props.fetchAllVLAN("http://localhost:8080/Vlan/VlanAll");
    }

    vlan_table (){
        return <DataTable value={this.props.vlan_info} responsive={true} scrollable={true}>
            <Column field="id_vlan" header="Идентификатор"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="vlan_name" header="Наименование"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="vlan_number" header="Номер"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>

        </DataTable>
    }
    render() {
        return (
            <div>
                <PageFooter />
                <Menubar model={this.items} />
                <Panel header="VILAN">
                    {this.vlan_table}
                </Panel>
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        vlan_info: state.vlan_reduser.vlan_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllVLAN: url => dispatch(getAllVlan("all",url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(VLAN)