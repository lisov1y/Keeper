import { useState } from 'react';
import Header from './Header';
import AddTask from './AddTask';
import Footer from './Footer';
import Note from './Note';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(id) {
    setNotes(state => {
      return state.filter((note, idx) => idx !== id);
    });
  }

  const renderNotes = notes.map((note, idx) => <Note key={idx} id={idx} title={note.title} content={note.content} onDelete={deleteNote} />);

  return (
    <div>
      <Header />
      <AddTask onAdd={addNote} />
      {notes.length ? renderNotes : null}
      <Footer />
    </div>
  );
}

export default App;
