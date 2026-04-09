function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        
        <input
          type="checkbox"
          checked={tache.terminee}
          onChange={() => changerEtat(tache.id)}
        />

        <span
          style={{
            marginLeft: '10px',
            flex: 1,
            textDecoration: tache.terminee ? 'line-through' : 'none',
            color: tache.terminee ? 'gray' : 'black',
            fontWeight: '500'
          }}
        >
          {tache.texte}
        </span>

        <button
          onClick={() => supprimerTache(tache.id)}
          style={{
            background: 'red',
            color: 'white',
            border: 'none',
            padding: '6px 10px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          X
        </button>

      </div>
    </li>
  );
}

export default TodoItem;