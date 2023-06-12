import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>index</h1>} />
      <Route path="/add-product" element={<h1>add product</h1>} />
    </Routes>
  );
}

export default App;
