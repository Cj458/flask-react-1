import React from 'react';
import {useHistory } from 'react-router-dom';



export const Update = ({id}) => {
    const history = useHistory()

    const updateNote = () =>{
        fetch(`/api/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id
            })
        }).then(response=> response.json())
          .then(data =>{
            console.log(data)
            history.push('/')
          })
    }
    return(
      <>
         <button onClick={updateNote}>Update</button>
      </>
    )
}