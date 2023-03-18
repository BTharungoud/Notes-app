import React, { useEffect } from 'react'
import "./Addnotes.css"
import NotesList from './NotesList'
import { useState } from 'react'
import { v4 as uuid } from "uuid"

export default function Addnotes() {
  const [text,settext]=useState('');
  const [saveText,setsaveText]=useState([]);
  const [search,setSearch]=useState('');
  const [fdel,setFDel]=useState();
  function onSave(){
    setsaveText([{
      id:uuid(),
      savedText:text,
    },...saveText])
}
useEffect(()=>{
  const textGet=JSON.parse(localStorage.getItem('textset'));
  if(textGet!==null)
    setsaveText(textGet);
},[])
useEffect(()=>{
    localStorage.setItem('textSet',JSON.stringify(saveText));
},[saveText])
function onDelete(id){
  setFDel(id)
  const savedText = saveText.filter((e)=>e.id!==id)
  setsaveText(savedText);
}
// console.log(saveText);
const toSearch=saveText.filter((b)=>b.savedText.includes(search));
  return (
    <div className='container'>
        <textarea id='search' onChange={(e)=>setSearch(e.target.value)} placeholder="Search your text"></textarea>
        <textarea id='textArea' onChange={(e)=>settext(e.target.value)} placeholder='type your text here.'></textarea>
        <button type='submit' onClick={onSave} id='saveBtn'>Save</button>
        <NotesList a={toSearch} delete={onDelete} c={fdel}/>
    </div>
  )
}

