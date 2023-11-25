import { Routes, Route, Link } from "react-router-dom";
import Registration from "./pages/Registration";
import Genres from "./pages/Genres";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
