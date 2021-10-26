import react from "react";
import { Component } from 'react';
import CarStats from "./carStats";
function CarImage() {
    return (
    <div>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*"
                class="rounded mx-auto d-block" alt="Responsive image"/>
            </div>
        </div>
    </div>
    <CarStats/>
    </div>


    )
}

export default CarImage;