import React from 'react'
import Card from '../../../components/card/Card';
import './services_Images.css'

function Services(props){
    return(
        <div className='flex-container'>
      <Card link ={props.link}
      name = {props.name}
      />

    </div>
    )

}



export default Services;
