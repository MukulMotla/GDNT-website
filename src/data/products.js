// src/data/products.js
import Gedflox from "../assets/gdflox-ms.png";
import Gdcold from "../assets/gdcold-pds.png";
import Gdcough from "../assets/gdcough-gd.jpg";
import Gdcoughls from "../assets/gdcough-ls.png";
import Gestrokind from "../assets/gestroking.png";
import Asirasp from "../assets/asaira.png";
import Livovet5 from "../assets/levocits.png";
import  Lemontine from "../assets/lemontine.png";
import  Gdmole from "../assets/gdmole.png";
import  Ackindp from "../assets/acikind.png";
import boncared3 from "../assets/boncare.png";
import  Hungry from "../assets/hungry.png";
import  Geodzyme from "../assets/gedozyme.png";
import  Calbon from "../assets/calbon.png";
import  Gasedraft from "../assets/gasedraft.png";
import  Meglocid from "../assets/meglocid.png";
import  Pankind from "../assets/pankind.png";
import Gdcoldd from "../assets/gdcoldd.png"
import Montkand from "../assets/montkand.png";
import Ferrose from "../assets/ferrose.png";
import Gdmefp from "../assets/gdmefp.png";
import Diclo from "../assets/diclo.png";
import Healthvit from "../assets/healthvit.png"



