import   {MdDeleteForever} from 'react-icons/md';
import {MdEditNote} from 'react-icons/md';
function Note({id , text, date, handleDeleteNote, handleEditNote}) {
    return (
      
      <div className="note">
          <span><p>{text}</p></span>   
          <div className='note-footer'>
              <small>{date}</small>
         
              <MdDeleteForever onClick={()=>
            handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
            <MdEditNote onClick={()=>handleEditNote(id,text)}  className='edit-icon' size='1.5em' />
        
         
 
          </div>
      </div>
    );
  }
  
  export default Note;