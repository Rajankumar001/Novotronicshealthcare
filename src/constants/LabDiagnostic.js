import hematology from '../assets/images/hematology.png';
import fullyAutomatedBioChem from '../assets/images/fullyAutobiochemistry.jpg';
import Electrolyte from '../assets/images/Electrolyte Analyzer.png';
import semiAutomatedBiochem from '../assets/images/semiAutomatedBiochem.jpg';
import elisaReader from '../assets/images/Elisa_Reader.jpg';
import elisaWasher from '../assets/images/Elisa_Washer.jpg';
export const labProducts = [
  {
    id: 1,
    name: "3 Diff Hematology",
    image: hematology,
    model: "MX-LAB H3PD",
    brand: "Matrix Labs Diagnocare",
    usage: "Laboratory",
    powerSupply: "100VAC-240VAC",
    sampleThroughput: "70 Samples/hour",
    sampleVolume: "9μl whole blood with capillary whole blood samples supported.",
    parameter: "23 parameters"
  },
  {
    id: 2,
    name: "Fully Automated Chemistry",
    image: fullyAutomatedBioChem,
    model: "ASITRA C-MS",
    brand: "ASITRA",
    usage: "Benchtop | discrete random-access analyzer",
    powerSupply: "220v",
    sampleThroughput: "240 tests/hr",
    sampleVolume: "Minimum reaction volume (100μL) for cost efficiency",
    parameter: null,
    profileTest:"LFT, KFT, LIPID, DIABETIC, ISE",

  },
  {
    id: 3,
    name: "Electrolyte Analyzer",
    image: Electrolyte,
    model: "Diagnoquip",
    brand: "Diagnolyte",
    usage: "Lab",
    powerSupply: "110-240 V, 50/60 Hz",
    sampleThroughput: "55 Seconds",
    sampleVolume: "100μl",
    parameter: "Sodium(Na),Potassium(K),Chloride(cl)",
    additionalParameters:"lLithium(Li),PH,Ionise Calcium (iCa+)",
  },
  {
    id: 4,
    name: "Semi Automated Biochemistry",
    image: semiAutomatedBiochem,
    model: "BC-224",
    brand: "Rapid",
    usage: null,
    powerSupply: "AC 100-240V, 50/60Hz",
    sampleThroughput: null,
    sampleVolume: "32ul",
    parameter: "LFT, KFT, LIPID, DIABETIC, ISE"
  },
  {
    id: 5,
    name: "Elisa Reader Rayto",
    image: elisaReader,
    model: "RT 2100C",
    brand: "Rayto",
    usage: null,
    powerSupply: "AC 110V-220V±10%, 50-60Hz",
    sampleThroughput: null,
    sampleVolume: null,
    parameter: "Elisa Reader Rayto",
    wavelengths:	"405,450,492,630nm, 4 more filters optional",
    photometric: "Range	0.000-4.000Abs",
  },
  {
    id: 6,
    name: "Elisa Washer Rayto",
    image: elisaWasher,
    model: "RT2600C",
    brand: "Rayto",
    usage: "96- or 48-well plate or strip",
    powerSupply: "100-240 V",
    sampleThroughput: null,
    sampleVolume: "50-3000ul",
    parameter: "Elisa Washer Rayto"
  }
];