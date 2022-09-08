import './App.css';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Workspace from './components/Workspace';

function App() {
  return (
  <div className="bg-transparent flex justify-center">
   <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        // <Route path="/workspace" index element={<Workspace />} />
      </Routes>
    </BrowserRouter>
   </div>
  </div>
  );
}

export default App;
