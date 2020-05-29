import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {getAllCrossDevice, updateCrossDevice} from "../../../action_creator/journal_creator/crossDevice_creator";
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {setStatusShowDialog} from "../../../action_creator/action_users_creator";
import {
    getDeviceLastSelect,
    getDeviceSelect
} from "../../../action_creator/device_creator/device_creator";
import {getStatusSelect} from "../../../action_creator/status_creator";
import {getVlanSelect} from "../../../action_creator/network_creator/vlan_creator";
import {getCrossSelect} from "../../../action_creator/network_creator/crosses_creator";
import {setSelectNetworkJournal} from "../../../action_creator/journal_creator/networkJoural_creator";

class CrossesDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.fetchAllCrossDevice("http://localhost:8080/CrossDevices/CrossDevicesAll");
    }

    crossDevice_table(){
        return <DataTable value= {this.props.cross_device_info}  responsive={true} scrollable={true}>
            <Column field="host_name_start" header="Hostname начального уст-ва" autoLayout = {true}
                    style={{textAlign:'center', width: 'auto'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_crossdevices)
                        {
                            const device_info = this.props.device_info.map((index)=>{
                                return {label: index.hostname, value: index.id_devices, name: index.hostname}
                            });

                            return <Dropdown  value={[this.props.selectDeviceValue.label]} options={device_info} editable ={true}
                                           id = "update_host_name_start"  style={{textAlign:'center'}} filter={true}
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
                                               this.props.DeviceUpdateValue({label: label, value: value});
                                           }}
                                />
                        }
                        else{
                            return <div>
                                <label id = "update_host_name_start" >{value.host_name_start}</label>
                            </div>
                        }
                    }}></Column>

            <Column field="host_name_end" header="Hostname подключаемого устройства" autoLayout = {true}
                    style={{textAlign:'center', width: 'auto'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={ (value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_crossdevices)
                        {
                            const last_device_info = this.props.device_info.map((index)=>{
                                return {label: index.hostname, value: index.id_devices, name: index.hostname}
                            });

                            return <div>
                                <Dropdown  value={[this.props.selectDeviceLastValue.label]} options={last_device_info} editable ={true}
                                           id = "update_host_name_end"  style={{textAlign:'center'}} filter={true}
                                           className={'p-dropdown'}
                                           onChange={(e) => {
                                               let label;
                                               let value;
                                               let data = this.props.device_info;
                                               for (let i = 0; i <= data.length; i++) {
                                                   if (data[i].id_devices === e.value) {
                                                       label = data[i].hostname;
                                                       value = data[i].id_devices;
                                                       break;
                                                   }
                                               }

                                               let labelNJ;
                                               let valueNJ;
                                               let dataNJ = this.props.network_journal_info;
                                               for (let i = 0; i <= dataNJ.length; i++) {
                                                   try {
                                                       if (dataNJ[i].id_devices === e.value) {
                                                           labelNJ = dataNJ[i].ip_address;
                                                           valueNJ = dataNJ[i].id_devices;
                                                           break;
                                                       }
                                                   } catch (e) {
                                                       labelNJ = "";
                                                       valueNJ = 0;
                                                   }
                                               }

                                               //document.getElementById("update_ip_address_network").innerHTML = "11111111";
                                                console.log(labelNJ, valueNJ);

                                               //this.props.UpdateSelectNetworkJournal({label: labelNJ, value: valueNJ});
                                               //console.log(dataNJ[0].id_devices);
                                               //this.props.LastDeviceUpdateValue({label: label, value: value})
                                           }}
                                />
                            </div>
                        }
                        else{
                            return <div>
                               <label id = "update_host_name_end" >{value.host_name_end}</label>
                            </div>
                        }
                    }}></Column>

            <Column field="ip_address_network" header="Назначеный Ip-адрес" autoLayout = {true}
                    style={{textAlign:'center', width: '160px'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === -1)
                        {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_ip_address_network" defaultValue={[this.props.selectNetwork_Journal.label]} style={{textAlign:'center', width:'120px'}} />
                                </span>
                        </div>
                        }
                        else{
                            return <div>
                                <label style={{width:'120px'}}>{value.ip_address_network}</label>
                            </div>
                        }
                    }}></Column>

            <Column field="description" header="Причина изменения" autoLayout = {true}
                    style={{textAlign:'center', width: '200px'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_crossdevices)
                        {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_description" defaultValue={value.description} style={{textAlign:'center', width: '180px'}} />
                                </span>
                        </div>
                        }
                        else{
                            return <div>
                                <label id = "update_description">{value.description}</label>
                            </div>
                        }
                    }}></Column>

            <Column field="name_vlan" header="Наименование VLAN" autoLayout = {true}
                    style={{textAlign:'center', width: '120px'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_crossdevices)
                        {
                            const vlan_info = this.props.vlan_info.map((index)=>{
                                return {label: index.vlan_name, value: index.id_vlan, name: index.vlan_name}
                            });

                            return <div>
                                <Dropdown  value={[this.props.selectVlan.label]} options={vlan_info} editable ={true}
                                           id = "update_vlan"  style={{textAlign:'center'}} filter={true}
                                           className={'p-dropdown'}
                                           onChange={(e)=>{
                                               let label;
                                               let value;
                                               let data = this.props.vlan_info;
                                               for(let i = 0 ; i<= data.length; i++) {
                                                   if (data[i].id_vlan === e.value) {
                                                       label = data[i].vlan_name;
                                                       value = data[i].id_vlan;
                                                       break;
                                                   }
                                               }
                                               this.props.VlanUpdateValue({label: label, value: value})
                                           }}
                                />
                            </div>
                        }
                        else{
                            return <div>
                                <label id = "update_vlan">{value.name_vlan}</label>
                            </div>
                        }
                    }}></Column>

            <Column field="info_crosses" header="Информация о подключении" autoLayout = {true}
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_crossdevices)
                        {
                            const crosses_info = this.props.crosses_info.map((index)=>{
                                return {label: index.infoCrosses, value: index.id_crosses_first, name: index.infoCrosses}
                            });

                            return <div>
                                <Dropdown  value={[this.props.selectCrosses.label]} options={crosses_info} editable ={true}
                                           id = "update_info_crosses"  style={{textAlign:'center'}} filter={true}
                                           className={'p-dropdown'}
                                           onChange={(e)=>{
                                               let label;
                                               let value;
                                               let data = this.props.crosses_info;
                                               for(let i = 0 ; i<= data.length; i++) {
                                                   if (data[i].id_crosses_first === e.value) {
                                                       label = data[i].infoCrosses;
                                                       value = data[i].id_crosses_first;
                                                       break;
                                                   }
                                               }
                                               this.props.CrossesUpdateValue({label: label, value: value})

                                           }}
                                />
                            </div>
                        }
                        else{
                            return <div>
                                <label id = "update_info_crosses" >{value.info_crosses}</label>
                            </div>
                        }
                    }}></Column>

            <Column field="user_otv" header="Пользователь создавший запись" autoLayout = {true}
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
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_crossdevices)
                        {
                            const Status = this.props.status_action.map((index)=>{
                                return {label: index.name_status, value: index.id_status, name: index.name_status}
                            });
                            return <div>
                                <Dropdown value={[this.props.selectStatus.label]} options={Status} filter={true}  editable ={true} placeholder={"Активна"}
                                          id = "update_is_status"  style={{textAlign:'center'}}
                                          className={'p-dropdown'}
                                          onChange={(e)=>{
                                              let label;
                                              let value;
                                              let data = this.props.status_action;
                                              for(let i = 0 ; i<= data.length; i++) {
                                                  if (data[i].id_status === e.value) {
                                                      label = data[i].name_status;
                                                      value = data[i].id_status;
                                                      break;
                                                  }
                                              }
                                              this.props.StatusUpdateValue({label: label, value: value});
                                          }}/>
                            </div>
                        }
                        else{
                            return <div>
                                {value.name_status}
                            </div>
                        }
                    }}></Column>

            <Column style={{width:'6%'}} field="id_devices" header="Действие" body={(value) => {
                if(value.Id_crossdevices!==-1){
                    return <div>
                        <Button className="p-button-warning p-button-rounded" icon='pi pi-fw pi-pencil' onClick={() => {
                            if(this.props.updateVisible.visible === true){
                                const updateCorossDev = {
                                    id_crossdevices: value.id_crossdevices,
                                    id_devices_first: this.props.selectDeviceValue.value,
                                    host_name_start: this.props.selectDeviceValue.label,
                                    id_devices_end: this.props.selectDeviceLastValue.value,
                                    host_name_end: this.props.selectDeviceLastValue.label,
                                    id_user_otv: value.id_user_otv,
                                    user_otv: value.user_otv,
                                    id_user_old: this.props.user_auth_info.user_id,
                                    user_old: this.props.user_auth_info.fioUser,
                                    id_network_journal: value.id_network_journal,
                                    ip_address_network: value.ip_address_network,
                                    description: document.getElementById("update_description").value,
                                    date_reg: value.date_reg,
                                    date_old: new Date().toDateString(),
                                    id_vlan: this.props.selectVlan.value ,
                                    name_vlan: this.props.selectVlan.label,
                                    id_crosses: this.props.selectCrosses.value,
                                    info_crosses: this.props.selectCrosses.label,
                                    id_status: this.props.selectStatus.value,
                                    name_status: this.props.selectStatus.label
                                };
                                //this.props.updateCrossDevice("http://localhost:8080/CrossDevices/UpdateCrossDevices/", Number(value.id_crossdevices), updateCorossDev);
                                this.props.visibleUpdate(false, null);
                            }
                            else {
                                this.props.visibleUpdate(true, value.id_crossdevices);
                                this.props.DeviceUpdateValue({value: value.id_devices_first, label: value.host_name_start});
                                this.props.LastDeviceUpdateValue({value: value.id_devices_end, label: value.host_name_end});
                                this.props.StatusUpdateValue({value: value.id_status, label: value.name_status});
                                this.props.VlanUpdateValue({label:  value.name_vlan, value: value.id_vlan});
                                this.props.CrossesUpdateValue({label: value.info_crosses , value: value.id_crosses});

                            }
                        }}></Button>
                        <span> </span>
                        <Button className="p-button-rounded p-button-danger" icon='pi pi-fw pi-trash' onClick={()=>{
                            if(window.confirm("Вы уверены, что хотите удалить запись?")){
                                const deleteCorossDev = {
                                    id_crossdevices: Number(value.id_crossdevices),
                                    id_devices_first: Number(value.id_devices_first),
                                    host_name_start: value.host_name_start,
                                    id_devices_end: Number(value.id_devices_end),
                                    host_name_end: value.host_name_end,
                                    id_user_otv: Number(value.id_user_otv),
                                    user_otv: value.user_otv,
                                    id_user_old: Number(this.props.user_auth_info.user_id),
                                    user_old: this.props.user_auth_info.fioUser,
                                    id_network_journal: Number(value.id_network_journal),
                                    ip_address_network: value.ip_address_network,
                                    description: value.description,
                                    date_reg: value.date_reg,
                                    date_old: new Date().toISOString(),
                                    id_vlan: Number(value.id_vlan),
                                    name_vlan: value.name_vlan,
                                    id_crosses: Number(value.id_crosses),
                                    info_crosses: value.info_crosses,
                                    id_status: Number(value.id_status),
                                    name_status: value.name_status
                                };

                                //this.props.updateCrossDevice("http://localhost:8080/CrossDevices/DeleteCrossDevices/", value.id_crossdevices, deleteCorossDev);
                            }
                            else{
                            }
                        }}>
                        </Button>
                    </div>
                }
                else {
                    return <Button className="p-button-success p-button-rounded" icon='pi pi-fw pi-plus' onClick={() => {
                        if(this.props.updateVisible.visible === true){
                            const createCorossDev = {
                                id_crossdevices: value.id_crossdevices,
                                id_devices_first: this.props.selectDeviceValue.value,
                                host_name_start: this.props.selectDeviceValue.label,
                                id_devices_end: this.props.selectDeviceLastValue.value,
                                host_name_end: this.props.selectDeviceLastValue.label,
                                id_user_otv: this.props.user_auth_info.user_id,
                                user_otv: this.props.user_auth_info.fioUser,
                                id_user_old: 0,
                                user_old: "",
                                id_network_journal: value.id_network_journal,
                                ip_address_network: value.ip_address_network,
                                description: document.getElementById("update_description").value,
                                date_reg: new Date().toDateString(),
                                date_old: "",
                                id_vlan: this.props.selectVlan.value ,
                                name_vlan: this.props.selectVlan.label,
                                id_crosses: this.props.selectCrosses.value,
                                info_crosses: this.props.selectCrosses.label,
                                id_status: this.props.selectStatus.value,
                                name_status: this.props.selectStatus.label
                            };

                            console.log(createCorossDev);
                            //this.props.setConfiguration("http://localhost:8080/Configuration/CreateConfiguration", createCorossDev);
                            this.props.visibleUpdate(false, null);
                        }
                        else {
                            this.props.visibleUpdate(true, value.id_crossdevices);
                            this.props.DeviceUpdateValue({value: value.id_devices_first, label: value.host_name_start});
                            this.props.LastDeviceUpdateValue({value: value.id_devices_end, label: value.host_name_end});
                            this.props.StatusUpdateValue({value: value.id_status, label: value.name_status});
                            this.props.VlanUpdateValue({label:  value.name_vlan, value: value.id_vlan});
                            this.props.CrossesUpdateValue({label: value.info_crosses , value: value.id_crosses});
                        }
                    }}></Button>
                }}}></Column>
        </DataTable>
    }
    render() {
        return (
            <div><PageFooter/>
                <Panel header="Журнал сетевых подключений телекоммуникационного оборудования">
                    {this.crossDevice_table(this)}
                </Panel>
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        cross_device_info: state.crossDevice_reduser.cross_device_info,
        device_info: state.device_reduser.device_info,
        updateVisible: state.action_visible.updateVisible,
        selectStatus: state.status_reduser.selectStatus,
        status_action: state.status_reduser.status_action,
        selectDeviceValue: state.device_reduser.selectDeviceValue,
        selectDeviceLastValue: state.device_reduser.selectDeviceLastValue,
        selectUserValue: state.user_reduser.selectUserValue,
        user_auth_info: state.user_reduser.user_auth_info,
        vlan_info: state.vlan_reduser.vlan_info,
        crosses_info: state.crosses_reduser.crosses_info,
        selectVlan: state.vlan_reduser.selectVlan,
        selectCrosses: state.crosses_reduser.selectCrosses,
        selectNetwork_Journal: state.networkJournal_reduser.selectNetwork_Journal,
        network_journal_info:state.networkJournal_reduser.network_journal_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllCrossDevice: url => dispatch(getAllCrossDevice("all",url)),
        visibleUpdate: (status,id) => dispatch(setStatusShowDialog("updateVisible",status,id)),
        DeviceUpdateValue: (data) => dispatch(getDeviceSelect("selectDeviceValue", data)),
        LastDeviceUpdateValue: (data) => dispatch(getDeviceLastSelect("selectDeviceLastValue", data)),
        StatusUpdateValue: (data) => dispatch(getStatusSelect("selectStatusValue", data)),
        VlanUpdateValue: (data) => dispatch(getVlanSelect("selectVlanValue", data)),
        CrossesUpdateValue: (data) => dispatch(getCrossSelect("selectCrossesValue", data)),
        updateCrossDevice: (url, id, data) => dispatch(updateCrossDevice("all",url, id, data)),
        UpdateSelectNetworkJournal: (data) => dispatch(setSelectNetworkJournal("selectNetwork_JournalValue", data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CrossesDevice)