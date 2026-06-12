import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { touristPlaces } from "../data";
import { TouristPlace } from "../types";
import { Search, MapPin, Calendar, Compass, ArrowRight, X, Sparkles, AlertCircle } from "lucide-react";

interface PlacesExplorerProps {
  lang: "en" | "ur" | "both";
}

export default function PlacesExplorer({ lang }: PlacesExplorerProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalPlace, setActiveModalPlace] = useState<TouristPlace | null>(null);

  // Distinct list of regions
  const regions = ["All", "Northern Highlands", "Cultural Heartland", "Ancient Sindh", "Balochistan Coast", "Khyber Pass"];

  const filteredPlaces = touristPlaces.filter((place) => {
    const matchesRegion = selectedRegion === "All" || place.region === selectedRegion;
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.nameUrdu.includes(searchQuery) ||
      place.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <section className="bg-pak-light py-24 px-6 md:px-12" id="places">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center space-x-1.5 bg-emerald-150/80 border border-emerald-300 text-pak-green px-3.5 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wide">
              <Compass className="w-3.5 h-3.5 text-pak-gold animate-spin-slow" />
              <span>Sightseeing Portfolio</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-gray-900 leading-tight">
              Famous Tourist <span className="text-pak-green font-normal italic">Destinations</span>
            </h2>
            {(lang === "ur" || lang === "both") && (
              <h3 className="text-2xl font-urdu text-pak-gold pr-1 leading-normal">
                پاکستان کے سب سے مشہور سیاحتی اور تفریحی مقامات
              </h3>
            )}
            <p className="text-sm sm:text-base text-gray-500 font-light">
              From the highest peaks on Earth to historical royal cities, discover the best of Pakistan.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-800" />
            <input
              type="text"
              placeholder="Search by name, province, tags..."
              aria-label="Search places"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-emerald-950/10 rounded-full text-xs focus:outline-hidden focus:ring-2 focus:ring-pak-green focus:border-transparent transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4.5 py-2 rounded-full text-xs font-medium cursor-pointer transition-all ${
                selectedRegion === region
                  ? "bg-pak-green text-[#fcfbf7] shadow-md shadow-emerald-900/30"
                  : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-pak-green border border-emerald-950/5"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPlaces.map((place) => (
              <motion.div
                key={place.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-emerald-950/5 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={place.imageUrl}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Province Badge */}
                  <span className="absolute left-3 top-3 bg-black/55 backdrop-blur-md text-white border border-white/20 text-[9px] font-mono uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
                    {place.province}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Bilingual Title */}
                    <div className="flex justify-between items-start gap-1">
                      <div>
                        <h4 className="text-lg font-bold font-serif text-gray-950 group-hover:text-pak-green transition-colors leading-snug">
                          {place.name}
                        </h4>
                        <span className="text-[10px] text-gray-400 font-medium font-mono uppercase tracking-wider">{place.region}</span>
                      </div>
                      <span className="font-urdu text-base text-pak-gold font-bold leading-none pr-1 mt-0.5">
                        {place.nameUrdu}
                      </span>
                    </div>

                    {/* Brief description based on language choices */}
                    <div className="space-y-2">
                      {(lang === "en" || lang === "both") && (
                        <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-2">
                          {place.description}
                        </p>
                      )}
                      {(lang === "ur" || lang === "both") && (
                        <p className="urdu-text text-sm text-gray-700 font-normal leading-normal line-clamp-1 border-t border-emerald-50/50 pt-1.5">
                          {place.descriptionUrdu}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Highlights and footer link */}
                  <div className="border-t border-emerald-50/80 pt-4 mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-pak-gold" />
                      {place.bestSeason.split(" (")[0]}
                    </span>
                    <button
                      onClick={() => setActiveModalPlace(place)}
                      className="text-xs font-bold text-pak-green hover:text-pak-dark flex items-center gap-1 hover:gap-1.5 transition-all"
                    >
                      <span className="font-sans">View Guide</span>
                      <span className="font-urdu text-[10px] leading-none">| رہنما</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result Fallback */}
        {filteredPlaces.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-emerald-950/10 max-w-lg mx-auto">
            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h4 className="text-lg font-bold font-serif text-gray-900">No Places Found</h4>
            <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
              We couldn't find any location matching "{searchQuery}". Try searching for categories like "Adventure", "Mughal", or "Lakes"!
            </p>
          </div>
        )}
      </div>

      {/* Detail Showcase Modal Overlay */}
      <AnimatePresence>
        {activeModalPlace && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalPlace(null)}
              className="absolute inset-0 bg-emerald-950/75 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl z-10 border border-white/20"
            >
              {/* Image banner */}
              <div className="relative h-64 md:h-80 shrink-0 select-none">
                <img
                  src={activeModalPlace.imageUrl}
                  alt={activeModalPlace.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalPlace(null)}
                  className="absolute right-4 top-4 bg-black/50 hover:bg-black/80 text-white border border-white/20 p-2.5 rounded-full transition-all hover:scale-105 active:scale-95"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Top Info overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-end gap-3 text-white">
                  <div>
                    <span className="bg-pak-gold text-emerald-950 font-mono text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full mb-2 inline-block">
                      {activeModalPlace.province}
                    </span>
                    <h3 className="text-2xl md:text-3.5xl font-serif font-bold tracking-tight">
                      {activeModalPlace.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-urdu text-2xl md:text-3.5xl text-pak-gold font-bold drop-shadow-sm block">
                      {activeModalPlace.nameUrdu}
                    </span>
                  </div>
                </div>
              </div>

              {/* Scrollable description segments */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8">
                
                {/* Dual Column descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-emerald-100">
                  {/* English Col */}
                  <div className="space-y-4">
                    <h5 className="text-xs uppercase tracking-widest font-bold text-pak-green font-mono flex items-center gap-1.5 pb-2 border-b border-emerald-50">
                      <Sparkles className="w-3.5 h-3.5 text-pak-gold" />
                      <span>About the Landmark</span>
                    </h5>
                    <p className="text-sm text-gray-650 leading-relaxed font-light">
                      {activeModalPlace.longDescription}
                    </p>
                  </div>

                  {/* Urdu Col */}
                  <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
                    <h5 className="text-xs uppercase tracking-widest font-bold text-pak-green font-mono flex items-center gap-1.5 pb-2 border-b border-emerald-50 md:flex-row-reverse">
                      <Sparkles className="w-3.5 h-3.5 text-pak-gold" />
                      <span>تفصیلی معلومات</span>
                    </h5>
                    <p className="urdu-text text-lg text-gray-700 leading-loose">
                      {activeModalPlace.longDescriptionUrdu}
                    </p>
                  </div>
                </div>

                {/* Key Travel stats summary */}
                <div className="bg-pak-light p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 border border-emerald-950/5">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-400">Best Season</span>
                    <p className="text-xs text-gray-700 font-semibold">{activeModalPlace.bestSeason}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-400">Entry & Permit Info</span>
                    <p className="text-xs text-gray-700 font-semibold">{activeModalPlace.entryFee}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-400">Accessibility Route</span>
                    <p className="text-xs text-gray-700 font-semibold">{activeModalPlace.accessibility}</p>
                  </div>
                </div>

                {/* Activity tags array */}
                <div className="space-y-3 pt-2">
                  <h6 className="text-xs uppercase tracking-widest font-bold text-gray-500 font-mono">Spot Highlights & Things to Do</h6>
                  <div className="flex flex-wrap gap-2">
                    {activeModalPlace.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-emerald-50 text-pak-green border border-emerald-100 text-[11px] font-medium px-3.5 py-1.5 rounded-lg flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-pak-gold" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
