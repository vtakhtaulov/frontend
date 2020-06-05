import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';

import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {getAllNetworkJournal} from "../../../action_creator/journal_creator/networkJoural_creator";
import {Button} from "primereact/button";
import {setStatusShowDialog} from "../../../action_creator/action_users_creator";
import {addNewLine} from "../../../action_creator/journal_creator/configuration_creator";
import {Dropdown} from "primereact/dropdown";
import {getDeviceSelect} from "../../../action_creator/device_creator/device_creator";

class NetworkJournal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchAllNetworkJournal("http://localhost:8080/NetworkJournal/NetworkJournalAll");
    }

    networkJournal_table(){
        return <DataTable value={this.props.network_journal_info} responsive={true} scrollable={true}>
            <Column field="network" header="Сеть" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="ip_address" header="ip-адресс" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>
            <Column field="DNS_zone" header="DNS зона" style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"></Column>

            <Column field="hostname" header="Hostname устройства" autoLayout = {true}
                    style={{textAlign:'center', size: 'auto'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_config)
                        {

                            const device_info = this.props.device_info.map((index)=>{
                                return {label: index.hostname, value: index.id_devices, name: index.hostname}
                            });

                            return <div>
                                <Dropdown  value={[this.props.selectDeviceValue.label]} options={device_info} editable ={true}
                                           id = "update_host_name"  style={{textAlign:'center'}} filter={true}
                                           className={'p-dropdown'}
                                           onChange={(e)=>{
                                               let label;
                                               let value;
                                               let data = this.props.device_info;
                                               for(let i = 0 ; i<= data.length; i++) {
                                                   if (data[i].id_devices === e.value) {
                                                       label = data[i].hostname;
                                                       value = data[i].id_devices;
                                                       break;
                                                   }
                                               }
                                               this.props.DeviceUpdateValue({label: label, value: value})
                                           }}
                                />
                            </div>
                        }
                        else{
                            return <div>
                                {value.hostname}
                            </div>
                        }
                    }}></Column>

            <Column field="user_reg" header="Пользователь создавший запись" autoLayout = {true}
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        return <div>
                            {value.user_otv}
                        </div>
                    }}></Column>

            <Column field="date_reg" header="Дата регистрации" autoLayout = {true}
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        return <div>
                            {value.date_reg}
                        </div>
                    }}></Column>

            <Column field="user_old" header="Пользователь изменивший запись" autoLayout = {true}
                    style={{textAlign:'center', size: 'auto'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if(value.id_user_old===0){
                            return <div>
                            </div>
                        }else{
                            return <div>
                                {value.user_old}
                            </div>}
                    }}></Column>

            <Column field="date_old" header="Дата изменения" autoLayout = {true}
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        return <div>
                            {value.date_old}
                        </div>
                    }}></Column>

            <Column field="name_status" header="Статус" autoLayout = {true}
                    style={{textAlign:'center'}} sortable={true} filter={true} filterPlaceholder={"Активна/Удалена"} filterField = {"Активна"} filterMatchMode="contains"
                    body={(value) => {
                        return <div>
                            {value.name_status}
                        </div>
                    }}></Column>

            <Column style={{width:'8%'}} field="id_network_journal" header="Действие" body={(value) => {
                if(value.id_network_journal!==-1){
                    return <div><center>
                        <Button className="p-button-warning p-button-rounded" icon='pi pi-fw pi-pencil' onClick={() => {
                            if(this.props.updateVisible.visible === true){
                                const updateNetworkJournalInfo = {

                                };
                                let firstNetworkJournalInfo = {

                                };
                                if(updateNetworkJournalInfo.value === firstNetworkJournalInfo.value){
                                    alert("Информация не изменилась!");
                                    this.props.visibleUpdate(false, null);
                                }else {
                                    //this.props.updateConfiguration("http://localhost:8080/Configuration/UpdateConfiguration/", Number(value.id_network_journal), updateNetworkInfo);
                                    this.props.visibleUpdate(false, null);
                                }
                            }
                            else {
                                this.props.visibleUpdate(true, value.id_network_journal);
                                //this.props.DeviceUpdateValue({value: value.id_device, label: value.host_name});
                                //this.props.StatusUpdateValue({value: value.id_status, label: value.name_status});

                            }
                        }}></Button>
                        <span> </span>
                        <Button className="p-button-rounded p-button-danger" icon='pi pi-fw pi-trash' onClick={()=>{
                            if(window.confirm("Вы уверены, что хотите удалить запись?")){
                                const deleteConfiguration = {

                                };
                               // this.props.updateConfiguration("http://localhost:8080/Configuration/DeleteConfiguration/", value.id_config, deleteConfiguration);
                            }
                            else{
                            }
                        }}>
                        </Button>
                    </center>
                    </div>
                }
                else {
                    return <div><center><Button className="p-button-success p-button-rounded" icon='pi pi-fw pi-plus' onClick={() => {
                        if(this.props.updateVisible.visible === true){
                            const createNetworkJournal = {

                            };
                           // this.props.setConfiguration("http://localhost:8080/Configuration/CreateConfiguration", createConfiguration);
                            this.props.visibleUpdate(false, null);
                        }
                        else {
                            this.props.visibleUpdate(true, value.id_network_journal);
                            //this.props.DeviceUpdateValue({value: value.id_device, label: value.host_name});
                            //this.props.StatusUpdateValue({value: value.id_status, label: value.name_status});
                        }
                    }}></Button>
                        <span> </span>
                        <Button className="p-button-rounded p-button-danger" icon='pi pi-fw pi-minus' onClick={() => {
                            this.props.deleteNewLine(this.props.network_journal_info);
                            this.props.visibleUpdate(false, null);
                        }}>
                        </Button>
                    </center>
                    </div>
                }}}></Column>
        </DataTable>
    }

    addNewLine(){
        return <Button  style={{width:'8%'}} label={"Добавить"} className="p-button-secondary p-button-severities" icon='pi pi-fw pi-plus' onClick={() => {
            if(this.props.updateVisible.str === -1){
            }
            else {
                this.props.addNewLine(this.props.network_journal_info);
                this.props.visibleUpdate(true, -1);
            }
        }}></Button>
    }

    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Журнал ip-адресного пространства" />
                    {this.networkJournal_table(this)}
                <div align={'right'}>
                    {this.addNewLine(this)}
                </div>
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        network_journal_info: state.networkJournal_reduser.network_journal_info,
        updateVisible: state.action_visible.updateVisible,
        auth_user_info: state.user_reduser.auth_user_info,
        device_info: state.device_reduser.device_info,
        selectDeviceValue: state.device_reduser.selectDeviceValue
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllNetworkJournal: url => dispatch(getAllNetworkJournal("all",url)),
        visibleUpdate: (status,id) => dispatch(setStatusShowDialog("updateVisible",status,id)),
        addNewLine: (data) => dispatch(addNewLine("addNewLine", data)),
        deleteNewLine: (data) => dispatch(addNewLine("deleteNewLine", data)),
        DeviceUpdateValue: (data) => dispatch(getDeviceSelect("selectDeviceValue", data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(NetworkJournal)