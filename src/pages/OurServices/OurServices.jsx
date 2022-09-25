import React from 'react'
import Heading from '../../components/heading/Heading';
import Contacts from '../../data/servicesData';
import Services from "./components/Services";

import './components/services_Images.css'

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
      <Heading name="Our Services"/>
      <div className='row'>
      {Contacts.map(createCard)}</div>
    </div>

  )
}

export default OurServices;