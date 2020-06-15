import React from "react";
import BrandSimpleHeader from "components/Headers/BrandSimpleHeader.jsx";
import { Container } from "reactstrap";

class BrandAllow extends React.Component {
   render() {
      return (
         <>
            <BrandSimpleHeader name="All" parentName="Users" />
            <Container className="mt--6" fluid>
            </Container>
         </>
      );
   }
}

export default BrandAllow;
