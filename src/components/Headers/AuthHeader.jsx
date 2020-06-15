import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class AuthHeader extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-warning py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col className="px-5" lg="6" md="8" xl="5">
                  {this.props.title ? (
                    <h1 className="text-white">{this.props.title}</h1>
                  ) : null}
                  {this.props.lead ? (
                    <p className="text-lead text-white">{this.props.lead}</p>
                  ) : null}
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

AuthHeader.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string
};

export default AuthHeader;
