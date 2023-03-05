import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./notes"


function App() {
  return (
    <div>
      <Header></Header>
      {notes.map(note => (<Note key={note.id} title={note.title} content={note.content} />))}
      <Footer></Footer>
    </div>
  );
}

export default App;