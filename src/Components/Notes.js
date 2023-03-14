import React from 'react'
import "./Notes.css"
import { MdDelete } from "react-icons/md";
export default function Notes(props) {
  const date = new Date();
  const useDate = date.toLocaleDateString();
  return (
    <div class="container_notes">
      <span>{props.val}</span>
      <div className='small'>{useDate}
        <MdDelete onClick={()=>props.del(props.id)} />
      </div>
    </div>
  )
}
