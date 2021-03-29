import React, {useState, useEffect} from 'react';
import {Card} from '../Components/Card/card';
import {Form} from '../Components/Form/form';

export const Note =() => {
  const [note, setNote] = useState([])
  const [addNote, setAddNote] = useState('')
  

  useEffect(() =>{
    fetch('/api').then(response => {
      if (response.ok){
        return response.json()
      }
    }).then(data => setNote(data))
  }, [])

  const handleFormChange = (inputValue) => {
    setAddNote(inputValue)
  }

  const handleFormSubmit = () => {
    fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({
        content: addNote
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
      .then(message  => {console.log(message)
       setAddNote('')
       getLatestNotes()
      })
  }
  const  getLatestNotes = () => {
    fetch('/api').then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(data => setNote(data))
  }
    return (
        <>
          <Form userInput={addNote} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
          <Card listOfNotes={note}/>  
        </>
    )
}


