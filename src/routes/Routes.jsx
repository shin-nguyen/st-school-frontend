import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CoursesPage from '../pages/CoursePage'
import DetailPage from '../pages/DetailPage'
import CheckoutPage from '../pages/CheckoutPage'
import AdminPage from '../pages/AdminPage'
import NotFound from '../pages/NotFound'
import LoginPage from '../pages/LoginPage'
import Registration from '../components/registration/Registration'
import OAuth2RedirectHandler from '../utils/oauth2/OAuth2RedirectHandler'
import ForgotPassword from '../components/forgotPassword/ForgotPassword'
import ResetPassword from '../components/resetPassword/ResetPassword.js'
import Account from '../components/account/Account'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/login' exact component = {LoginPage}/>
            <Route path="/registration" exact component={Registration}/>
            <Route path="/activate/:code" exact component={LoginPage}/>
            <Route  path="/forgot" exact component={ForgotPassword}/>
            <Route path="/account" render={() => localStorage.getItem("token") ?
                    (<Route component={Account}/>) : (<Route component={HomePage}/>)}/> 
            <Route exact path="/reset/:code" component={ResetPassword}/>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
            <Route path='/courses' exact component={CoursesPage}/>
            <Route path='/course/:id' component={DetailPage}/>
            <Route path='/checkout' component={CheckoutPage}/>
            <Route path='/admin' component ={AdminPage}/>
            
          

            
            {/* <Route component={NotFound}/>   */}
        </Switch>
    )
}

export default Routes
