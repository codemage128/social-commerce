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
   PaginationLink,
   Media,
   Form,
   Input
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import HomeNavbar from "components/Navbars/HomeNavbar.jsx";
import IndexHeader from "components/Headers/IndexHeader.jsx";
import AuthFooter from "components/Footers/AuthFooter.jsx";

class Content extends React.Component {
   state = {
      activeIndex: 0,
      animating: false,
      array: [1, 2, 3, 4, 5],
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
                                 <BreadcrumbItem tag="a" href="#">Single</BreadcrumbItem>
                              </Breadcrumb>
                           </div>
                        </Col>
                     </Row>
                     <Row className="mt-4 mb-9">
                        <Col lg="12">
                           <Row>
                              <Col lg="7 col-auto">
                                 {/* <img alt="..."
                                    className="avatar product-avatar"
                                    src={require("assets/img/theme/landing-2.png")} /> */}
                                 <UncontrolledCarousel items={this.state.items} />
                                 <Card>
                                    <CardBody>
                                       <Row className="align-items-center">
                                          <Col lg="12">
                                             This is the e-book uploaded by iYans company.
                                             "TITLE is the romeo and julet. In the future we will add many kinds of e-books in that platform. Please enjoy that." Thanks and reading time
                                          </Col>
                                       </Row>
                                    </CardBody>
                                 </Card>
                                 <Card>
                                    <CardHeader>
                                       Comment
                                    </CardHeader>
                                    <CardBody>
                                       {this.state.array.map(item => (
                                          <>
                                             <Row className="align-items-center">
                                                <Col lg="2">
                                                   <img alt="..."
                                                      className="avatar product-avatar rounded-circle"
                                                      src={require("assets/img/theme/team-1.jpg")} />
                                                </Col>
                                                <Col lg="10">
                                                   <Row>
                                                      <Col lg="4">Name Iyans</Col>
                                                      <Col lg="8">15 of the June</Col>
                                                   </Row>
                                                   <Row className="mt-3">
                                                      <Col>
                                                         This is the e-book uploaded by iYans company.</Col>
                                                   </Row>

                                                </Col>
                                             </Row>
                                             <hr></hr>
                                          </>
                                       ))}
                                       <Media className="align-items-center">
                                          <img
                                             alt="..."
                                             className="avatar avatar-lg rounded-circle mr-4"
                                             src={require("assets/img/theme/team-4.jpg")}
                                          />
                                          <Media body>
                                             <Form>
                                                <Input
                                                   placeholder="Write your comment"
                                                   rows="2"
                                                   type="textarea"
                                                />
                                             </Form>
                                          </Media>
                                          <Button className="btn btn-warning m-3">Commit</Button>
                                       </Media>
                                    </CardBody>
                                 </Card>
                              </Col>
                              <Col lg="5">
                                 <Card className="text-center">
                                    <CardHeader>
                                       <h1>Budget : $500</h1>
                                    </CardHeader>
                                    <CardBody>
                                       <h3>Price is in US dollars. Price displayed excludes sales tax.</h3>
                                       <Button className="btn btn-outline-warning mt-4">Add cart</Button>
                                       <Button className="btn btn-warning mt-4">Buy now</Button>
                                    </CardBody>
                                 </Card>
                                 <Card className="text-center">
                                    <CardBody>
                                       <Row className="align-items-center">
                                          <Col lg="6">
                                             <img alt="..."
                                                className="product-avatar"
                                                src={require("assets/img/theme/landing-2.png")} />
                                          </Col>
                                          <Col lg="6">
                                             <h4>User Brand</h4>
                                             <Button className="btn btn-outline-warning">Portfolio</Button>
                                          </Col>
                                       </Row>
                                    </CardBody>
                                 </Card>
                                 <Card>
                                    <CardBody>
                                       <Row className="align-items-center">
                                          <Col lg="12">
                                             <i className="ni ni-cart text-warning"></i><big>&nbsp;&nbsp;&nbsp;&nbsp;15 Sales</big>
                                          </Col>
                                       </Row>
                                    </CardBody>
                                 </Card>
                                 <Card>
                                    <CardBody>
                                       <Row className="align-items-center">
                                          <Col lg="12">
                                             <i className="ni ni-chat-round text-warning"></i><big>&nbsp;&nbsp;&nbsp;&nbsp;2 Comments</big>
                                          </Col>
                                       </Row>
                                    </CardBody>
                                 </Card>
                                 <Card>
                                    <CardBody>
                                       <Row className="align-items-center">
                                          <Col lg="12">
                                             <i className="ni ni-active-40 text-warning"></i><big>&nbsp;&nbsp;&nbsp;&nbsp;6 rankings</big>
                                          </Col>
                                       </Row>
                                    </CardBody>
                                 </Card>
                              </Col>
                           </Row>
                        </Col>
                     </Row>
                  </Container>
               </section>
            </div>
         </>
      );
   }
}

export default Content;
