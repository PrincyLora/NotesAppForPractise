import { useState } from "react";
import   {MdDeleteForever} from 'react-icons/md';
import {MdEditNote} from 'react-icons/md';
function Note({id , text, date, handleDeleteNote, handleEditNote, edit, handleEditSave}) {
  const [noteText,setNoteText]=useState(text);
  const [characterLimit,setCharacterLimit]= useState(200-text.length);
  const handleChange=(event)=>{
    if( event.target.value.length<=200){
      setNoteText(event.target.value);
      setCharacterLimit(200-event.target.value.length);
  }
    
  }
  const handleSave=()=>{
   
    if(noteText.trim().length>0){
      handleEditSave(id, noteText)
      setCharacterLimit(200);
  }
  }
    return (
      
      <div className={`note ${edit ? "new" : ""}`}>
          {/* {edit?<p>editable</p>:<p>non-editable</p>} */}
          {edit? <textarea 
    rows='8' cols='10' 
    placeholder="Type to add note..."
    
    value={noteText} onChange={handleChange}></textarea>:<span><p>{text}</p></span>}
          <div className='note-footer'>
              {edit?<small>{characterLimit} remaining</small>:<small>{date}</small>}
         
              <MdDeleteForever onClick={()=>
            handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
            {edit?<button className="save" onClick={handleSave}>Save</button>:<MdEditNote onClick={()=>handleEditNote(id,text,edit)}/>}  
        
         
 
          </div>
      </div>
    );
  }
  
  export default Note;