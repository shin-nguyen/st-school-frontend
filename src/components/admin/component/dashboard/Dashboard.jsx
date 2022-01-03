import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import StatusCard from '../status-card/StatusCard'
import Chart from 'react-apexcharts'
import Table from '../table/Table'
import statusCards from '../../../../assets/JsonData/status-card-data.json'
import "../dashboard/dashboard.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchDashboard, fetchCustomersDashboard, fetchOrderDashboard, fetchGraphDashboard } from "../../../../services/admin-service";
const topCustomers = [
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
        <td>{item.price}$</td>
    </tr>
)

const latestOrders = [
    "Course",
    "User",
    "Total",
    "Date",
]

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.course.name}</td>
        <td>{item.user.firstName}</td>
        <td>{item.course.price}$</td>
        <td>{item.createdTime}</td>
    </tr>
)

const chartOptions = {
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const Dashboard = () => {
    const dispatch = useDispatch()
    const dashboardResponse = useSelector((state) => state.admin.dashboardResponse);
    const userResponse = useSelector((state) => state.admin.userResponse);
    const orderResponse = useSelector((state) => state.admin.orderResponse);
    const graphdashboardResponse = useSelector((state) => state.admin.graphs);
    const themeReducer = useSelector(state => state.theme.mode)


    useEffect(() => {
        dispatch(fetchDashboard());
        dispatch(fetchCustomersDashboard());
        dispatch(fetchOrderDashboard());
        dispatch(fetchGraphDashboard());
        console.log(orderResponse.data);
    }, [dispatch]);


    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
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
                <div className="col-6">
                    <div className="dash-card full-height">
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark' }
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light' }
                            }}
                            series={graphdashboardResponse}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
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
