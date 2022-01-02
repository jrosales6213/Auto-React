// import React, { Component } from "react";
// import { Button, FormGroup, Label, Input, Form } from "reactstrap";
// import { Control, LocalForm, Errors } from "react-redux-form";

// export default class AddVehicle extends Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   make: "",
//     //   model: "",
//     //   year: "",
//     //   owner: "",
//     //   touched: {
//     //     make: false,
//     //     model: false,
//     //     year: false,
//     //     owner: false,
//     //   },
//     // };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(values) {
//     console.log(values.make, values.model, values.year, values.owner);
//     this.props.AddVehicle(values.make, values.model, values.year, values.owner);
//   }
//   render() {
//     return (
//       <div className="container">
//         <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//           <div className="h4 text-center">Add New Vehicle</div>
//           <FormGroup>
//             <Label htmlFor="make">Make</Label>
//             <Control.select
//               type="select"
//               name="make"
//               id="make"
//               model=".make"
//               className="form-control"
//             >
//               <option>Select a make</option>
//               <option>Honda</option>
//               <option>Toyota</option>
//               <option>Hyundai</option>
//               <option>Ford</option>
//               <option>Jeep</option>
//             </Control.select>
//           </FormGroup>
//           <FormGroup>
//             <Label htmlFor="model">Model</Label>
//             <Control.select
//               type="select"
//               name="model"
//               id="model"
//               model=".model"
//               className="form-control"
//             >
//               <option>Select a Model</option>
//               <option>Civic</option>
//               <option>Corolla</option>
//               <option>Accent</option>
//               <option>F-15</option>
//               <option>Cherokee</option>
//             </Control.select>
//           </FormGroup>
//           <FormGroup>
//             <Label htmlFor="year">Year</Label>
//             <Control.select
//               type="select"
//               name="year"
//               id="year"
//               model=".year"
//               className="form-control"
//             >
//               <option>2011</option>
//               <option>2012</option>
//               <option>2013</option>
//               <option>2014</option>
//               <option>2015</option>
//             </Control.select>
//           </FormGroup>
//           <FormGroup>
//             <Label htmlFor="owner">Owners Name</Label>
//             <Control.input
//               type="text"
//               name="owner"
//               id="owner"
//               model=".owner"
//               className="form-control"
//               placeholder="Owners Name"
//             />
//           </FormGroup>
//           <Button className="m-3" type="submit" value="submit" color="primary">
//             Submit
//           </Button>
//         </LocalForm>
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
import { Button, FormGroup, Label, Input, Form } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

export default class AddVehicle extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   make: "",
    //   model: "",
    //   year: "",
    //   owner: "",
    //   touched: {
    //     make: false,
    //     model: false,
    //     year: false,
    //     owner: false,
    //   },
    // };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values.make, values.model, values.year, values.owner);
    this.props.AddVehicle(values.make, values.model, values.year, values.owner);
  }
  render() {
    return (
      <div className="container">
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <div className="h4 text-center">Add New Vehicle</div>
          <FormGroup>
            <Label htmlFor="make">Make</Label>
            <Control.select
              type="select"
              name="make"
              id="make"
              model=".make"
              className="form-control"
            >
              <option>Select a make</option>
              <option>Honda</option>
              <option>Toyota</option>
              <option>Hyundai</option>
              <option>Ford</option>
              <option>Jeep</option>
            </Control.select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="model">Model</Label>
            <Control.select
              type="select"
              name="model"
              id="model"
              model=".model"
              className="form-control"
            >
              <option>Select a Model</option>
              <option>Civic</option>
              <option>Corolla</option>
              <option>Accent</option>
              <option>F-15</option>
              <option>Cherokee</option>
            </Control.select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="year">Year</Label>
            <Control.select
              type="select"
              name="year"
              id="year"
              model=".year"
              className="form-control"
            >
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
            </Control.select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="owner">Owners Name</Label>
            <Control.input
              type="text"
              name="owner"
              id="owner"
              model=".owner"
              className="form-control"
              placeholder="Owners Name"
            />
          </FormGroup>
          <Button className="m-3" type="submit" value="submit" color="primary">
            Submit
          </Button>
        </LocalForm>
      </div>
    );
  }
}
