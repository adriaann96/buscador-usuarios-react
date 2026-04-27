import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detalle from './pages/Detalle';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuario/:id" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;