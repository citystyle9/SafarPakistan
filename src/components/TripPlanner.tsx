import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { itineraries } from "../data";
import { Compass, CheckCircle2, ArrowRight, Clock, Map } from "lucide-react";

interface TripPlannerProps {
  lang: "en" | "ur" | "both";
}

export default function TripPlanner({ lang }: TripPlannerProps) {
  const [selectedItineraryId, setSelectedItineraryId] = useState<string>("karakoram-scenic");
  const [activeDayIdx, setActiveDayIdx] = useState<number>(0);

  const activeItinerary = itineraries.find((item) => item.id === selectedItineraryId) || itineraries[0];
  const activeDay = activeItinerary.items[activeDayIdx] || activeItinerary.items[0];

  const handleItineraryChange = (id: string) => {
    setSelectedItineraryId(id);
    setActiveDayIdx(0); // reset to day 1 on switch
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="planner">
      {/* Header Block */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="flex justify-center">
          <span className="flex items-center space-x-2 bg-pak-gold/15 text-[#9a782a] border border-pak-gold/30 px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wider">
            <Map className="w-3.5 h-3.5" />
            <span>INTERACTIVE TRAVEL ITINERARIES</span>
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-gray-900 leading-tight">
          Plan Your <span className="text-pak-green font-normal italic">Virtual Journey</span>
        </h2>
        
        {(lang === "ur" || lang === "both") && (
          <h3 className="text-2xl sm:text-3xl font-urdu text-pak-gold text-center pt-2">
            اپنے خوابوں کے سفر کی تفصیلی منصوبہ بندی کریں
          </h3>
        )}

        <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
          Select a tailored travel guide theme and explore day-by-day transit descriptions, sightseeing priorities, and meals.
        </p>
      </div>

      {/* Select Tour Theme Tab Selection */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto">
        {itineraries.map((itinerary) => (
          <button
            key={itinerary.id}
            onClick={() => handleItineraryChange(itinerary.id)}
            className={`flex-1 p-5 rounded-2xl border text-left cursor-pointer transition-all ${
              selectedItineraryId === itinerary.id
                ? "bg-emerald-950 text-white border-emerald-900 shadow-md shadow-emerald-950/25"
                : "bg-white text-gray-700 border-emerald-950/5 hover:border-emerald-900/20 shadow-xs"
            }`}
          >
            <div className="flex justify-between items-start gap-4 mb-2">
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase font-bold tracking-widest ${
                selectedItineraryId === itinerary.id ? "bg-pak-gold text-emerald-950" : "bg-emerald-50 text-pak-green"
              }`}>
                {itinerary.duration} Days
              </span>
              <Compass className={`w-5 h-5 ${selectedItineraryId === itinerary.id ? "text-pak-gold" : "text-gray-300"}`} />
            </div>

            <h4 className="font-bold text-sm md:text-base mb-1 font-serif">{itinerary.title}</h4>
            <span className="font-urdu text-xs font-normal text-pak-gold block border-t border-white/15 pt-1.5 mt-1.5 leading-normal">
              {itinerary.titleUrdu}
            </span>
          </button>
        ))}
      </div>

      {/* Main Interactive Stage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-emerald-950/5 p-6 md:p-10 rounded-3xl shadow-xs">
        
        {/* Day Number Navigation Pane (Left Side) */}
        <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r border-emerald-50 pb-6 lg:pb-0 lg:pr-8 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 scrollbar-none shrink-0">
          <div className="hidden lg:block mb-4">
            <span className="text-[10px] uppercase font-mono tracking-widest font-black text-gray-400">Day Navigation</span>
            <p className="text-xs text-gray-500 font-light mt-0.5">Select a stopover stage below:</p>
          </div>

          {activeItinerary.items.map((item, idx) => (
            <button
              key={item.day}
              onClick={() => setActiveDayIdx(idx)}
              className={`w-full text-left p-4 rounded-xl cursor-pointer transition-all shrink-0 flex items-center justify-between gap-3 ${
                activeDayIdx === idx
                  ? "bg-pak-green text-white shadow-xs"
                  : "bg-pak-light text-gray-700 hover:bg-emerald-50"
              }`}
            >
              <div className="flex items-center space-x-3.5">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                  activeDayIdx === idx ? "bg-pak-gold text-emerald-950" : "bg-emerald-900/10 text-pak-green"
                }`}>
                  {item.day}
                </span>
                <div>
                  <h5 className="font-bold text-xs font-sans tracking-tight">{item.title.split(" & ")[0]}</h5>
                  <span className="font-urdu text-[10px] opacity-90 leading-none block mt-0.5">{item.titleUrdu.split(" اور ")[0]}</span>
                </div>
              </div>
              <ArrowRight className={`w-3.5 h-3.5 hidden lg:block ${activeDayIdx === idx ? "text-pak-gold translate-x-1" : "text-gray-300"} transition-all`} />
            </button>
          ))}
        </div>

        {/* Active Stage Descriptions Screen (Right Side) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDayIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Stage Badge & Slogan */}
              <div className="flex items-center space-x-2 text-pak-gold inline-flex bg-emerald-900 px-3.5 py-1 rounded-md text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>STAGE {activeDay.day} ROADBOOK OVERVIEW</span>
              </div>

              {/* Day Titles Block */}
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-serif text-gray-950 tracking-tight leading-snug">
                  {activeDay.title}
                </h4>
                <p className="urdu-text text-xl font-bold text-pak-green pr-1 leading-normal">
                  {activeDay.titleUrdu}
                </p>
              </div>

              {/* Day Narratives (Bilingual dependent) */}
              <div className="space-y-4 pt-2 border-t border-emerald-50">
                {(lang === "en" || lang === "both") && (
                  <div className="space-y-2">
                    <h5 className="text-[10px] uppercase font-mono font-bold tracking-wider text-gray-400">Day Narrative</h5>
                    <p className="text-sm text-gray-650 font-light leading-relaxed">
                      {activeDay.description}
                    </p>
                  </div>
                )}

                {(lang === "ur" || lang === "both") && (
                  <div className="space-y-2 pt-2 border-t border-emerald-50/50 md:border-none">
                    <h5 className="text-[10px] uppercase font-mono font-bold tracking-wider text-gray-400 text-right md:-mr-1">تفصیلات</h5>
                    <p className="urdu-text text-lg text-gray-700 leading-loose">
                      {activeDay.descriptionUrdu}
                    </p>
                  </div>
                )}
              </div>

              {/* Suggested Transit Activities / Checklist */}
              <div className="space-y-3 pt-4 border-t border-emerald-50">
                <h5 className="text-[10px] uppercase font-mono font-bold tracking-wider text-gray-400">Curated Stops & Field Highlights</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeDay.activities.map((activity, index) => (
                    <div
                      key={index}
                      className="bg-pak-light/80 border border-emerald-950/5 p-3.5 rounded-xl flex items-start space-x-3.5 shadow-3xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-pak-gold shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-750 font-medium font-sans">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
