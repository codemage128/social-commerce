import React from "react";
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";
import ReactPlayer from 'react-player';
import landing from "../../assets/video/landing.mp4";
class IndexHeader extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-warning pt-5 pb-7">
          <Container>
            <div className="header-body">
              <Row className="align-items-center">
                <Col lg="6">
                  <div className="pr-5">
                    <h1 className="display-2 text-white font-weight-bold mb-0">
                      Welcome to IYANS...
                    </h1>
                    <h2 className="display-4 text-white font-weight-light">
                      The worlds first Intellectual property exchange pod ..
                      Where Social -meets -Commerce- and Fintech in a bubble ...
                      plug into the pod and make good earnings!
                    </h2>
                  </div>
                </Col>
                <Col lg="6">
                  <Row className="pt-5">
                    <Col md="12">
                      <ReactPlayer url={landing} width="100%" height="100%" playing loop="true" controls="true"/>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
      </>
    );
  }
}

export default IndexHeader;
