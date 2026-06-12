import { useState } from "react";
import { Compass, DollarSign, ListChecks, ShieldAlert, Sparkles } from "lucide-react";

interface TravelEssentialsProps {
  lang: "en" | "ur" | "both";
}

export default function TravelEssentials({ lang }: TravelEssentialsProps) {
  const [currencyAmount, setCurrencyAmount] = useState<number>(100);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");

  const exchangeRates: Record<string, { rate: number; symbol: string; label: string }> = {
    USD: { rate: 278.4, symbol: "$", label: "US Dollar" },
    EUR: { rate: 301.2, symbol: "€", label: "Euro" },
    GBP: { rate: 355.8, symbol: "£", label: "British Pound" },
    CAD: { rate: 202.5, symbol: "C$", label: "Canadian Dollar" },
  };

  const convertedValue = (currencyAmount * (exchangeRates[selectedCurrency]?.rate || 1)).toFixed(1);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="essentials">
      
      {/* Structural Title Block */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="flex justify-center">
          <span className="flex items-center space-x-2 bg-emerald-100 text-pak-green border border-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase">
            <ListChecks className="w-3.5 h-3.5" />
            <span>TRAVEL PREPARATION GRID</span>
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-gray-900 leading-tight">
          Practical Travel <span className="text-pak-green font-normal italic">Essentials</span>
        </h2>

        {(lang === "ur" || lang === "both") && (
          <h3 className="text-2xl sm:text-3xl font-urdu text-pak-gold text-center pt-2">
            پاکستان کے سفر کی بنیادی اور ضروری معلومات
          </h3>
        )}

        <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
          Arm yourself with crucial logistics including rapid online E-Visa regulations, regional weather, and financial exchanges.
        </p>
      </div>

      {/* Grid containing checklists and converter side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Visa, Climate, Security Info Block (Left - Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* E-Visa Program Card */}
          <div className="bg-white border border-emerald-950/5 p-6 rounded-2xl flex gap-5 shadow-3xs hover:border-pak-gold/40 transition-all">
            <div className="bg-emerald-50 p-3 rounded-xl shrink-0 h-12 flex items-center justify-center border border-emerald-100">
              <Compass className="w-6 h-6 text-pak-green animate-spin-slow" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-base text-gray-950 font-serif">1. Hassle-free Online E-Visa</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-light">
                Pakistan offers an easy <strong>online E-Visa application</strong> system for over 175 countries with travel approval landing in days. Citizens of 50+ countries are eligible for an immediate Visa on Arrival at the borders or airports. Checkout <a href="https://visa.nadra.gov.pk" target="_blank" rel="noopener noreferrer" className="text-pak-green font-semibold underline hover:text-[#002c17]">Pakistan's Official Visa Portal</a> for current updates.
              </p>
            </div>
          </div>

          {/* Climate Card */}
          <div className="bg-white border border-emerald-950/5 p-6 rounded-2xl flex gap-5 shadow-3xs hover:border-pak-gold/40 transition-all">
            <div className="bg-emerald-50 p-3 rounded-xl shrink-0 h-12 flex items-center justify-center border border-emerald-100">
              <Sparkles className="w-6 h-6 text-pak-green" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-base text-gray-950 font-serif">2. Best Seasons to Travel</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-light">
                The massive geographic diversity creates different perfect seasons:
              </p>
              <ul className="text-xs text-gray-500 list-disc list-inside space-y-1 pl-1 font-light">
                <li><strong>Northern Gilgit/Karakoram:</strong> Best during June to September (perfect trekking roads, blue fresh lakes).</li>
                <li><strong>Cultural Punjab & Sindh:</strong> Best during November to March (cool refreshing breezes, historic walking tours).</li>
              </ul>
            </div>
          </div>

          {/* Packing Advice */}
          <div className="bg-white border border-emerald-950/5 p-6 rounded-2xl flex gap-5 shadow-3xs hover:border-pak-gold/40 transition-all">
            <div className="bg-emerald-50 p-3 rounded-xl shrink-0 h-12 flex items-center justify-center border border-emerald-100">
              <ShieldAlert className="w-6 h-6 text-pak-green" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-base text-gray-950 font-serif">3. Cultural Respect Advisory</h4>
              <p className="text-xs text-gray-650 leading-relaxed font-light">
                Carry comfortable walking shoes for high trails, modish scarf/shawl for covering when entering mosques or spiritual tombs, and standard adaptors for charging cameras. Pakistan is extremely hospitable, and carrying cash (PKR) is recommended when venturing beyond major towns.
              </p>
            </div>
          </div>

        </div>

        {/* Currency Converter Block (Right - Col 5) */}
        <div className="lg:col-span-5 bg-emerald-950 text-[#fafaf9] p-8 rounded-3xl border border-emerald-900 shadow-xl space-y-6">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 text-pak-gold">
              <DollarSign className="w-5 h-5" />
              <span className="text-xs font-mono font-black uppercase tracking-widest text-[#fafaf9]">Instant Financial Helper</span>
            </div>
            <h4 className="text-xl font-bold font-serif text-white tracking-tight">Rupee Exchange Calculator</h4>
            <p className="text-xs text-emerald-200/80 leading-relaxed font-light">
              See how far your home currency extends in Pakistan! Calculate conversions instantly with the latest estimates.
            </p>
          </div>

          {/* Input Panel Fields */}
          <div className="space-y-4">
            
            {/* Amount input */}
            <div className="space-y-1.5">
              <label htmlFor="currency-amount" className="text-[10px] uppercase font-mono tracking-widest text-emerald-300 font-bold block">
                Enter Amount:
              </label>
              <input
                type="number"
                id="currency-amount"
                className="w-full bg-emerald-900/60 border border-emerald-800 p-3 rounded-lg text-lg font-bold font-sans text-white focus:outline-hidden focus:ring-1 focus:ring-pak-gold focus:border-transparent transition-all"
                value={currencyAmount}
                min="1"
                onChange={(e) => setCurrencyAmount(Math.max(1, parseFloat(e.target.value) || 0))}
              />
            </div>

            {/* Currency selectors */}
            <div className="space-y-1.5">
              <label htmlFor="currency-select" className="text-[10px] uppercase font-mono tracking-widest text-emerald-300 font-bold block">
                Source Currency:
              </label>
              <select
                id="currency-select"
                className="w-full bg-emerald-900/60 border border-emerald-800 p-3 rounded-lg text-sm text-white focus:outline-hidden focus:ring-1 focus:ring-pak-gold transition-all"
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                {Object.keys(exchangeRates).map((cur) => (
                  <option key={cur} value={cur} className="bg-emerald-950 text-white">
                    {cur} — {exchangeRates[cur].label} ({exchangeRates[cur].symbol})
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Large display output */}
          <div className="bg-emerald-900/40 border border-emerald-800/65 p-5 rounded-2xl text-center space-y-1">
            <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase font-medium">Equates Approximately to:</span>
            <div className="text-3xl font-black text-pak-gold font-sans">
              ₨ {parseFloat(convertedValue).toLocaleString()} <span className="text-base text-white tracking-tight font-medium">PKR</span>
            </div>
            <p className="text-[9px] text-emerald-300/60 font-mono tracking-wider italic">
              Estimated conversion rate: 1 {selectedCurrency} = ~₨ {exchangeRates[selectedCurrency]?.rate} Pakistani Rupees.
            </p>
          </div>

          <p className="text-[10px] text-emerald-300/80 leading-normal text-center italic">
            "Pakistan represents an exceptionally high value, premium-scale budget friendly destination for global tourists!"
          </p>

        </div>

      </div>

    </section>
  );
}
