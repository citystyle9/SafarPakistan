import { motion } from "motion/react";
import { timelineEvents } from "../data";
import { TimelineEvent } from "../types";
import { useState } from "react";
import { Calendar, Compass, Shield, Award, Landmark } from "lucide-react";

interface HistoryTimelineProps {
  lang: "en" | "ur" | "both";
}

export default function HistoryTimeline({ lang }: HistoryTimelineProps) {
  const [activeTab, setActiveTab] = useState<"all" | "ancient" | "colonial" | "independence" | "modern">("all");

  const filteredEvents = timelineEvents.filter(
    (event) => activeTab === "all" || event.category === activeTab
  );

  const getIcon = (category: string) => {
    switch (category) {
      case "ancient":
        return <Landmark className="w-5 h-5 text-amber-600" />;
      case "colonial":
        return <Compass className="w-5 h-5 text-indigo-600" />;
      case "independence":
        return <Shield className="w-5 h-5 text-emerald-600" />;
      default:
        return <Award className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="history">
      {/* Title block */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="flex justify-center">
          <span className="flex items-center space-x-2 bg-emerald-100 text-pak-green px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>5,000+ YEARS STORY OF FAITH & STRENGTH</span>
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-gray-900 leading-tight">
          A Glimpse into our <span className="text-pak-green font-normal italic">Legendary Pages</span>
        </h2>
        
        {/* Urdu translation of title side-by-side or based on language selection */}
        {(lang === "ur" || lang === "both") && (
          <h3 className="text-2xl sm:text-3xl font-urdu text-pak-gold text-center pt-2">
            ہماری شان دار اور دل پذیر تاریخ پر ایک نظر
          </h3>
        )}

        <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
          Explore the convergence of empires, religions, and struggles that laid the groundwork for modern Pakistan.
        </p>
      </div>

      {/* Tabs / Milestones filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-16 bg-emerald-950/5 p-1.5 rounded-full max-w-2xl mx-auto border border-emerald-950/10">
        {[
          { id: "all", label: "All Eras", urdu: "تمام ادوار" },
          { id: "ancient", label: "Ancient Foundations", urdu: "قدیم تہذیبیں" },
          { id: "colonial", label: "Mughal & Imperial", urdu: "مغلیہ دور" },
          { id: "independence", label: "Independence Path", urdu: "تحریکِ آزادی" },
          { id: "modern", label: "Modern Horizon", urdu: "جدید دور" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === tab.id
                ? "bg-pak-green text-white shadow-md shadow-emerald-900/40"
                : "text-gray-600 hover:bg-emerald-100/40 hover:text-emerald-900"
            }`}
          >
            <span className="block">{tab.label}</span>
            <span className="block font-urdu text-[10px] leading-none opacity-80 mt-0.5">{tab.urdu}</span>
          </button>
        ))}
      </div>

      {/* Actual Timeline Nodes */}
      <div className="relative border-l border-emerald-200 ml-4 md:ml-1/2 md:translate-x-[-1px] space-y-12 pb-8">
        {filteredEvents.map((event, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring", stiffness: 40 }}
              className="relative pl-10 md:pl-0 md:w-1/2"
              style={{
                alignSelf: "flex-start",
                marginLeft: isEven ? "0" : "auto",
                paddingLeft: "0",
              }}
            >
              {/* Outer circle dot with Category Icon */}
              <div
                className="absolute left-[-17px] top-1 z-10 w-8 h-8 rounded-full bg-white border-2 border-pak-green shadow-md flex items-center justify-center"
                style={{
                  left: "0",
                  transform: "translateX(-16px)",
                }}
              >
                {getIcon(event.category)}
              </div>

              {/* Box Content - Alternates on Desktop between left side and right side */}
              <div
                className={`transition-all bg-white border border-emerald-950/5 hover:border-pak-gold/50 shadow-xs hover:shadow-lg p-6 rounded-2xl md:max-w-[460px] ${
                  isEven ? "md:mr-10 md:ml-auto" : "md:ml-10 md:mr-auto"
                }`}
              >
                {/* Years badge */}
                <span className="bg-pak-gold/15 text-[#9a782a] border border-pak-gold/30 px-3 py-1 rounded-md text-xs font-bold tracking-widest font-mono uppercase inline-block mb-3.5">
                  {event.year}
                </span>

                {/* English Title & Bio */}
                {(lang === "en" || lang === "both") && (
                  <div className="mb-3">
                    <h4 className="text-xl font-bold font-serif text-gray-900 tracking-tight">
                      {event.title}
                    </h4>
                    <p className="text-sm text-gray-650 font-sans leading-relaxed mt-2">
                      {event.description}
                    </p>
                  </div>
                )}

                {/* Urdu Title & Bio */}
                {(lang === "ur" || lang === "both") && (
                  <div className="border-t border-emerald-50/70 pt-3 mt-3">
                    <h4 className="urdu-text text-xl font-bold text-pak-green block mb-1">
                      {event.titleUrdu}
                    </h4>
                    <p className="urdu-text text-base text-gray-700 leading-normal">
                      {event.descriptionUrdu}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