export const products = [
  // ---------------- LIQUIDS ----------------
   
{
  id: "gdcold-pds",
  name: "GDCOLD-PDS Suspension",
  category: "Liquid",
  price: "₹19",
  stock: 500,
  image: Gdcold,
  shortDesc: "Relief from cold, fever, headache, nasal congestion, and allergies.",
  description:
    "GDCOLD-PDS offers effective relief from cold, fever, nasal blockage, and allergic symptoms. Contains Paracetamol, Phenylephrine, and Chlorpheniramine. Suitable for adults and children.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "As directed by physician",
    suitableFor: "Adults & Children",
    physicalForm: "Liquid Syrup",
    storageInstructions: "Store below 25°C. Shake well before use.",
    originOfMedicine: "India",
    dosageForm: "Suspension",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "gedflox-ms",
  name: "GEDFLOX-MS Suspension",
  category: "Liquid",
  price: "₹48",
  stock: 400,
  image: Gedflox,
  shortDesc: "Used for gastrointestinal infections, diarrhea, and abdominal pain.",
  description:
    "GEDFLOX-MS is used for bacterial and protozoal GI infections. Helps manage diarrhea, abdominal pain, and bloating with Ofloxacin, Metronidazole, and Simethicone.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Use as per physician advice",
    suitableFor: "Adults & Children",
    physicalForm: "Liquid",
    storageInstructions: "Store in a cool, dry place",
    originOfMedicine: "India",
    dosageForm: "Suspension",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "montkand-l",
  name: "MONTKAND-L Syrup",
  category: "Liquid",
  price: "₹60",
  stock: 300,
  image: Montkand,
  shortDesc: "Relief from allergies, sneezing, and respiratory issues.",
  description:
    "MONTKAND-L controls respiratory allergies and wheezing in children and adults with Levocetirizine and Montelukast.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "As prescribed by doctor",
    suitableFor: "Children & Adults",
    physicalForm: "Liquid",
    storageInstructions: "Store below 25°C",
    originOfMedicine: "India",
    dosageForm: "Syrup",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "gdmf-p",
  name: "GDMF-P Suspension",
  category: "Liquid",
  price: "₹50",
  stock: 200,
  image: Gdmefp,
  shortDesc: "Used for fever, pain, and inflammation.",
  description:
    "GDMF-P offers relief from fever, body pain, and inflammation. The combination of Paracetamol and Mefenamic Acid ensures effective relief.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Follow doctor's advice",
    suitableFor: "Children & Adults",
    physicalForm: "Liquid",
    storageInstructions: "Store in cool place",
    originOfMedicine: "India",
    dosageForm: "Suspension",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "gdcough-dx",
  name: "GDCOUGH-DX Syrup",
  category: "Liquid",
  price: "₹65",
  stock: 250,
  image: Gdcough,
  shortDesc: "Relief from dry cough, nasal congestion, and throat irritation.",
  description:
    "GDCOUGH-DX provides relief from dry and allergic cough with Dextromethorphan, Phenylephrine, and Chlorpheniramine.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Use as directed",
    suitableFor: "Adults",
    physicalForm: "Liquid",
    storageInstructions: "Store protected from light",
    originOfMedicine: "India",
    dosageForm: "Syrup",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "gdcough-ls",
  name: "GDCOUGH-LS Syrup",
  category: "Liquid",
  price: "₹72",
  stock: 180,
  image: Gdcoughls,
  shortDesc: "Used for wet cough, chest congestion, and mucus clearance.",
  description:
    "GDCOUGH-LS is effective in productive cough and airway congestion with Ambroxol, Guaiphenesin, and Levosalbutamol.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "As prescribed",
    suitableFor: "Children & Adults",
    physicalForm: "Liquid",
    storageInstructions: "Store below 30°C",
    originOfMedicine: "India",
    dosageForm: "Syrup",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "ferrose-xt",
  name: "FERROSE-XT Syrup",
  category: "Liquid",
  price: "₹95",
  stock: 280,
  image: Ferrose,
  shortDesc: "Iron supplement for anemia and low hemoglobin.",
  description:
    "FERROSE-XT supports hemoglobin production and prevents iron deficiency with Ferrous Ascorbate and Folic Acid.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Use as advised",
    suitableFor: "Adults & Pregnant Women",
    physicalForm: "Liquid",
    storageInstructions: "Store in cool, dry place",
    originOfMedicine: "India",
    dosageForm: "Syrup",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "gasedraft",
  name: "GASEDRAFT Suspension",
  category: "Liquid",
  price: "₹75",
  stock: 220,
  image: Gasedraft,
  shortDesc: "Relief from acidity, reflux, and heartburn.",
  description:
    "GASEDRAFT helps neutralize stomach acid and provides long-lasting relief from acidity and reflux.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "1-2 teaspoons or as directed",
    suitableFor: "Adults",
    physicalForm: "Liquid",
    storageInstructions: "Shake well before use",
    originOfMedicine: "India",
    dosageForm: "Suspension",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "healthvit",
  name: "HEALTHVIT Syrup",
  category: "Liquid",
  price: "₹85",
  stock: 260,
  image: Healthvit,
  shortDesc: "Multivitamin tonic for growth and immunity.",
  description:
    "HEALTHVIT promotes overall health, growth, metabolism, and immunity through a balanced mix of vitamins and minerals.",
  specifications: {
    drugType: "Nutraceutical",
    dosageGuidelines: "Twice daily or as directed",
    suitableFor: "Children & Adults",
    physicalForm: "Liquid",
    storageInstructions: "Store away from sunlight",
    originOfMedicine: "India",
    dosageForm: "Syrup",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "hungrycyp",
  name: "HUNGRYCYP Syrup",
  category: "Liquid",
  price: "₹80",
  stock: 210,
  image: Hungry,
  shortDesc: "Appetite booster and weight gainer.",
  description:
    "HUNGRYCYP helps improve appetite and supports weight gain in children with Cyproheptadine and Tricholine Citrate.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Use once or twice daily",
    suitableFor: "Children",
    physicalForm: "Liquid",
    storageInstructions: "Store at room temperature",
    originOfMedicine: "India",
    dosageForm: "Syrup",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "calbon-d3",
  name: "CALBON-D3 Syrup",
  category: "Liquid",
  price: "₹110",
  stock: 150,
  image: Calbon,
  shortDesc: "Supports bone health and calcium absorption.",
  description:
    "CALBON-D3 supports bone development, strength, and immunity with Calcium, Magnesium, Zinc, and Vitamin D3.",
  specifications: {
    drugType: "Nutraceutical",
    dosageGuidelines: "Use as directed",
    suitableFor: "Children & Adults",
    physicalForm: "Liquid",
    storageInstructions: "Store below 25°C",
    originOfMedicine: "India",
    dosageForm: "Syrup",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "gestrokind",
  name: "GESTROKIND Suspension",
  category: "Liquid",
  price: "₹75",
  stock: 190,
  image: Gestrokind,
  shortDesc: "Relief from gas, acidity, and indigestion.",
  description:
    "GESTROKIND provides relief from acidity, gas, and bloating using a gentle antacid formula.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Take after meals",
    suitableFor: "Adults",
    physicalForm: "Liquid",
    storageInstructions: "Keep in cool place",
    originOfMedicine: "India",
    dosageForm: "Suspension",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "meglocid",
  name: "MEGLOCID Suspension",
  category: "Liquid",
  price: "₹70",
  stock: 230,
  image: Meglocid,
  shortDesc: "Antacid for acidity and gastric discomfort.",
  description:
    "MEGLOCID helps neutralize stomach acid and reduce gastric discomfort with Magaldrate and Simethicone.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Take 1-2 teaspoons",
    suitableFor: "Adults",
    physicalForm: "Liquid",
    storageInstructions: "Shake before use",
    originOfMedicine: "India",
    dosageForm: "Suspension",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "gdcold-drops",
  name: "GDCOLD Drops",
  category: "Liquid",
  price: "₹45",
  stock: 160,
  image: Gdcoldd,
  shortDesc: "Relief from cold & fever in infants and kids.",
  description:
    "GDCOLD Drops treat fever, cold, and nasal blockage in infants. Safe and effective pediatric dose.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Use dropper as directed",
    suitableFor: "Infants & Kids",
    physicalForm: "Liquid Drops",
    storageInstructions: "Store below 25°C",
    originOfMedicine: "India",
    dosageForm: "Drops",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "boncare-d3",
  name: "BONCARE-D3 Oral Drops",
  category: "Liquid",
  price: "₹95",
  stock: 140,
  image: boncared3,
  shortDesc: "Vitamin D3 drops for infants and children.",
  description:
    "BONCARE-D3 supports bone growth and immunity in infants with Nano Vitamin D3.",
  specifications: {
    drugType: "Nutraceutical",
    dosageGuidelines: "Use once daily",
    suitableFor: "Infants",
    physicalForm: "Liquid Drops",
    storageInstructions: "Protect from light",
    originOfMedicine: "India",
    dosageForm: "Drops",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "geodzyme",
  name: "GEODZYME Syrup",
  category: "Liquid",
  price: "₹80",
  stock: 200,
  image: Geodzyme,
  shortDesc: "Digestive enzyme syrup for gas and bloating.",
  description:
    "GEODZYME improves digestion, nutrient absorption, and reduces gas and constipation.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Use after meals",
    suitableFor: "Children & Adults",
    physicalForm: "Liquid",
    storageInstructions: "Store in cool place",
    originOfMedicine: "India",
    dosageForm: "Syrup",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "5000 Bottles / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },

  },

  // ---------------- CAPSULES ----------------
 // ---------------- CAPSULES ----------------
{
  id: "pankind-dsr",
  name: "PANKIND-DSR Capsule",
  category: "Capsule",
  price: "₹160",
  stock: 50,
  image: Pankind,
  shortDesc: "Used for acidity and reflux issues.",
  description:
    "PANKIND-DSR treats acid reflux, heartburn, and regurgitation with Pantoprazole and Domperidone.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Once daily before meals or as directed",
    suitableFor: "Adults",
    physicalForm: "Capsule",
    storageInstructions: "Store below 25°C in a dry place",
    originOfMedicine: "India",
    dosageForm: "Capsule",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "1,00,000 Strips / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "rebkind-dsr",
  name: "REBKIND-DSR Capsule",
  category: "Capsule",
  price: "₹165",
  stock: 60,
  image: "/assets/rebkind-dsr.png",
  shortDesc: "Relief from GERD and acid reflux.",
  description:
    "REBKIND-DSR provides long-lasting relief from acidity and nausea with Rabeprazole and Domperidone.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Take 1 capsule daily or as prescribed",
    suitableFor: "Adults",
    physicalForm: "Capsule",
    storageInstructions: "Keep in cool, dry place",
    originOfMedicine: "India",
    dosageForm: "Capsule",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "1,00,000 Strips / Month",
    deliveryTime: "4-7 Days",
    mainDomesticMarket: "All India",
  },
},

// {
//   id: "itrocon-200",
//   name: "ITROCON-200 Capsule",
//   category: "Capsule",
//   price: "₹290",
//   stock: 40,
//   image: "/assets/itrocon-200.png",
//   shortDesc: "Antifungal medication.",
//   description:
//     "ITROCON-200 is used to treat fungal infections of the skin, nails, and internal organs with Itraconazole 200mg.",
//   specifications: {
//     drugType: "Allopathic",
//     dosageGuidelines: "As directed by physician",
//     suitableFor: "Adults",
//     physicalForm: "Capsule",
//     storageInstructions: "Store below 25°C away from moisture",
//     originOfMedicine: "India",
//     dosageForm: "Capsule",
//   },
//   tradeInformation: {
//     paymentTerms: "50% Advance",
//     supplyAbility: "50,000 Strips / Month",
//     deliveryTime: "4-7 Days",
//     mainDomesticMarket: "All India",
//   },
// },
 // ---------------- TABLETS ----------------
{
  id: "diclokind-p",
  name: "DICLOKIND-P Tablet",
  category: "Tablet",
  price: "₹85",
  stock: 300,
  image: Diclo,
  shortDesc: "Pain relief and anti-inflammatory.",
  description:
    "DICLOKIND-P provides effective relief from pain, swelling, and inflammation with Diclofenac and Paracetamol.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "1 tablet twice daily or as directed",
    suitableFor: "Adults",
    physicalForm: "Tablet",
    storageInstructions: "Store below 30°C",
    originOfMedicine: "India",
    dosageForm: "Tablet",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "2,00,000 Strips / Month",
    deliveryTime: "4–7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "asaira-sp",
  name: "ASAIRA-SP Tablet",
  category: "Tablet",
  price: "₹95",
  stock: 250,
  image: Asirasp,
  shortDesc: "Pain relief and muscle relaxant.",
  description:
    "ASAIRA-SP provides relief from swelling, pain, and muscular injury with Aceclofenac, Paracetamol, and Serratiopeptidase.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "As prescribed by doctor",
    suitableFor: "Adults",
    physicalForm: "Tablet",
    storageInstructions: "Keep in cool & dry place",
    originOfMedicine: "India",
    dosageForm: "Tablet",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "2,00,000 Strips / Month",
    deliveryTime: "4–7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "gdmol-650",
  name: "GDMOL-650 Tablet",
  category: "Tablet",
  price: "₹75",
  stock: 450,
  image: Gdmole,
  shortDesc: "Fever and pain relief.",
  description:
    "GDMOL-650 contains Paracetamol 650 mg for effective relief from fever, body pain, and headache.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Use 1 tablet every 6–8 hours",
    suitableFor: "Adults",
    physicalForm: "Tablet",
    storageInstructions: "Store in cool, dry place",
    originOfMedicine: "India",
    dosageForm: "Tablet",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "3,00,000 Strips / Month",
    deliveryTime: "4–7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "ackind-p",
  name: "ACKIND-P Tablet",
  category: "Tablet",
  price: "₹85",
  stock: 220,
  image: Ackindp,
  shortDesc: "Pain, fever, and inflammation relief.",
  description:
    "ACKIND-P is used to treat pain, inflammation, and fever with Aceclofenac and Paracetamol.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "Take after food or as directed",
    suitableFor: "Adults",
    physicalForm: "Tablet",
    storageInstructions: "Store below 30°C",
    originOfMedicine: "India",
    dosageForm: "Tablet",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "2,50,000 Strips / Month",
    deliveryTime: "4–7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "leomente-m",
  name: "LEOMENTE-M Tablet",
  category: "Tablet",
  price: "₹120",
  stock: 180,
  image: Lemontine,
  shortDesc: "Relief from allergies and asthma.",
  description:
    "LEOMENTE-M treats allergic rhinitis, sneezing, and breathing problems with Levocetirizine and Montelukast.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "1 tablet once daily",
    suitableFor: "Adults & Children (above 6 years)",
    physicalForm: "Tablet",
    storageInstructions: "Store at room temperature",
    originOfMedicine: "India",
    dosageForm: "Tablet",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "1,00,000 Strips / Month",
    deliveryTime: "4–7 Days",
    mainDomesticMarket: "All India",
  },
},

{
  id: "livocet-5",
  name: "LIVOCET-5 Tablet",
  category: "Tablet",
  price: "₹65",
  stock: 300,
  image: Livovet5,
  shortDesc: "Relief from allergy symptoms.",
  description:
    "LIVOCET-5 is used to treat allergies, itching, sneezing, and runny nose with Levocetirizine.",
  specifications: {
    drugType: "Allopathic",
    dosageGuidelines: "1 tablet daily or as advised",
    suitableFor: "Adults & Children (above 6 years)",
    physicalForm: "Tablet",
    storageInstructions: "Store in cool, dry place",
    originOfMedicine: "India",
    dosageForm: "Tablet",
  },
  tradeInformation: {
    paymentTerms: "50% Advance",
    supplyAbility: "2,00,000 Strips / Month",
    deliveryTime: "4–7 Days",
    mainDomesticMarket: "All India",
  },
},
];
