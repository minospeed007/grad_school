import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Honor from './components/honor/honor';
import Blog from './components/blog/blog';




import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="app">

        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/awards" element={<Honor />} />          
          <Route path="/blog" element={<Blog />} />          




        </Routes>
      </div>
    </Router>
  );
}

export default App;
