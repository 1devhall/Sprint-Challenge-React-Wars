import React from "react";
import {Card, CardHeader, CardBody, CardText, Row, Col } from "reactstrap";
  

const CharacterCard = (props) => {
    return (
       
        <Row>
          <Col xs="6" md="" xl="">
           <Card>
           <CardHeader>Star Wars</CardHeader>
           <CardBody>
            <CardText>{props.name}</CardText>
            <CardText>{props.gender}</CardText>
            <CardText>Height: {props.height}</CardText>
          </CardBody>
        </Card>
      </Col>
      </Row>
     
   );
}

export default CharacterCard
