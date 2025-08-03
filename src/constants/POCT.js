import ABG_analyzer from '../assets/images/ABG_analyzer.jpeg';
import Fia_meter from '../assets/images/Fia_meter.jpg';
import Dry_chemistry from '../assets/images/Dry_chemistry.jpg';
import HB_meter from '../assets/images/HB_meter.jpeg';
import glucometer from '../assets/images/glucometer.jpg';
import Mispa from '../assets/images/Mispa.png';

export const POCT = [
  {
    id: 1,
    name: "ABG Analyzer",
    image: ABG_analyzer,
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
    name: "FIA meter",
    image: Fia_meter,
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
    name: "DRY Chemistry",
    image: Dry_chemistry,
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
    name: "HB meter",
    image: HB_meter,
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
    name: "Glucometer",
    image: glucometer,
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
    name: "Protein Analyzer",
    image: Mispa,
    model: "RT2600C",
    brand: "Rayto",
    usage: "96- or 48-well plate or strip",
    powerSupply: "100-240 V",
    sampleThroughput: null,
    sampleVolume: "50-3000ul",
    parameter: "Elisa Washer Rayto"
  }
];