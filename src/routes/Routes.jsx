import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CoursesPage from '../pages/CoursePage'
import DetailPage from '../pages/DetailPage'
import CheckoutPage from '../pages/CheckoutPage'
import MyCoursesPage from '../pages/MyCoursesPage'
import LearningPage from '../pages/LearningPage'
import AdminPage from '../pages/AdminPage'
import NotFound from '../pages/NotFound'
import LoginPage from '../pages/LoginPage'
import Registration from '../components/registration/Registration'
import OAuth2RedirectHandler from '../utils/oauth2/OAuth2RedirectHandler'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/login' exact component = {LoginPage}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/activate/:code" component={LoginPage}/>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
            <Route path='/courses' component={CoursesPage}/>
            <Route path='/course/:id' component={DetailPage}/>
            <Route path='/checkout' component={CheckoutPage}/>
            <Route path='/my-courses' component={MyCoursesPage}/>
            <Route path='/learning/:id' component={LearningPage}/>
            <Route path='/admin' exact component ={AdminPage}/>
            <Route component={NotFound}/>

            {/* <Route path="/account" render={() => localStorage.getItem("token") ?
                    (<Route component={Account}/>) : (<Route component={HomePage}/>)}/>
                     */}
        </Switch>
    )
}

export default Routes
