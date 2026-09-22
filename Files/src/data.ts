import { Car, CategoryDetail } from "./types";

// Category D (SUV) Images
import nissanQashqaiImg from "./assets/images/nissan_qashqai.png";
import nissanQashqaiSide from "./assets/images/nissan_qashqai_side.png";
import nissanQashqaiDash from "./assets/images/qashqai_cockpit_fix_1789678852206.jpg";
import nissanQashqaiSeats from "./assets/images/qashqai_cabin_seats_1789678457633.jpg";

import peugeot2008Img from "./assets/images/peugeot_2008.png";
import peugeotSide from "./assets/images/peugeot_side.png";
import peugeotDash from "./assets/images/peugeot_cockpit_view_1789678469313.jpg";
import peugeotSeats from "./assets/images/peugeot_cabin_seats_1789678480199.jpg";

import suzukiVitaraImg from "./assets/images/suzuki_vitara.png";
import vitaraSide from "./assets/images/vitara_side.png";
import vitaraDash from "./assets/images/vitara_cockpit_view_1789678490987.jpg";
import vitaraSeats from "./assets/images/vitara_cabin_seats_1789678501405.jpg";

// Category A (Mini) Images
import aygoFront from "./assets/images/aygo_front.png";
import aygoSide from "./assets/images/aygo_side.png";
import aygoDash from "./assets/images/aygo_dash.jpg";
import aygoSeats from "./assets/images/aygo_seats.jpg";

import pandaFront from "./assets/images/panda_front.png";
import pandaSide from "./assets/images/panda_side.png";
import pandaDash from "./assets/images/panda_dash.jpg";
import pandaSeats from "./assets/images/panda_seats.jpg";

import i10Front from "./assets/images/i10_front.png";
import i10Side from "./assets/images/i10_side.png";
import i10Dash from "./assets/images/i10_dash.jpg";
import i10Seats from "./assets/images/i10_seats.jpg";

// Category B (Economy) Images
import yarisFront from "./assets/images/yaris_front.png";
import yarisSide from "./assets/images/yaris_side.png";
import yarisDash from "./assets/images/yaris_dash.jpg";
import yarisSeats from "./assets/images/yaris_seats.jpg";

import peugeot208Front from "./assets/images/peugeot208_front.png";
import peugeot208Side from "./assets/images/peugeot208_side.png";
import peugeot208Dash from "./assets/images/peugeot208_dash.jpg";
import peugeot208Seats from "./assets/images/peugeot208_seats.jpg";

import clioFront from "./assets/images/clio_front.png";
import clioSide from "./assets/images/clio_side.png";
import clioDash from "./assets/images/clio_dash.jpg";
import clioSeats from "./assets/images/clio_seats.jpg";

// Category C (Compact) Images
import golfFront from "./assets/images/golf_front.png";
import golfSide from "./assets/images/golf_side.png";
import golfDash from "./assets/images/golf_dash.jpg";
import golfSeats from "./assets/images/golf_seats.jpg";

import i30Front from "./assets/images/i30_front.png";
import i30Side from "./assets/images/i30_side.png";
import i30Dash from "./assets/images/i30_dash.jpg";
import i30Seats from "./assets/images/i30_seats.jpg";

import astraFront from "./assets/images/astra_front.png";
import astraSide from "./assets/images/astra_side.png";
import astraDash from "./assets/images/astra_dash.jpg";
import astraSeats from "./assets/images/astra_seats.jpg";


