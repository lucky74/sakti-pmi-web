import React from 'react';
import { ShieldCheck, Map, AlertTriangle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md text-white shadow-xl border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="bg-gradient-to-tr from-blue-500 to-cyan-400 p-2 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
             <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              SAKTI PMI
            </h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase hidden md:block">
              Satu Akses Tenaga Indonesia
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#map" className="text-slate-300 hover:text-white transition flex items-center gap-2 font-medium hover:bg-slate-800 px-4 py-2 rounded-full">
            <Map size={18} className="text-blue-400" /> Peta Sebaran
          </a>
          <a href="#fraud" className="text-slate-300 hover:text-white transition flex items-center gap-2 font-medium hover:bg-slate-800 px-4 py-2 rounded-full">
            <AlertTriangle size={18} className="text-amber-400" /> Cek Penipuan
          </a>
          <a href="#jobs" className="text-slate-300 hover:text-white transition font-medium hover:text-cyan-400">
            Lowongan Valid
          </a>
        </div>

        <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 transform hover:-translate-y-0.5">
          Masuk / Daftar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
