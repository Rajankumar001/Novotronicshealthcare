import React, { useState } from 'react';
import { ArrowLeft} from 'lucide-react';
import { POCT } from '../../constants/POCT'; 
import './LabDiagnostic.css';
import Layout from '../../Layout/Layout';
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
            <ArrowLeft className="mr-2 back-icon" size={20} /> 
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
    <Layout>
    <div className="lab-diagnostic-container">
      {currentPage === 'products' ? (
        <>
          <h1 className="page-title">POCT DEVICES</h1>
          <div className="products-grid">
            {POCT.map((product) => (
              <ProductCard key={product.id} product={product} onViewMore={handleViewMore} />
            ))}
          </div>
        </>
      ) : (
        <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
      )}
    </div>
    </Layout>
  );
}

export default PoctDevice;