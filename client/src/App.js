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


// STATE
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Nav from "./components/Nav";
// import UserDashboard from "./components/UserDashboard";
// import { Provider } from 'react-redux';
// // import store from './utils/store';


// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem('id_token')
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     })
//   },
//   uri: '/graphql',
// })

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div>
//           <Provider>
//             <Nav />
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route exact path="/login" component={Login} />
//               <Route exact path="/signup" component={Signup} />
//               <Route exact path="/dashboard/:id" component={UserDashboard} />
//               {/* <Route component={NoMatch} /> */}
//             </Switch>
//           </Provider>
//         </div>
//       </Router>
//     </ApolloProvider>

//   );