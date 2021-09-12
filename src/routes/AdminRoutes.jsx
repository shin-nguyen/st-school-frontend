import React from 'react'

import { Route, Switch} from 'react-router-dom'

import Dashboard from '../pages/admin/dashboard/Dashboard'
import CustomersManager from '../pages/admin/customers_manager/CustomersManager'
import BlogsManager from '../pages/admin/blogs_manager/BlogsManager'
import CoursesManager from '../pages/admin/courses_manager/CoursesManager'
import VideoManager from '../pages/admin/videos_manager/VideoManager'

const AdminRoutes = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard}/>
            <Route path='/admin/customers' component={CustomersManager}/>
            <Route path='/admin/blogs' component={BlogsManager}/>
            <Route path='/admin/courses' component={CoursesManager}/>
            <Route path='/admin/videos' component={VideoManager}/>
        </Switch>
    )
}

export default AdminRoutes