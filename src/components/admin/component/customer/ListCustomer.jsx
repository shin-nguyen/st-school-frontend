import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCustomers } from '../../../../services/admin-service'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFilePdf, faFileCsv } from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from '../../../../constants/SystemConstants'
import { Route } from "react-router-dom";

import ListCustomerComponent from "./ListCustomerComponent";

const ListCustomer = () => {
    const dispatch = useDispatch()
    const customers = useSelector(state => state.admin.users)

    useEffect(() => {
        dispatch(fetchAllCustomers());
    }, [dispatch]);

    const itemsPerPage = 10;
    const searchByData = [
        { label: 'Name', value: 'lastName' },
        { label: 'Birthday', value: 'birthday' },
        { label: 'Email', value: 'email' },
        { label: 'Phone', value: 'phone' },
        { label: 'Address', value: 'address' },

    ];

    const tableHead = [
        '',
        'Name',
        // 'Birthday',
        'Email',
        'Phone',
        'Address',
        '',
    ]


    // const renderHead = (item, index) => <th key={index}>{item}</th>

    // const renderBody = (item, index) => (
    //     <tr key={index}>
    //         <td>{index + 1}</td>
    //         <td>{item.firstName} {item.lastName}</td>
    //         <td>{item.birthday}</td>
    //         <td>{item.email}</td>
    //         <td>{item.phone}</td>
    //         <td>{item.address}</td>
    //         <td>
    //             <Link to={'customer/' + item.id + '/view'}>
    //                 <button className="btn-a btn btn-success mr-10">View</button>
    //             </Link>
    //         </td>
    //     </tr>
    // )

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card-table">
                <h3 className="title">Customer List</h3>
                <div className="card-table-header text-right">
                    <a className="btn btn-success mr-20"
                        href={API_BASE_URL + '/users/export/excel'}>
                        <FontAwesomeIcon icon={faFileExcel} />&nbsp;Export to xls</a>
                    <a className="btn btn-success mr-20"
                        href={API_BASE_URL + '/users/export/csv'}>
                        <FontAwesomeIcon icon={faFileCsv}
                        />&nbsp;Export to csv
                    </a>
                    <a className="btn btn-success mr-20"
                        href={API_BASE_URL + '/users/export/pdf'}>
                        <FontAwesomeIcon icon={faFilePdf}
                        />&nbsp;Export to pdf
                    </a>
                </div>

                <div className="card-body">
                    <Route component={() =>
                        <ListCustomerComponent
                            data={customers}
                            itemsPerPage={itemsPerPage}
                            searchByData={searchByData}
                            tableHead={tableHead}
                        />}
                    />
                    {/* data, itemsPerPage,startFrom,searchByData,tableHead */}
                </div>

                {/* <div className="card-body">
                    <Table
                        headData={courseTableHead}
                        renderHead={(item, index) => renderHead(item, index)}
                        bodyData={listCustomer}
                        renderBody={(item, index) => renderBody(item, index)}
                    />
                </div> */}
            </div>
        </div>
    )
}

export default ListCustomer
