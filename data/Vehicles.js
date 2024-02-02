
const vehiclesData = {
  "vehicles": [
    {
      "id": 1,
      "make": "Peugeot",
      "model": "3008",
      "type": "SUV",
      "transmission": "Automatic",
      "price_per_day": 100,
      "description": "Discover the PEUGEOT SUV 3008 with its unique design with innovative SUV codes. Its characteristic and original design combines power and elegance with dynamism and flowing lines.",
      "properties": {
        "motor_power_hp": 120,
        "fuel_type": "Diesel",
        "engine_capacity_cc": 1560,
        "traction": "4x2",
        "imageUrl":require('../assets/v-1.png'),
      }
    },
    {
      "id": 2,
      "make": "Ford",
      "model": "Focus",
      "type": "Hatchback",
      "transmission": "Automatic",
      "price_per_day": 70,
      "description": "The Ford Focus, known for its sharp handling and expressive design, offers an exciting driving experience. It's a versatile hatchback that's both efficient and fun to drive.",
      "properties": {
        "motor_power_hp": 150,
        "fuel_type": "Petrol",
        "engine_capacity_cc": 2000,
        "traction": "FWD",
        "imageUrl":require('../assets/v-2.png'),
      }
    },
    {
      "id": 3,
      "make": "Renault",
      "model": "Megane",
      "type": "Sedan",
      "transmission": "Automatic",
      "price_per_day": 80,
      "description": "Renault Megane stands out with its sleek contours and sophisticated style. The sedan is equipped with advanced technology for a comfortable and safe journey.",
      "properties": {
        "motor_power_hp": 130,
        "fuel_type": "Hybrid",
        "engine_capacity_cc": 1400,
        "traction": "AWD",
        "imageUrl":require('../assets/v-3.png'),
      }
    },
    {
      "id": 4,
      "make": "Fiat",
      "model": "Fiorino",
      "type": "MPV",
      "transmission": "Manual",
      "price_per_day": 50,
      "description": "Fiat Fiorino is a compact MPV that offers a practical and economical solution for city driving and small cargo transport. Its compact dimensions make it ideal for navigating narrow streets.",
      "properties": {
        "motor_power_hp": 95,
        "fuel_type": "Petrol",
        "engine_capacity_cc": 1300,
        "traction": "FWD",
        "imageUrl":require('../assets/v-4.png'),
      }
    },
    
  ]
};

export default vehiclesData;
