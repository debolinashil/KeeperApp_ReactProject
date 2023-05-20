import React, { useState } from "react";

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNewNote((prevNote)=>{
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function addNote(event){
        props.onAddNote(newNote);
        setNewNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
        <form>
            <input name="title" placeholder="Title" onChange={handleChange} value={newNote.title}/>
            <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={newNote.content} />
            <button onClick={addNote}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
