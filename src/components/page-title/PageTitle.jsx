import React from 'react'
import '../page-title/pageTitle.css'

const PageTitle = (props) => {
    return (
        <div>
            <div className="page-title">{props.title}</div>
        </div>
    )
}

export default PageTitle
