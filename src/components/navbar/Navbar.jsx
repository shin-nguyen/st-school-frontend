import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";
import Dropdown from '../dropdown/Dropdown';
import navbar_items from '../../assets/JsonData/navbar_routes.json'
import logo from '../../assets/images/kai.jpg'
import "./Navbar.css"

import user_menu from '../../assets/JsonData/user_menus.json'
import access_menu from '../../assets/JsonData/access_menu.json'
import user_image from '../../assets/images/kai.jpg'

const NavbarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="naVbar__item">
            <div className={`naVbar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Navbar= (props) => {

    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);
    const user = useSelector(state => state.user.user);

    const activeItem = navbar_items.findIndex(item => item.route === props.location.pathname)

    const curr_user = {
        display_name: localStorage.getItem("email"),
        image: user?.avatar || user_image,
    }

    const renderUserToggle = (user) => (
        <div className="topnav__right-user">
            <div className="topnav__right-user__image">
                <img src={user.image} alt="" />
            </div>
            <div className="topnav__right-user__name">
                {user.display_name}
            </div>
        </div>
    )
    
    const renderUserMenu = (item, index) => (
        <Link to={item.routes} key={index}>
            <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>
    )

    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <Link to="/">
                    <div className="navbar__logo">
                        <img src={logo} alt="company logo"/>
                    </div>
                </Link>
                {
                    navbar_items.map((item, index) => (
                        <Link to={item.route} key={index}>
                            <NavbarItem
                                title={item.display_name}
                                icon={item.icon}
                                active={index === activeItem}
                            />
                        </Link> 
                    ))
                }
                {
                    localStorage.getItem("isLoggedIn") ||  isLoggedIn ? 
                    <div className="navbar__right-item">
                        <Dropdown
                            customToggle={() => renderUserToggle(curr_user)}
                            contentData={user_menu}
                            renderItems={(item, index) => renderUserMenu(item, index)}
                        />
                    </div>
                    :
                    <div className="navbar__right-item">
                        <Dropdown
                            icon="bx bx-lg bx-user-circle"
                            contentData={access_menu}
                            renderItems={(item, index) => renderUserMenu(item, index)}
                        />
                    </div> 
                }
            </div>
        </div>
    )
}

export default Navbar

