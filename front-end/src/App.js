import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";
import Landing from "./Landing";
import TeacherDetailsPage from "./TeacherDeatailsPage";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Welcome to MASAI "a revolution in education"</h2>
        <h3>Welcome admin, you can see the events taking place in school.</h3>
        {/* <h4>Please login to your account first.</h4> */}
        <Switch>
          <Route exact path="/">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Home logoutUser={logoutUser} />
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>
          <Route path='/teacherdetailspage/:name' element ={<TeacherDetailsPage />} />
          {/* <Route path="/landing">
            <Landing />
          </Route> */}
        </Switch>
      </div>
      <div className="ayu">
        <Switch>
           <Route path="/landing">
            <Landing />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
