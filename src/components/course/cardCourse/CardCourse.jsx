import React from 'react'
import './cardCourse.css'
import { Link } from 'react-router-dom'
import default_image from '../../../assets/images/loading.png'

const Card = (props) => {
    return (
        <div className="card mb-20">
            <Link to={props.goto}>
                {
                    props.image ?
                    <img className="card-img-top" src={'http://localhost:8080/images/' + props.image} alt=""/> : 
                    <img className="card-img-top" src={default_image} alt=""/>
                }
            </Link>
            <div className="card-body">
                <div className="card-title">
                    <Link to={props.goto}>
                        <p>{props.title}</p>
                    </Link>
                </div>
                <div className="card-content">
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
            <div className="card-footer">
                <div className="card-extend ">
                    <p>Price: </p>
                    <span>${props.price}</span>
                </div>
                <div className="card-action">
                        <Link to={props.goto} className='card-icon bx bxs-right-arrow-circle'/>
                </div>
            </div>             
        </div>
    )
}

export default Card
