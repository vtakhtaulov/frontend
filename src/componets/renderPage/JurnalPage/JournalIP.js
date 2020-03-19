import React, { Component } from 'react';
//import PageFooter from 'D:/Diplom/front/frontend/src/componets/Footer/PageFooter.js';
import PageFooter from '../../Footer/PageFooter';
import "./Jurnal.css";
import TableJurnalIP from '../../Tables/TableJurnalIP';


export default class JurnalIP extends Component {
    render() {
        return (
            <div>
                <PageFooter />
                <TableJurnalIP />
            </div>
        );
    }

}