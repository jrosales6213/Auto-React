import React from 'react';
import { Card, CardImg, CardTitle ,CardText, CardBody, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({vehicle}) {
    return (
        <Row xs={1} > 
            <Col>
            <Card>
            <Link to={`/directory/${vehicle.id}`}>
                <CardImg variant="top" className="card-image" src={vehicle.image} alt={vehicle.name}/>
                <CardBody>
                <CardTitle className="h5">{vehicle.year}-{vehicle.make} - {vehicle.model}</CardTitle>
                <CardText>
                    This Vehicle belongs to : {vehicle.description}
                </CardText>
                <CardText>
                    Next Service Date : {vehicle.comments[0].date}
                </CardText>
                </CardBody>
                </Link>
            </Card>
            </Col>
        </Row>
    );
}

function Directory(props) {

    const directory = props.vehicles.map(vehicle => {
        return (
            <div key={vehicle.id} className="col-md-3 m-1">
                <RenderDirectoryItem vehicle={vehicle}/>
            </div>
        );
    });

    return (
        <div className="container">
            <Row >
                {directory}
            </Row>
        </div>
    );
}

export default Directory;
