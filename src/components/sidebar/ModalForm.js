import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody,Label, Form, FormControl} from 'reactstrap';
import classNames from "classnames";
import carList from "../../shared/carInfo";


const ModalForm = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const toggle = () => setCollapsed(!collapsed);
 


  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Your " + year +" "+ name +" "+ model +" "+ "was added to the list")
    console.log(name + model + year + mileage)
  }
  

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
                                      <select value={name} onChange={e => setName(e.target.value)} className="form-control" >
                                      {carList.map((carlist) => (
                                      <option value={carlist.value}>{carlist.brand}</option>
                                       ))}
                                      </select>
                                       
                              </div>
                              <div className="form-group">
                                      <Label>Model</Label>                                      
                                       <select value={model} onChange={e => setModel(e.target.value)} className="form-control" >
                                      {carList.map((carlist) => (
                                      <option value={carlist.value}>{carlist.models[0]}</option>
                                       ))}
                                      </select> 
                                      
                              </div>
                              <div className="form-group">
                                  <Label >Year</Label>
                                  <input value={year} onChange={e => setYear(e.target.value)} className="form-control" />          
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

// 11-3-21 - Pulled a list of car brands and models from github (https://github.com/matthlavacka/car-list/blob/master/car-list.json) and used it as a sample API i would like to 
//           implement later on. The things I still have to work on the modal is making sure the Brand & models match. Also need to get the data from the response and show it the server
//           and render it on the HOme page.  
  
