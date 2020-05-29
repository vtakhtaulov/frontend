import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';

import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {connect} from "react-redux";
import {getAllDHCP} from "../../../action_creator/network_creator/DHCP_creator";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import {Button} from "primereact/button";
import {setStatusShowDialog} from "../../../action_creator/action_users_creator";
import {getStatusSelect} from "../../../action_creator/status_creator";

class DHCP extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchAllDhcp("http://localhost:8080/DHCP/DHCPAll");
    }

    dhcp_table(){
        return <DataTable value= {this.props.dhcp_info}  responsive={true} scrollable={true}>
            <Column field="address_start" header="Начальный адрес" autoLayout = {true}
                    style={{textAlign:'center', width: '160px'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_dhcp_pool)
                        {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_address_start" defaultValue={value.address_start} style={{textAlign:'center'}} />
                                </span>
                        </div>
                        }
                        else{
                            return <div>
                                <label>{value.address_start}</label>
                            </div>
                        }
                    }}></Column>
            <Column field="address_end" header="Конечный адрес" autoLayout = {true}
                    style={{textAlign:'center', width: '160px'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_dhcp_pool)
                        {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_address_end" defaultValue={value.address_end} style={{textAlign:'center'}} />
                                </span>
                        </div>
                        }
                        else{
                            return <div>
                                <label>{value.address_end}</label>
                            </div>
                        }
                    }}></Column>
            <Column field="is_status.name_status" header="Статус"
                    style={{textAlign:'center', width: '60px'}} sortable={true} filter={true} filterPlaceholder={"Активна/Удалена"} filterField = {"Активна"} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_dhcp_pool)
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
                                {value.is_status.name_status}
                            </div>
                        }
                    }}></Column>

            <Column style={{width:'30px'}} field="id_devices" header="Действие" body={(value) => {
                if(value.Id_crossdevices!==-1){
                    return <div>
                        <Button className="p-button-warning p-button-rounded" icon='pi pi-fw pi-pencil' onClick={() => {
                            if(this.props.updateVisible.visible === true){
                                const updateDHCP = {
                                };
                                //this.props.updateCrossDevice("http://localhost:8080/CrossDevices/UpdateCrossDevices/", Number(value.id_crossdevices), updateCorossDev);
                                this.props.visibleUpdate(false, null);
                                console.log(updateDHCP);
                            }
                            else {
                                this.props.visibleUpdate(true, value.id_dhcp_pool);
                                this.props.StatusUpdateValue({value: value.id_status, label: value.name_status});
                            }
                        }}></Button>
                        <span> </span>
                        <Button className="p-button-rounded p-button-danger" icon='pi pi-fw pi-trash' onClick={()=>{
                            if(window.confirm("Вы уверены, что хотите удалить запись?")){
                                const deleteDHCP = {
                                };

                                //this.props.updateCrossDevice("http://localhost:8080/CrossDevices/DeleteCrossDevices/", value.id_crossdevices, deleteCorossDev);
                                console.log(deleteDHCP);
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
                            const createDHCP = {
                            };

                            console.log(createDHCP);
                            //this.props.setConfiguration("http://localhost:8080/Configuration/CreateConfiguration", createCorossDev);
                            this.props.visibleUpdate(false, null);
                        }
                        else {
                            this.props.visibleUpdate(true, value.id_dhcp_pool);
                            this.props.StatusUpdateValue({value: value.id_status, label: value.name_status});
                        }
                    }}></Button>
                }}}></Column>
        </DataTable>
    }

    render() {
        return (
            <div><PageFooter/>
                <Panel header="Выделенные DHCP пулы сети">
                    {this.dhcp_table(this)}
                </Panel>
                
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        dhcp_info: state.dhcp_reduser.dhcp_info,
        updateVisible: state.action_visible.updateVisible,
        selectStatus: state.status_reduser.selectStatus,
        status_action: state.status_reduser.status_action
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllDhcp: url => dispatch(getAllDHCP("all",url)),
        visibleUpdate: (status,id) => dispatch(setStatusShowDialog("updateVisible",status,id)),
        StatusUpdateValue: (data) => dispatch(getStatusSelect("selectStatusValue", data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(DHCP)