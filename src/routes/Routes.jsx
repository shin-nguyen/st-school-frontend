import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CoursesPage from '../pages/CoursePage'
import DetailPage from '../pages/DetailPage'
import AdminPage from '../pages/AdminPage'
import NotFound from '../pages/NotFound'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/courses' exact component={CoursesPage}/>
            <Route path='/course/:id' component={DetailPage}/>
            <Route path='/admin' component ={AdminPage}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes
