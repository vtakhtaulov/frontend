import React, { Component } from 'react';
//import PageFooter from 'D:/Diplom/front/frontend/src/componets/Footer/PageFooter.js';
import PageFooter from '../../Footer/PageFooter';
//import TableCrossJurnal from 'D:/Diplom/front/frontend/src/componets/Tables/TableCrossJurnal.js';
import TableCrossJurnal from '../../Tables/TableCrossJurnal.js';



export default class JurnalCross extends Component {
    render() {
        return (
            <div>
                <PageFooter />
                <TableCrossJurnal />
            </div>
        );
    }

}