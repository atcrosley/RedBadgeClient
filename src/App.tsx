import * as React from "react";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Home/Nav";
import Footer from "./components/Home/Footer";
import Auth from "./components/auth/Auth";
import ProjectManager from "./components/ProjectManager/ProjectManager";
import Application from "./components/Forms/Application";
import NewWork from "./components/Forms/NewWork";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SIndex from "./components/Scheduler.tsx/SIndex";

function App() {
  const [sessionToken, setSessionToken] = useState<string | null>(""); //1
  const [showHome, setShowHome] = useState(false);
  useEffect(() => {
    //2
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);
  const updateToken = (newToken: string) => {
    //3
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };
  const home = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <Home />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route
          exact
          path="/login"
          component={() => <Auth updateToken={updateToken} />}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/pm" component={ProjectManager} />
        <Route exact path="/schedule" component={SIndex}></Route>
        <Route exact path="/application" component={Application} />
        <Route exact path="/newWork" component={NewWork} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
