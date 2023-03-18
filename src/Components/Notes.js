import React from 'react'
import "./Notes.css"
import { MdDelete } from "react-icons/md";
export default function Notes(props) {
  const date = new Date();
  const useDate = date.toLocaleDateString();
  function deleted(){
    props.delete(props.id)
  }
  return (
    <div class="container_notes">
      <span>{props.val}</span>
      <div className='small'>
        {useDate}
      <MdDelete onClick={deleted} />
      </div>
    </div>
  )
}
