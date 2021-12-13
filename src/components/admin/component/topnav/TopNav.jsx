import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../../../dropdown/Dropdown'

import notifications from '../../../../assets/JsonData/notification.json'
import {useSelector} from "react-redux";

import user_image from '../../../../assets/images/kai.jpg'

import user_menu_admin from '../../../../assets/JsonData/user_menu_admin.json'
import ThemeMenu from '../../../thememenu/ThemeMenu'


// const renderNotificationItem = (item, index) => (
//     <div className="notification-item" key={index}>
//         <i className={item.icon}></i>
//         <span>{item.content}</span>
//     </div>
// )

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

const renderUserMenu =(item, index) => (
    <Link to={item.routes} key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)



const Topnav = () => {
    const user = useSelector(state => state.user.user);

    const curr_user = {
        display_name: localStorage.getItem("email"),
        image: user?.avatar || user_image,
    }

    return (
        <div className='topnav'>
            {/* <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div> */}

            <div className="welcome-info">
                WELCOME TO ST-SCHOOL!
            </div>
            
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu_admin}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                {/* <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div> */}
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default Topnav
