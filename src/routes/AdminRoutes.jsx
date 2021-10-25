import React from 'react'

import { Route, Switch} from 'react-router-dom'

import Dashboard from '../components/admin/component/dashboard/Dashboard'
import CourseManager from '../components/admin/component/course/courseManager/CourseManager'
import CourseForm from '../components/admin/component/course/courseForm/CourseForm'
import ListCustomer from '../components/admin/component/customer/ListCustomer'
import ListOrder from '../components/admin/component/order/ListOrder'

const AdminRoutes = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard}/>
            <Route path='/admin/customers' component={ListCustomer}/>
            <Route path='/admin/courses' component={CourseManager}/>
            <Route path='/admin/course/add' component={CourseForm}/>
            <Route path='/admin/course/:id/edit' component={CourseForm}/>
            <Route path='/admin/orders' component={ListOrder}/>
        </Switch>
    )
}

export default AdminRoutes