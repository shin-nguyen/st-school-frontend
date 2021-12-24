import React from 'react'
import Banner from './component/banner/Banner'
import TopBlogs from './component/top-blogs/TopBlogs'
import rocketImg from '../../assets/images/learn.jpg'

import "./home.css"

const Home = () => {
    return (
        <div className="body-content">
            <Banner/>
            <div className="container mt-3 mb-100">
                {/* <TopBlogs/> */}
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
							{/* <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur uis autem vel eum.</p> */}
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
							{/* <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur uis autem vel eum.</p> */}
						</div>
                    </div>    
                </div>

            </div>
        </div>
    )
}

export default Home
