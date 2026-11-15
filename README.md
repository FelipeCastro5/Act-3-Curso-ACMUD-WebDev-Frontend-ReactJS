# Actividad 3 - React (ACM UD)

Ejercicio práctico correspondiente a las clases finales del curso de desarrollo web frontend con React.

En este proyecto se integran dos conceptos clave:
1. **Context API (`useContext`)**: para manejar el estado global del tema (modo claro y modo oscuro) sin pasar props entre componentes.
2. **React Router (`react-router-dom`)**: para la navegación entre diferentes vistas sin recargar la página.

---

### Lo que se implementó:

- **Tema global (`ThemeContext.jsx`):**
  - Un contexto que guarda si el tema es `light` o `dark` y una función para alternarlo.
  - El botón en el menú de navegación (`Navbar.jsx`) consume este contexto con `useContext` y cambia los colores de toda la aplicación.

- **Rutas de la aplicación (`App.jsx`):**
  - Navegación con `<BrowserRouter>`, `<Routes>` y `<Route>`.
  - Enlaces con `<NavLink>` para saber en qué página estamos.
  - Vistas creadas:
    - `/` -> Página de inicio.
    - `/productos` -> Catálogo simple de productos.
    - `/contacto` -> Información de contacto.
    - `*` -> Página de error 404 por si se escribe una ruta que no existe.

---

### Cómo iniciarlo:

1. Instalar las dependencias:
   ```bash
   npm install
   ```

2. Ejecutar el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir en el navegador el enlace que muestra la consola (normalmente `http://localhost:5173`).
