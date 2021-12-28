import React from 'react'
import Banner from './component/banner/Banner'
import TopBlogs from './component/top-blogs/TopBlogs'
import rocketImg from '../../assets/images/learn.jpg'
import MessengerCustomerChat from 'react-messenger-customer-chat';

import "./home.css"

const Home = () => {
    return (
        <div className="body-content">
            <Banner/>
            {/* <div className="container mt-3 mb-100">
                <hr />
                <div className="welcom">
                    <h1>
                        Welcom to ST-School
                    </h1>  
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div class="main_title">
							<h2>Welcome to our Website</h2>
						</div>
                    </div>
                    <div className="col-md-6 my-auto">
                            <img className="img-fluid w-100" src={rocketImg} alt=""/>
                    </div>     
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-6 my-auto">
                        <img className="img-fluid w-100" src={rocketImg} alt=""/>
                    </div> 
                    <div className="col-md-6">
                        <div class="main_title">
							<h2>Welcome to ST School</h2>
                        </div>
                    </div>    
                </div>

            </div> */}
            <MessengerCustomerChat
                pageId="111158174768013"
                appId="1377288292701161"
                // language=""
                // htmlRef="<REF_STRING>"
            />,
        </div>
    )
}

export default Home
