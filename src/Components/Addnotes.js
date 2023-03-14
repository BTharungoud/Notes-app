import React from 'react'
import "./Addnotes.css"
import "./NotesList"
import NotesList from './NotesList'
import { useState } from 'react'

export default function Addnotes() {
  const [text,settext]=useState('');
function onSave(){
  localStorage.setItem('a',(text));
  settext('');
}
  return (
    <div className='container'>
        <textarea id='textArea' onChange={(e)=>(settext(e.target.value))} placeholder='type your text here.'></textarea>
        <button type='submit' onClick={onSave} id='saveBtn'>Save</button>
        <NotesList/>
    </div>
  )
}

