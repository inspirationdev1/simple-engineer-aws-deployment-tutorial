import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  
  const [notesListings, setNotesListings] = useState([]);
  const [notesListingsCount, setNotesListingsCount] = useState(0);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        
        const res = await fetch('http://notes-lb-313941488.ap-south-1.elb.amazonaws.com/notes');
        const data = await res.json();
        setNotesListings(data.notes);
        setNotesListingsCount(data.notes.length); // ✅ Count from array length
        console.log("notesListings count : " + data.notes.length);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test Updates-02092025-version: 4.5
          Listing Count : {notesListingsCount}
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
