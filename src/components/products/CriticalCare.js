import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Criticalcare } from '../../constants/Criticalcare'; 
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
            <ArrowLeft className="mr-2 back-icon" size={80} /> 
          </button>
    
          <div className="product-detail-content">
            <div className="product-detail-image-wrapper">
              <img src={product.image} alt={product.name} className="product-detail-image" />
            </div>
            <div className="product-detail-info">
              <h2 className="product-detail-name">{product.name}</h2>
              <div className="product-details-list">
  {product.Type && (
    <p><strong>Type:</strong> {product.Type}</p>
  )}

  {product.EnergyRange && (
    <p><strong>Energy Range:</strong> {product.EnergyRange}</p>
  )}

  {product.Waveform && (
    <p><strong>Waveform:</strong> {product.Waveform}</p>
  )}

  {product.Display && (
    <p><strong>Display:</strong> {product.Display}</p>
  )}

  {product.ECGMonitoring && (
    <p><strong>ECG Monitoring:</strong> {product.ECGMonitoring}</p>
  )}

  {product.OperationModes && (
    <p><strong>Operation Modes:</strong> {product.OperationModes}</p>
  )}

  {product.ChargingTime && (
    <p><strong>Charging Time:</strong> {product.ChargingTime}</p>
  )}

  {product.Controls && (
    <p><strong>Controls:</strong> {product.Controls}</p>
  )}

  {product.Paddles && (
    <p><strong>Paddles:</strong> {product.Paddles}</p>
  )}

  {product.Recording && (
    <p><strong>Recording:</strong> {product.Recording}</p>
  )}

  {product.Alarms && (
    <p><strong>Alarms:</strong> {product.Alarms}</p>
  )}

  {product.DataStorage && (
    <p><strong>Data Storage:</strong> {product.DataStorage}</p>
  )}

  {product.PowerSupply && (
    <p><strong>Power Supply:</strong> {product.PowerSupply}</p>
  )}

  {product.BatteryType && (
    <p><strong>Battery Type:</strong> {product.BatteryType}</p>
  )}

  {product.StandardsCompliance && (
    <p><strong>Standards Compliance:</strong> {product.StandardsCompliance}</p>
  )}

  {product.Applications && (
    <p><strong>Applications:</strong> {product.Applications}</p>
  )}
  {product.VentilationModes && (
    <p><strong>VentilationModes:</strong> {product.VentilationModes}</p>
  )}

  {product.Pateint && (
    <p><strong>Pateint:</strong> {product.Pateint}</p>
  )}

  {product.TidalVolume && (
    <p><strong>TidalVolume:</strong> {product.TidalVolume}</p>
  )}

  {product.RespiratoryRate && (
    <p><strong>RespiratoryRate:</strong> {product.RespiratoryRate}</p>
  )}

  {product.InspiratoryPressure && (
    <p><strong>InspiratoryPressure:</strong> {product.InspiratoryPressure}</p>
  )}
  {product.PEEP && (
    <p><strong>PEEP:</strong> {product.PEEP}</p>
  )}

  {product.FiO && (
    <p><strong>FiO:</strong> {product.FiO}</p>
  )}

  {product.MonitoringParamter && (
    <p><strong>MonitoringParamter:</strong> {product.MonitoringParamter}</p>
  )}

  {product.Alarms && (
    <p><strong>Alarms:</strong> {product.Alarms}</p>
  )}

  {product.BatteryBackup && (
    <p><strong>BatteryBackup:</strong> {product.BatteryBackup}</p>
  )}
  {product.ParametersMonitored && (
  <p><strong>Parameters Monitored:</strong> {product.ParametersMonitored}</p>
)}

{product.SyringeCompatibility && (
  <p><strong>Syringe Compatibility:</strong> {product.SyringeCompatibility}</p>
)}

{product.InfusionModes && (
  <p><strong>Infusion Modes:</strong> {product.InfusionModes}</p>
)}

{product.Accuracy && (
  <p><strong>Accuracy:</strong> {product.Accuracy}</p>
)}

{product.OcclusionPressure && (
  <p><strong>Occlusion Pressure:</strong> {product.OcclusionPressure}</p>
)}

{product.SafetyFeatures && (
  <p><strong>Safety Features:</strong> {product.SafetyFeatures}</p>
)}

{product.Channels && (
  <p><strong>Channels:</strong> {product.Channels}</p>
)}

{product.Leads && (
  <p><strong>Leads:</strong> {product.Leads}</p>
)}

{product.PaperSize && (
  <p><strong>Paper Size:</strong> {product.PaperSize}</p>
)}

{product.PrintingSpeed && (
  <p><strong>Printing Speed:</strong> {product.PrintingSpeed}</p>
)}

{product.FrequencyResponse && (
  <p><strong>Frequency Response:</strong> {product.FrequencyResponse}</p>
)}

{product.Sensitivity && (
  <p><strong>Sensitivity:</strong> {product.Sensitivity}</p>
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


function CriticalCare() {
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
          <h1 className="page-title">CRITICAL CARE</h1>
          <div className="products-grid">
            {Criticalcare.map((product) => (
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

export default CriticalCare;