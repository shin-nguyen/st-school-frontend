import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import CustomersManager from '../pages/CustomersManager'
import BlogsManager from '../pages/BlogsManager'
import CoursesManager from '../pages/CoursesManager'
import NotFound from '../pages/NotFound'
import VideoManager from '../pages/VideoManager'

const Routes = () => {
    return (
        <Switch>
            <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/customers' component={CustomersManager}/>
            <Route path='/blogs' component={BlogsManager}/>
            <Route path='/courses' component={CoursesManager}/>
            <Route path='/videos' component={VideoManager}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes