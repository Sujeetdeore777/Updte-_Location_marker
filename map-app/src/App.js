import './App.css';
import Marker from './components/Marker';
import Addloc from './components/Addloc';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marker />} />
        <Route path="/addloc" element={<Addloc />} />
      </Routes>
    </Router>
  );
}

export default App;
