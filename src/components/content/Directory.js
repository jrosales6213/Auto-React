import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({vehicle}) {
    return (
        <Card>
            <Link to={`/directory/${vehicle.id}`}>
            <CardImg width="100%" src={vehicle.image} alt={vehicle.name} />
            <CardImgOverlay>
                <CardTitle>{vehicle.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
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
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;
