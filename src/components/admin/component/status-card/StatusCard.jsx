import React from 'react'

import './statusCard.css'

const StatusCard = props => {
    return (
        <div className='status-card'>
            <div className="status-card__icon">
                {
                    props.title === "Total Course" ?  <i class='bx bxs-videos'></i> : null
                }
                {
                    props.title === "Total Order" ?  <i class='bx bxs-cart'></i> : null
                }
                {
                    props.title === "Total Income" ?  <i class='bx bxs-dollar-circle' ></i> : null
                }
                {
                    props.title === "Total Blog" ?  <i class='bx bxl-blogger' ></i> : null
                }
            </div>
            <div className="status-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default StatusCard
