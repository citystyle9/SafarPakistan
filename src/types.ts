export interface TimelineEvent {
  year: string;
  title: string;
  titleUrdu: string;
  description: string;
  descriptionUrdu: string;
  category: "ancient" | "colonial" | "independence" | "modern";
}

export interface TouristPlace {
  id: string;
  name: string;
  nameUrdu: string;
  region: "Northern Highlands" | "Cultural Heartland" | "Ancient Sindh" | "Balochistan Coast" | "Khyber Pass";
  province: "Gilgit-Baltistan" | "Punjab" | "Sindh" | "Balochistan" | "Khyber Pakhtunkhwa" | "Islamabad Capital Territory";
  description: string;
  descriptionUrdu: string;
  longDescription: string;
  longDescriptionUrdu: string;
  imageUrl: string;
  bestSeason: string;
  entryFee: string;
  accessibility: string;
  highlights: string[];
  tags: string[];
}

export interface ItineraryItem {
  day: number;
  title: string;
  titleUrdu: string;
  description: string;
  descriptionUrdu: string;
  activities: string[];
}

export interface Itinerary {
  id: string;
  title: string;
  titleUrdu: string;
  theme: "adventure" | "cultural" | "scenic";
  duration: number;
  overview: string;
  overviewUrdu: string;
  items: ItineraryItem[];
}

export interface CulinaryItem {
  name: string;
  nameUrdu: string;
  category: "mains" | "dessert" | "beverage";
  description: string;
  descriptionUrdu: string;
  imageUrl: string;
  flavorProfile: string;
}

export interface UrduPhrase {
  phrase: string;
  urdu: string;
  romanUrdu: string;
  meaning: string;
  context: string;
}
