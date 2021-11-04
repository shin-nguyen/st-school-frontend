import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import StatusCard from '../status-card/StatusCard'

import Table from '../table/Table'

import statusCards from '../../../../assets/JsonData/status-card-data.json'

import "../dashboard/dashboard.css"

const topCustomers = {
    head: [
        'User',
        'Total Orders',
        'Total Spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "Course",
        "User",
        "Total Price",
        "Date",
    ],
    body: [
        {
            course: "HTML",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
        },
        {
            course: "CSS",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
        },
        {
            course: "JAVA",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
        },
        {
            course: "JS",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
        },
        {
            course: "JAVA",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
        }
    ]
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.course}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
    </tr>
)

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-7">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
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
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
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
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
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
