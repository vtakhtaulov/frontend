import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {getAllConfiguration} from "../../../controllers/journal_controllers/configuration_controller";


class ConfigurationDevices extends Component{
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
        this.configuration_table = this.configuration_table(this);
    }

    componentDidMount() {
        this.props.fetchAllConfiguration("http://localhost:8080/Configuration/ConfigurationAll");
    }

    configuration_table(){
        return  <DataTable value={this.props.configuration_info} responsive={true} scrollable={true}>
            <Column field="id_config" header="id конфигурации" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="host_name" header="Hostname устройства" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="config_first" header="Начальная конфигурация" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="config_last" header="Конфигурация после изменений" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="deference" header="Разница" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="user_reg" header="Пользователь создавший запись" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
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
                <Panel header="Журнал конфигурации телекоммуникационного оборудования">
                    {this.configuration_table}
                </Panel>
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        configuration_info: state.configuration_reduser.configuration_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllConfiguration: url => dispatch(getAllConfiguration("all",url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ConfigurationDevices)