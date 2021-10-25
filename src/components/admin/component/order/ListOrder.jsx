import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrder } from '../../../../services/order-services'
import Table from '../table/Table'

const ListOrder = () => {
    const dispatch = useDispatch()
    const listOrder = useSelector(state => state.order.listOrder)

    console.log(listOrder)

    const courseTableHead = [
        '',
        'Course',
        'User',
        'Created Time',
        'Total',
    ]
    
    const renderHead = (item, index) => <th key={index}>{item}</th>
    
    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.course.name} {item.lastName}</td>
            <td>{item.user.firstName} {item.user.lastName}</td>
            <td>{item.createdTime}</td>
            <td>${item.total}</td>
        </tr>
    )
    
    useEffect(() => {
        dispatch(getAllOrder());
        console.log("render");
    }, [dispatch]);

    useEffect(() => {
        console.log("re-render");
    }, [listOrder]);

    return (
        <div>
           <div className="card-table">
                <div className="card-header">
                    <h3 className="title">Order List</h3>
                </div>
                <div className="card-body">
                    <Table 
                        headData={courseTableHead}
                        renderHead={(item, index) => renderHead(item, index)}
                        bodyData={listOrder}
                        renderBody={(item, index) => renderBody(item, index)}
                    />         
                </div>
            </div>
        </div>
    )
}

export default ListOrder
