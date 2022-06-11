import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import { notes } from '../notes';

function App() {
  const renderNotes = notes.map(note => <Note key={note.key} title={note.title} content={note.content} />);
  return (
    <div>
      <Header />
      {renderNotes}
      <Footer />
    </div>
  );
}

export default App;
