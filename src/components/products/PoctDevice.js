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
            <ArrowLeft className="mr-2" size={20} /> 
          </button>
    
          <div className="product-detail-content">
            <div className="product-detail-image-wrapper">
              <img src={product.image} alt={product.name} className="product-detail-image" />
            </div>
            <div className="product-detail-info">
              <h2 className="product-detail-name">{product.name}</h2>
            </div>
          </div>
        </div>
  );
};


function PoctDevice() {
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
          <h1 className="page-title">POCT DEVICES</h1>
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

export default PoctDevice;