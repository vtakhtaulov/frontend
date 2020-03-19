
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Table.css'

export default class TableCrossJurnal extends Component {
    render() {
        return (
        <div className = 'crostaburnal'>
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th className = 'ssss'>№ строки</th>
                    <th>Мак Адрес</th>
                    <th>ip-адрес</th>
                    <th>Пользователь</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>222-22-22-ss</td>
                    <td>192.168.1.2</td>
                    <td>takhtaulov </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>34hg-56tr-43-yy</td>
                    <td>192.168.4.5</td>
                    <td>takhtaulov</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>34hg-56tr-43-yy</td>
                    <td>192.168.4.5</td>
                    <td>takhtaulov</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>34hg-56tr-43-yy</td>
                    <td>192.168.4.5</td>
                    <td>takhtaulov</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>34hg-56tr-43-yy</td>
                    <td>192.168.4.5</td>
                    <td>takhtaulov</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>34hg-56tr-43-yy</td>
                    <td>192.168.4.5</td>
                    <td>takhtaulov</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>34hg-56tr-43-yy</td>
                    <td>192.168.4.5</td>
                    <td>takhtaulov</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>34hg-56tr-43-yy</td>
                    <td>192.168.4.5</td>
                    <td>takhtaulov</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>34hg-56tr-43-yy</td>
                    <td>192.168.4.5</td>
                    <td>takhtaulov</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>34hg-56tr-43-yy</td>
                    <td>192.168.4.5</td>
                    <td>takhtaulov</td>
                </tr>
                
            </tbody>
        </Table>
        </div>
        );
    }
}
