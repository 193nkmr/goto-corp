import logo from './logo.svg';
import './App.css';

import Top from './screens/Top'
import Contact from './screens/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Top />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
