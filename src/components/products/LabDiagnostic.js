import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { labProducts } from '../../constants/LabDiagnostic'; 
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
        <ArrowLeft className="mr-1 back-icon" size={80} />
      </button>

      <div className="product-detail-content">
        <div className="product-detail-image-wrapper">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        <div className="product-detail-info">
          <h2 className="product-detail-name">{product.name}</h2>
          <div className="product-details-list">
            {product.model && (
              <p><strong>Model:</strong> {product.model}</p>
            )}
            {product.brand && (
              <p><strong>Brand:</strong> {product.brand}</p>
            )}
            {product.usage && (
              <p><strong>Usage:</strong> {product.usage}</p>
            )}
            {product.powerSupply && (
              <p><strong>Power Supply:</strong> {product.powerSupply}</p>
            )}
            {product.sampleThroughput && (
              <p><strong>Sample Throughput:</strong> {product.sampleThroughput}</p>
            )}
            {product.sampleVolume && (
              <p><strong>Sample Volume:</strong> {product.sampleVolume}</p>
            )}
            {product.parameter && (
              <p><strong>Parameter:</strong> {product.parameter}</p>
            )}
            {product.wavelengths && (
              <p><strong>Wavelengths:</strong> {product.wavelengths}</p>
            )}
            {product.photometric && (
              <p><strong>Photometric:</strong> {product.photometric}</p>
            )}
            {product.additionalParameters && (
              <p><strong>Additional parameter:</strong> {product.additionalParameters}</p>
            )}
          </div>
<div className='more-enquiry'>
  <a
    href="https://wa.me/919266516565?text=Welcome%20Novotronics%20Healthcare%20!%20how%20can%20i%20help%20you"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button>For more enquiry</button>
  </a>
</div>

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
    <Layout>
    <div className="lab-diagnostic-container">
      {currentPage === 'products' ? (
        <>
          <h1 className="page-title">LAB DIAGNOSTICS</h1>
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
    </Layout>
  );
}

export default LabDiagnostic;