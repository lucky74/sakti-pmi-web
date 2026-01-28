import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SAKTI PMI</h3>
            <p className="text-sm leading-relaxed">
              Platform independen untuk perlindungan dan informasi terpadu bagi Pekerja Migran Indonesia.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Beranda</a></li>
              <li><a href="#map" className="hover:text-blue-400 transition">Peta Sebaran</a></li>
              <li><a href="#fraud" className="hover:text-blue-400 transition">Cek Penipuan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kontak Darurat</h3>
            <p className="text-sm mb-2">KBRI/KJRI Terdekat</p>
            <p className="text-sm mb-2">BP2MI Call Center: 0800-1000</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} SAKTI PMI (Satu Akses Kerja & Tenaga Indonesia).
          </p>
          <p className="opacity-50">
            Data estimasi berdasarkan agregasi multi-sumber (BP2MI, KBRI, LPK). Tidak berafiliasi resmi dengan pemerintah.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
