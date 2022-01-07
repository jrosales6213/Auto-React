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
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function RenderVehicles({ vehicle }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={baseUrl + vehicle.image} alt={vehicle.make} />

        <CardBody>
          <CardTitle className="h4">
            {vehicle.year} - {vehicle.make}-{vehicle.model}
          </CardTitle>
          <CardText className="h6">
            This vehicle belongs to : {vehicle.owner}
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
      date: "",
      text: "",
      nextServiceDay: "",
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
    this.props.postComment(
      this.props.vehicleId,
      values.date,
      values.text,
      values.nextServiceDay
    );
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
                <Label htmlFor="date">Date</Label>
                <Control.text
                  model=".date"
                  id="date"
                  name="date"
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
                  model=".date"
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
                <Label htmlFor="nextServiceDay">Next Service Date</Label>
                <Control.text
                  model=".nextServiceDay"
                  id="nextServiceDay"
                  name="nextServiceDay"
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
                  model=".nextServieDay"
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
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function RenderComments({
  comments,
  postComment,
  vehicleId,
  deleteComment,
  editComment,
}) {
  if (comments) {
    return (
      <div className="col">
        <CommentForm vehicleId={vehicleId} postComment={postComment} />
        <Table>
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
                    <button className="btn" onClick={editComment}>
                      <FontAwesomeIcon
                        className=""
                        icon={faEdit}
                        // onClick={console.log("you clicked edit button")}
                      />
                    </button>
                    <button className="btn" onClick={deleteComment}>
                      <FontAwesomeIcon
                        // key={comment.vehicleId}
                        // onClick={console.log("you clicked delete button")}
                        icon={faTrash}
                      />
                    </button>
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
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{props.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }
  if (props.vehicle) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <RenderVehicles vehicle={props.vehicle} />
        </div>
        <div className="row">
          <RenderComments
            comments={props.comments}
            postComment={props.postComment}
            vehicleId={props.vehicle.id}
            deleteComment={props.deleteComment}
            editComment={props.editComment}
          />
        </div>
      </div>
    );
  }
  return <div />;
}

export default VehicleInfo;
