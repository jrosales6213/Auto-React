import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody,Label, Form, FormControl} from 'reactstrap';
import classNames from "classnames";


const ModalForm = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const toggle = () => setCollapsed(!collapsed);
 


  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(name + model + year + mileage)
    console.log(name + model + year + mileage)
    
   
  }
  
  const models = [
    {
      label: "Civic",
      value: "Civic",
    },
    {
      label: "Accord",
      value: "Accord",
    },
    {
      label: "Prius",
      value: "Prius",
    },
    {
      label: "Tacoma",
      value: "Tacoma",
    },
  ];


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
                          <Form onSubmit={handleSubmit} >
                              <div className="form-group">
                                      <Label>Make</Label>
                                      <input  value={name} onChange={e => setName(e.target.value)} className="form-control" />
                                       
                              </div>
                              <div className="form-group">
                                      <Label>Model</Label>
                                      <select value={model} onChange={e => setModel(e.target.value)} className="form-control" >
                                      {models.map((model) => (
                                      <option value={model.value}>{model.label}</option>
                                       ))}
                                      </select>
                                      
                              </div>
                              <div className="form-group">
                                  <Label >Year</Label>
                                  <select value={year} onChange={e => setYear(e.target.value)} className="form-control" >
                                          <option>2016</option>
                                          <option>2017</option>
                                          <option>2018</option>
                                          <option>2019</option>
                                          <option>2020</option>
                                      </select>
                              </div>
                              <div className="form-group">
                                  <Label >Mileage</Label>
                                  <input value={mileage} onChange={e => setMileage(e.target.value)} className="form-control"/>
                                        
                              </div>
                              <Button type="submit" value="submit" className="bg-primary"> Submit     
                              </Button>
                          </Form>
                      </ModalBody>
                  </Modal>
    </div>
  );
};

export default ModalForm;

// 11-2-21 - I switched up the form to a different style of using hooks. I set hooks for make , model , year and mileage. 
//           Also learned to map through the array of cars and instead of using hard coded car options, i just maped through the array.   
//           I want to continue to map through the other properties, then I can start on logging the information from the modal form. 
  
