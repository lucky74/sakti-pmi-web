import React from 'react';
import { ShieldCheck, Map, AlertTriangle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-8 h-8 text-secondary" />
          <span className="text-xl font-bold tracking-wider">SAKTI PMI</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#map" className="hover:text-secondary transition flex items-center gap-1"><Map size={18} /> Peta Sebaran</a>
          <a href="#fraud" className="hover:text-accent transition flex items-center gap-1"><AlertTriangle size={18} /> Cek Penipuan</a>
          <a href="#jobs" className="hover:text-secondary transition">Lowongan Valid</a>
        </div>
        <button className="bg-secondary hover:bg-blue-600 px-4 py-2 rounded-md font-semibold transition">
          Masuk / Daftar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
