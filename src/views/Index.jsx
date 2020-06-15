import React from "react";
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import IndexHeader from "components/Headers/IndexHeader.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";
import ReactPlayer from 'react-player';
import landing from "../assets/video/landing.mp4";
import vision from "../assets/video/vision.mp4";

class Index extends React.Component {
  state = {
    array: [1, 2, 3, 4]
  }
  
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="main-content">
          {/* <IndexHeader /> */}
          <section className="py-6 pb-9 bg-warning">
            <Container fluid>
              <Row className="justify-content-center text-center">
                <Col md="6">
                  <h2 className="display-3 text-white">
                    Welcome to IYANS...
                  </h2>
                  <p className="lead text-white">
                    The worlds first Intellectual property exchange pod ..
                    Where Social -meets -Commerce- and Fintech in a bubble ...
                    plug into the pod and make good earnings!
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-lg-0 mt--7">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row>
                    {/* <ReactPlayer url={landing} width="100%" height="100%" playing loop={true} controls={true} /> */}
                    <ReactPlayer url={landing} width="100%" height="100%" controls={true} />
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-6">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/landing-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h1>iYans Products</h1>
                    <p>
                      There are many kinds of products in this platform. You can buy and sell them.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="warning"
                            >
                              <i className="ni ni-books" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              E-Books
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="warning"
                            >
                              <i className="ni ni-album-2" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">Art / Motion Graphics / Any forms of artistic value</h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="warning"
                            >
                              <i className="ni ni-shop" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Virtual Gift or iYans merchandise
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="warning"
                            >
                              <i className="ni ni-cart" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Coupons / iTunes card
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="warning"
                            >
                              <i className="ni ni-money-coins" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Bitcoin
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <Link
                      className="font-weight-bold text-warning mt-5"
                      to="/admin/profile">
                      View all products ...
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-6">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/landing-2.png")}
                  />
                </Col>
                <Col md="6">
                  <div className="pr-md-5">
                    <h1>iYans Services</h1>
                    <p>
                      There are many kinds of services in this platform.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-palette" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Sketch or painting
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-tag" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Written resume
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-building" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Building plan
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-chart-pie-35" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              3D renders
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-caps-small" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Source code
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <h4 className="mb-0">
                              ...
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-planet" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Any idea worth selling
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="ni ni-trophy" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              Intellectual Copywrite©
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <Link
                      className="font-weight-bold text-blue mt-5"
                      to="/admin/profile"
                    >
                      View all services ...
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-6">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/landing-3.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h1>iYans gift card</h1>
                    <p>
                      We love cards and everybody on the web seems to. We have
                      gone above and beyond with options for you to organise
                      your information. From cards designed for content, to
                      pricing cards or user profiles, you will have many options
                      to choose from.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-bag-17" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              iYans coin card
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-bag-17" />
                            </Badge>
                          </div>
                          <div>
                            <h4 className="mb-0">
                              iYans service card
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <Link
                      className="font-weight-bold text-success mt-5"
                      to="/admin/widgets"
                    >
                      View all card ...
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-7 section-nucleo-icons bg-white overflow-hidden">
            <Container>
              <Row className="justify-content-center">
                <Col className="text-center" lg="8">
                  <h2 className="display-3">Our vision</h2>
                  <p className="lead">
                    Please write the vision text
                  </p>
                </Col>
                <Col className="order-md-2" md="8">
                  {/* <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/landing-3.png")}
                  /> */}
                  <ReactPlayer url={vision} width="100%" height="100%" controls={true} />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-7">
            <Container>
              <Row className="row-grid justify-content-center">
                <Col className="text-center" lg="8">
                  <h2 className="display-3">
                    Try a user Membership{" "}
                  </h2>
                  <p className="lead">
                    Designed to maximise your users success and earnings! Save up to 20% on annual plans. Change plans anytime, conditions apply see FAQ.
                  </p>
                  <div className="btn-wrapper">
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="warning"
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpr-index-page"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="ni ni-basket" />
                      </span>
                      <span className="btn-inner--text">Membership</span>
                    </Button>
                  </div>
                  <div className="text-center">
                    <h4 className="display-4 mb-5 mt-5">
                      Available on these technologies
                    </h4>
                    <Row className="justify-content-center">
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=adpr-index-page"
                          id="tooltip170669606"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle shadow shadow-lg--hover"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip170669606"
                        >
                          Bootstrap 4 - Most popular front-end component library
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpr-index-page"
                          id="tooltip374813715"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip374813715"
                        >
                          React - A JavaScript library for building user
                          interfaces
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.creative-tim.com/product/argon-dashboard-pro-nodejs?ref=adpr-index-page"
                          id="tooltip374813715"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nodejs-logo.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip374813715"
                        >
                          React - A JavaScript library for building user
                          interfaces
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.creative-tim.com/product/argon-dashboard-pro-laravel?ref=adpr-index-page"
                          id="tooltip374813715"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/laravel_logo.png"
                            style={{ backgroundColor: "white" }}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip374813715"
                        >
                          React - A JavaScript library for building user
                          interfaces
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://vuejs.org/?ref=creative-tim"
                          id="tooltip616015001"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle opacity-3"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip616015001"
                        >
                          [Coming Soon] Vue.js - The progressive javascript
                          framework
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.sketchapp.com/?ref=creative-tim"
                          id="tooltip82987604"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle opacity-3"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/sketch.jpg"
                          />
                        </a>
                        <UncontrolledTooltip delay={0} target="tooltip82987604">
                          [Coming Soon] Sketch - Digital design toolkit
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://www.adobe.com/products/photoshop.html?ref=creative-tim"
                          id="tooltip731835410"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle opacity-3"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/ps.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip731835410"
                        >
                          [Coming Soon] Adobe Photoshop - Software for digital
                          images manipulation
                        </UncontrolledTooltip>
                      </Col>
                      <Col className="my-2" md="2" xs="3">
                        <a
                          href="https://angularjs.org/?ref=creative-tim"
                          id="tooltip211254026"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="img-fluid rounded-circle opacity-3"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip211254026"
                        >
                          [Coming Soon] Angular - One framework. Mobile &
                          desktop
                        </UncontrolledTooltip>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-3">
            <Container>
              <Row className="row-grid justify-content-center">
                <Col className="text-center" lg="8">
                  <h2 className="display-3">
                    Popular products
                  </h2>
                </Col>
              </Row>
              <Row className="justify-content-center mt-6">
                <Col lg="12">
                  <Row>
                    {this.state.array.map(element =>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("assets/img/theme/img-1-1000x900.jpg")}
                            top />
                          <CardBody>
                            <CardTitle className="h2 mb-0">
                              E-book</CardTitle>
                            {/* <big className="text-muted">From $100 USD</big> */}
                            <CardText className="mt-4 h4">From $100 USD</CardText>
                            {/* <Button
                              className="px-0"
                              color="link"
                              href="#pablo"
                              onClick={e => e.preventDefault()}>
                              View article
                            </Button> */}
                          </CardBody>
                        </Card>
                      </Col>
                    )}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-3">
            <Container>
              <Row className="row-grid justify-content-center">
                <Col className="text-center" lg="8">
                  <h2 className="display-3">
                    Popular Services
                  </h2>
                </Col>
              </Row>
              <Row className="justify-content-center mt-6">
                <Col lg="12">
                  <Row>
                    {this.state.array.map(element =>
                      <Col lg="3">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("assets/img/theme/img-1-1000x900.jpg")}
                            top />
                          <CardBody>
                            <CardTitle className="h2 mb-0">
                              Service</CardTitle>
                            {/* <small className="text-muted"></small> */}
                            <CardText className="mt-4 h4">From $400 EUR</CardText>
                            {/* <Button
                              className="px-0"
                              color="link"
                              href="#pablo"
                              onClick={e => e.preventDefault()}>
                              View article
                            </Button> */}
                          </CardBody>
                        </Card>
                      </Col>
                    )}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Index;
