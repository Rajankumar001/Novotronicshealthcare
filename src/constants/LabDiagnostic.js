import hematology from '../assets/images/hematology.png';
import fullyAutomatedBioChem from '../assets/images/fullyAutobiochemistry.jpg';
import Electrolyte from '../assets/images/Electrolyte Analyzer.png';
import semiAutomatedBiochem from '../assets/images/semiAutomatedBiochem.jpg'
export const labProducts = [
  {
    id: 1,
    name: "3 Diff Hematology",
    image: hematology,
    category: "Microscopy",
    description: "High-resolution digital microscope with advanced imaging capabilities for precise laboratory analysis.",
    features: ["4K Resolution", "LED Illumination", "Digital Zoom up to 1000x", "USB Connectivity"],
  },
  {
    id: 2,
    name: "FullyAutomated Chemistry",
    image: fullyAutomatedBioChem,
    category: "FullyAutomated Chemistry",
    description: "State-of-the-art automated blood analyzer for comprehensive hematological testing.",
    features: ["30 Parameters", "Automated Sampling", "Touch Screen Interface", "Quality Control"],
  },
  {
    id: 3,
    name: "Electrolyte Analyzer",
    image: Electrolyte,
    category: "Molecular Biology",
    rating: 4.7,
    description: "Advanced PCR thermal cycler for DNA amplification with precise temperature control.",
    features: ["96-Well Block", "Gradient Function", "Fast Ramping", "Programming Software"],
  },
  {
    id: 4,
    name: "Semi Automated Biochemistry",
    image: semiAutomatedBiochem,
    category: "Sample Preparation",
    rating: 4.6,
    description: "High-speed laboratory centrifuge for efficient sample separation and processing.",
    features: ["Variable Speed Control", "Digital Display", "Safety Lock", "Multiple Rotor Options"],
  },
  {
    id: 5,
    name: "Spectrophotometer UV-Vis",
    image: semiAutomatedBiochem,
    category: "Spectroscopy",
    rating: 4.8,
    description: "Precision UV-Visible spectrophotometer for quantitative analysis and research.",
    features: ["Double Beam Design", "Wavelength Scanning", "Data Software", "Auto Cell Changer"],
  },
  {
    id: 6,
    name: "Incubator Chamber",
    image: semiAutomatedBiochem,
    category: "Incubation",
    rating: 4.5,
    description: "Precise temperature-controlled incubator for cell culture and microbiology applications.",
    features: ["Temperature Control", "CO2 Regulation", "Humidity Control", "HEPA Filtration"],
  }
];