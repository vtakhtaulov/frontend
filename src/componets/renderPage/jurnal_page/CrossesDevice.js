import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {getAllCrossDevice} from "../../../controllers/journal_controllers/crossDevice_controller";

class CrossesDevice extends Component {
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
        this.crossDevice_table = this.crossDevice_table(this);
    }

    componentDidMount() {
        this.props.fetchAllCrossDevice("http://localhost:8080/CrossDevices/CrossDevicesAll");
    }

    crossDevice_table(){
        return <DataTable value={this.props.cross_device_info} responsive={true} scrollable={true}>
            <Column field="host_name_start" header="Hostname начального уст-ва"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="host_name_end" header="Hostname подключаемого устройства"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="id_network_journal" header="Запись в журнале ip-адресного пр-ва"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="description" header="Изменения"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="name_vlan" header="Наименование VLAN"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="info_crosses" header="Информация о подключении"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="user_otv" header="Пользователь создавший запись"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="date_reg" header="Дата регистрации"
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
                <Panel header="Журнал сетевых подключений телекоммуникационного оборудования">
                    {this.crossDevice_table}
                </Panel>
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        cross_device_info: state.crossDevice_reduser.cross_device_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllCrossDevice: url => dispatch(getAllCrossDevice("all",url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CrossesDevice)