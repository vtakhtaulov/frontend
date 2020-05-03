import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';

import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {getAllTypeDevice} from "../../../controllers/device_controllers/type_device_controller";



class TypeDevices extends Component {
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
        this.typeDevice_table = this.typeDevice_table(this);
    }

    componentDidMount() {
        this.props.fetchAllTypeDevice("http://localhost:8080/TypeDevices/TypeDevicesAll");
    }

    typeDevice_table(){
        return <DataTable value={this.props.type_device_info} responsive={true} scrollable={true}>
            <Column field="id_type_dev" header="Код типа устройств"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="name_type_dev" header="Наименование типа устройства"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
        </DataTable>
    }
    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Справочник типов устройств">
                    {this.typeDevice_table}
                </Panel>
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        type_device_info: state.type_device_reduser.type_device_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllTypeDevice: url => dispatch(getAllTypeDevice(url))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(TypeDevices)