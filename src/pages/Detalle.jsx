import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Detalle() {
  const { id } = useParams();

  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function obtenerUsuario() {
      try {
        setCargando(true);
        setError('');
        setUsuario(null);

        const respuesta = await fetch(
          `https://jsonplaceholder.typicode.com/users/${Number(id)}`
        );

        const datos = await respuesta.json();

        if (!datos.id) {
          setError('No se encontró un usuario con ese ID.');
        } else {
          setUsuario(datos);
        }
      } catch (error) {
        setError('Ocurrió un error al cargar el usuario.');
      } finally {
        setCargando(false);
      }
    }

    obtenerUsuario();
  }, [id]);

  return (
    <main className="contenedor">
      <section className="card">
        <Link to="/" className="volver">← Volver</Link>

        {cargando && <p>Cargando...</p>}

        {error && <p className="error">{error}</p>}

        {usuario && (
          <div>
            <div className="avatar">
              {usuario.name.substring(0, 2).toUpperCase()}
            </div>

            <h1>{usuario.name}</h1>
            <p>ID #{usuario.id}</p>

            <div className="datos">
              <p><strong>Email:</strong> {usuario.email}</p>
              <p><strong>Ciudad:</strong> {usuario.address.city}</p>
              <p><strong>Empresa:</strong> {usuario.company.name}</p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Detalle;