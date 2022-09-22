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
  //const [editable,setEditable]=useState(false);
  const [tabs,setTabs] = useState([
    {
     id: 1,
     content: "hello"
    },
    {
     id: 1,
     content: "hello"
    },
   ]);
   const [body, setBody] = useState([
    <div>hello</div>,
    <div>world</div>
   ]);
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
      date: date.toLocaleDateString(),
      edit: false
    }
    const newNotes =[...notes, newNote ];

    setNotes(newNotes);
  }

  const deleteNote = (id)=>{
   const newNotes= notes.filter((note)=>note.id!==id);
   setNotes(newNotes);
  }
  
  const editeNote =(id,text,edit)=>{
    debugger;
    console.log(notes)
    
     console.log(id+" "+text)
    // setEditable(true);
     console.log('edit: '+ edit);
     var item = notes.find(x => x.id === id);
if (item) {
  item.edit = true;
}
const newNotes2= notes.filter((note)=>note.id!==id);
const newNotes =[...newNotes2, item ];
console.log(newNotes)
setNotes(newNotes);

  }

  const handleEditSave =(id,text)=>{
    const date = new Date();
    var item = notes.find(x => x.id === id);
if (item) {
  item.edit = false;
  item.text=text;
  item.date= date.toLocaleDateString();
}
const newNotes2= notes.filter((note)=>note.id!==id);
const newNotes =[...newNotes2, item ];
console.log(newNotes)
setNotes(newNotes);
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
      handleEditNote={editeNote} 
      handleEditSave={handleEditSave}/>
    </div>
</div> 
    
  );
}

export default App;
