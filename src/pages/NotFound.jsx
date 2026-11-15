import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-content not-found">
      <h2 style={{ color: '#e63946' }}>Error 404</h2>
      <p>Página no encontrada.</p>
      <Link to="/" className="btn-volver">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
