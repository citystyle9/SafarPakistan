import { Compass, Github, MapPin, Smile } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-gray-300 pt-20 pb-10 border-t border-emerald-900 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Core footer columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-800 p-2 rounded-full border border-emerald-700">
                <Compass className="w-5 h-5 text-pak-gold animate-spin-slow" />
              </div>
              <div>
                <h4 className="text-white font-bold tracking-tight font-serif text-lg">
                  Safar-e-Pakistan <span className="text-pak-gold font-normal">|</span> <span className="text-emerald-300 font-urdu text-sm">سفرِ پاکستان</span>
                </h4>
                <p className="text-[9px] text-gray-400 tracking-widest font-mono uppercase">Tourism Portfolio Portal</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              An immersive digital guide created to showcase the natural beauty, cultural excellence, historic lineages, and warmth of Pakistan.
            </p>
          </div>

          {/* Nav Links Col */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-mono font-black uppercase text-white tracking-widest">Rapid Navigation</h5>
            <ul className="text-xs space-y-2.5 font-light">
              <li>
                <a href="#home" className="hover:text-pak-gold transition-colors flex items-center space-x-1.5">
                  <span>Home</span> <span className="text-[10px] text-gray-500 font-urdu">| پیش لفظ</span>
                </a>
              </li>
              <li>
                <a href="#places" className="hover:text-pak-gold transition-colors flex items-center space-x-1.5">
                  <span>sightseeing Places</span> <span className="text-[10px] text-gray-500 font-urdu">| مقامات</span>
                </a>
              </li>
              <li>
                <a href="#history" className="hover:text-pak-gold transition-colors flex items-center space-x-1.5">
                  <span>Our Rich History</span> <span className="text-[10px] text-gray-500 font-urdu">| تاریخ</span>
                </a>
              </li>
              <li>
                <a href="#planner" className="hover:text-pak-gold transition-colors flex items-center space-x-1.5">
                  <span>Voyage Planner</span> <span className="text-[10px] text-gray-500 font-urdu">| سفر نامہ</span>
                </a>
              </li>
              <li>
                <a href="#culture" className="hover:text-pak-gold transition-colors flex items-center space-x-1.5">
                  <span>Gastronomy & Language</span> <span className="text-[10px] text-gray-500 font-urdu">| ثقافت</span>
                </a>
              </li>
            </ul>
          </div>

          {/* GitHub Pages Host Guide (Col 5) */}
          <div className="lg:col-span-5 bg-emerald-990 border border-emerald-900 p-6 rounded-2xl space-y-4">
            <div className="flex items-center space-x-2 text-pak-gold">
              <Github className="w-5 h-5 text-white" />
              <h5 className="text-xs font-mono font-black uppercase tracking-widest text-[#fafaf9]">GitHub Pages Publishing Guide</h5>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              To host this breathtaking page live on GitHub Pages for free, follow these simple steps:
            </p>

            <ol className="text-xs text-gray-400 list-decimal list-inside space-y-2 pl-1 font-light bg-black/25 p-4 rounded-xl border border-white/5">
              <li>Deploy this codebase first on a <strong>GitHub Repository</strong>.</li>
              <li>Install gh-pages library: <code className="bg-white/10 text-white px-1.5 py-0.5 rounded font-mono text-[10px]">npm install -D gh-pages</code>.</li>
              <li>Declare custom script in <code className="text-emerald-300">package.json</code>: 
                <div className="block bg-black/40 text-[10px] font-mono p-2 rounded text-emerald-300 my-1 overflow-x-auto">
                  "predeploy": "npm run build",<br/>
                  "deploy": "gh-pages -d dist"
                </div>
              </li>
              <li>Run command <code className="bg-white/10 text-white px-1.5 py-0.5 rounded font-mono text-[10px]">npm run deploy</code> to publish live automatically!</li>
            </ol>
          </div>

        </div>

        {/* Closing copyright footer section */}
        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 Pakistan Tourism Showcase. Distributed freely as open-source portfolio assets.</p>
          <div className="flex items-center space-x-2">
            <Smile className="w-4 h-4 text-pak-gold" />
            <span className="font-light">Pakistan is looking forward to seeing you. <em className="text-emerald-400">Khushamdeed!</em></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
