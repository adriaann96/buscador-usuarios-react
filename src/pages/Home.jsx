import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  function buscarUsuario() {
    navigate(`/usuario/${id}`);
  }

  return (
    <main className="contenedor">
      <section className="card">
        <h1>Buscar usuario</h1>

        <p>Selecciona un ID del 1 al 10</p>

        <input
          type="number"
          min="1"
          max="10"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button onClick={buscarUsuario}>
          Buscar
        </button>
      </section>
    </main>
  );
}

export default Home;