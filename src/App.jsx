import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import ShowComponents from "./ShowComponents";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Components" element={<ShowComponents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
