import { useState } from 'react';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (texte.trim() === '') return;

    ajouterTache(texte);
    setTexte('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TodoForm;