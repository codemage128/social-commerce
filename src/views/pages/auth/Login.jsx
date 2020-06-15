
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { connect } from 'react-redux';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledAlert
} from "reactstrap";
// core components
import AuthHeader from "components/Headers/AuthHeader.jsx";
import { authLogin } from '../../../store/actions/auth';


class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  constructor() {
    super();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message) {
      this.setState({
        message: nextProps.message
      });
    }
    if (
      nextProps.responseErrors &&
      nextProps.responseErrors !== this.state.responseErrors
    ) {
      this.setState({
        responseErrors: nextProps.responseErrors
      });
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    let credential = { email, password };
    // this.props.authLogin(credential);
    this.props.history.push('/home/index');
  }

  render() {
    const { error, responseErrors, message } = this.state;

    return (
      <>
        <Container className="pb-5 py-7 py-lg-8">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary border-0 mb-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <big>Sign In</big>
                    <hr></hr>
                  </div>
                  {responseErrors && (
                    <UncontrolledAlert color="danger">
                      <span className="alert-text ml-1">
                        <strong dangerouslySetInnerHTML={{ __html: responseErrors }}></strong>
                      </span>
                    </UncontrolledAlert>
                  )}
                  {error && (
                    <UncontrolledAlert color="warning">
                      <span className="alert-text ml-1">
                        <strong dangerouslySetInnerHTML={{ __html: error }}></strong>
                      </span>
                    </UncontrolledAlert>
                  )}
                  {
                    message &&
                    <UncontrolledAlert color="success">
                      <span className="alert-text ml-1" dangerouslySetInnerHTML={{ __html: message }}>
                      </span>
                    </UncontrolledAlert>
                  }
                  <Form role="form" method="POST" onSubmit={this.onSubmit}>
                    <FormGroup
                      className={classnames("mb-3", {
                        focused: this.state.focusedEmail
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          name="email"
                          onFocus={() => this.setState({ focusedEmail: true })}
                          onBlur={() => this.setState({ focusedEmail: false })}
                          onChange={this.onChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: this.state.focusedPassword
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          name="password"
                          onFocus={() => this.setState({ focusedPassword: true })}
                          onBlur={() => this.setState({ focusedPassword: false })}
                          onChange={this.onChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="saveLogin"
                        type="checkbox"
                        name="saveLogin"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" saveLogin"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="warning" type="submit">
                        Sign in
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Row className="mt-3">
                {/* <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <small>Forgot password?</small>
                  </a>
                </Col> */}
                <Col className="text-right" xs="12">
                  <a className="text-light" href="/auth/register">
                    <small>Create new account</small>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}



const mapStateToProps = ({ auth }) => ({
  responseErrors: auth.errors,
  message: auth.message
});

export default connect(mapStateToProps, { authLogin })(Login);