export const getCars = (lang: 'el' | 'en'): Car[] => [
  {
    id: "mini",
    name: lang === 'el' ? "Κατηγορία A (Mini)" : "Category A (Mini)",
    categoryLetter: "A",
    categoryType: "Mini",
    models: "Toyota Aygo, Fiat Panda, Hyundai i10",
    modelsList: [
      "Toyota Aygo",
      "Fiat Panda",
      "Hyundai i10"
    ],
    tagline: lang === 'el'
      ? "Ευέλικτο στην πόλη & εξαιρετικά οικονομικό"
      : "Nimble in town & ultra economical",
    highlights: lang === 'el'
      ? ["4.2 L/100km (Eco)", "2 Αποσκευές", "Εύκολο Παρκάρισμα", "0€ Εγγύηση"]
      : ["4.2 L/100km (Eco)", "2 Luggage Bags", "Easy Parking", "0€ Deposit"],
    price: 35,
    image: aygoFront,
    features: lang === 'el' 
      ? ["4 Θέσεις", "5 Πόρτες", "A/C Clima", "Μηχανικό"]
      : ["4 Seats", "5 Doors", "A/C Clima", "Manual"],
  },
  {
    id: "economy",
    name: lang === 'el' ? "Κατηγορία B (Economy)" : "Category B (Economy)",
    categoryLetter: "B",
    categoryType: "Economy",
    models: "Toyota Yaris, Peugeot 208, Renault Clio",
    modelsList: [
      "Toyota Yaris",
      "Peugeot 208",
      "Renault Clio"
    ],
    tagline: lang === 'el'
      ? "Η χρυσή τομή άνεσης 5 θέσεων & οικονομίας"
      : "The ideal 5-passenger balance of space & economy",
    highlights: lang === 'el'
      ? ["4.8 L/100km", "3 Αποσκευές", "5 Πλήρεις Θέσεις", "0€ Εγγύηση"]
      : ["4.8 L/100km", "3 Luggage Bags", "5 Full Seats", "0€ Deposit"],
    price: 40,
    image: yarisFront,
    features: lang === 'el'
      ? ["5 Θέσεις", "5 Πόρτες", "A/C Clima", "Μηχανικό"]
      : ["5 Seats", "5 Doors", "A/C Clima", "Manual"],
  },
  {
    id: "compact",
    name: lang === 'el' ? "Κατηγορία C (Compact)" : "Category C (Compact)",
    categoryLetter: "C",
    categoryType: "Compact",
    models: "VW Golf, Hyundai i30, Opel Astra",
    modelsList: [
      "VW Golf",
      "Hyundai i30",
      "Opel Astra"
    ],
    tagline: lang === 'el'
      ? "Απόλυτη άνεση, στιβαρό πάτημα & χώροι 380L"
      : "Cruising comfort, solid handling & 380L trunk",
    highlights: lang === 'el'
      ? ["5.1 L/100km", "4 Αποσκευές", "Ψηφιακό Ταμπλό", "0€ Εγγύηση"]
      : ["5.1 L/100km", "4 Luggage Bags", "Digital Cockpit", "0€ Deposit"],
    price: 45,
    image: golfFront,
    features: lang === 'el'
      ? ["5 Θέσεις", "5 Πόρτες", "A/C Clima", "Μηχανικό"]
      : ["5 Seats", "5 Doors", "A/C Clima", "Manual"],
  },
  {
    id: "suv",
    name: lang === 'el' ? "Κατηγορία D (SUV)" : "Category D (SUV)",
    categoryLetter: "D",
    categoryType: "SUV",
    models: "Nissan Qashqai, Peugeot 2008, Suzuki Vitara",
    modelsList: [
      "Nissan Qashqai",
      "Peugeot 2008",
      "Suzuki Vitara"
    ],
    tagline: lang === 'el'
      ? "Υπερυψωμένη θέση, αυτόματο κιβώτιο & κορυφαία ασφάλεια"
      : "Elevated driving view, automatic gearbox & top safety",
    highlights: lang === 'el'
      ? ["Αυτόματο Κιβώτιο", "430L Πορτ-Μπαγκάζ", "Island SUV", "0€ Εγγύηση"]
      : ["Automatic Gearbox", "430L Trunk", "Island SUV", "0€ Deposit"],
    price: 60,
    image: nissanQashqaiImg,
    features: lang === 'el'
      ? ["5 Θέσεις", "5 Πόρτες", "A/C Clima", "Αυτόματο"]
      : ["5 Seats", "5 Doors", "A/C Clima", "Automatic"],
  },
];

