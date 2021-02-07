import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import RecipeList from "./components/UserDashboard";
import { Provider } from 'react-redux';
import store from './utils/store';
import RecipeForm from './pages/RecipeForm';
import 'semantic-ui-css/semantic.min.css'

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
    
      <Router>
      <Nav />
        <div>
          <Provider store={store}>
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/dashboard/:id" component={RecipeList} />
              <Route exact path="/recipeform" component={RecipeForm} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>

  );
}
  export default App;
