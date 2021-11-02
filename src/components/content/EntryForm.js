import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody,Label, Form, FormControl} from 'reactstrap';
import classNames from "classnames";


// function EntryForm() {
//   return (
//     <>
//       <Form>
//         <FormGroup>
//           <label htmlFor="searchMakeInput">Make</label>
//           <Input
//             id="searchMakeInput"
//             placeholder="ex. Toyota"
//             type="input"
//           ></Input>
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="searchModelInput">Model</label>
//           <Input
//             id="searchModelInput"
//             placeholder="ex. Civic"
//             type="input"
//           ></Input>
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="searchYearInput">Year</label>
//           <Input
//             id="searchYearInput"
//             placeholder=""
//             type="input"
//           ></Input>
//         </FormGroup>
//         <FormGroup>
//           <label htmlFor="inputMileage">Mileage</label>
//           <Input
//             id="inputMileage"
//             placeholder=""
//             type="input"
//           ></Input>
//         </FormGroup>
//         <Button type="submit" color="primary" size="lg">Submit</Button>
//       </Form>
//     </>
//   );
// }

// export default EntryForm;


// class CommentForm  {
//   constructor(props) {
//       super(props);
      
//       this.state = {
//           isModalOpen: false,
//           make: '',
//           model: '',
//           year: '',
//           mileage: '',
//           touched: {
//               make: false,
//               model: false,
//               year: false,
//               mileage: false

//           }
//       };
      
//       this.toggleModal = this.toggleModal.bind(this);
//       // this.handleSubmit = this.handleSubmit.bind(this);
//   } 
  

  
//   toggleModal = () => {
//       this.setState({
//         isModalOpen: !this.state.isModalOpen
//       });
//     };

//   //   handleSubmit(values) {
//   //     this.toggleModal();
//   //     this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
//   // }
  
//   render() {
//       return (
//           <div>
//               <Button outline type="submit" onClick={this.toggleModal}>
//                   <i className ="fa fa-pencil fa-lg"></i>  Submit Comment
//               </Button>
//               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                   <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
//                       <ModalBody>
//                           <Form>
//                               <div className="form-group">
//                                       <Label htmlFor="make">Make</Label>
//                                       <select model =".make" id="make" name ="make" className="form-control">
//                                           <option>1</option>
//                                           <option>2</option>
//                                           <option>3</option>
//                                           <option>4</option>
//                                           <option>5</option>
//                                       </select>
//                               </div>
//                               <div className="form-group">
//                                       <Label htmlFor="model">Author</Label>
//                                       <input model=".model" id="model" name="model" className="form-control" placeholder="Enter Model">
//                                       </input>
                                      
//                               </div>
//                               <div className="form-group">
//                                   <Label htmlFor="year">Year</Label>
//                                   <textarea rows="6" model=".text" id="text" name="text" className="form-control"/>
//                               </div>
//                               {/* <Button type="submit" value="submit" className="bg-primary"> Submit     
//                               </Button> */}
//                           </Form>
//                       </ModalBody>
//                   </Modal>
//           </div>
//       )
//   } 
// }

// export default CommentForm;

const CommentForm = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const { make , model, year } = props;

  
  return (
    <div>
      <Button
        outline
        onClick={toggle}
        type="submit"
        className={classNames({ "menu-open": !collapsed })}
      >
        Add Car
      </Button>

      <Modal isOpen={!collapsed}>
                  <ModalHeader toggle={toggle}>Add Car</ModalHeader>
                      <ModalBody>
                          <Form >
                              <div className="form-group">
                                      <Label htmlFor={make}>Make</Label>
                                      <select model ={make} id={make} name ={make} className="form-control" >
                                          <option>Honda</option>
                                          <option>Toyota</option>
                                          <option>Ford</option>
                                          <option>Hyundai</option>
                                          <option>Nissan</option>
                                      </select>
                              </div>
                              <div className="form-group">
                                      <Label htmlFor={model}>Model</Label>
                                      <select model ={model} id={model} name ={model} className="form-control" >
                                          <option>Civic</option>
                                          <option>Prius</option>
                                          <option>Mustang</option>
                                          <option>Accent</option>
                                          <option>Sentra</option>
                                      </select>
                                      
                              </div>
                              <div className="form-group">
                                  <Label htmlFor={year}>Year</Label>
                                  <select model ={year} id={year} name ={year} className="form-control" >
                                          <option>2016</option>
                                          <option>2017</option>
                                          <option>2018</option>
                                          <option>2019</option>
                                          <option>2020</option>
                                      </select>
                              </div>
                              <Button type="submit" value="submit" className="bg-primary"> Submit     
                              </Button>
                          </Form>
                      </ModalBody>
                  </Modal>
      {/* <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-1": !collapsed })}
      >
        {items.map((item, index) => (
          <NavItem key={index} className="pl-4">
            <NavLink tag={Link} to={item.target}>
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Collapse> */}
    </div>
  );
};

export default CommentForm;