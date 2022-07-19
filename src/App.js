import logo from './logo.svg';
import './App.css';
import NotesList from './NotesList';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Search from './Search';
import Header from './Header';

function App() {
  const [notes, setNotes] = useState([])
  const [searchText,setSearchText]=useState('');
  const [darkMode,setDarkMode]=useState(false);

  useEffect(()=>{
    const savedNotes= JSON.parse(localStorage.getItem('react-notes-app-data'));

    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes])

  const addNote = (text)=>{
    const date = new Date();
    const newNote={
      id: nanoid(),
      text:text,
      date: date.toLocaleDateString()
    }
    const newNotes =[...notes, newNote ];

    setNotes(newNotes);
  }

  const deleteNote = (id)=>{
   const newNotes= notes.filter((note)=>note.id!==id);
   setNotes(newNotes);
  }
  const editeNote =(id,text)=>{
     console.log(id+" "+text)
  }
  return (
<div className={`${darkMode && 'dark-mode'}`}>
<div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      handleEditNote={editeNote}/>
    </div>
</div>
  );
}

export default App;
