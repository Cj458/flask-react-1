import React from 'react';
import "./form.css";

export const Form = ({userInput, onFormChange, onFormSubmit}) => {

    const handleChange = (event) => {
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }


    return(
        <div className="container">

          <div id="note-container">
              <div id="form-wraper">
                     <form id='form' onSubmit={handleSubmit}> 
                       <div className="flex-wrapper">
                           <div style={{flex:6}}>
                                <input
                                    className="form-control"
                                    id="title"
                                    type='text' 
                                    required 
                                    value ={userInput} 
                                    onChange={handleChange}></input>
                           </div>
                     
                            <div style={{flex:1}}>
                                   <input id='submit' className='btn btn-warning' name='Add' type='submit' ></input> 
                            </div>
                       

                       </div>

                    </form>  
              </div>

          </div>

        </div>
    )
}