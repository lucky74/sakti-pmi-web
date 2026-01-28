import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} SAKTI PMI (Satu Akses Kerja & Tenaga Indonesia).
        </p>
        <p className="text-sm">
          Data estimasi berdasarkan agregasi multi-sumber (BP2MI, KBRI, LPK). Tidak berafiliasi resmi dengan pemerintah.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
