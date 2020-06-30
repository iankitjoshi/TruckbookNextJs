import React from 'react'
import Navbar from './Navbar'
const appstore = require('../../../Assets/Images/app-store.png')
const playstore = require('../../../Assets/Images/google-play.png')


class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            mobile : ''
        }
    }
    render(){
        return(
            <div className="home-div">
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" rel="stylesheet" />

            <Navbar />  {/* <img src={img} className="home-bi-truck" /> */}
            <div className="home-h1-div  container">
                <h1 className="home-h1-text"> Re-imagining Logistics with <br /> Power of AI </h1>
            </div> <br />
            {/* <div className="home-appstore-div  row"> */}
              <a rel="noopener noreferrer" href="https://itunes.apple.com/us/app/truckbook/id1440696027?mt=8" target="_blank" > <img src={appstore} className="home-appstore" alt="appstore" /> </a> 
               <a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.techindustan.truckbook&hl=en" target="_blank" > <img src={playstore} className="home-googlestore" alt="googleplay" /> </a>
            {/* </div> */}

            <form className="home-form">
                <span className="home-span"> +1 </span>
                <input type="text" className="home-input" placeholder="  Send me the link to install" name="mobile" /> 
                <input type="submit" className="home-button" value="SEND SMS" />
            </form>
            <br />
        </div>

        )
    }
        

        
    
}

export default Home