import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

class Photo extends React.Component {
  render() {
    return (
      <Card className="mb-3">
        <Card.Img src={this.props.link} />
        <Card.Body>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}


export default Photo;