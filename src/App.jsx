// File: App.jsx located in src folder
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import Home from "./component/Home";

 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
function App() {
  return (
    <Router>
    <div>
      <Navbar />
 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register/" element={<Register />} />
      </Routes>

    </div>
    </Router>
  );
}
export default App;