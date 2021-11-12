import React from 'react'

import { Route, Switch} from 'react-router-dom'

import Dashboard from '../components/admin/component/dashboard/Dashboard'
import CourseManager from '../components/admin/component/course/courseManager/CourseManager'
import ListCustomer from '../components/admin/component/customer/ListCustomer'
import ListOrder from '../components/admin/component/order/ListOrder'
import BlogPage from '../pages/BlogPage'

import FormTest from '../components/admin/component/course/courseForm/FormTest'

const AdminRoutes = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard}/>
            <Route path='/admin/customers' component={ListCustomer}/>
            {/* <Route path='/admin/customers' component={CustomersManager}/> */}
            <Route path='/admin/blogs' component={BlogPage}/>
            <Route path='/admin/courses' component={CourseManager}/>
            <Route path='/admin/course/add' component={FormTest}/>
            <Route path='/admin/course/:id/edit' component={FormTest}/>
            <Route path='/admin/orders' component={ListOrder}/>
        </Switch>
    )
}

export default AdminRoutes