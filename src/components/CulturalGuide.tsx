import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { culinaryItems, urduPhrases } from "../data";
import { Coffee, Heart, Milestone, Volume2, Sparkles, Languages } from "lucide-react";

interface CulturalGuideProps {
  lang: "en" | "ur" | "both";
}

export default function CulturalGuide({ lang }: CulturalGuideProps) {
  const [activeCultureMode, setActiveCultureMode] = useState<"food" | "language">("food");
  const [activePhraseIdx, setActivePhraseIdx] = useState<number | null>(null);

  return (
    <section className="bg-pak-light py-24 px-6 md:px-12" id="culture">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <span className="flex items-center space-x-2 bg-emerald-150 text-pak-green border border-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase">
              <Heart className="w-3.5 h-3.5 text-pak-gold fill-pak-gold animate-pulse" />
              <span>Mehman-Nawazi & Culture Hub</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-gray-900 leading-tight">
            The Soul of Pakistan: <span className="text-pak-green font-normal italic">Food & Tongue</span>
          </h2>

          {(lang === "ur" || lang === "both") && (
            <h3 className="text-2xl sm:text-3xl font-urdu text-pak-gold text-center pt-2">
              پاکستانی ثقافت، دل پذیر پکوان اور میٹھی زبان
            </h3>
          )}

          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
            Pakistani hospitality is legendary. Dive into the intense flavor profiles of the East and master crucial local Urdu greetings.
          </p>
        </div>

        {/* Culture Navigation Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCultureMode("food")}
            className={`px-6 py-3 rounded-full text-xs font-bold font-sans flex items-center gap-2 cursor-pointer transition-all ${
              activeCultureMode === "food"
                ? "bg-pak-green text-white shadow-md shadow-emerald-950/25"
                : "bg-white text-gray-600 border border-emerald-950/5 hover:bg-emerald-50"
            }`}
          >
            <Coffee className="w-4 h-4 text-pak-gold" />
            <span>Gastronomy & Savor Cards</span>
            <span className="font-urdu text-[11px] leading-none opacity-80">| پکوان</span>
          </button>
          
          <button
            onClick={() => setActiveCultureMode("language")}
            className={`px-6 py-3 rounded-full text-xs font-bold font-sans flex items-center gap-2 cursor-pointer transition-all ${
              activeCultureMode === "language"
                ? "bg-pak-green text-white shadow-md shadow-emerald-950/25"
                : "bg-white text-gray-600 border border-emerald-950/5 hover:bg-emerald-50"
            }`}
          >
            <Languages className="w-4 h-4 text-pak-gold" />
            <span>Urdu Language Phrases</span>
            <span className="font-urdu text-[11px] leading-none opacity-80">| اردو بول چال</span>
          </button>
        </div>

        {/* Dynamic Display Content Area with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeCultureMode === "food" ? (
            
            /* Gastronomy Sub-section */
            <motion.div
              key="food-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {culinaryItems.map((food, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-emerald-950/5 p-4 rounded-2xl flex flex-col justify-between shadow-3xs hover:shadow-md transition-all group"
                >
                  <div className="space-y-4">
                    {/* Placeholder image for typical local food setup */}
                    <div className="h-40 overflow-hidden rounded-xl bg-gray-200">
                      <img
                        src={food.imageUrl}
                        alt={food.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Bilingual descriptive title */}
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-base font-bold font-serif text-gray-950">{food.name}</h4>
                      <span className="font-urdu text-base text-pak-green font-bold">{food.nameUrdu}</span>
                    </div>

                    {/* Flavor profile badge description */}
                    <p className="text-[10px] bg-amber-50 border border-amber-200 text-amber-800 uppercase tracking-widest px-2.5 py-1 rounded font-mono font-black italic inline-block">
                      {food.flavorProfile}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-emerald-50">
                      {(lang === "en" || lang === "both") && (
                        <p className="text-xs text-gray-500 font-light leading-relaxed">
                          {food.description}
                        </p>
                      )}
                      {(lang === "ur" || lang === "both") && (
                        <p className="urdu-text text-sm text-gray-750 font-normal leading-normal">
                          {food.descriptionUrdu}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="text-[9px] text-gray-300 font-mono tracking-widest uppercase text-right pt-4">
                    FAMOUS PAKISTANI CUISINE
                  </span>
                </div>
              ))}
            </motion.div>
          ) : (
            
            /* Language Flashcards Sub-section */
            <motion.div
              key="lang-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {urduPhrases.map((phrase, idx) => {
                const isSelected = activePhraseIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePhraseIdx(isSelected ? null : idx)}
                    className="w-full text-left"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`h-64 p-5 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between relative overflow-hidden ${
                        isSelected
                          ? "bg-emerald-950 text-white border-emerald-900 shadow-lg shadow-emerald-950/20"
                          : "bg-white text-gray-700 border-emerald-950/5 shadow-3xs"
                      }`}
                    >
                      {/* Top Action Icon & Header */}
                      <div className="flex justify-between items-center w-full">
                        <span className={`text-[9px] font-mono uppercase tracking-widest font-black ${isSelected ? "text-pak-gold" : "text-gray-400"}`}>
                          FLASHCARD 0{idx + 1}
                        </span>
                        <div className={`p-1.5 rounded-full ${isSelected ? "bg-white/10" : "bg-emerald-50"}`}>
                          <Volume2 className={`w-3.5 h-3.5 ${isSelected ? "text-pak-gold" : "text-pak-green"}`} />
                        </div>
                      </div>

                      {/* Main Big Nastaliq Script */}
                      <div className="py-2 text-center">
                        <span className={`urdu-text text-3xl font-black block leading-none pr-1 tracking-normal ${isSelected ? "text-white" : "text-pak-green"}`}>
                          {phrase.urdu}
                        </span>
                        <span className={`text-[10px] font-mono tracking-widest uppercase block mt-3.5 ${isSelected ? "text-emerald-300/90" : "text-gray-400 font-medium"}`}>
                          {phrase.romanUrdu}
                        </span>
                      </div>

                      {/* Content Reveal section with details */}
                      <div className="border-t border-emerald-100/10 pt-3 relative z-10">
                        <span className={`block text-xs uppercase font-mono font-bold tracking-widest ${isSelected ? "text-[#fafaf9]" : "text-gray-400 font-bold"}`}>
                          Meaning:
                        </span>
                        <p className={`font-serif text-sm font-bold mt-0.5 ${isSelected ? "text-pak-gold" : "text-gray-900"}`}>
                          {phrase.meaning}
                        </p>
                      </div>

                      {/* Expanding details on selection */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-emerald-950 p-5 flex flex-col justify-between z-20 text-white"
                          >
                            <div className="space-y-3">
                              <span className="text-[9px] text-pak-gold font-mono tracking-widest uppercase font-bold">Dialogue Context:</span>
                              <p className="text-xs text-gray-200 leading-relaxed font-light">{phrase.context}</p>
                            </div>
                            <span className="text-[9px] text-gray-400 font-mono tracking-widest uppercase text-right border-t border-white/10 pt-2 block w-full mt-4">
                              Tap Card To Flip Back
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Translation disclaimer line */}
        <div className="mt-12 text-center bg-white border border-emerald-950/5 p-4 rounded-xl max-w-xl mx-auto flex items-center justify-center gap-3">
          <Milestone className="w-5 h-5 text-pak-gold shrink-0 animate-bounce" />
          <p className="text-xs text-gray-500 font-light">
            <strong className="text-gray-700">Travel Hack:</strong> Pakistanis are famous globally for hospitality. Even speaking a single word like <span className="text-pak-green font-bold">"Shukriya"</span> or <span className="text-pak-green font-bold">"Khushamdeed"</span> opens up genuine conversations and heartwarming greetings!
          </p>
        </div>

      </div>
    </section>
  );
}
