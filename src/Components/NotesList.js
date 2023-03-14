import React, { useState, useEffect } from 'react'
import "./Notes.js"
import Notes from './Notes.js'
import "./NoteList.css"
import { v4 as uuid } from "uuid"
export default function NotesList() {
  const [array, setarray] = useState([]);
  const textSaved = (localStorage.getItem('a'));
  useEffect(() => {
    setarray([{
      id: uuid(), text: textSaved
    }, ...array])
  }, [textSaved]);
  function deleteId(id) {
    let d = array.filter((ele) => ele.id !== id);
    setarray(d);
  }
  return (
    <div className='noteList'>
      {array.map((ele) => <Notes id={ele.id} val={ele.text} del={deleteId} />)}
    </div>
  )
}
