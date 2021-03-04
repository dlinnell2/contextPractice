import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import routes from './Config/routes.js';
import { AuthProvider } from "./Context";
 
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}
 
export default App;