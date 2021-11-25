import React from 'react';
import {
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardImg, CardText, CardBody, CardTitle, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RenderVehicles({vehicle}) {
    return (
    <div className="col-md-5 m-1" >
        <Card>
            <CardImg top src={vehicle.image} alt={vehicle.make}  />
              <CardBody>
                <CardTitle className="h4">{vehicle.year} - {vehicle.make}-{vehicle.model}</CardTitle>
                <CardText className="h6">This vehicle belongs to : {vehicle.description}</CardText>
              </CardBody>
        </Card>
      </div>
    )
}


function RenderComments({comments}) {
    if (comments){
        return (
        <div className='col'>
        <Table >
          <thead>
            <tr>
              <th>Date</th>
              <th>Notes</th>
              <th>Next Service</th>
              <th>Edit</th>
            </tr>
          </thead>
          {comments.map((comment) => {
              return (
                  <tbody>
                  <tr key={comment.id}>
                    <td>{comment.date}</td>
                    <td>{comment.text}</td>
                    <td>{comment.author}</td>
                    <td>
                      <FontAwesomeIcon className="mr-1" icon={faEdit} />
                      <FontAwesomeIcon  icon={faTrash}/>
                    </td>
                </tr>
                </tbody>
              )
          })}
      </Table>
      </div>
    );
  }
  return <div/>
}
     

function VehicleInfo(props) {
    if (props.vehicle) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <RenderVehicles vehicle={props.vehicle} />
                </div>
                <div className="row">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default VehicleInfo;