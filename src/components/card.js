import React from "react";  

const Card = props => {   
    return (     
    <li className="item" key={props.key}>      
     <img src={props.photo} alt="pokemon" />       
     <p>{props.name}</p> 
     </li>  
      ); 
     };  
     
     export default Card;