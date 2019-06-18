import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./Main";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import NotFound from "./NotFound";
import MyProfile from "./MyProfile";
import TwisterProfile from "./TwisterProfile";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/my-profile" component={MyProfile} />
        <Route path="/twister-profile" component={TwisterProfile} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
