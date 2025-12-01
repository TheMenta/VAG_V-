import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Forum from "./pages/forum";
import Auth from "./pages/Auth";
import Premium from "./pages/premium";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </Router>
  );
}

export default App;
