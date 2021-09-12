import React from 'react'
import { Switch, Route } from 'react-router'

import Courses from '../pages/client/courses/Courses'
import CourseDetail from '../pages/client/courses_detail/CourseDetail'

const ClientRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Courses}/>
            <Route path='/course/:id' component={CourseDetail}/>
        </Switch>
    )
}

export default ClientRoutes
