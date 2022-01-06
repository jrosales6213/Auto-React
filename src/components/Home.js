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
import { Loading } from "./LoadingComponent";

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
  const homepage = props.vehicles.vehicles.map((vehicle) => {
    return (
      <div key={vehicle.id} className="col-md-5 m-1">
        <RenderHomePage vehicle={vehicle} />
      </div>
    );
  });

  if (props.vehicles.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.vehicles.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{props.vehicles.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Row>{homepage}</Row>
    </div>
  );
}

export default DashboardItems;
