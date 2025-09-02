export const fetchMarketPrices = async (crop) => {
  
  const mandiData = {
    Wheat: [
      { mandi: "Lucknow", price: 2200 },
      { mandi: "Gorakhpur", price: 2100 },
      { mandi: "Kanpur", price: 2250 },
      { mandi: "Delhi", price: 2300 },
      { mandi: "Agra", price: 2150 },
      { mandi: "Meerut", price: 2280 }
    ],
    Rice: [
      { mandi: "Patna", price: 1800 },
      { mandi: "Varanasi", price: 1750 },
      { mandi: "Lucknow", price: 1850 },
      { mandi: "Kolkata", price: 1900 },
      { mandi: "Guwahati", price: 1950 },
      { mandi: "Cuttack", price: 1820 }
    ],
    Maize: [
      { mandi: "Kanpur", price: 1600 },
      { mandi: "Delhi", price: 1700 },
      { mandi: "Gwalior", price: 1580 },
      { mandi: "Nagpur", price: 1650 },
      { mandi: "Hyderabad", price: 1720 },
      { mandi: "Patna", price: 1680 }
    ],
    Sugarcane: [
      { mandi: "Meerut", price: 320 },
      { mandi: "Muzaffarnagar", price: 330 },
      { mandi: "Bijnor", price: 310 },
      { mandi: "Saharanpur", price: 325 },
      { mandi: "Lucknow", price: 315 }
    ],
    Cotton: [
      { mandi: "Nagpur", price: 5600 },
      { mandi: "Ahmedabad", price: 5700 },
      { mandi: "Indore", price: 5550 },
      { mandi: "Surat", price: 5650 },
      { mandi: "Bhopal", price: 5620 }
    ],
    Soybean: [
      { mandi: "Indore", price: 4100 },
      { mandi: "Bhopal", price: 4050 },
      { mandi: "Nagpur", price: 4150 },
      { mandi: "Ujjain", price: 4080 },
      { mandi: "Dewas", price: 4120 }
    ],
    Mustard: [
      { mandi: "Jaipur", price: 5200 },
      { mandi: "Alwar", price: 5100 },
      { mandi: "Bharatpur", price: 5250 },
      { mandi: "Kota", price: 5180 },
      { mandi: "Ajmer", price: 5220 }
    ],
    Pulses: [
      { mandi: "Indore", price: 6000 },
      { mandi: "Nagpur", price: 5950 },
      { mandi: "Aurangabad", price: 6100 },
      { mandi: "Hyderabad", price: 6050 },
      { mandi: "Delhi", price: 6150 }
    ],
    Onion: [
      { mandi: "Nashik", price: 1400 },
      { mandi: "Pune", price: 1350 },
      { mandi: "Ahmednagar", price: 1450 },
      { mandi: "Indore", price: 1380 },
      { mandi: "Hyderabad", price: 1420 }
    ],
    Potato: [
      { mandi: "Agra", price: 1200 },
      { mandi: "Kanpur", price: 1150 },
      { mandi: "Lucknow", price: 1250 },
      { mandi: "Varanasi", price: 1180 },
      { mandi: "Patna", price: 1220 }
    ]
  };

  return mandiData[crop] || [{ mandi: "Unknown", price: "N/A" }];
};




//abhi ke liye mock data hai
//** government ki api se link kar deni hai */