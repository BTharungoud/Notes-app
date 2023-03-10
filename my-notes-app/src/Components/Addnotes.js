import React from 'react'
import "./Addnotes.css"

export default function Addnotes() {
  return (
    <div class='container'>
        <textarea id='textArea' placeholder='
        type your text here.'></textarea>
        <button type='submit' id='saveBtn'>Save</button>
    </div>
  )
}

