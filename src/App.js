import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Registration from './Components/Registration/Registration';
import Navbar from './Components/Navbar/Navbar';
import Certificate from './Components/Certificate/Certificate';
import SignIn from './Components/SignIn/SignIn';
import Admin from './Components/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react';
export const UserContext = createContext({});

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/sohayota">
            <Navbar></Navbar>
            <Registration></Registration>
          </Route>
          <Route path="/certificate/:id">
            <Certificate></Certificate>
          </Route>
          <Route path="/login">
            <Navbar></Navbar>
            <SignIn></SignIn>
          </Route>
          <PrivateRoute path="/admin">
            <Navbar></Navbar>
            <Admin></Admin>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
