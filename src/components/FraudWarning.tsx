import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';
import { fraudPatterns } from '../data/mockData';

const FraudWarning: React.FC = () => {
  return (
    <div id="fraud" className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <ShieldAlert className="w-10 h-10 text-amber-600" />
            <h2 className="text-3xl font-bold text-slate-900">Waspada Penipuan</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 border-l-8 border-amber-500">
            <h3 className="text-xl font-bold mb-4 text-slate-800">Ciri-ciri Lowongan Palsu:</h3>
            <ul className="space-y-3">
              {fraudPatterns.map((pattern, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{pattern}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-slate-600 mb-4">
                Menemukan lowongan mencurigakan? Laporkan segera untuk melindungi rekan PMI lainnya.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Laporkan Penipuan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudWarning;
