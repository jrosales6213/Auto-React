import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle ,CardText, CardBody, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({vehicle}) {
    return (
        // <Card>
        //     <Link to={`/directory/${vehicle.id}`}>
        //     <CardImg width="100%" src={vehicle.image} alt={vehicle.name} />
        //     <CardImgOverlay>
        //         <CardTitle>{vehicle.name}</CardTitle>
        //     </CardImgOverlay>
        //     </Link>
        // </Card>
<Row  xs={1} md={1}> 
    <Col>
      <Card>
      <Link to={`/directory/${vehicle.id}`}>
        <CardImg variant="top" src={vehicle.image} alt={vehicle.name}/>
        <CardBody>
          <CardTitle className="h5">{vehicle.make} - {vehicle.model} - {vehicle.year}</CardTitle>
          <CardText>
            {vehicle.description}
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
            <div key={vehicle.id} className="col-md-5 m-1">
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
