// Sample listings. Replace or extend with your own data (or load from an API).
const PROPERTIES = [
  {
    id: 1, title: "Sunny 1BHK near Metro", city: "Kolkata", locality: "Salt Lake",
    bhk: 1, rent: 14000, deposit: 42000, area: 580, furnishing: "Semi-furnished",
    bathrooms: 1, floor: "3rd of 5", available: "Immediately",
    amenities: ["Lift", "Power backup", "24x7 water", "Parking"],
    description: "A bright and airy 1BHK a short walk from the metro station. Ideal for working professionals or a small family.",
    owner: { name: "Ankit Sharma", phone: "+919800000001", email: "ankit@example.com" }
  },
  {
    id: 2, title: "Spacious 2BHK with Balcony", city: "Kolkata", locality: "New Town",
    bhk: 2, rent: 22000, deposit: 66000, area: 980, furnishing: "Furnished",
    bathrooms: 2, floor: "6th of 12", available: "1 Dec 2026",
    amenities: ["Gym", "Lift", "Security", "Parking", "Club house"],
    description: "Well-ventilated 2BHK in a gated society with great amenities and a lovely balcony view.",
    owner: { name: "Riya Das", phone: "+919800000002", email: "riya@example.com" }
  },
  {
    id: 3, title: "Premium 3BHK Apartment", city: "Bengaluru", locality: "Whitefield",
    bhk: 3, rent: 48000, deposit: 200000, area: 1650, furnishing: "Furnished",
    bathrooms: 3, floor: "9th of 18", available: "Immediately",
    amenities: ["Swimming pool", "Gym", "Lift", "Security", "Parking", "Power backup"],
    description: "Luxurious 3BHK close to tech parks, with modular kitchen and premium fittings.",
    owner: { name: "Karthik Rao", phone: "+919800000003", email: "karthik@example.com" }
  },
  {
    id: 4, title: "Cozy 1BHK Studio", city: "Bengaluru", locality: "Koramangala",
    bhk: 1, rent: 19000, deposit: 80000, area: 520, furnishing: "Furnished",
    bathrooms: 1, floor: "2nd of 4", available: "15 Nov 2026",
    amenities: ["Wi-Fi", "Power backup", "Washing machine"],
    description: "Compact, fully furnished studio in the heart of Koramangala. Cafes and restaurants nearby.",
    owner: { name: "Meera Iyer", phone: "+919800000004", email: "meera@example.com" }
  },
  {
    id: 5, title: "2BHK in Gated Community", city: "Pune", locality: "Baner",
    bhk: 2, rent: 26000, deposit: 100000, area: 1050, furnishing: "Semi-furnished",
    bathrooms: 2, floor: "4th of 10", available: "Immediately",
    amenities: ["Garden", "Lift", "Security", "Parking", "Kids play area"],
    description: "Family-friendly 2BHK in a green gated community with excellent connectivity to Hinjewadi.",
    owner: { name: "Sanjay Kulkarni", phone: "+919800000005", email: "sanjay@example.com" }
  },
  {
    id: 6, title: "Budget 1BHK for Bachelors", city: "Pune", locality: "Kothrud",
    bhk: 1, rent: 11000, deposit: 33000, area: 480, furnishing: "Unfurnished",
    bathrooms: 1, floor: "1st of 3", available: "Immediately",
    amenities: ["24x7 water", "Bike parking"],
    description: "Affordable and well-maintained 1BHK in a peaceful neighbourhood close to markets and colleges.",
    owner: { name: "Pooja Joshi", phone: "+919800000006", email: "pooja@example.com" }
  },
  {
    id: 7, title: "Elegant 3BHK Independent Floor", city: "Delhi", locality: "Dwarka",
    bhk: 3, rent: 38000, deposit: 150000, area: 1400, furnishing: "Semi-furnished",
    bathrooms: 3, floor: "2nd of 3", available: "1 Dec 2026",
    amenities: ["Parking", "Power backup", "Terrace access", "Security"],
    description: "Independent floor with a private terrace, near Dwarka Sector 21 metro.",
    owner: { name: "Vikram Malhotra", phone: "+919800000007", email: "vikram@example.com" }
  },
  {
    id: 8, title: "Modern 2BHK Near IT Park", city: "Hyderabad", locality: "Gachibowli",
    bhk: 2, rent: 30000, deposit: 120000, area: 1100, furnishing: "Furnished",
    bathrooms: 2, floor: "7th of 15", available: "Immediately",
    amenities: ["Gym", "Swimming pool", "Lift", "Parking", "Club house"],
    description: "Contemporary 2BHK a few minutes from major IT offices, with full clubhouse access.",
    owner: { name: "Sneha Reddy", phone: "+919800000008", email: "sneha@example.com" }
  },
  {
    id: 9, title: "Sea-breeze 1BHK", city: "Mumbai", locality: "Andheri West",
    bhk: 1, rent: 35000, deposit: 150000, area: 500, furnishing: "Furnished",
    bathrooms: 1, floor: "5th of 9", available: "20 Nov 2026",
    amenities: ["Lift", "Security", "Power backup"],
    description: "Compact but beautifully done-up 1BHK close to the metro and local train station.",
    owner: { name: "Farah Khan", phone: "+919800000009", email: "farah@example.com" }
  },
  {
    id: 10, title: "Family 3BHK with Garden View", city: "Chennai", locality: "Adyar",
    bhk: 3, rent: 42000, deposit: 200000, area: 1500, furnishing: "Semi-furnished",
    bathrooms: 3, floor: "3rd of 6", available: "Immediately",
    amenities: ["Garden", "Lift", "Security", "Parking", "Power backup"],
    description: "Large, airy 3BHK in a quiet lane overlooking a garden. Walking distance to schools.",
    owner: { name: "Lakshmi Narayanan", phone: "+919800000010", email: "lakshmi@example.com" }
  },
  {
    id: 11, title: "Compact 2BHK, Great Value", city: "Kolkata", locality: "Behala",
    bhk: 2, rent: 15000, deposit: 45000, area: 850, furnishing: "Unfurnished",
    bathrooms: 2, floor: "2nd of 4", available: "Immediately",
    amenities: ["24x7 water", "Parking", "Security"],
    description: "Great-value 2BHK in a well-connected area with markets and hospitals nearby.",
    owner: { name: "Subrata Ghosh", phone: "+919800000011", email: "subrata@example.com" }
  },
  {
    id: 12, title: "Luxury 2BHK High-rise", city: "Mumbai", locality: "Powai",
    bhk: 2, rent: 65000, deposit: 300000, area: 1050, furnishing: "Furnished",
    bathrooms: 2, floor: "21st of 32", available: "1 Dec 2026",
    amenities: ["Swimming pool", "Gym", "Lift", "Security", "Parking", "Club house"],
    description: "High-floor 2BHK with lake views and resort-style amenities.",
    owner: { name: "Rohan Mehta", phone: "+919800000012", email: "rohan@example.com" }
  }
];
