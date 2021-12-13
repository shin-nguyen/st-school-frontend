import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../components/admin/component/dashboard/Dashboard'
import CourseManager from '../components/admin/component/course/courseManager/CourseManager'
import CourseForm from '../components/admin/component/course/courseForm/CourseForm'
import CourseDetail from '../components/admin/component/course/courseDetail/CourseDetail'
import VideoForm from '../components/admin/component/course/videoForm/VideoForm'
import ListCustomer from '../components/admin/component/customer/ListCustomer'
import ListOrder from '../components/admin/component/order/ListOrder'
import ListBlog from '../components/admin/component/blog/BlogList'
import ChangePassword from '../components/account/changePassword/ChangePassword'
import Transfer from '../components/admin/component/transfer/Transfer'
// import LogoutPage from '../pages/LogoutPage'

const AdminRoutes = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard} />
            <Route path='/admin/customers' component={ListCustomer} />
            <Route path='/admin/blogs' component={ListBlog} />
            <Route path='/admin/courses' component={CourseManager} />
            <Route path='/admin/course/add' component={CourseForm} />
            <Route path='/admin/course/:id/edit' component={CourseForm} />
            <Route path='/admin/course/:id/detail' component={CourseDetail} />
            <Route path='/admin/course/:id/video/add' component={VideoForm} />
            <Route path='/admin/orders' component={ListOrder} />
            <Route path='/admin/account' component={ChangePassword} />
            {/* <Route path='/logout' component = {LogoutPage}/> */}
            <Route path='/admin/logout' component={Transfer} />
        </Switch>
    )
}

export default AdminRoutes