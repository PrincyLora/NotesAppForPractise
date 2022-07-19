import { useState } from "react";



function AddNote({handleAddNote}){
    const [noteText,setNoteText]=useState('');
    const [characterLimit,setCharacterLimit]= useState(200);

    const handleChange = (event)=>{
        if( event.target.value.length<=200){
            setNoteText(event.target.value);
            setCharacterLimit(200-event.target.value.length);
        }
 
    }

    const handleSaveClick =()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
            setCharacterLimit(200);
        }

    }
return(<div class="note new">
    <textarea 
    rows='8' cols='10' 
    placeholder="Type to add note..."
    onChange={handleChange}
    value={noteText}>

    </textarea>
    <div className="note-footer">
        <small>{characterLimit} remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
    </div>

</div>)

}

export default AddNote;