export const getCategoryDetail = (categoryId: string, lang: 'el' | 'en'): CategoryDetail | null => {
  if (categoryId === 'suv' || categoryId === 'category-d' || categoryId === 'd') {
    return {
      id: "suv",
      name: lang === 'el' ? "Κατηγορία D (SUV)" : "Category D (SUV)",
      categoryLetter: "D",
      categoryType: "SUV",
      tagline: lang === 'el' 
        ? "Απόλυτη ελευθερία, άνεση & πολυτέλεια για τις διαδρομές της Κω" 
        : "Ultimate freedom, comfort & elevated travel across Kos Island",
      description: lang === 'el'
        ? "Η Κατηγορία D (SUV) προσφέρει υπερυψωμένη θέση οδήγησης, κορυφαία ευρυχωρία για επιβάτες και αποσκευές, καθώς και σύγχρονα αυτόματα κιβώτια ταχυτήτων. Ιδανική επιλογή για οικογένειες, παρέες ή ζευγάρια που θέλουν να εξερευνήσουν τόσο τα παραλιακά θέρετρα όσο και τα ορεινά χωριά του νησιού με απαράμιλλη άνεση."
        : "Category D (SUV) features elevated seating, exceptional cabin and luggage space, and smooth automatic transmissions. The perfect choice for families and travelers seeking effortless exploration across scenic coastal roads and mountain villages in Kos.",
      pricePerDay: 60,
      modelsList: ["Nissan Qashqai", "Peugeot 2008", "Suzuki Vitara"],
      coverImage: nissanQashqaiImg,
      features: lang === 'el'
        ? ["Αυτόματο Κιβώτιο", "5 Άνετες Θέσεις", "Μεγάλο Πορτ-Μπαγκάζ", "0€ Εγγύηση", "100% Πλήρης Ασφάλεια", "Κλιματισμός Clima"]
        : ["Automatic Transmission", "5 Comfortable Seats", "Spacious Trunk", "0€ Deposit", "100% Full Insurance", "Dual Climate Control"],
      vehicles: [
        {
          id: "nissan-qashqai",
          name: "Nissan Qashqai",
          tagline: lang === 'el' 
            ? "Ο ηγέτης των C-SUV — Ασυναγώνιστη ευρυχωρία, premium ποιότητα κύλισης και προηγμένη τεχνολογία." 
            : "The benchmark crossover SUV — Unmatched comfort, generous space, and cutting-edge driving aids.",
          image: nissanQashqaiImg,
          gallery: [
            {
              id: "qashqai-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: nissanQashqaiImg,
            },
            {
              id: "qashqai-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: nissanQashqaiSide,
            },
            {
              id: "qashqai-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: nissanQashqaiDash,
            },
            {
              id: "qashqai-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: nissanQashqaiSeats,
            },
          ],
          badge: lang === 'el' ? "C-SUV • Αυτόματο" : "C-SUV • Automatic",
          engine: "1.3L DIG-T 158hp",
          transmission: lang === 'el' ? "Αυτόματο" : "Automatic",
          seats: 5,
          doors: 5,
          luggage: lang === 'el' ? "430L (4 Βαλίτσες)" : "430L (4 Bags)",
          airConditioning: lang === 'el' ? "Διζωνικό Clima" : "Dual Clima",
          fuelEconomy: "5.5 L / 100km (Eco)",
          highlights: lang === 'el' ? [
            "Οθόνη αφής 8'' με Apple CarPlay & Android Auto",
            "Κάμερα οπισθοπορείας & αισθητήρες στάθμευσης",
            "Προηγμένο σύστημα Cruise Control & Speed Limiter",
            "Σύστημα διατήρησης λωρίδας (Lane Keep Assist)",
            "Υποδοχές Isofix για παιδικά καθίσματα",
            "Διπλές θύρες φόρτισης USB-C & USB-A"
          ] : [
            "8'' Touchscreen with Apple CarPlay & Android Auto",
            "Rear-view camera with parking guidelines",
            "Cruise Control with Speed Limiter",
            "Lane Keeping & Blind Spot Warning",
            "Isofix anchor points for child safety seats",
            "Fast USB-C and USB-A charging ports"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Αυτόματο" : "Automatic" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "5 Επιβάτες" : "5 Passengers" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "430 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.3L Turbo 158hp" },
            { label: lang === 'el' ? "Καύσιμο" : "Fuel", value: lang === 'el' ? "Βενζίνη / Mild Hybrid" : "Petrol / Mild Hybrid" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: lang === 'el' ? "Αυτόματος Διζωνικός" : "Dual-zone Clima" },
          ],
          idealFor: lang === 'el' 
            ? "Οικογένειες & παρέες που επιθυμούν μέγιστη άνεση, ασφάλεια και άφθονο χώρο για αποσκευές και εξοπλισμό παραλίας."
            : "Families & groups seeking superior comfort, safety, and ample luggage space for island road trips.",
        },
        {
          id: "peugeot-2008",
          name: "Peugeot 2008",
          tagline: lang === 'el'
            ? "Επιβλητική γαλλική σχεδίαση, σπορτίφ αίσθηση οδήγησης και το φουτουριστικό Peugeot 3D i-Cockpit."
            : "Striking French design, athletic driving dynamics, and the futuristic 3D Peugeot i-Cockpit.",
          image: peugeot2008Img,
          gallery: [
            {
              id: "peugeot-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: peugeot2008Img,
            },
            {
              id: "peugeot-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: peugeotSide,
            },
            {
              id: "peugeot-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: peugeotDash,
            },
            {
              id: "peugeot-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: peugeotSeats,
            },
          ],
          badge: lang === 'el' ? "SUV • Αυτόματο EAT8" : "SUV • Automatic EAT8",
          engine: "1.2L Turbo 130hp",
          transmission: lang === 'el' ? "Αυτόματο" : "Automatic",
          seats: 5,
          doors: 5,
          luggage: lang === 'el' ? "434L (4 Βαλίτσες)" : "434L (4 Bags)",
          airConditioning: lang === 'el' ? "Αυτόματο Clima" : "Auto Climate",
          fuelEconomy: "5.2 L / 100km (Eco)",
          highlights: lang === 'el' ? [
            "Ψηφιακός 3D πίνακας οργάνων Peugeot i-Cockpit",
            "Έγχρωμη οθόνη αφής HD 7'' με ασύρματο Smartphone Mirroring",
            "Full LED εμπρός & πίσω φωτιστικά σώματα",
            "Drive Mode Selector (Eco, Normal, Sport)",
            "Αισθητήρες παρκαρίσματος & αυτόματοι υαλοκαθαριστήρες",
            "Σύστημα Hill Assist για εύκολη εκκίνηση σε ανηφόρα"
          ] : [
            "3D Digital Peugeot i-Cockpit Instrument Cluster",
            "7'' HD Touchscreen with wireless Smartphone Mirroring",
            "Full LED signature claw headlights & rear lamps",
            "Drive Mode Selector (Eco, Normal, Sport)",
            "Acoustic rear park assist and rain sensors",
            "Hill Start Assist for effortless uphill driving"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Αυτόματο EAT8" : "Automatic EAT8" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "5 Επιβάτες" : "5 Passengers" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "434 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.2L PureTech 130hp" },
            { label: lang === 'el' ? "Καύσιμο" : "Fuel", value: lang === 'el' ? "Βενζίνη (Euro 6d)" : "Petrol (Euro 6d)" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: lang === 'el' ? "Αυτόματο Clima" : "Automatic Clima" },
          ],
          idealFor: lang === 'el'
            ? "Ταξιδιώτες που αγαπούν τη μοντέρνα αισθητική, την τεχνολογία και την ευελιξία στην πόλη της Κω και στις εξορμήσεις."
            : "Travelers who appreciate avant-garde styling, modern cockpit technology, and spirited handling.",
        },
        {
          id: "suzuki-vitara",
          name: "Suzuki Vitara",
          tagline: lang === 'el'
            ? "Αυθεντικό SUV πνεύμα — Υψηλή απόσταση από το έδαφος, θρυλική αντοχή και κορυφαία αξιοπιστία."
            : "Authentic SUV heritage — Elevated ground clearance, legendary durability, and unmatched reliability.",
          image: suzukiVitaraImg,
          gallery: [
            {
              id: "vitara-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: suzukiVitaraImg,
            },
            {
              id: "vitara-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: vitaraSide,
            },
            {
              id: "vitara-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: vitaraDash,
            },
            {
              id: "vitara-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: vitaraSeats,
            },
          ],
          badge: lang === 'el' ? "SUV • Αυτόματο" : "SUV • Automatic",
          engine: "1.4L Turbo 129hp",
          transmission: lang === 'el' ? "Αυτόματο" : "Automatic",
          seats: 5,
          doors: 5,
          luggage: lang === 'el' ? "375L (3 Βαλίτσες)" : "375L (3 Bags)",
          airConditioning: lang === 'el' ? "A/C Clima" : "Auto A/C",
          fuelEconomy: "5.4 L / 100km (Hybrid)",
          highlights: lang === 'el' ? [
            "Αυξημένη απόσταση από το έδαφος (185mm) για όλους τους δρόμους",
            "Έγχρωμη οθόνη αφής 7'' με Navigation & Smartphone Integration",
            "Κάμερα οπισθοπορείας υψηλής ευκρίνειας",
            "Adaptive Cruise Control & Dual Sensor Brake Support (DSBS)",
            "Ράγες οροφής αλουμινίου & σκούρα πίσω κρύσταλλα",
            "Υβριδική τεχνολογία 48V για χαμηλή κατανάλωση"
          ] : [
            "185mm ground clearance for versatile island road exploration",
            "7'' Multimedia touchscreen with Navigation & Smartphone Link",
            "High-definition reversing camera",
            "Adaptive Cruise Control & Autonomous Emergency Braking",
            "Integrated roof rails & rear privacy glass",
            "Self-charging 48V Hybrid tech for fuel savings"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Αυτόματο" : "Automatic" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "5 Επιβάτες" : "5 Passengers" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "375 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.4L BoosterJet 129hp" },
            { label: lang === 'el' ? "Καύσιμο" : "Fuel", value: lang === 'el' ? "Βενζίνη Hybrid" : "Petrol Hybrid" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: lang === 'el' ? "Αυτόματο A/C" : "Automatic A/C" },
          ],
          idealFor: lang === 'el'
            ? "Εξερευνητές που θέλουν να ανακαλύψουν κάθε κρυφή γωνιά, παραλία και πανοραμική θέα του νησιού της Κω."
            : "Adventurers looking to explore every secluded beach, scenic trail, and viewpoint across Kos.",
        }
      ]
    };
  }

  if (categoryId === 'mini' || categoryId === 'category-a' || categoryId === 'a') {
    return {
      id: "mini",
      name: lang === 'el' ? "Κατηγορία A (Mini)" : "Category A (Mini)",
      categoryLetter: "A",
      categoryType: "Mini",
      tagline: lang === 'el' ? "Ευέλικτο, οικονομικό και ιδανικό για άνετο παρκάρισμα στην πόλη της Κω" : "Nimble, ultra-economical, and effortless to park anywhere in Kos",
      description: lang === 'el'
        ? "Η Κατηγορία A είναι η ιδανική επιλογή για ζευγάρια και ταξιδιώτες που επιθυμούν χαμηλή κατανάλωση καυσίμου και μέγιστη ευελιξία στα σοκάκια και στους πολυσύχναστους δρόμους της Κω."
        : "Category A is the smart, budget-conscious choice for couples and solo travelers looking for exceptional fuel economy and stress-free parking.",
      pricePerDay: 35,
      modelsList: ["Toyota Aygo", "Fiat Panda", "Hyundai i10"],
      coverImage: aygoFront,
      features: lang === 'el'
        ? ["Μηχανικό Κιβώτιο", "4 Θέσεις", "A/C Κλιματισμός", "0€ Εγγύηση", "100% Πλήρης Ασφάλεια", "Χαμηλή Κατανάλωση"]
        : ["Manual Transmission", "4 Seats", "A/C Climate", "0€ Deposit", "100% Full Insurance", "Low Fuel Consumption"],
      vehicles: [
        {
          id: "toyota-aygo",
          name: "Toyota Aygo",
          tagline: lang === 'el' ? "Ασυναγώνιστη αξιοπιστία Toyota και απίστευτη οικονομία καυσίμου." : "Legendary Toyota reliability with exceptional fuel efficiency.",
          image: aygoFront,
          gallery: [
            {
              id: "aygo-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: aygoFront,
            },
            {
              id: "aygo-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: aygoSide,
            },
            {
              id: "aygo-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: aygoDash,
            },
            {
              id: "aygo-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: aygoSeats,
            },
          ],
          badge: lang === 'el' ? "City Champion • Μηχανικό" : "City Champion • Manual",
          engine: "1.0L VVT-i (72 hp)",
          transmission: lang === 'el' ? "Μηχανικό" : "Manual",
          seats: 4,
          doors: 5,
          luggage: lang === 'el' ? "168L (2 Βαλίτσες)" : "168L (2 Bags)",
          airConditioning: "A/C Clima",
          fuelEconomy: "4.2 L / 100km",
          highlights: lang === 'el' ? [
            "Σύστημα πολυμέσων με Bluetooth & θύρα USB",
            "Ισχυρός κλιματισμός A/C Clima",
            "Ηλεκτρικά παράθυρα & κεντρικό κλείδωμα",
            "Υποδοχές Isofix για παιδικά καθίσματα",
            "Εξαιρετικά μικρός κύκλος στροφής για εύκολο παρκάρισμα"
          ] : [
            "Multimedia system with Bluetooth & USB audio",
            "Powerful A/C Clima air conditioning",
            "Power front windows and remote locking",
            "Isofix child seat anchorage points",
            "Ultra-tight turning radius for effortless parking"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Μηχανικό" : "Manual" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "4 Επιβάτες" : "4 Passengers" },
            { label: lang === 'el' ? "Κατανάλωση" : "Consumption", value: "4.2L / 100km" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "168 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.0L VVT-i 72hp" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: "A/C Clima" },
          ],
          idealFor: lang === 'el' ? "Ζευγάρια και solo ταξιδιώτες που επιθυμούν εύκολο παρκάρισμα και οικονομία." : "Couples and solo travelers seeking effortless parking and fuel economy."
        },
        {
          id: "fiat-panda",
          name: "Fiat Panda",
          tagline: lang === 'el' ? "Πρακτικότητα, ψηλή θέση οδήγησης και ιταλικό ταμπεραμέντο." : "Italian practicality with elevated seating and smart space.",
          image: pandaFront,
          gallery: [
            {
              id: "panda-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: pandaFront,
            },
            {
              id: "panda-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: pandaSide,
            },
            {
              id: "panda-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: pandaDash,
            },
            {
              id: "panda-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: pandaSeats,
            },
          ],
          badge: lang === 'el' ? "Practical City • Μηχανικό" : "Practical City • Manual",
          engine: "1.0L Hybrid (70 hp)",
          transmission: lang === 'el' ? "Μηχανικό" : "Manual",
          seats: 4,
          doors: 5,
          luggage: lang === 'el' ? "225L (3 Βαλίτσες)" : "225L (3 Bags)",
          airConditioning: "A/C Clima",
          fuelEconomy: "4.4 L / 100km",
          highlights: lang === 'el' ? [
            "Λειτουργία City Mode για πανεύκολο τιμόνι στο παρκάρισμα",
            "Υπερυψωμένη θέση οδήγησης με άριστη ορατότητα",
            "Υβριδικό σύστημα 1.0L Hybrid για χαμηλή κατανάλωση",
            "Ηχοσύστημα Uconnect με Bluetooth & USB"
          ] : [
            "City Mode electric steering for feather-light parking",
            "High commanding driver position with panoramic visibility",
            "1.0L Hybrid engine for ultra-low fuel consumption",
            "Uconnect audio with Bluetooth streaming & USB"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Μηχανικό" : "Manual" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "4 Επιβάτες" : "4 Passengers" },
            { label: lang === 'el' ? "Κατανάλωση" : "Consumption", value: "4.4L / 100km" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "225 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.0L Hybrid 70hp" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: "A/C Clima" },
          ],
          idealFor: lang === 'el' ? "Ευκολία, άνετη πρόσβαση και ξεκούραστες καθημερινές διαδρομές." : "Effortless access, daily ease and relaxed island cruising."
        },
        {
          id: "hyundai-i10",
          name: "Hyundai i10",
          tagline: lang === 'el' ? "Κορυφαία ποιότητα κύλισης στην κατηγορία mini με πλούσιο εξοπλισμό." : "Top-tier ride quality and rich equipment in the mini class.",
          image: i10Front,
          gallery: [
            {
              id: "i10-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: i10Front,
            },
            {
              id: "i10-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: i10Side,
            },
            {
              id: "i10-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: i10Dash,
            },
            {
              id: "i10-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: i10Seats,
            },
          ],
          badge: lang === 'el' ? "Premium Mini • Μηχανικό" : "Premium Mini • Manual",
          engine: "1.0L MPi (67 hp)",
          transmission: lang === 'el' ? "Μηχανικό" : "Manual",
          seats: 4,
          doors: 5,
          luggage: lang === 'el' ? "252L (3 Βαλίτσες)" : "252L (3 Bags)",
          airConditioning: "A/C Clima",
          fuelEconomy: "4.5 L / 100km",
          highlights: lang === 'el' ? [
            "Έγχρωμη οθόνη αφής με Apple CarPlay & Android Auto",
            "Συστήματα ασφαλείας Hyundai SmartSense",
            "Κορυφαία ηχομόνωση καμπίνας",
            "Cruise Control & Speed Limiter στο τιμόνι"
          ] : [
            "Color touchscreen with Apple CarPlay & Android Auto",
            "Hyundai SmartSense active safety suite",
            "Whisper-quiet acoustic cabin insulation",
            "Steering-mounted Cruise Control & Speed Limiter"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Μηχανικό" : "Manual" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "4 Επιβάτες" : "4 Passengers" },
            { label: lang === 'el' ? "Κατανάλωση" : "Consumption", value: "4.5L / 100km" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "252 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.0L MPi 67hp" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: "A/C Clima" },
          ],
          idealFor: lang === 'el' ? "Άνετες αποδράσεις σε όλο το νησί με premium εξοπλισμό." : "Comfortable getaways around the island with premium tech."
        }
      ]
    };
  }

  if (categoryId === 'economy' || categoryId === 'category-b' || categoryId === 'b') {
    return {
      id: "economy",
      name: lang === 'el' ? "Κατηγορία B (Economy)" : "Category B (Economy)",
      categoryLetter: "B",
      categoryType: "Economy",
      tagline: lang === 'el' ? "Η χρυσή τομή άνεσης, 5 θέσεων και άριστης οικονομίας" : "The perfect balance of 5-passenger comfort and low fuel consumption",
      description: lang === 'el'
        ? "Η Κατηγορία B προσφέρει 5 πλήρεις θέσεις επιβατών, 5 πόρτες και μεγάλο χώρο αποσκευών. Ιδανικό για οικογένειες με παιδιά ή παρέες 4-5 ατόμων."
        : "Category B delivers 5 full seats, 5 doors, and generous boot space. The ideal choice for small families and groups of friends exploring Kos.",
      pricePerDay: 40,
      modelsList: ["Toyota Yaris", "Peugeot 208", "Renault Clio"],
      coverImage: yarisFront,
      features: lang === 'el'
        ? ["Μηχανικό Κιβώτιο", "5 Θέσεις", "5 Πόρτες", "0€ Εγγύηση", "100% Πλήρης Ασφάλεια", "A/C Κλιματισμός"]
        : ["Manual Transmission", "5 Seats", "5 Doors", "0€ Deposit", "100% Full Insurance", "A/C Climate"],
      vehicles: [
        {
          id: "toyota-yaris",
          name: "Toyota Yaris",
          tagline: lang === 'el' ? "Το πιο δημοφιλές αυτοκίνητο στην Ελλάδα για απροβλημάτιστες διακοπές." : "Greece's favorite hatchback for carefree vacation road trips.",
          image: yarisFront,
          gallery: [
            {
              id: "yaris-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: yarisFront,
            },
            {
              id: "yaris-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: yarisSide,
            },
            {
              id: "yaris-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: yarisDash,
            },
            {
              id: "yaris-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: yarisSeats,
            },
          ],
          badge: lang === 'el' ? "Top Pick • 5 Θέσεις" : "Top Pick • 5 Seats",
          engine: "1.5L Dual VVT-i (125 hp)",
          transmission: lang === 'el' ? "Μηχανικό" : "Manual",
          seats: 5,
          doors: 5,
          luggage: lang === 'el' ? "286L (2 Βαλίτσες)" : "286L (2 Bags)",
          airConditioning: "A/C Clima",
          fuelEconomy: "4.8 L / 100km",
          highlights: lang === 'el' ? [
            "Πακέτο ενεργητικής ασφάλειας Toyota Safety Sense",
            "Κεντρική οθόνη αφής με Apple CarPlay & Android Auto",
            "Κάμερα οπισθοπορείας & αισθητήρες",
            "Υποδοχές Isofix για παιδικά καθίσματα",
            "Χαμηλή κατανάλωση και κορυφαία αξιοπιστία"
          ] : [
            "Toyota Safety Sense suite with pre-collision system",
            "Central multimedia touchscreen with Apple CarPlay & Android Auto",
            "Integrated reversing camera",
            "Isofix points for child seats",
            "Legendary Japanese build quality and fuel economy"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Μηχανικό" : "Manual" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "5 Επιβάτες" : "5 Passengers" },
            { label: lang === 'el' ? "Κατανάλωση" : "Consumption", value: "4.8L / 100km" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "286 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.5L Petrol 125hp" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: "A/C Clima" },
          ],
          idealFor: lang === 'el' ? "Οικογένειες και παρέες που θέλουν σιγουριά και άνεση σε κάθε διαδρομή." : "Families and friends seeking absolute reliability and comfort."
        },
        {
          id: "peugeot-208",
          name: "Peugeot 208",
          tagline: lang === 'el' ? "Εκλεπτυσμένο design, εξαιρετική ηχομόνωση και σπορ συμπεριφορά." : "Refined styling, superb acoustic comfort, and dynamic road holding.",
          image: peugeot208Front,
          gallery: [
            {
              id: "p208-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: peugeot208Front,
            },
            {
              id: "p208-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: peugeot208Side,
            },
            {
              id: "p208-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: peugeot208Dash,
            },
            {
              id: "p208-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: peugeot208Seats,
            },
          ],
          badge: lang === 'el' ? "Style Award • 5 Θέσεις" : "Style Award • 5 Seats",
          engine: "1.2L PureTech (100 hp)",
          transmission: lang === 'el' ? "Μηχανικό" : "Manual",
          seats: 5,
          doors: 5,
          luggage: lang === 'el' ? "311L (3 Βαλίτσες)" : "311L (3 Bags)",
          airConditioning: "A/C Clima",
          fuelEconomy: "4.9 L / 100km",
          highlights: lang === 'el' ? [
            "Μοναδικό Peugeot i-Cockpit με συμπαγές σπορ τιμόνι",
            "Έγχρωμη οθόνη αφής 7'' με Smartphone Mirroring",
            "Εμπρός φώτα ημέρας LED με σχεδίαση 'νυχιών λιονταριού'",
            "Αισθητήρες στάθμευσης & Hill Assist"
          ] : [
            "Unique Peugeot i-Cockpit with compact sport steering wheel",
            "7'' color touchscreen with Smartphone Mirroring",
            "Signature 3-claw LED daytime running lights",
            "Rear parking sensors & Hill Assist"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Μηχανικό" : "Manual" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "5 Επιβάτες" : "5 Passengers" },
            { label: lang === 'el' ? "Κατανάλωση" : "Consumption", value: "4.9L / 100km" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "311 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.2L Turbo 100hp" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: "A/C Clima" },
          ],
          idealFor: lang === 'el' ? "Οδηγούς που ζητούν απαράμιλλο στυλ, premium αίσθηση και άνεση." : "Drivers desiring chic French styling and premium cabin feel."
        },
        {
          id: "renault-clio",
          name: "Renault Clio",
          tagline: lang === 'el' ? "Κορυφαίος χώρος αποσκευών και υποδειγματική άνεση ανάρτησης." : "Class-leading trunk volume and exceptionally plush suspension.",
          image: clioFront,
          gallery: [
            {
              id: "clio-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: clioFront,
            },
            {
              id: "clio-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: clioSide,
            },
            {
              id: "clio-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: clioDash,
            },
            {
              id: "clio-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: clioSeats,
            },
          ],
          badge: lang === 'el' ? "Spacious Economy • 5 Θέσεις" : "Spacious Economy • 5 Seats",
          engine: "1.0L TCe Turbo (90 hp)",
          transmission: lang === 'el' ? "Μηχανικό" : "Manual",
          seats: 5,
          doors: 5,
          luggage: lang === 'el' ? "391L (3 Βαλίτσες)" : "391L (3 Bags)",
          airConditioning: "A/C Clima",
          fuelEconomy: "5.0 L / 100km",
          highlights: lang === 'el' ? [
            "Τεράστιος χώρος αποσκευών 391 Litres στην κατηγορία",
            "Σύστημα Easy Link με οθόνη αφής & Bluetooth",
            "Cruise Control με περιοριστή ταχύτητας",
            "Αναπαυτικά καθίσματα ιδανικά για πολύωρες διαδρομές"
          ] : [
            "Massive 391 Litres cargo boot in the economy segment",
            "Easy Link multimedia touchscreen with Bluetooth",
            "Cruise Control with Speed Limiter",
            "Ultra-cushioned seats crafted for long scenic drives"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Μηχανικό" : "Manual" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "5 Επιβάτες" : "5 Passengers" },
            { label: lang === 'el' ? "Κατανάλωση" : "Consumption", value: "5.0L / 100km" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "391 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.0L Turbo 90hp" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: "A/C Clima" },
          ],
          idealFor: lang === 'el' ? "Μεγάλες αποσκευές και άνετο γύρο του νησιού της Κω." : "Extra luggage and comfortable island-wide touring."
        }
      ]
    };
  }

  if (categoryId === 'compact' || categoryId === 'category-c' || categoryId === 'c') {
    return {
      id: "compact",
      name: lang === 'el' ? "Κατηγορία C (Compact)" : "Category C (Compact)",
      categoryLetter: "C",
      categoryType: "Compact",
      tagline: lang === 'el' ? "Πολυτέλεια, στιβαρό πάτημα και μέγιστη ασφάλεια σε κάθε διαδρομή" : "Premium refinement, solid road holding, and top-tier safety",
      description: lang === 'el'
        ? "Η Κατηγορία C συνδυάζει ευρύχωρο εσωτερικό C-Segment με δυναμικούς κινητήρες και κορυφαία άνεση σε ταξίδια μεγάλων αποστάσεων στην Κω."
        : "Category C blends generous C-segment cabin space with punchy turbocharged engines and supreme cruising comfort for island-wide touring.",
      pricePerDay: 45,
      modelsList: ["VW Golf", "Hyundai i30", "Opel Astra"],
      coverImage: golfFront,
      features: lang === 'el'
        ? ["Μηχανικό Κιβώτιο", "5 Άνετες Θέσεις", "380L Αποσκευές", "0€ Εγγύηση", "100% Πλήρης Ασφάλεια", "Ψηφιακό Ταμπλό"]
        : ["Manual Transmission", "5 Comfortable Seats", "380L Luggage", "0€ Deposit", "100% Full Insurance", "Digital Cockpit"],
      vehicles: [
        {
          id: "vw-golf",
          name: "VW Golf",
          tagline: lang === 'el' ? "Το απόλυτο σημείο αναφοράς της κατηγορίας με γερμανική ακρίβεια." : "The definitive compact benchmark built with German precision.",
          image: golfFront,
          gallery: [
            {
              id: "golf-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: golfFront,
            },
            {
              id: "golf-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: golfSide,
            },
            {
              id: "golf-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: golfDash,
            },
            {
              id: "golf-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: golfSeats,
            },
          ],
          badge: lang === 'el' ? "German Benchmark • 5 Θέσεις" : "German Benchmark • 5 Seats",
          engine: "1.5L TSI (130 hp)",
          transmission: lang === 'el' ? "Μηχανικό" : "Manual",
          seats: 5,
          doors: 5,
          luggage: lang === 'el' ? "381L (3 Βαλίτσες)" : "381L (3 Bags)",
          airConditioning: "Climatronic",
          fuelEconomy: "5.1 L / 100km",
          highlights: lang === 'el' ? [
            "Πλήρως ψηφιακός πίνακας Digital Cockpit Pro 10.25''",
            "Front Assist με αυτόματο φρενάρισμα ανάγκης",
            "Ασύρματο Apple CarPlay & Android Auto",
            "Κλιματισμός Climatronic 3 ζωνών",
            "Εξαιρετική σταθερότητα στον ανοιχτό δρόμο"
          ] : [
            "10.25'' full digital instrument Digital Cockpit Pro",
            "Front Assist autonomous emergency braking",
            "Wireless Apple CarPlay & Android Auto integration",
            "Climatronic 3-zone climate control",
            "Uncompromising highway stability and ride smoothness"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Μηχανικό" : "Manual" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "5 Επιβάτες" : "5 Passengers" },
            { label: lang === 'el' ? "Κατανάλωση" : "Consumption", value: "5.1L / 100km" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "381 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.5L TSI 130hp" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: "Climatronic" },
          ],
          idealFor: lang === 'el' ? "Απαιτητικούς οδηγούς που ζητούν κορυφαία ποιότητα κύλισης και ηχομόνωση." : "Demanding drivers who demand top-notch road behavior."
        },
        {
          id: "hyundai-i30",
          name: "Hyundai i30",
          tagline: lang === 'el' ? "Άνεση, ησυχία στην καμπίνα και αξιοπιστία 5 αστέρων." : "Quiet cabin, plush comfort, and 5-star reliability.",
          image: i30Front,
          gallery: [
            {
              id: "i30-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: i30Front,
            },
            {
              id: "i30-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: i30Side,
            },
            {
              id: "i30-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: i30Dash,
            },
            {
              id: "i30-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: i30Seats,
            },
          ],
          badge: lang === 'el' ? "Comfort Hatch • 5 Θέσεις" : "Comfort Hatch • 5 Seats",
          engine: "1.0L T-GDI (120 hp)",
          transmission: lang === 'el' ? "Μηχανικό" : "Manual",
          seats: 5,
          doors: 5,
          luggage: lang === 'el' ? "395L (3 Βαλίτσες)" : "395L (3 Bags)",
          airConditioning: "A/C Clima",
          fuelEconomy: "5.2 L / 100km",
          highlights: lang === 'el' ? [
            "Πακέτο υποβοήθησης οδήγησης Hyundai SmartSense",
            "Έγχρωμη οθόνη αφής 8'' με Navigation",
            "Κάμερα οπισθοπορείας υψηλής ευκρίνειας",
            "Μεγάλος χώρος αποσκευών 395 Litres",
            "Αυτόματος διζωνικός κλιματισμός"
          ] : [
            "Hyundai SmartSense active driver assist pack",
            "8'' infotainment touchscreen with navigation",
            "High-definition rearview camera",
            "Generous 395 Litres luggage boot",
            "Dual-zone automatic climate control"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Μηχανικό" : "Manual" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "5 Επιβάτες" : "5 Passengers" },
            { label: lang === 'el' ? "Κατανάλωση" : "Consumption", value: "5.2L / 100km" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "395 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.0L Turbo 120hp" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: "A/C Clima" },
          ],
          idealFor: lang === 'el' ? "Οικογένειες και παρέες για ξεκούραστα ταξίδια σε όλο το νησί." : "Families and groups wanting quiet, relaxed touring."
        },
        {
          id: "opel-astra",
          name: "Opel Astra",
          tagline: lang === 'el' ? "Μοντέρνα γερμανική σχεδίαση με Pure Panel και εργονομικά καθίσματα AGR." : "Modern German design with Pure Panel cockpit and AGR ergonomic seating.",
          image: astraFront,
          gallery: [
            {
              id: "astra-ext-34",
              label: lang === 'el' ? "Εξωτερικό" : "Exterior",
              angleName: "front34",
              url: astraFront,
            },
            {
              id: "astra-side",
              label: lang === 'el' ? "Προφίλ" : "Side Profile",
              angleName: "side",
              url: astraSide,
            },
            {
              id: "astra-dash",
              label: lang === 'el' ? "Ταμπλό" : "Dashboard",
              angleName: "dash",
              url: astraDash,
            },
            {
              id: "astra-seats",
              label: lang === 'el' ? "Καθίσματα" : "Seats",
              angleName: "seats",
              url: astraSeats,
            },
          ],
          badge: lang === 'el' ? "Modern C-Hatch • 5 Θέσεις" : "Modern C-Hatch • 5 Seats",
          engine: "1.2L Turbo (130 hp)",
          transmission: lang === 'el' ? "Μηχανικό" : "Manual",
          seats: 5,
          doors: 5,
          luggage: lang === 'el' ? "422L (4 Βαλίτσες)" : "422L (4 Bags)",
          airConditioning: "A/C Clima",
          fuelEconomy: "5.3 L / 100km",
          highlights: lang === 'el' ? [
            "Φουτουριστικό Pure Panel με διπλές ψηφιακές οθόνες 10''",
            "Πιστοποιημένα ορθοπεδικά καθίσματα AGR",
            "Προβολείς Intelli-Lux LED",
            "Κορυφαίος χώρος αποσκευών 422 Litres",
            "Ασύρματο Apple CarPlay & Android Auto"
          ] : [
            "Futuristic Opel Pure Panel dual 10'' digital screens",
            "Ergonomic AGR certified orthopedic seating",
            "Intelli-Lux LED front lights",
            "Class-best 422 Litres luggage compartment",
            "Wireless Apple CarPlay & Android Auto"
          ],
          specs: [
            { label: lang === 'el' ? "Κιβώτιο" : "Transmission", value: lang === 'el' ? "Μηχανικό" : "Manual" },
            { label: lang === 'el' ? "Χωρητικότητα" : "Capacity", value: lang === 'el' ? "5 Επιβάτες" : "5 Passengers" },
            { label: lang === 'el' ? "Κατανάλωση" : "Consumption", value: "5.3L / 100km" },
            { label: lang === 'el' ? "Αποσκευές" : "Luggage", value: "422 Litres" },
            { label: lang === 'el' ? "Κινητήρας" : "Engine", value: "1.2L Turbo 130hp" },
            { label: lang === 'el' ? "Κλιματισμός" : "A/C", value: "A/C Clima" },
          ],
          idealFor: lang === 'el' ? "Ταξιδιώτες που αναζητούν άφθονο χώρο αποσκευών, σύγχρονη τεχνολογία και άνεση." : "Travelers wanting generous luggage space, high-tech features, and ergonomic comfort."
        }
      ]
    };
  }

  return null;
};
