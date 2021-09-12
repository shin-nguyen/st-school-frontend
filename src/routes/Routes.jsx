import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ClientPage from '../pages/client/ClientPage'
import AdminPage from '../pages/admin/AdminPage'
import NotFound from '../pages/common/NotFound'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={ClientPage}/>
            <Route path='/admin' component ={AdminPage}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes
