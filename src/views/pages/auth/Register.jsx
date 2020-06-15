import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
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
import { connect } from 'react-redux';
import Select from 'react-select';
import { authRegister } from "../../../store/actions/auth";

const options = [
  { value: 'user', label: 'User' },
  { value: 'brand', label: 'Brand' }
];

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    cPassword: "",
    phone: "",
    userType: "",
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
  onSelectChange = (e) => {
    this.setState({ userType: e.value });
  }
  onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "name": this.setState({ name: value }); break;
      case "email": this.setState({ email: value }); break;
      case "phone": this.setState({ phone: value }); break;
      case "password": this.setState({ password: value }); break;
      case "cPassword": this.setState({ cPassword: value }); break;
      default: break;
    }
  }
  validateError = (credential) => {
    const { name, password, cPassword, userType } = credential;
    if (name.length < 5) {
      this.setState({ error: "User name should be more than 5 letters" });
      return false;
    }
    if (userType === "") {
      this.setState({ error: "Please select the user type" });
      return false;
    }
    if (password !== cPassword) {
      this.setState({ error: "Not match password!" });
      return false;
    }
    return true;
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, cPassword, phone, userType } = this.state;
    var credential = {
      name,
      email,
      password,
      cPassword,
      phone,
      userType
    };
    var validate = this.validateError(credential);
    if (validate === true) {
      this.props.authRegister(credential);
    }
  }
  render() {
    const { error, responseErrors, message } = this.state;
    return (
      <>
        <Container className="pb-5 py-7 py-lg-8">
          <Row className="justify-content-center">
            <Col lg="6" md="8">
              <Card className="bg-secondary border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <big>Sign Up</big>
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
                      className={classnames({
                        focused: this.state.focusedName
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Name"
                          type="text"
                          name="name"
                          onFocus={() => this.setState({ focusedName: true })}
                          onBlur={() => this.setState({ focusedName: false })}
                          onChange={this.onChange}
                        />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup
                      className={classnames({
                        focused: this.state.focusedEmail
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative mb-3">
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
                        focused: this.state.focusedEmail
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-phone"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Phone"
                          type="phone"
                          name="phone"
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
                          placeholder="Confirm Password"
                          type="password"
                          name="cPassword"
                          onFocus={() => this.setState({ focusedPassword: true })}
                          onBlur={() => this.setState({ focusedPassword: false })}
                          onChange={this.onChange}
                        />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup
                      className={classnames({
                        focused: this.state.focusedName
                      })}
                    >
                      <Select name="userType" options={options} className="input-group-merge input-group-alternative mb-3"
                        onChange={this.onSelectChange} />
                    </FormGroup>
                    <div className="text-muted font-italic">
                      <small>
                        password strength:{" "}
                        <span className="text-success font-weight-700">
                          strong
                        </span>
                      </small>
                    </div>
                    <Row className="my-4">
                      <Col xs="12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckRegister"
                            type="checkbox"
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckRegister"
                          >
                            <span className="text-muted">
                              I agree with the{" "}
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Privacy Policy
                              </a>
                            </span>
                          </label>
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button className="mt-4" color="warning" type="submit">
                        Create account
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
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

export default connect(mapStateToProps, { authRegister })(Register);
