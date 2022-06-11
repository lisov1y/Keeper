import React, { useState } from 'react'

export default function AddTask(props) {
    const [input, setInput] = useState({title: '', content: ''});

    function handleChange(e) {
        const { value, name } = e.target;
        setInput(state => {
          if (name === 'title') {
            return ({title: value, content: state.content});
          } else if (name === 'content') {
            return ({title: state.title, content: value});
          } else {
            alert('An error occured!');
          }
        });
    }

    function submitNote(e) {
        if (input.title && input.content) {
            props.onAdd(input);
            setInput({title: '', content: ''});
        }
        e.preventDefault();
    }

    return (
        <div id='add-task'>
            <form id='input-field'>
                <input className='title' name='title' placeholder='Enter note title...' value={input.title} onChange={handleChange}/>
                <input className='content' name='content' placeholder='Enter note description...' value={input.content} onChange={handleChange} />
            </form>
            <button className='add' onClick={submitNote}>Add</button>
        </div>
    );
}
