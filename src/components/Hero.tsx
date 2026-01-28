import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Portal Resmi Perlindungan PMI
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white leading-tight">
          Lindungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Masa Depan</span> <br />
          Kerja Anda
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Platform terintegrasi untuk akses data PMI valid, verifikasi lowongan kerja resmi, 
          dan sistem peringatan dini terhadap penipuan penempatan kerja luar negeri.
        </p>
        
        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Cari negara tujuan (misal: Taiwan, Jepang)..." 
              className="w-full px-8 py-5 rounded-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-xl"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white px-8 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25">
              <Search size={24} />
            </button>
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Validasi P3MI Resmi
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            Cek Rekam Jejak
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            Pelaporan Kasus Real-time
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
