import React,{useState, useEffect} from 'react'

import Table from '../../../components/table/Table'
import {UserServices} from '../../../services/services';

import { connect } from 'react-redux';

const Customers = (props) => {
    const [customers, setCustomers] = useState([]);

    const customerTableHead = [
        '',
        'Name',
        // 'Date of birth',
        'Email',
        'Phone',
        'Address',
        'Status',
        '',
    ]
    
    const renderHead = (item, index) => <th key={index}>{item}</th>
    
    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            {/* <td>{item.dateOfBirth}</td> */}
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>{item.status}</td>
            <td>
                <button className='btn btn-success mr-10'>View</button>
                {/* <button className='btn btn-danger mr-10'>Delete</button> */}
            </td>
        </tr>
    )

    useEffect(() => {
        UserServices.getCustomers().then((response) => {
            if(response != null){
                setCustomers(response.data);
            }
        })
    },[]);

    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="card-table">
                    <div className="card-header">
                        <h3 className="title">Customer List</h3>
                    </div>
                    <div className="card-body">
                        <Table 
                            headData={customerTableHead}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={customers}
                            renderBody={(item, index) => renderBody(item, index)}
                        />         
                    </div>
                </div>
            </div>     
        </div>
    )
}


const mapStateToProps = state =>{
    return{
        customers : state.customers
    }
}

export default connect(mapStateToProps, null) (Customers);
