import React, { useEffect, useState } from 'react';
import { Link, useParams} from "react-router-dom";
import { Delete} from '../Components/Delete/delete';
import { Update} from '../Update/update';

export const Show = () => {
    const { id} = useParams()
    const [note, setNote] = useState([])


    useEffect(() => {
        fetch(`/api/${id}`)
        .then(response => response.json())
        .then(data => setNote(data))
    }, [id])

    return(
        <div className="container">

           <div id="note-container">
              <div id="form-wraper">
                 {/* trying an alternative way to update by using just the submit button and the api of submit */}
                <form id='form' > 
                       <div className="flex-wrapper">
                           <div style={{flex:6}}>
                                <input
                                    className="form-control"
                                    id=""
                                    type='text' 
                                   >
                                       
                                   </input>
                           </div>
                     
                            <div style={{flex:1}}>
                                   <input id='submit' className='btn btn-warning' name='Add' type='submit' ></input> 
                            </div>
                       

                       </div>

                    </form>  






                {note.length > 0 && note.map(data => <div key='id'>{data.content}</div>)}
                <Delete id={id}/>
               {/*   this the update button that doesn't work <Update to='/' id={id}/> */} 
                <hr></hr>
                <Link to='/'>Back to notes</Link>

              </div>
            </div>
        </div>
    )
}