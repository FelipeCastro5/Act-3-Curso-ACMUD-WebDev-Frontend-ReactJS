import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';
import './styles.css';

function MainApp() {
  const { tema } = useContext(ThemeContext);

  return (
    <div className={`app-container ${tema}`}>
      <Navbar />
      <div className="main-box">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
