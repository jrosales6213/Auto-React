import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);

class NewVehicleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      make: "",
      model: "",
      year: "",
      owner: "",
      touched: {
        make: false,
        model: false,
        year: false,
        owner: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
    this.props.postNewVehicle(
      values.make,
      values.model,
      values.year,
      values.owner
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h2>Register New Vehicle</h2>
            <hr />
          </div>
          <div className="col-md-10">
            <Form
              model="feedbackForm"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Label htmlFor="make" md={2}>
                  Make
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".make"
                    id="make"
                    name="make"
                    placeholder="Vehicle Make"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".make"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="model" md={2}>
                  Model
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".model"
                    id="model"
                    name="model"
                    placeholder="Vehicle Model"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".model"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="year" md={2}>
                  Year
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".year"
                    id="year"
                    name="year"
                    placeholder="Vehicle Year"
                    className="form-control"
                    validators={{
                      required,
                      maxLength: maxLength(4),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".year"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 10 numbers",
                      maxLength: "Must be 15 numbers or less",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="owner" md={2}>
                  Owner
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".owner"
                    id="owner"
                    name="owner"
                    placeholder="Owner Name"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".owner"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>
              <Row className={"form-group"}>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewVehicleForm;
