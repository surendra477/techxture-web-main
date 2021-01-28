import React, { useState, useEffect } from "react";
import Navs from "./layout/Nav.jsx";
import { useSelector, useDispatch } from "react-redux";
import Homepage from "./layout/homepage.jsx";
import CompleteProfile from "./layout/completeProfile.jsx";
import { db, auth, provider } from "./config/firebaseconfig";
import { selectUser, login, logout } from "./features/userSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import "./stylesheet/Style.css";
import Main from "./main.jsx";

const App = () => {
  const [state, setState] = useState(false);
  const [authentication, setAuthState] = useState({
    authenticated: false, //whether the user is allowed to access the protected routes
    initialized: true, //if firebase is still being nitalized
  });
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user has been logged in
        setAuthState({
          authenticated: true, //the user is now authenticated
          initialized: false,
        });
      } else {
        //the user has been logged out
        setAuthState({
          authenticated: false, //the user is no longer authenticated
          initialized: false,
        });
      }
      console.log("user is ", authUser.displayName);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((response) => {
        setState(true);
      })
      .catch((error) => alert(error.message));
  };

  const signOut = () => {
    auth.signOut().then(() => {
      alert("Signed Out");
      setState(false);
    });
  };

  return (
    <div>
      {user ? (
        <>
          <Navs />
          <CompleteProfile />
          {/* <Homepage /> */}
          {/* <Router>
            <Switch>
              <Route path="/main">
                <Main />
              </Route>
            </Switch>
          </Router> */}
          <button className="btn btn-primary m-5" onClick={signOut}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Navs />
          <button className="btn btn-primary m-5" onClick={signIn}>
            Sign In
          </button>
        </>
      )}
      {/* {user ? user.name : "Nothing"} */}

      <PrivateRoute
        path={"/dashboard"}
        component={Main}
        authenticated={authentication.authenticated}
      />
    </div>
  );
};
const PrivateRoute = ({
  component: Component,
  authenticated: authenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/dashboard" }} />
      )
    }
  />
);
export default App;
