import React from 'react'
import "./step.css"
import botAvatar from "../../../assets/images/bot.png"
import Avatar from '@mui/material/Avatar';

const Step = (props) => {
    const step = props.step

    return (
        <div>
            <div className='step'>
                <div className='step-bot-avt'>
                    <Avatar
                        alt="Ala Chan"
                        src={botAvatar}
                        sx={{ width: 80, height: 80 }}
                    />
                </div>
                {/* <div>
                    <i class='bx bxs-hand-right' ></i>
                </div> */}
                <div>
                    <p>{props.message}</p>
                </div>
                <div className = "next-btn-wrapper">
                    <button className='prev-btn' onClick = {() => props.onPrevious()}>
                        {
                            step === 1? <span>Close</span>:<span>Previous </span>
                        }
                    </button>
                    <button className='next-btn' onClick = {() => props.onNext()}>
                        {
                            step === 11? <span>Bye</span>:<span>Next</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step