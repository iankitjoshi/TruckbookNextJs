import React from 'react'

const star = require('../../../Assets/Images/fivestar-truckbuck.gif')

class Start extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="star-div">
                <a href="https://itunes.apple.com/us/app/truckbook/id1440696027?mt=8" target="_blank" rel="noopener noreferrer" >
                    <img src={star} alt="start" className="start-startimg" />
                </a> <br />
                <br />
                <h3 className="star-h3" >#1 Trucking App in America. Trusted by Thousands. </h3>
            </div>
         )
    }
}

export default Start