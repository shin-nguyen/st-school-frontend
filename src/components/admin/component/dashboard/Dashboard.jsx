import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import StatusCard from '../status-card/StatusCard'

import Table from '../table/Table'

import statusCards from '../../../../assets/JsonData/status-card-data.json'

import "../dashboard/dashboard.css"

import { useDispatch, useSelector } from 'react-redux'

import {fetchDashboard,fetchCustomersDashboard,fetchOrderDashboard} from "../../../../services/admin-service";

const topCustomers =[
        'User',
        'Total Orders',
        'Total Spending'
    ]

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.firstName + item.lastName}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = [
        "Course",
        "User",
        "Total Price",
        "Date",
]

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.course.name}</td>
        <td>{item.user.firstName}</td>
        <td>{item.course.price}</td>
        <td>{item.createdTime}</td>
    </tr>
)

const Dashboard = () => {
    const dispatch = useDispatch()
    const dashboardResponse= useSelector((state) => state.admin.dashboardResponse);
    const userResponse= useSelector((state) => state.admin.userResponse);
    const orderResponse= useSelector((state) => state.admin.orderResponse);

    useEffect(() => {
        dispatch(fetchDashboard());
        dispatch(fetchCustomersDashboard());
        dispatch(fetchOrderDashboard());
        console.log("render");
    }, [dispatch]);


    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-7">
                    <div className="row">
                       
                                <div className="col-6">
                                    <StatusCard
                                        count={dashboardResponse.totalCourse}
                                        title={"Total Course"}
                                    />
                                </div>
                                
                                <div className="col-6">
                                    <StatusCard
                                    count={dashboardResponse.totalOrder}
                                    title={"Total Order"}
                                    />
                                </div>

                                <div className="col-6">
                                    <StatusCard
                                    count={dashboardResponse.totalIncome}
                                    title={"Total Income"}
                                    />
                                </div>

                                <div className="col-6">
                                    <StatusCard
                                    count={dashboardResponse.totalBlog}
                                    title={"Total Blog"}
                                    />
                                </div>
                    </div>
                </div>
                {/* <div className="col-6">
                    <div className="dash-card full-height">
                        Để gắn cái đồ thị nếu cần
                    </div>
                </div> */}
                <div className="col-6">
                    <div className="dash-card">
                        <div className="dash-card-header">
                            <h3>top customers</h3>
                        </div>
                        <div className="dash-card-body">
                            <Table
                                headData={topCustomers}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={userResponse}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="dash-card-footer">
                            <Link to='/admin/customers'>View all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="dash-card">
                        <div className="dash-card-header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="dash-card-body">
                            <Table
                                headData={latestOrders}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={orderResponse}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="dash-card-footer">
                            <Link to='/admin/orders'>View all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
