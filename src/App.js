import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Pictures from './component/Pictures';
import Tasks from './component/Tasks';
import Document from './component/Document';
import User from './component/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          {/* Home sahifasi */}
          <Route path="/" element={<Home />} />
          {/* Pictures sahifasi */}
          <Route path="/pictures" element={<Pictures />} />
          {/* Tasks sahifasi */}
          <Route path="/tasks" element={<Tasks />} />
          {/* Documents sahifasi */}
          <Route path="/documents" element={<Document />} />
          {/* User sahifasi */}
          <Route path="/personal-account" element={<User/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
