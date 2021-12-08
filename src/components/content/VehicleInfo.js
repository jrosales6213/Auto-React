import React, { Component } from "react";
import { faTrash, faEdit, faPencil } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function RenderVehicles({ vehicle }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={vehicle.image} alt={vehicle.make} />
        <CardBody>
          <CardTitle className="h4">
            {vehicle.year} - {vehicle.make}-{vehicle.model}
          </CardTitle>
          <CardText className="h6">
            This vehicle belongs to : {vehicle.description}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      author: "",
      text: "",
      touched: {
        author: false,
        text: false,
      },
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleSubmit(values) {
    this.toggleModal();
    this.props.addComment(this.props.vehicleId, values.text, values.author);
  }

  render() {
    return (
      <div>
        <div className="p-3 d-flex justify-content-center">
          <Button type="submit" onClick={this.toggleModal} color="warning">
            {/* <FontAwesomeIcon className ="fa-lg" icon={faPencil}/>  */}
            Submit New Comment
          </Button>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="author">Next Service Date</Label>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  className="form-control"
                  placeholder="Date"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                ></Control.text>
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    minLength: "Must be at least 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="text">Text</Label>
                <Control.textarea
                  rows="6"
                  model=".text"
                  id="text"
                  name="text"
                  className="form-control"
                />
              </div>
              <Button type="submit" value="submit" className="bg-primary">
                {" "}
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function RenderComments({ comments, addComment, vehicleId, deleteComment }) {
  if (comments) {
    return (
      <div className="col">
        <CommentForm vehicleId={vehicleId} addComment={addComment} />
        <Table deleteComment={deleteComment}>
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
                  <td>{comment.nextServiceDay}</td>
                  <td>
                    <FontAwesomeIcon className="mr-1" icon={faEdit} />
                    <FontAwesomeIcon
                      key={comment.id}
                      onClick={() => this.props.deleteComment(comment.id)}
                      icon={faTrash}
                    />

                    {/* <delete and edit buttons go here/> */}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    );
  }
  return <div />;
}

function VehicleInfo(props) {
  if (props.vehicle) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <RenderVehicles vehicle={props.vehicle} />
        </div>
        <div className="row">
          <RenderComments
            comments={props.comments}
            addComment={props.addComment}
            vehicleId={props.vehicle.id}
            deleteComment={props.deleteComment}
          />
        </div>
      </div>
    );
  }
  return <div />;
}

export default VehicleInfo;
