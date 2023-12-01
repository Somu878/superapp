import { Routes, Route, Link } from "react-router-dom";
import Registration from "./pages/Registration";
import Genres from "./pages/Genres";
import Dashboard from "./pages/Dashboard";
import Movies from "./pages/Movies";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies" element={<Movies/>}></Route>
      </Routes>
    </>
  );
}

export default App;
