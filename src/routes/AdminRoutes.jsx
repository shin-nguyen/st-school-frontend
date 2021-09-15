import React from 'react'

import { Route, Switch} from 'react-router-dom'

import Dashboard from '../components/admin/component/dashboard/Dashboard'
import CoursesManager from '../components/admin/component/coursesManager/CoursesManager'

const AdminRoutes = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard}/>
            {/* <Route path='/admin/customers' component={CustomersManager}/> */}
            {/* <Route path='/admin/blogs' component={BlogsManager}/> */}
            <Route path='/admin/courses' component={CoursesManager}/>
            {/* <Route path='/admin/videos' component={VideoManager}/> */}
        </Switch>
    )
}

export default AdminRoutes