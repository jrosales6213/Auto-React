import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderVehicles({vehicle}) {
    return (
    <div className="col-md-5 m-1">
        <Card>
            <CardImg top src={vehicle.image} alt={vehicle.make} />
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
           <div className ="col-md-5 m-1">
               <h4>Comments</h4>
               {comments.map((comment)=>{
               return (
                   <div key ={comment.id}>
                       <p>{comment.text}</p>
                       <p>--{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                       </p>
                   </div>
               )
               })}
           </div>
        )
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