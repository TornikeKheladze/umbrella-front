import { Link, Route, Routes } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import AdminPage from "./pages/AdminPage";
import ProductPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
