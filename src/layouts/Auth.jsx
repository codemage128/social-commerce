import React from "react";
// react library for routing
import { Route, Switch, withRouter } from "react-router-dom";
// core components
import AuthNavbar from "components/Navbars/AuthNavbar.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";
import classnames from "classnames";
import { connect } from 'react-redux'
import routes from "routes.js";
import authbackground from "../assets/img/brand/sign-in-bg.png";

class Auth extends React.Component {
  componentWillMount() {
    if (this.props.isLogin) {
      this.props.history.push('/main/product-list');
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isLogin) {
      this.props.history.push('/main/product-list');
    }
  }
  componentDidMount() {
    document.body.classList.add("bg-white");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-white");
  }
  componentDidUpdate(e) {
    if (e.history.pathname !== e.location.pathname) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainContent.scrollTop = 0;
    }
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
        <AuthNavbar />
        <div className="main-content" ref="mainContent"
          className={classnames(
            "auth-container",
          )}
          style={{ backgroundImage: `url(${authbackground})`, backgroundSize: 'cover' }}>
          <Switch>{this.getRoutes(routes)}</Switch>
          <AuthFooter />
        </div>
      </>
    );
  }
}

function mapStateToProps({ auth }) {
  return { isLogin: auth.isLogin };
}

export default connect(mapStateToProps)(withRouter(Auth));
