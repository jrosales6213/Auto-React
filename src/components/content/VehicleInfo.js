import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Table } from 'reactstrap';

function RenderVehicles({vehicle}) {
    return (
    <div className="col-md-5 m-1" >
        <Card>
            <CardImg top src={vehicle.image} alt={vehicle.make}  />
              <CardBody>
                <CardTitle>{vehicle.make}</CardTitle>
                <CardText>{vehicle.description}</CardText>
              </CardBody>
        </Card>
     </div>
                )
}

function RenderComments({comments}) {
    if (comments){
        return (
        //    <div className ="col-md-5 m-1">
        //        <h4>Comments</h4>
        //        {comments.map((comment)=>{
        //        return (
        //            <div key ={comment.id}>
        //                <p>{comment.text}</p>
        //                <p>--{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
        //                </p>
        //            </div>
        //        )
        //        })}
        //    </div>
        <Table >
        <thead>
          <tr>
            <th>Date</th>
            <th>Notes</th>
            <th>Next Service</th>
          </tr>
        </thead>
        {comments.map((comment) => {
            return (
                <tbody>
                <tr key={comment.id}>
                  {/* <th scope="row">1</th> */}
                  <td>{comment.date}</td>
                  <td>{comment.text}</td>
                  <td>{comment.author}</td>
                </tr>
              </tbody>
            )
        })}
      </Table>
    );
  }
  return <div/>
}
     

function VehicleInfo(props) {
    if (props.vehicle) {
        return (
            <div className="container">
                <div className="row">
                    <RenderVehicles vehicle={props.vehicle} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default VehicleInfo;