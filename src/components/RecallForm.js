import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class RecallForm extends Component {
  render() {
    return (
      <div className="container">
        <Form>
          <div className="h4 text-center">Recall Infomation</div>
          <p className="text-center p-2">
            Provides safety recall information. Search Recalls for you Vehicle.
          </p>
          <FormGroup>
            <Label for="vinNumber">Vin Number</Label>
            <Input
              type="text"
              name="text"
              id="vinNumber"
              placeholder="vin number"
            />
          </FormGroup>
          <p className="text-center p-1">or</p>
          <FormGroup>
            <Label for="makeSelect">Make</Label>
            <Input type="select" name="make" id="makeSelect">
              <option>Select a make</option>
              <option>Honda</option>
              <option>Toyota</option>
              <option>Hyundai</option>
              <option>Ford</option>
              <option>Jeep</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="modelSelect">Model</Label>
            <Input type="select" name="model" id="modelSelect">
              <option>Select a Model</option>
              <option>Civic</option>
              <option>Corolla</option>
              <option>Accent</option>
              <option>F-15</option>
              <option>Cherokee</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="yearSelect">Year</Label>
            <Input type="select" name="year" id="yearSelect">
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
            </Input>
          </FormGroup>
          <Button className="m-3" type="button" color="primary">
            Submit
          </Button>
          <Button type="button" color="secondary">
            Clear
          </Button>
        </Form>
      </div>
    );
  }
}
