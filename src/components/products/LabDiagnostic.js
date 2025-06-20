import React, { useState } from 'react';
import { ArrowLeft, Star } from 'lucide-react';
import { labProducts } from '../../constants/LabDiagnostic'; 
import './LabDiagnostic.css';
import Navbar1 from '../navbar/navbar1';
import Navbar2 from '../navbar/navbar2';
import Footer from '../footer/footer';
const ProductCard = ({ product, onViewMore }) => {
  return (
<>

    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card-image" />
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-description">{product.description}</p>
      <p className="product-card-price">{product.price}</p>
      <button
        onClick={() => onViewMore(product)}
        className="product-card-button"
      >
        View More
      </button>
    </div>
    </>
  );
};
const ProductDetail = ({ product, onBack }) => {
  return (
    <div className="product-detail-container">
      <button
        onClick={onBack}
        className="back-button"
      >
        <ArrowLeft className="mr-2" size={20} /> Back to Products
      </button>

      <div className="product-detail-content">
        <div className="product-detail-image-wrapper">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        <div className="product-detail-info">
          <h2 className="product-detail-name">{product.name}</h2>
          <p className="product-detail-description">{product.description}</p>
          
          <div className="product-detail-rating">
            <span className="product-detail-rating-stars">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <Star key={i} fill="currentColor" stroke="none" size={20} />
              ))}
              {product.rating % 1 !== 0 && (
                <Star 
                  fill="currentColor" 
                  stroke="none" 
                  size={20} 
                  style={{ clipPath: `inset(0 ${(1 - (product.rating % 1)) * 100}% 0 0)` }} 
                />
              )} 
            </span>
            <span className="product-detail-rating-text">({product.rating} / 5)</span>
          </div>

          <p className="product-detail-price">{product.price}</p>

          <h3 className="product-detail-heading">Key Features:</h3>
          <ul className="product-detail-list">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3 className="product-detail-heading">Specifications:</h3>
          <ul className="product-detail-list">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


function LabDiagnostic() {
  const [currentPage, setCurrentPage] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewMore = (product) => {
    setSelectedProduct(product);
    setCurrentPage('productDetail');
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    setCurrentPage('products');
  };

  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <div className="lab-diagnostic-container">
      {currentPage === 'products' ? (
        <>
          <h1 className="page-title">Our Lab Diagnostic Products</h1>
          <div className="products-grid">
            {labProducts.map((product) => (
              <ProductCard key={product.id} product={product} onViewMore={handleViewMore} />
            ))}
          </div>
        </>
      ) : (
        <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
      )}
    </div>
    <Footer/>
    </>
  );
}

export default LabDiagnostic;