import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

function Routage() {
  return (
    <Router>
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      
    </Router>  
  );
}

export default Routage;