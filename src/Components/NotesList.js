import React from 'react'
import "./Notes.js"
import Notes from './Notes.js'
import "./NoteList.css"
export default function NotesList(props) {
  return (
    <div className='noteList'>
      {props.a.map((ele) => <Notes id={ele.id} val={ele.savedText} delete={props.delete} c={props.c}/>)}
    </div>
  )
}
