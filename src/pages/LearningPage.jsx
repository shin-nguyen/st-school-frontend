import React from 'react'
import Navbar from '../components/navbar/Navbar'
import LearningSpace from '../components/learningSpace/LearningSpace'

const LearningPage = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <LearningSpace/>
        </div>
    )
}

export default LearningPage
