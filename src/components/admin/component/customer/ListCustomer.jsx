import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCustomers } from '../../../../thunks/admin-thunks'
import Table from '../table/Table'
import { Link } from 'react-router-dom'

const ListCustomer = () => {
    const dispatch = useDispatch()
    const listCustomer = useSelector(state => state.admin.users)

    const courseTableHead = [
        '',
        'Name',
        'Birthday',
        'Email',
        'Phone',
        'Address',
        '',
    ]
    
    const renderHead = (item, index) => <th key={index}>{item}</th>
    
    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.firstName} {item.lastName}</td>
            <td>{item.birthday}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>
                <Link to={'customer/'+item.id+'/view'}>
                    <button className="btn-a btn btn-success mr-10">View</button>
                </Link>
            </td>
        </tr>
    )
    
    useEffect(() => {
        dispatch(fetchAllCustomers());
    }, [dispatch]);

    useEffect(() => {
    }, [listCustomer]);

    return (
        <div>
           <div className="card-table">
                <div className="card-table-header">
                    <h3 className="title">Customer List</h3>
                </div>
                <div className="card-body">
                    <Table 
                        headData={courseTableHead}
                        renderHead={(item, index) => renderHead(item, index)}
                        bodyData={listCustomer}
                        renderBody={(item, index) => renderBody(item, index)}
                    />         
                </div>
            </div>
        </div>
    )
}

export default ListCustomer
