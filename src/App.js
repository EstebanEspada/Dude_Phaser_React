import Home from './components/Home.js';
import Juego from './components/Juego.js';
import Error from './components/Error.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />;
        <Route path='/juego' element={<Juego />} />;
        <Route path='*' element={<Error />} />;
      </Routes>
    </Router>
  );
}