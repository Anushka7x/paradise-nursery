import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./ProductListing";
import ShoppingCart from "./ShoppingCart";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
    </Router>
  );
}

export default App;
