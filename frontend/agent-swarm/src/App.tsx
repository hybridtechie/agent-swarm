import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Chatrooms from './components/Chatrooms';
import Agents from './components/Agents';
import CreateAgent from './components/CreateAgent';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatrooms" element={<Chatrooms />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/create" element={<CreateAgent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;