import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faTachometerAlt,
  faHeartbeat,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Card,CardBody } from "reactstrap";
import classNames from "classnames";

function CarStats() {
    return (
        <div className="row mb-3">
        <div className=" col-xl-3 col-sm-6 py-2">
            <Card className="stats-card text-white h-100">
                <CardBody>
                    <div className="title">
                    <FontAwesomeIcon className="mr-2" icon={faCalendarDay} />
                    Next Service
                    </div>
                    <h2>January 26,2022</h2>
                </CardBody>
            </Card>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
            <Card className="stats-card text-white h-100">
              <CardBody>
                <div className="title">
                   <FontAwesomeIcon className="mr-2" icon={faTachometerAlt}/>
                    Mileage 
                </div>
                  <h2>75,000</h2>
              </CardBody>
            </Card>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
            <Card className="stats-card text-white h-100">
              <CardBody>
                <div class="title">
                    <FontAwesomeIcon className="mr-2" icon={faHeartbeat}/>
                   Health 
                </div>
                <h2>Good</h2>
              </CardBody>
            </Card>
        </div>
        <div className="col-xl-3 col-sm-6 py-2">
            <Card className="stats-card text-white h-100">
              <CardBody className="card-body">
                <div class="title">
                    <FontAwesomeIcon className="mr-2" icon={faExclamationCircle} />
                   Alerts
                </div>
                <h2>None</h2>
              </CardBody>               
            </Card>
        </div>
     </div>   
    )
}

export default CarStats;