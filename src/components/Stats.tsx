import React from 'react';
import { Users, User, CheckCircle } from 'lucide-react';
import { countryStats } from '../data/mockData';

interface StatsProps {
  countryCode: string | null;
}

const Stats: React.FC<StatsProps> = ({ countryCode }) => {
  if (!countryCode || !countryStats[countryCode as keyof typeof countryStats]) {
    return (
      <div className="py-8 text-center text-slate-500">
        Pilih negara di peta untuk melihat statistik.
      </div>
    );
  }

  const data = countryStats[countryCode as keyof typeof countryStats];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
          <span className="text-4xl">??</span> {data.name}
        </h3>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <CheckCircle size={14} /> Confidence: {data.confidence}%
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-blue-800 mb-2">
            <Users size={20} />
            <span className="font-semibold">Total PMI</span>
          </div>
          <p className="text-3xl font-bold text-blue-900">{data.total.toLocaleString()}</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-indigo-800 mb-2">
            <User size={20} />
            <span className="font-semibold">Laki-laki</span>
          </div>
          <p className="text-2xl font-bold text-indigo-900">{data.male.toLocaleString()}</p>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-pink-800 mb-2">
            <User size={20} />
            <span className="font-semibold">Perempuan</span>
          </div>
          <p className="text-2xl font-bold text-pink-900">{data.female.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
