import './App.css'
import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeAction from "./actions/theme-actions"

import Routes from './routes/Routes'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    const themeReducer = useSelector(state => state.theme)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`app ${themeReducer.mode} ${themeReducer.color}`}>
                    <div className="app">    
                        <Routes/> 
                    </div>
                </div>    
            )}/>
        </BrowserRouter>
    )
}

export default App