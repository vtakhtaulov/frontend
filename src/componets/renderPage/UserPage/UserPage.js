import React, { Component } from 'react';
import PageFooter from '../../../../src/componets/Footer/PageFooter';
import "./user.css";
import FormAuth from "../AuthPage/Auth";
import {userFetchData} from "../../../Controller/user/UserController";
import {connect} from "react-redux";


class UserPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.users)
    }

    render() {
        return (
            <div>
                <PageFooter />
            <div className="blockuser">
                <div className="ConteinerUserLogo">
                    <p><img className="logoUser" alt="Аватар" src="https://android.w-dog.info/wallpapers/0/18/438954103727068/xameleon-rango-oboi-glaza-fon-prikoly-morda.jpg" /></p>
                </div>
                <div className="ConteinerUserInfo">
                    <div className="pole">

                    </div>
                </div>
            </div>
            </div>
        );
    }
}
const  mapStateToProps = state =>{
    return {
        users: state.users
    };
};

const  mapDispatchToProps = dispatch =>{
    return {
        fetchData: props => this.store.dispatch({type: "USERS_FETCH_DATA_SUCCESS", props})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
