import React from  'react';
import {Link} from "react-router-dom";
import "./card.css";


export const Card =({listOfNotes}) => {


    return (



      <>
         {listOfNotes.map(note => {
               return(
                  <ul key={note.id}>
                     <li>
                        <Link className='card' to={`${note.id}`}>{note.content}</Link> 
                     </li>
                  </ul>
                )
            })}
       </>
    )
}


