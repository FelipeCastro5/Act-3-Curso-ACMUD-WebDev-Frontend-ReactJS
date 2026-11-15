function Productos() {
  const listaProductos = [
    { id: 1, nombre: 'Laptop Gamer', precio: 3200000 },
    { id: 2, nombre: 'Monitor 24 pulgadas', precio: 650000 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 180000 }
  ];

  return (
    <div className="page-content">
      <h2>Catálogo de Productos</h2>
      <p>Explora los productos disponibles en la tienda:</p>
      <ul className="lista-productos">
        {listaProductos.map((p) => (
          <li key={p.id}>
            <strong>{p.nombre}</strong> - ${p.precio.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
