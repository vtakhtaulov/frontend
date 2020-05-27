import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {getAllCrossDevice} from "../../../action_creator/journal_creator/crossDevice_creator";
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {setStatusShowDialog} from "../../../action_creator/action_users_creator";
import {getDeviceLastSelect, getDeviceSelect} from "../../../action_creator/device_creator/device_creator";
import {getStatusSelect} from "../../../action_creator/status_creator";

class CrossesDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.fetchAllCrossDevice("http://localhost:8080/CrossDevices/CrossDevicesAll");
    }

    crossDevice_table(){
        return <DataTable value= {this.props.cross_device_info}  responsive={true} scrollable={true} style={{hight: '1000px'}}>
            <Column field="host_name_start" header="Hostname начального уст-ва" autoLayout = {true}
                    style={{textAlign:'center', width: 'auto'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.Id_crossdevices)
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
                                               this.props.DeviceUpdateValue({label: label, value: value})
                                           }}
                                />
                        }
                        else{
                            return <div>
                                {value.host_name_start}
                            </div>
                        }
                    }}></Column>

            <Column field="host_name_end" header="Hostname подключаемого устройства" autoLayout = {true}
                    style={{textAlign:'center', width: 'auto'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.Id_crossdevices)
                        {
                            const device_info = this.props.device_info.map((index)=>{
                                return {label: index.hostname, value: index.id_devices, name: index.hostname}
                            });

                            return <div>
                                <Dropdown  value={[this.props.selectDeviceLastValue.label]} options={device_info} editable ={true}
                                           id = "update_host_name_end"  style={{textAlign:'center'}} filter={true}
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
                                               this.props.LastDeviceUpdateValue({label: label, value: value})
                                           }}
                                />
                            </div>
                        }
                        else{
                            return <div>
                                {value.host_name_end}
                            </div>
                        }
                    }}></Column>

            <Column field="ip_address_network" header="Назначеный Ip-адрес" autoLayout = {true}
                    style={{textAlign:'center', width: '160px'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.Id_crossdevices)
                        {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_ip_address_network" defaultValue={value.ip_address_network} style={{textAlign:'center' , width: '120px'}} />
                                </span>
                        </div>
                        }
                        else{
                            return <div>
                                {value.ip_address_network}
                            </div>
                        }
                    }}></Column>

            <Column field="deference" header="Причина изменения" autoLayout = {true}
                    style={{textAlign:'center', width: '200px'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.Id_crossdevices)
                        {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_deference" defaultValue={value.deference} style={{textAlign:'center', width: '180px'}} />
                                </span>
                        </div>
                        }
                        else{
                            return <div>
                                {value.deference}
                            </div>
                        }
                    }}></Column>

            <Column field="name_vlan" header="Наименование VLAN" autoLayout = {true}
                    style={{textAlign:'center', width: '120px'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        return <div>
                            {value.name_vlan}
                        </div>
                    }}></Column>

            <Column field="info_crosses" header="Информация о подключении" autoLayout = {true}
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        return <div>
                            {value.info_crosses}
                        </div>
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
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.Id_crossdevices)
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
                                              this.props.StatusUpdateValue({label: label, value: value})
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
                                const updateConfiguration = {

                                };
                               // this.props.updateConfiguration("http://localhost:8080/Configuration/UpdateConfiguration/", Number(value.id_config), updateConfiguration)
                                //console.log(updateConfiguration);
                                this.props.visibleUpdate(false, null);
                            }
                            else {
                                this.props.visibleUpdate(true, value.Id_crossdevices);
                                this.props.DeviceUpdateValue({value: value.id_device, label: value.host_name_start});
                                this.props.LastDeviceUpdateValue({value: value.id_device, label: value.host_name_end});
                                this.props.StatusUpdateValue({value: value.id_status, label: value.name_status});

                            }
                        }}></Button>
                        <span> </span>
                        <Button className="p-button-rounded p-button-danger" icon='pi pi-fw pi-trash' onClick={()=>{
                            if(window.confirm("Вы уверены, что хотите удалить запись?")){
                                const deleteConfiguration = {

                                };
                                //this.props.updateConfiguration("http://localhost:8080/Configuration/DeleteConfiguration/", value.id_config, deleteConfiguration);
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
                            const createConfiguration = {

                            };
                            //this.props.setConfiguration("http://localhost:8080/Configuration/CreateConfiguration", createConfiguration);
                            this.props.visibleUpdate(false, null);
                        }
                        else {
                            this.props.visibleUpdate(true, value.Id_crossdevices);
                            this.props.DeviceUpdateValue({value: value.id_device, label: value.host_name_start});
                            this.props.LastDeviceUpdateValue({value: value.id_device, label: value.host_name_end});
                            this.props.StatusUpdateValue({value: value.id_status, label: value.name_status});
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
        user_auth_info: state.user_reduser.user_auth_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllCrossDevice: url => dispatch(getAllCrossDevice("all",url)),
        visibleUpdate: (status,id) => dispatch(setStatusShowDialog("updateVisible",status,id)),
        DeviceUpdateValue: (data) => dispatch(getDeviceSelect("selectDeviceValue", data)),
        LastDeviceUpdateValue: (data) => dispatch(getDeviceLastSelect("selectDeviceLastValue", data)),
        StatusUpdateValue: (data) => dispatch(getStatusSelect("selectStatusValue", data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CrossesDevice)