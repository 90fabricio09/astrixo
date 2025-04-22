import React from 'react';
import { Outlet } from 'react-router-dom';
import './css/home.css';

import Ticket from './components/Ticket.jsx'

function App() {
    return (
        <>
            <Ticket />
            <Outlet />
        </>
    );
}

export default App;