import React from "react";

// reactstrap components
import {
   Badge,
   Button,
   Card,
   CardHeader,
   CardFooter,
   DropdownMenu,
   DropdownItem,
   DropdownToggle,
   UncontrolledDropdown,
   Media,
   Pagination,
   PaginationItem,
   PaginationLink,
   Progress,
   Table,
   Container,
   Row,
   Col,
   UncontrolledTooltip,
   Form,
   FormGroup,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   Input
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.jsx";

class Products extends React.Component {
   render() {
      return (
         <>
            <SimpleHeader name="All" parentName="Products" />
            <Container className="mt--6" fluid>
               <Row>
                  <div className="col">
                     <Card>
                        <CardHeader>
                           <Row className="align-items-center">
                              <Col lg="4">
                                 <h3>Product List</h3>
                              </Col>
                              <Col lg="6">
                                 <Form
                                    className="navbar-search form-inline navbar-search-light">
                                    <FormGroup className="mb-0">
                                       <InputGroup className="input-group-alternative input-group-merge">
                                          <InputGroupAddon addonType="prepend">
                                             <InputGroupText>
                                                <i className="fas fa-search" />
                                             </InputGroupText>
                                          </InputGroupAddon>
                                          <Input placeholder="Search" type="text" />
                                       </InputGroup>
                                    </FormGroup>
                                    <button
                                       aria-label="Close"
                                       className="close"
                                       type="button"
                                       onClick={this.closeSearch}
                                    >
                                       <span aria-hidden={true}>×</span>
                                    </button>
                                 </Form>
                              </Col>
                              <Col lg="1">
                                 <Button className="btn btn-warning">Add Product</Button>
                              </Col>
                           </Row>
                        </CardHeader>
                        <Table className="align-items-center" responsive>
                           <thead className="thead-light">
                              <tr>
                                 <th>No</th>
                                 <th>Image</th>
                                 <th>Name</th>
                                 <th>Description</th>
                                 <th>Price</th>
                                 <th>Uploader</th>
                                 <th>Date</th>
                                 <th>Action</th>
                              </tr>
                           </thead>
                           <tbody className="list">
                              <tr>
                                 <td>
                                    1
                                 </td>
                                 <td>
                                    <a
                                       className="avatar rounded-circle"
                                       href="#pablo"
                                       onClick={e => e.preventDefault()}
                                    >
                                       <img
                                          alt="..."
                                          src={require("assets/img/theme/team-1.jpg")}
                                       />
                                    </a>
                                 </td>
                                 <td>E-book- Love story</td>
                                 <td>
                                    This is the algorathm
                                 </td>
                                 <td>
                                    $ 120
                                 </td>
                                 <td>
                                    iYans
                                 </td>
                                 <td>
                                    12.6.2020
                                 </td>
                                 <td>
                                    <UncontrolledDropdown>
                                       <DropdownToggle
                                          className="btn-icon-only text-light"
                                          color=""
                                          role="button"
                                          size="sm"
                                       >
                                          <i className="fas fa-ellipsis-v" />
                                       </DropdownToggle>
                                       <DropdownMenu className="dropdown-menu-arrow" right>
                                          <DropdownItem
                                             href="#pablo"
                                             onClick={e => e.preventDefault()}
                                          >Delete</DropdownItem>
                                       </DropdownMenu>
                                    </UncontrolledDropdown>
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                        <CardFooter className="py-4">
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
                        </CardFooter>
                     </Card>
                  </div>
               </Row>
            </Container>
         </>
      );
   }
}

export default Products;
