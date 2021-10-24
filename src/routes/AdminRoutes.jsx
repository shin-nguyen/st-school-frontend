import React from 'react'

import { Route, Switch} from 'react-router-dom'

import Dashboard from '../components/admin/component/dashboard/Dashboard'
import CourseManager from '../components/admin/component/course/courseManager/CourseManager'
import CourseForm from '../components/admin/component/course/courseForm/CourseForm'
import BlogPage from '../pages/BlogPage'
const AdminRoutes = () => {
    return (
        <Switch>
            <Route path='/admin' exact component={Dashboard}/>
            {/* <Route path='/admin/customers' component={CustomersManager}/> */}
            <Route path='/admin/blogs' component={BlogPage}/>
            <Route path='/admin/courses' component={CourseManager}/>
            <Route path='/admin/course/add' component={CourseForm}/>
            <Route path='/admin/course/:id/edit' component={CourseForm}/>
            {/* <Route path='/admin/videos' component={VideoManager}/> */}
        </Switch>
    )
}

export default AdminRoutes