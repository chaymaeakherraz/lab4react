import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [taches, setTaches] = useState([]);

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte: texte,
      terminee: false
    };

    setTaches([...taches, nouvelleTache]);
  };

  const changerEtat = (id) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>To-Do List 📝</h1>

      <TodoForm ajouterTache={ajouterTache} />

      {taches.length === 0 ? (
        <p style={{ textAlign: 'center' }}>
          Aucune tâche pour le moment
        </p>
      ) : (
        <TodoList
          taches={taches}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
        />
      )}
    </div>
  );
}

export default App;