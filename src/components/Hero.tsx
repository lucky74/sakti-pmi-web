import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Lindungi Masa Depan Kerja Anda
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Satu akses untuk data PMI valid, lowongan terverifikasi, dan perlindungan dari penipuan.
        </p>
        
        <div className="max-w-2xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Cari negara tujuan (misal: Taiwan, Jepang)..." 
            className="w-full px-6 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-2 bg-secondary hover:bg-blue-600 text-white p-2 rounded-full transition">
            <Search size={24} />
          </button>
        </div>
        
        <div className="mt-8 flex justify-center gap-4 text-sm text-slate-400">
          <span>Validasi P3MI</span>
          <span>•</span>
          <span>Cek Penipuan</span>
          <span>•</span>
          <span>Data Real-time</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
