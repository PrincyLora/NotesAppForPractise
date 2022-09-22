import Note from "./Note";
import AddNote from "./AddNote";

function NotesList({notes, handleAddNote,handleDeleteNote, handleEditNote, handleEditSave }) {
    return (
      <div className="notes-list">
               <AddNote handleAddNote={handleAddNote}/>
          {notes.map((note)=>(<Note key={note.id} id={note.id} text={note.text} date={note.date} edit={note.edit}
            handleDeleteNote={handleDeleteNote}  handleEditNote={handleEditNote} handleEditSave={handleEditSave} />))}
          
      </div>
    );
  }
  
  export default NotesList;