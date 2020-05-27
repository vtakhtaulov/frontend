import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {Panel} from "primereact/panel";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import {
    getAllTypeDevice,
    setTypeDevice, updateTypeDevice
} from "../../../action_creator/device_creator/type_device_creator";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {setStatusShowDialog} from "../../../action_creator/action_users_creator";

class TypeDevices extends Component {
    constructor(props) {
        super(props);
        this.state ={};
    }

    componentDidMount() {
        this.props.fetchAllTypeDevice("http://localhost:8080/TypeDevices/TypeDevicesAll");
    }

    typeDevice_table(){
        return <DataTable value= {this.props.type_device_info} responsive={true} scrollable={true}>
            <Column field="name_type_dev" header="Наименование типа устройства" autoLayout = {true}
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains"
                    body={(value) => {
                        if (this.props.updateVisible.visible === true && this.props.updateVisible.str === value.id_type_dev)
                        {return <div>
                                <span className="p-float-label">
                                    <InputText id = "update_name_type_dev" defaultValue={value.name_type_dev} style={{textAlign:'center'}} />
                                </span>
                        </div>
                        }
                        else{
                            return <div>
                                {value.name_type_dev}
                            </div>
                        }
                    }}></Column>
            <Column style={{width:'10%'}} field="id_devices" header="Действие" body={(value) => {
                if(value.id_type_dev!==0){
                    return <div>
                        <Button label={"Редактировать"} className="p-button-warning p-button-rounded" icon='pi pi-fw pi-pencil' onClick={() => {
                            if(this.props.updateVisible.visible === true){
                                const updateTypeDevice = {
                                    id_type_dev: Number(value.id_type_dev),
                                    name_type_dev: document.getElementById("update_name_type_dev").value
                                };
                                this.props.updateTypeDevice("http://localhost:8080/TypeDevices/UpdateTypeDevices/", Number(value.id_type_dev), updateTypeDevice)
                                this.props.visibleUpdate(false, null);
                            }
                            else {
                                this.props.visibleUpdate(true, value.id_type_dev);
                            }
                        }}></Button>
                    </div>
                }
                else {
                    return <Button label={"Добавить"} className="p-button-success p-button-rounded" icon='pi pi-fw pi-plus' onClick={() => {
                        if(this.props.updateVisible.visible === true){
                            const createTypeDevice = {
                                id_type_dev: 0,
                                name_type_dev: document.getElementById("update_name_type_dev").value
                            };
                            this.props.setTypeDevice("http://localhost:8080/TypeDevices/CreateTypeDevices",createTypeDevice);
                            this.props.visibleUpdate(false, null);
                        }
                        else {
                            this.props.visibleUpdate(true, value.id_type_dev);
                        }
                    }}></Button>
                }}}></Column>
        </DataTable>
    }
    render() {
        return (
            <div><PageFooter/>
                <Panel header="Справочник типов устройств">
                    {this.typeDevice_table(this)}
                </Panel>
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        type_device_info: state.type_device_reduser.type_device_info,
        deleteVisible: state.action_visible.deleteVisible.visible,
        updateVisible: state.action_visible.updateVisible
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchAllTypeDevice: url => dispatch(getAllTypeDevice(url)),
        visibleUpdate: (status,id) => dispatch(setStatusShowDialog("updateVisible",status,id)),
        setTypeDevice: (url, data) => dispatch(setTypeDevice("all",url, data)),
        updateTypeDevice: (url, id, data) => dispatch(updateTypeDevice("all",url, id, data))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(TypeDevices)