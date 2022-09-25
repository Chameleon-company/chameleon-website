import React from 'react'
<<<<<<< HEAD
import Heading from '../../components/heading/Heading';
import Contacts from '../../data/servicesData';
import Services from "./components/Services";

import './components/services_Images.css'
=======

//imported but not used
//import Card from '../../components/card/Card';
//import Contacts from '../../data/servicesData';

//Importing progress bar function component & CSS Stylesheet
import ProgressBar from './ourServicesComponents/progressBar_component';
import './ourServicesComponents/progressBar_styling.css'
>>>>>>> e551b40afbe4ef399c5aed1f47a9fa78d50f2c89

function createCard(contact){
  return <Services
  key ={contact.id}
  link={contact.imgURL}
  name={contact.name}
  />
}

function OurServices() {
  return (
    <div>
<<<<<<< HEAD
      <Heading name="Our Services"/>
      <div className='row'>
      {Contacts.map(createCard)}</div>
    </div>

  )
}

export default OurServices;
=======
      <h1>Our Services</h1>

      {/* applying page alignment css to all progress bars within the div */}
      <div className='progressBar_pageAlignment'>

      {/* calling progressBar function & updating values percent and title values */}
      <ProgressBar progressPercent={84} progressTitle="Deadlines Met"/>
      <ProgressBar progressPercent={90} progressTitle="Within Budget"/>
      <ProgressBar progressPercent={96} progressTitle="Client Satisfaction"/>
      <ProgressBar progressPercent={100} progressTitle="Carbon Neutral"/>     
      </div>

    </div>
  )
}


export default OurServices
>>>>>>> e551b40afbe4ef399c5aed1f47a9fa78d50f2c89
