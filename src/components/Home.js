import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderHomePage({ vehicle }) {
  return (
    <Row>
      <Col>
        <Card className="directory-card mt-4">
          <Link to={`/directory/${vehicle.id}`}>
            <div className="p-4">
              <CardImg
                variant="top"
                className="card-image"
                src={vehicle.image}
                alt={vehicle.name}
              />
            </div>
            <CardBody>
              <CardTitle className="h5">
                {vehicle.year}-{vehicle.make} - {vehicle.model}
              </CardTitle>
              <CardText>This Vehicle belongs to : {vehicle.owner}</CardText>
              {/* <CardText>Next Service Date : {comments[0].date}</CardText> */}
            </CardBody>
          </Link>
        </Card>
      </Col>
    </Row>
  );
}

function DashboardItems(props) {
  const homepage = props.vehicles.map((vehicle) => {
    return (
      <div key={vehicle.id} className="col-md-5">
        <RenderHomePage vehicle={vehicle} />
      </div>
    );
  });

  return (
    <div className="container">
      <Row>{homepage}</Row>
    </div>
  );
}

export default DashboardItems;
