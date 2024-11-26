import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductListing.css";
import snakePlantImage from './snake plant.png';
import spiderPlantImage from './spider plant.png';
import peaceLilyImage from './peace lily.png';
import bostonFernImage from './bosten fern.png';
import rubberPlantImage from './rubberplant.png';
import aloeImage from './aloe.png';

const initialProducts = [
  {
    id: 1,
    name: "Snake Plant",
    price: "$15",
    description: "Produces oxygen at night, improving air quality.",
    image: snakePlantImage,
    addedToCart: false, // Track if added to cart
  },
  {
    id: 2,
    name: "Spider Plant",
    price: "$12",
    description: "Filters formaldehyde and xylene from the air.",
    image: spiderPlantImage,
    addedToCart: false,
  },
  {
    id: 3,
    name: "Peace Lily",
    price: "$18",
    description: "Removes mold spores and purifies the air.",
    image: peaceLilyImage,
    addedToCart: false,
  },
  {
    id: 4,
    name: "Boston Fern",
    price: "$14",
    description: "Improves humidity and air quality.",
    image: bostonFernImage,
    addedToCart: false,
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: "$20",
    description: "Absorbs airborne toxins and carbon dioxide.",
    image: rubberPlantImage,
    addedToCart: false,
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: "$10",
    description: "Known for its medicinal and air-purifying properties.",
    image: aloeImage,
    addedToCart: false,
  },
];

const ProductListing = () => {
  const [products, setProducts] = useState(initialProducts); // Track product states
  const [cart, setCart] = useState([]); // Track cart items
  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, addedToCart: true }
          : product
      )
    );

    // Add the product to the cart
    const selectedProduct = products.find((product) => product.id === productId);
    setCart((prevCart) => [...prevCart, selectedProduct]);
    alert(`${selectedProduct.name} has been added to the cart!`);
  };

  const handleGoToCart = () => {
    navigate("/cart", { state: { cart } });
  };

  return (
    <div className="product-listing-page">
      <header className="header">
        <div className="logo">Paradise Nursery</div>
        <div className="nav">
          <span>Plants</span>
          <div className="cart" onClick={handleGoToCart}>
            <i className="fas fa-shopping-cart"></i> <span>{cart.length}</span>
          </div>
        </div>
      </header>

      <h1 className="page-title">Air Purifying Plants</h1>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="sale-tag">SALE</div>
            </div>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="description">{product.description}</p>
            <button
              className="add-to-cart"
              onClick={() =>
                product.addedToCart ? handleGoToCart() : handleAddToCart(product.id)
              }
            >
              {product.addedToCart ? "Go to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
