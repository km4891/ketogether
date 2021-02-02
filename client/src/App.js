import React, { useState } from 'react';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Donate from './components/Donate';
import MakePost from './components/MakePost';
import SavedRecipes from './components/SavedRecipes';
import Login from './components/Login';
import Logout from './components/Logout';
import CreateAccount from './components/CreateAccount';

function App() {
    const [currentPage, handlePageChange] = useState('Dashboard');

    const renderPage = () => {
        switch (currentPage) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Donate':
                return <Donate />;
            case 'Make Post':
                return <MakePost />;
            case 'Saved Recipes':
                return <SavedRecipes />;
            case 'Login':
                return <Login />;
            case 'Logout':
                return <Logout />;
            case 'Create Account':
                return <CreateAccount />;
            default: 
                return <Dashboard />
        }
    };

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <div> {renderPage(currentPage)} </div>
        </div>
    );
}

export default App;
