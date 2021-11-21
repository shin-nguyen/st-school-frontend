import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CoursesPage from '../pages/CoursePage'
import DetailPage from '../pages/DetailPage'
import SingleBlogPage from '../pages/SingleBlogPage'
import CheckoutPage from '../pages/CheckoutPage'
import MyCoursesPage from '../pages/MyCoursesPage'
import LearningPage from '../pages/LearningPage'
import AdminPage from '../pages/AdminPage'
import NotFound from '../pages/NotFound'
import LoginPage from '../pages/LoginPage'
import LogoutPage from '../pages/LogoutPage'
import AccountPage from '../pages/AccountPage'
import RegistrationPage from '../pages/RegistrationPage'
import OAuth2RedirectHandler from '../utils/oauth2/OAuth2RedirectHandler'
import ForgotPassword from '../components/forgotPassword/ForgotPassword'
import ResetPassword from '../components/resetPassword/ResetPassword.js'
import BlogPage from '../pages/BlogPage'
import WriteBlogPage from '../pages/WriteBlogPage'
import MyBlogsPage from '../pages/MyBlogsPage'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/login' exact component = {LoginPage}/>
            <Route path='/logout' exact component = {LogoutPage}/>
            <Route path="/registration" exact component={RegistrationPage}/>
            <Route path="/activate/:code" exact component={LoginPage}/>
            <Route  path="/forgot" exact component={ForgotPassword}/>
            <Route path="/account" render={() => localStorage.getItem("token") ?
                    (<Route component={AccountPage}/>) : (<Route component={HomePage}/>)}/> 
            <Route exact path="/reset/:code" component={ResetPassword}/>
            <Route path="/blog/add" component={WriteBlogPage}/>
            <Route path="/blog/:id" component={SingleBlogPage}/>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
            <Route path="/blogs" component={BlogPage}/>
            <Route path='/courses' component={CoursesPage}/>
            <Route path='/course/:id' component={DetailPage}/>
            <Route path='/checkout' component={CheckoutPage}/>
            <Route path='/my-courses' component={MyCoursesPage}/>
            <Route path='/my-blogs' component={MyBlogsPage}/>
            <Route path='/learning/:id' component={LearningPage}/>
            <Route path='/admin' component ={AdminPage}/>
            <Route component={NotFound}/>
            {/* <Route component={NotFound}/>   */}
        </Switch>
    )
}

export default Routes
