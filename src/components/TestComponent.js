// import React from "react";
// import { useForm } from "react-hook-form";

// export default function TestComponent() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   );
// }
// import React, { Component } from "react";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { useForm } from "react-hook-form";

// export default function TestComponent() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

//   console.log(watch("example"));

//   return (
//     <div className="container">
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <div className="h4 text-center">Diagnostics</div>
//         <p className="text-center p-2">
//           Provides maintenance information, costs and repair difficulty.
//         </p>
//         <FormGroup>
//           <Label for="makeSelect">Enter Vin Number</Label>
//           <Input
//             // type="text"
//             // name="text"
//             // id="vinNumber"
//             // placeholder="Vin #"
//             defaultValue="test"
//             {...register("example")}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="modelSelect">Enter Mileage</Label>
//           <Input
//             // type="text"
//             // name="text"
//             // id="mileage"
//             // placeholder="Mileage"
//             defaultValue="test"
//             {...register("example")}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="yearSelect">Enter DTC code</Label>
//           <Input
//             // type="text"
//             // name="text"
//             // id="dtcCode"
//             // placeholder="DTC code"
//             defaultValue="test"
//             {...register("example")}
//           />
//         </FormGroup>
//         {errors.exampleRequired && <span>This field is required</span>}
//         <Input className="m-3" type="submit" color="primary">
//           Search
//         </Input>
//         <Button type="button" color="secondary">
//           Clear
//         </Button>
//       </Form>
//     </div>
//   );
// }

// import React from "react";
// import { useForm } from "react-hook-form";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { VEHICLES } from "../shared/vehicles";

// export default function TestComponent() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => {
//     data.push(VEHICLES);
//   };
//   const Select = React.forwardRef(({ onChange, name, label }, ref) => (
//     <>
//       <Label>{label}</Label>
//       <Select name={name} ref={ref} onChange={onChange}>
//         <option value="20">20</option>
//         <option value="30">30</option>
//       </Select>
//     </>
//   ));

//   return (
//     <Form onSubmit={handleSubmit(onSubmit)}>
//       <Input {...register("firstName")} />
//       <Select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </Select>
//       <Input type="submit" />
//     </Form>
//   );
// }

// import React from "react";
// import { useForm } from "react-hook-form";

// // The following component is an example of your existing Input Component
// const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );

// // you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ onChange, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange}>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));

// const TestComponent = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     data.push(vehicles)
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input label="Make" register={register} required />
//       <Select label="Model" {...register("Model")} />
//       <input type="submit" />
//     </form>
//   );
// };
// export default TestComponent;

import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
// import updateAction from "./actions";
import { addVehicle } from "../redux/ActionCreators";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function TestComponent(props) {
  const { register, handleSubmit, setValue } = useForm();
  // Submit your data into Redux store
  const onSubmit = (data) => props.addVehicle(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("make")} name="make" />
      <Input {...register("model")} name="model" />
      <Input {...register("year")} name="year" />
      <Input {...register("owner")} name="owner" />
      <input type="submit" />
    </Form>
  );
}

// Connect your component with redux
// connect(
//   ({ make, model, year, owner }) => ({ make, model, year, owner }),
//   addVehicle
// )(TestComponent);
