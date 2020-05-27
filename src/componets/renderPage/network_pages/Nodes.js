import React, { Component } from 'react';
import PageFooter from '../../footer/PageFooter';
import {connect} from "react-redux";
import {getAllNodes} from "../../../action_creator/network_creator/nodes_creator";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Menubar} from "primereact/menubar";

class Nodes extends Component {
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
        this.nodes_table = this.nodes_table(this);
    }
    componentDidMount() {
        this.props.fetchNodes("http://localhost:8080/Nodes/NodesAll");
    }

    nodes_table(){
        return <DataTable value={this.props.nodes_info} responsive={true} scrollable={true}>
            <Column field="id_nodes" header="id коммутационного центра"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="name_nodes" header="Наименование коммутационного центра"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
            <Column field="usert_otv" header="Ответственный"
                    style={{textAlign:'center'}} sortable={true} filter={true} filterMatchMode="contains">></Column>
        </DataTable>
    }

    render() {
        return (
            <div>
                <PageFooter />
                <Menubar model={this.items} />
                {this.nodes_table}
            </div>
        );
    }
}

const  mapStateToProps  = state => {
    return {
        nodes_info: state.nodes_reduser.nodes_info
    };
};
const  mapDispatchToProps = dispatch =>{
    return {
        fetchNodes: url => dispatch(getAllNodes("all",url))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Nodes)