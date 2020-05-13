import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {connect} from "react-redux";
import {getAllRoom} from "../../../controllers/room_controllers/room_controller";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";



class Rooms extends Component {
    constructor(props) {
        super(props);
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
    }
    componentDidMount() {
        this.props.fetchRoom("http://localhost:8080/Room/RoomlAll");
    }

    room_table(){
        return <DataTable value={this.props.room_info} responsive={true} scrollable={true}>
            <Column field="id_room" header="id комнаты"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="name_room" header="Наименование комнаты"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="user_otv" header="Ответственный"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="type_room" header="Тип комнаты"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="nodes_name" header="Комутационный центр"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>

        </DataTable>
    }

    render() {
        return (
            <div>
                <PageFooter />
                {this.room_table(this)}
            </div>
        );
    }
}
const  mapStateToProps  = state => {
    return {
        room_info: state.room_reduser.room_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchRoom: url => dispatch(getAllRoom("all",url))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Rooms)