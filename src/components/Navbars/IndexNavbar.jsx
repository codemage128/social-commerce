
import React from "react";
// react library for routing
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

class IndexNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-horizontal navbar-main navbar-dark bg-white"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/warning-logo.png")}
              />
            </NavbarBrand>
            <button
              aria-controls="navbar-collapse"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler bg-warning"
              data-target="#navbar-collapse"
              data-toggle="collapse"
              id="navbar-collapse"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              className="navbar-custom-collapse"
              navbar
              toggler="#navbar-collapse"
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/admin/dashboard">
                      <img
                        alt="..."
                        src={require("assets/img/brand/warning-logo.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-collapse"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-collapse"
                      data-toggle="collapse"
                      id="navbar-collapse"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/overview" tag={Link}>
                    <label className="h4 text-warning pt-2"><span className="nav-link-inner--text">HOW DOES WOKR?</span>
                    </label>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/browser" tag={Link}>
                    <label className="h4 text-warning pt-2"><span className="nav-link-inner--text">BROWSER SERIVICES</span>
                    </label>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/auth/login" tag={Link}>
                    <button className="btn btn-outline-warning"><i className="fa fa-sign-in-alt"></i><span className="nav-link-inner--text">Sign In</span>
                    </button>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/auth/register" tag={Link}>
                    <button className="btn btn-warning"><i className="fa fa-user"></i><span className="nav-link-inner--text">Join Us</span></button>
                  </NavLink>
                </NavItem>
              </Nav>
              <hr className="d-lg-none" />
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default IndexNavbar;
