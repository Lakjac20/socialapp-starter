import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MessageFeed from "./pages/MessageFeed";
import ProfileUpdateForm from "./components/profileUpdateForm/ProfileUpdateForm";


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/messagefeed" component={MessageFeed} />
        <Route exact path="/profileUpdate" component={ProfileUpdateForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/messagefeed" component={MessageFeed} />
        
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;