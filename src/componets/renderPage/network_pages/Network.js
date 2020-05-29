import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {Menubar} from "primereact/menubar";
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {getAllNetwork} from "../../../action_creator/network_creator/network_creator";
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {setStatusShowDialog} from "../../../action_creator/action_users_creator";
import {getDeviceLastSelect, getDeviceSelect} from "../../../action_creator/device_creator/device_creator";
import {getStatusSelect} from "../../../action_creator/status_creator";
import {getVlanSelect} from "../../../action_creator/network_creator/vlan_creator";
import {getCrossSelect} from "../../../action_creator/network_creator/crosses_creator";
import {getPoolSelect} from "../../../action_creator/network_creator/pool_creator";
import {getNetworkPoolSelect} from "../../../action_creator/network_creator/network_pool_creator";

class Network extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchAllNetwork("http://localhost:8080/Network/NetworkAll");
    }

    network_table() {
            return <DataTable value= {this.props.all_network} responsive={true} scrollable={true}>
                <Column field="pool_address" header="Пул сети" autoLayout = {true}
                        style={{textAlign:'center', size: 'auto'}} sortable={true} filter={true} filterMatchMode="contains"
                        body={(value) => {
                            if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_network)
                            {

                                const device_info = this.props.network_pool.map((index)=>{
                                    return {label: index.ip_addres_start +'-'+ index.ip_addres_end, value: index.id_pool_address, name: index.ip_addres_start +'-'+ index.ip_addres_end}
                                });

                                return <div>
                                    <Dropdown  value={[this.props.selectNetwork_pool.label]} options={device_info} editable ={true}
                                               id = "update_pool_address"  style={{textAlign:'center'}} filter={true}
                                               className={'p-dropdown'}
                                               onChange={(e)=>{
                                                   let label;
                                                   let value;
                                                   let data = this.props.network_pool;
                                                   for(let i = 0 ; i<= data.length; i++) {
                                                       if (data[i].id_pool_address === e.value) {
                                                           label = data[i].ip_addres_start +'-'+ data[i].ip_addres_end;
                                                           value = data[i].id_pool_address;
                                                           break;
                                                       }
                                                   }
                                                   this.props.NetworkPoolUpdateValue({label: label, value: value})
                                               }}
                                    />
                                </div>
                            }
                            else{
                                return <div>
                                    {value.pool_address}
                                </div>
                            }
                        }}></Column>

                <Column field="ip_address_network" header="ip-адресс сети" autoLayout = {true}
                        style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                        body={(value) => {
                            if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_network)
                            {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_ip_address_network" defaultValue={value.ip_address_network} style={{textAlign:'center'}} />
                                </span>
                            </div>
                            }
                            else{
                                return <div>
                                    {value.ip_address_network}
                                </div>
                            }
                        }}></Column>

                <Column field="networkMask" header="Маска" autoLayout = {true}
                        style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                        body={(value) => {
                            if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_network)
                            {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_networkMask" defaultValue={value.networkMask} style={{textAlign:'center'}} />
                                </span>
                            </div>
                            }
                            else{
                                return <div>
                                    {value.networkMask}
                                </div>
                            }
                        }}></Column>

                <Column field="defaultGeteway" header="Default Geteway" autoLayout = {true}
                        style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                        body={(value) => {
                            if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_network)
                            {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_defaultGeteway" defaultValue={value.defaultGeteway} style={{textAlign:'center'}} />
                                </span>
                            </div>
                            }
                            else{
                                return <div>
                                    {value.defaultGeteway}
                                </div>
                            }
                        }}></Column>

                <Column field="vlan" header="Наименование VLAN" autoLayout = {true}
                        style={{textAlign:'center', size: 'auto'}} sortable={true} filter={true} filterMatchMode="contains"
                        body={(value) => {
                            if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_network)
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
                                    {value.vlan}
                                </div>
                            }
                        }}></Column>

                <Column field="dhcp_pool" header="DHCP пул" autoLayout = {true}
                        style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                        body={(value) => {
                            if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_network)
                            {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_dhcp_pool" defaultValue={value.dhcp_pool} style={{textAlign:'center'}} />
                                </span>
                            </div>
                            }
                            else{
                                return <div>
                                    {value.dhcp_pool}
                                </div>
                            }
                        }}></Column>

                <Column field="user_reg" header="Пользователь создавший запись" autoLayout = {true}
                        style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                        body={(value) => {
                            return <div>
                                {value.user_reg}
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
                            return <div>
                                {value.user_old}
                            </div>
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
                            if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_network)
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
                    if(value.id_config!==-1){
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
                                    this.props.visibleUpdate(true, value.id_network);
                                    this.props.NetworkPoolUpdateValue({value: value.id_pool_address, label: value.name_pool});
                                    this.props.StatusUpdateValue({value: value.id_status, label: value.name_status});

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
                                this.props.visibleUpdate(true, value.id_network);
                                this.props.NetworkPoolUpdateValue({value: value.id_pool_address, label: value.name_pool});
                                this.props.StatusUpdateValue({value: value.id_status, label: value.name_status});
                            }
                        }}></Button>
                    }}}></Column>
            </DataTable>

    }
    render() {
        return (
            <div><PageFooter/>
                <Menubar model={this.items} />
                <Panel header="Сети">
                    {this.network_table(this)}
                </Panel>
            </div>
        );
    }
}

const  mapStateToProps  = state => {
    return {
        all_network: state.network_reduser.all_network,
        selectUserValue: state.user_reduser.selectUserValue,
        user_auth_info: state.user_reduser.user_auth_info,
        vlan_info: state.vlan_reduser.vlan_info,
        updateVisible: state.action_visible.updateVisible,
        selectStatus: state.status_reduser.selectStatus,
        status_action: state.status_reduser.status_action,
        network_pool: state.networ_pool_reduser.network_pool,
        selectNetwork_pool: state.networ_pool_reduser.selectNetwork_pool
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllNetwork: url => dispatch(getAllNetwork("all",url)),
        visibleUpdate: (status,id) => dispatch(setStatusShowDialog("updateVisible",status,id)),
        StatusUpdateValue: (data) => dispatch(getStatusSelect("selectStatusValue", data)),
        VlanUpdateValue: (data) => dispatch(getVlanSelect("selectVlanValue", data)),
        NetworkPoolUpdateValue: (data) => dispatch(getNetworkPoolSelect("selectNetwork_poolValue", data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Network)