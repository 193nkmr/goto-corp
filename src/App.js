import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Top from './screens/Top'
import Contact from './screens/Contact';
import AboutUs from './screens/AboutUs';
import Service from './screens/Service';
import Achievements from './screens/Achievements'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Achievements" element={<Achievements />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
