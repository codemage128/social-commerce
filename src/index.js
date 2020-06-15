import React from "react";
import ReactDOM from "react-dom";
// react library for routing
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
// plugins styles downloaded
import "assets/vendor/fullcalendar/dist/fullcalendar.min.css";
import "assets/vendor/sweetalert2/dist/sweetalert2.min.css";
import "assets/vendor/select2/dist/css/select2.min.css";
import "assets/vendor/quill/dist/quill.core.css";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// core styles
import "assets/css/argon-dashboard-pro-react.css";

import AdminLayout from "layouts/Admin.jsx";
import BrandLayout from "layouts/Brand.jsx";
import AuthLayout from "layouts/Auth.jsx";
import HomeLayout from "layouts/Home.jsx";
import IndexView from "views/Index.jsx";
import BrowserView from "views/Browser.jsx";
import Overview from "views/Overview.jsx";
//react redux-store
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/browser" render={props => <BrowserView {...props} />} />
        <Route path="/overview" render={props => <Overview {...props} />} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/brand" render={props => <BrandLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Route path="/home" render={props => <HomeLayout {...props} />} />
        <Route path="/" render={props => <IndexView {...props} />} />
        <Redirect from="*" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
