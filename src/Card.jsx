import React from 'react'
import people from './data';
import './card.css';
import { FaJediOrder ,FaAngleLeft ,FaAngleRight} from "react-icons/fa";
import { useState } from 'react';




const Card = () => {
    const [index , setIndex] = useState(0);
    const {id ,name ,job ,image ,desc} = people[index];
   console.log(people);


    const numberCheck = (number) =>{

      if (number > people.length -1){

        return 0
      }
      if(number < 0){
        return people.length-1;
      }
      return number;
    }




   const prevPerson = () =>{
     setIndex((index)=>{
       let newindex= index - 1;
       return numberCheck(newindex)
     });
   };

   const nextPerson = () =>{
     setIndex((index)=>{
      let newindex= index + 1;
      return numberCheck(newindex)
     });
   };


      return (
    <div className='Box-container'>
      <div className="image-container">
         <img src={image} alt="" className='image-tag'/>
       
         <span className='img-side-icon'> <FaJediOrder /> </span>
      </div>
      <div className="contant">

        <h4 className='name'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='desc'>{desc} </p> 
        
      </div>
      <div className="btn-container">

        <button className='btn-left' onClick={prevPerson}> <FaAngleLeft /> </button>
        <button className='btn-right' onClick={nextPerson}> <FaAngleRight /> </button>
         
      </div>
    </div>
  )
}

export default Card;