import { motion } from "motion/react";
import { Compass, Globe, MapPin, Sparkles } from "lucide-react";

interface HeroProps {
  lang: "en" | "ur" | "both";
  setLang: (lang: "en" | "ur" | "both") => void;
}

export default function Hero({ lang, setLang }: HeroProps) {
  return (
    <header className="relative min-h-screen flex flex-col justify-between overflow-hidden text-white" id="home">
      {/* Background Image with Dark & Emerald Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 1.8 }}
          src="/src/assets/images/pakistan_hero_hunza_1781247088392.jpg"
          alt="Hunza Valley Peak"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-emerald-950/40 to-[#fcfbf7]/100" />
      </div>

      {/* Floating Header / Navbar */}
      <nav className="relative z-10 w-full px-6 py-5 md:px-12 flex justify-between items-center backdrop-blur-xs bg-black/10">
        <div className="flex items-center space-x-3 select-none">
          <div className="bg-emerald-800 p-2 rounded-full border border-emerald-600 shadow-inner">
            <Compass className="w-6 h-6 text-pak-gold animate-spin-slow" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight font-serif text-white flex items-center gap-1.5">
              Safar-e-Pakistan <span className="text-pak-gold font-normal">|</span> <span className="text-emerald-300 font-urdu text-sm">سفرِ پاکستان</span>
            </h1>
            <p className="text-[10px] text-gray-300 tracking-widest font-mono uppercase">Interactive Tourism Matrix</p>
          </div>
        </div>

        {/* Translation Switcher Panel */}
        <div className="flex items-center space-x-1.5 bg-black/50 border border-white/20 p-1.5 rounded-full shadow-lg">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all ${
              lang === "en" ? "bg-pak-green text-white shadow-md shadow-emerald-900/40" : "text-gray-300 hover:text-white"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang("both")}
            className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all ${
              lang === "both" ? "bg-pak-gold text-emerald-950 shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            Dual (دونوں)
          </button>
          <button
            onClick={() => setLang("ur")}
            className={`px-3.5 py-0.5 rounded-full text-sm font-urdu font-medium transition-all leading-normal ${
              lang === "ur" ? "bg-pak-green text-white shadow-md shadow-emerald-900/40" : "text-gray-300 hover:text-white"
            }`}
          >
            اردو
          </button>
        </div>
      </nav>

      {/* Central Majestic Slogan & Overview */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-6 max-w-5xl mx-auto py-12 text-center">
        <div className="space-y-8">
          {/* Animated Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-emerald-900/60 border border-emerald-600 px-4 py-1.5 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-pak-gold" />
            <span className="text-xs uppercase font-semibold font-mono tracking-widest text-[#fcfbf7]">
              Grand Explorer Showcase • 2026 Edition
            </span>
          </motion.div>

          {/* Bilingual Big Headers */}
          <div className="space-y-4">
            {(lang === "en" || lang === "both") && (
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight leading-none text-white drop-shadow-md"
              >
                The Land of <span className="text-pak-gold font-normal">Breathtaking</span> Landscapes
              </motion.h2>
            )}

            {(lang === "ur" || lang === "both") && (
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-7xl font-urdu text-pak-gold pr-2 drop-shadow-md"
              >
                فلک بوس پہاڑوں اور بے مثال تاریخ کی سرزمین
              </motion.h2>
            )}
          </div>

          {/* Bilingual Description text with custom linespacing */}
          <div className="max-w-3xl mx-auto space-y-4">
            {(lang === "en" || lang === "both") && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-gray-200 font-light leading-relaxed drop-shadow-sm"
              >
                From the towering frozen giants of the Karakoram and legendary silk road corridors, to the spiritual grandeur of Mughal architectural crowns and warm desert seashores—Pakistan is a world awaiting your footstep.
              </motion.p>
            )}

            {(lang === "ur" || lang === "both") && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="urdu-text text-xl sm:text-2xl text-emerald-100/90 leading-loose max-w-2xl mx-auto drop-shadow-sm block"
              >
                قراقرم کے دیوقامت برف پوش پہاڑوں اور قدیم شاہراہِ ریشم سے لے کر، مغل دور کی عظیم الشان مساجد اور پُراسرار صحرائی ساحلوں تک۔ پاکستان ایک نیا جہاں ہے جو آپ کی آمد کا منتظر ہے۔
              </motion.p>
            )}
          </div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto bg-black/40 border border-white/10 p-4 md:p-6 rounded-2xl backdrop-blur-md"
          >
            <div className="text-center md:border-r border-white/10 p-2">
              <h4 className="text-2xl md:text-3xl font-bold text-pak-gold font-serif">5 / 14</h4>
              <p className="text-[10px] uppercase font-mono tracking-widest text-emerald-200 mt-1">Peaks Above 8000m (K2, etc)</p>
            </div>
            <div className="text-center md:border-r border-white/10 p-2">
              <h4 className="text-2xl md:text-3xl font-bold text-pak-gold font-serif">5000+</h4>
              <p className="text-[10px] uppercase font-mono tracking-widest text-emerald-200 mt-1">Years of Living Legacy</p>
            </div>
            <div className="text-center md:border-r border-white/10 p-2">
              <h4 className="text-2xl md:text-3xl font-bold text-pak-gold font-serif">04</h4>
              <p className="text-[10px] uppercase font-mono tracking-widest text-emerald-200 mt-1">Climatic Seasons & Terrains</p>
            </div>
            <div className="text-center p-2">
              <h4 className="text-2xl md:text-3xl font-bold text-pak-gold font-serif">#1</h4>
              <p className="text-[10px] uppercase font-mono tracking-widest text-emerald-200 mt-1">Voted Host Hospitality</p>
            </div>
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 relative z-20"
          >
            <a
              href="#places"
              className="bg-pak-green hover:bg-pak-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-emerald-950/40 flex items-center space-x-2.5 hover:scale-105 active:scale-95 border border-emerald-500"
            >
              <MapPin className="w-5 h-5 text-pak-gold" />
              <span>Explore Places</span>
              <span className="font-urdu text-xs font-normal opacity-90">| مقامات</span>
            </a>
            <a
              href="#history"
              className="bg-white/10 hover:bg-white/20 text-[#fcfbf7] hover:text-white px-8 py-3.5 rounded-full font-semibold transition-all border border-white/20 flex items-center space-x-2 hover:scale-105 active:scale-95 hover:border-white"
            >
              <span>Our Rich History</span>
              <span className="font-urdu text-xs font-normal opacity-90">| تاریخ</span>
            </a>
            <a
              href="#planner"
              className="bg-pak-gold hover:bg-[#b59950] text-emerald-950 px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 flex items-center space-x-2 shadow-lg hover:shadow-yellow-950/20"
            >
              <span>Build Journey</span>
              <span className="font-urdu text-xs font-normal opacity-90">| سفر نامہ</span>
            </a>
          </motion.div>
        </div>
      </main>

      {/* Floating Section Indicators */}
      <footer className="relative z-10 text-center pb-8 pt-4">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-xs text-gray-400 font-mono tracking-widest uppercase flex flex-col items-center"
        >
          <span>Scroll to travel</span>
          <div className="w-1 h-3 bg-pak-gold rounded-full mt-2" />
        </motion.div>
      </footer>
    </header>
  );
}
