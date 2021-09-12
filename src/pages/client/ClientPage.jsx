import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ClientRoutes from '.././../routes/ClientRoutes'
import Brand from '../../components/brand/Brand'
import Navbar from '../../components/navbar/Navbar'

const ClientPage = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div>
                    <Brand/>
                    <Navbar/>
                    <div>
                        <ClientRoutes/>
                    </div>
                </div>
            )}/>
        </BrowserRouter>  
    )
}

export default ClientPage
