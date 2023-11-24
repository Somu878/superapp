import { Routes, Route, Link } from "react-router-dom";
import Registration from "./pages/Registration";
import Genres from "./pages/Genres";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/genres" element={<Genres />} />
      </Routes>
    </>
  );
}

export default App;
