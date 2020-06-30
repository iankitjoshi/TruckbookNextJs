import React from 'react'
const truck = require('../../../Assets/Images/truck-drivers.png')
const owner = require('../../../Assets/Images/fleet-owner.png')
const community = require('../../../Assets/Images/truck-company.png')

class Driver extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div >
                <div className="container">
                    <div className="Driver-row-div  row">
                        <div className="col">
                            <img src={truck} alt="truck" />
                            <h3 className="driver-h3">Truck Drivers</h3>
                            <h6 className="driver-h6" >Join the Next Big thing <br /> in Trucking.</h6>
                            <button className="driver-button" >Explore More</button>
                        </div>
                        <div className="col">
                            <img src={owner} alt="owner" /> 
                            <h3 className="driver-h3">Fleet Owner</h3>
                            <h6 className="driver-h6" >Join a team dedicated to your <br /> success.</h6>
                            <button className="driver-button" >Explore More</button>
                        </div>
                        <div className="col">
                            <img src={community} alt="community" />
                            <h3 className="driver-h3">Truck Company</h3>
                            <h6 className="driver-h6" > Explore partnership <br />opportunities . </h6>
                            <button className="driver-button" >Explore More</button>
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

 export default Driver