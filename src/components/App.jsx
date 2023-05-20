import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(){
    const [notes, setNotes] = useState([]);

    function submitNote(newNote){
        setNotes((prevNote)=>{
            return [...prevNote, newNote];
        });
    }

    function deleteNote(id){
        setNotes((prevNote)=>{
            return prevNote.filter((note, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <Header />
            <CreateArea onAddNote={submitNote}/>
            {notes.map((note, index) => {
                return (<Note 
                    key={index}
                    id={index}
                    title={note.title} 
                    content={note.content}
                    onDelete={deleteNote}
                />
                );
            })}
            <Footer />
        </>
    );
}

export default App;