import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {getAllDevice} from "../../../controllers/device_controllers/device_controller";

class Devices extends Component {
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

        this.table_devices = this.table_devices(this);
    }
    componentDidMount() {
        this.props.fetchAllDevice("http://localhost:8080/Devices/DevicesAll");
    }

    table_devices(){
        return <DataTable value={this.props.device_info} responsive={true} scrollable={true}>
            <Column field="id_devices" header="Код устройства"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="type_device" header="Тип устройства"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="hostname" header="Hostname"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="mac_address" header="MAC-адрес"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="countEthernetPort" header="Кол-во Ethernet портов"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="countOptPort" header="Кол-во портов под оптоволокно"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="user_otv" header="Ответственный"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
        </DataTable>
    }

    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Оборудование организации">
                    {this.table_devices}
                </Panel>
            </div>
        );
    }
}

const  mapStateToProps  = state => {
    return {
        device_info: state.device_reduser.device_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllDevice: url => dispatch(getAllDevice("all",url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Devices)