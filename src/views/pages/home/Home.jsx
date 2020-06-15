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
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  Carousel,
  CarouselIndicators,
  UncontrolledCarousel,
  Breadcrumb,
  BreadcrumbItem,
  ListGroup,
  ListGroupItem,
  CardHeader,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import HomeNavbar from "components/Navbars/HomeNavbar.jsx";
import IndexHeader from "components/Headers/IndexHeader.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";

class Home extends React.Component {
  state = {
    activeIndex: 0,
    animating: false,
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    items: [
      {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        key: '1'
      },
      {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        key: '2'
      },
      {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        key: '3'
      }
    ]
  }
  render() {
    return (
      <>
        <div className="main-content">
          <UncontrolledCarousel items={this.state.items} />
          <section className="section section-lg pt-lg-0 mt--7">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape bg-gradient-info text-white rounded-circle mb-4">
                            <i className="ni ni-cart" />
                          </div>
                          <h4 className="h3 text-info text-uppercase">
                            Products
                          </h4>
                          <p className="description mt-3">
                            There are many kinds of E-books. Please enjoy. That's greate.</p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">

                        <CardBody className="py-5">
                          <div className="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                            <i className="ni ni-box-2" />
                          </div>
                          <h4 className="h3 text-success text-uppercase">
                            Services
                          </h4>
                          <p className="description mt-3">
                            These are services. coding, resume.Anyway ok. These are perfect services.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4">
                            <i className="ni ni-money-coins" />
                          </div>
                          <h4 className="h3 text-warning text-uppercase">
                            Crypto-currency
                          </h4>
                          <p className="description mt-3">
                            There are many kinds of crypocurrency. Also iYans coin.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="py-5">
            <Container>
              <Row>
                <Col lg="12">
                  <div>
                    <Breadcrumb tag="nav" listTag="div">
                      <BreadcrumbItem tag="a" href="#"><i className="fa fa-home"></i>
                      </BreadcrumbItem>
                      <BreadcrumbItem tag="a" href="#">Product</BreadcrumbItem>
                      <BreadcrumbItem tag="a" href="#">E-book</BreadcrumbItem>
                    </Breadcrumb>
                  </div>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg="3">
                  <ListGroup>
                    <ListGroupItem active tag="a" href="#" action><i className="ni ni-cart" /> Products</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>E-books</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Art / Motion Graphics / Any forms of artistic value</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Virtual Gift or iYans merchandise</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Coupons / iTunes card</ListGroupItem>
                    <ListGroupItem active tag="a" href="#" action><i className="ni ni-box-2" /> Services</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Sketch or painting</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Written resume</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Building plan</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>3D renders</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Source code</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Motion custom graphics</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Beats</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Voice over</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Motion scripts</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Any idea worth selling</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Intellectual Copywrite ©</ListGroupItem>
                    <ListGroupItem active tag="a" href="#" action><i className="ni ni-money-coins" /> iYans Services</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>iYans gift Card</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>iYans coins</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col lg="9">
                  {this.state.array.map(item =>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col lg="7 col-auto" style={{ height: "100%" }}>
                            <img alt="..."
                              className="avatar product-avatar"
                              src={require("assets/img/theme/landing-2.png")} />
                          </Col>
                          <Col lg="5">
                            <Row>
                              <Col className="text-center mt-4">
                                This is the react argon template This is the react argon template.
                              </Col>
                            </Row>
                            <Row>
                              <Col className="text-center m-3">
                                $100
                              </Col>
                            </Row>
                            <Row>
                              <Col className="text-center">
                                Uploaded at 12 May June
                              </Col>
                            </Row>
                            <Row>
                              <Col className="text-center mt-6" lg="12">
                                <Link to="/home/product/e-book/single">
                                  <Button className="btn btn-outline-warning"><i className="ni ni-cart"></i> Order</Button>
                                </Link>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  )}
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Home;
