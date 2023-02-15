import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
import Footer from "./components/Footer/Footer";
import BuyCrypto from "./pages/BuyCrypto/BuyCrypto";
import Markets from "./pages/Markets/Markets";
import Dashboard from "./components/Dashboard/Dashboard";
import Trade from "./pages/Trade/Trade";
import Derivatives from "./pages/Derivatives/Derivatives";
import Earn from "./pages/Earn/Earn";

function App() {
  function Dashboard() {
    return (
      <div>
        <Navbar2 />

        <Outlet />
      </div>
    );
  }
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/buycrypto" element={<BuyCrypto />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/derivatives" element={<Derivatives />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
