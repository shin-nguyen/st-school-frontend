import './App.css'

import Routes from './routes/Routes'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <Routes/>
            )}/>
        </BrowserRouter>
    )
}

export default App