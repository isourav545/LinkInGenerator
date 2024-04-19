import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './components/Home'; // Import Home component
import Create from './components/Create'; // Import Create component
import Support from './components/Support'; // Import Support component
import Legal from './components/Legal'; // Import Legal component

function App() {
  return (
    <Router>
      <Navbar /> {/* Include Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/support" element={<Support />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}

export default App;
