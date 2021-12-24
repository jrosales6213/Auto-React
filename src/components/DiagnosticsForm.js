import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Diagnostics extends Component {
  render() {
    return (
      <div className="container">
        <Form>
          <div className="h4 text-center">Diagnostics</div>
          <p className="text-center p-2">
            Provides maintenance information, costs and repair difficulty.
          </p>
          <FormGroup>
            <Label for="makeSelect">Enter Vin Number</Label>
            <Input type="text" name="text" id="vinNumber" placeholder="Vin #" />
          </FormGroup>
          <FormGroup>
            <Label for="modelSelect">Enter Mileage</Label>
            <Input type="text" name="text" id="mileage" placeholder="Mileage" />
          </FormGroup>
          <FormGroup>
            <Label for="yearSelect">Enter DTC code</Label>
            <Input
              type="text"
              name="text"
              id="dtcCode"
              placeholder="DTC code"
            />
          </FormGroup>
          <Button className="m-3" type="button" color="primary">
            Search
          </Button>
          <Button type="button" color="secondary">
            Clear
          </Button>
        </Form>
      </div>
    );
  }
}
