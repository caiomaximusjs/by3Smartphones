import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Celular from './components/pages/Celular';
import NewCel from './components/pages/NewCel';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/newcel" element={<NewCel />} />
          <Route path="/celular/:id" element={<Celular />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
