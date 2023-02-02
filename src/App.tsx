import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
