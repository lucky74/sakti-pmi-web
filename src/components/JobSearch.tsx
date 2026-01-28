import React from 'react';
import { Briefcase, Building, CheckCircle2 } from 'lucide-react';
import { countryStats } from '../data/mockData';

interface JobSearchProps {
  countryCode: string | null;
}

const JobSearch: React.FC<JobSearchProps> = ({ countryCode }) => {
  const jobs = countryCode 
    ? countryStats[countryCode as keyof typeof countryStats]?.jobs || []
    : Object.values(countryStats).flatMap(c => c.jobs);

  return (
    <div id="jobs" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Lowongan Valid {countryCode ? `di ${countryStats[countryCode as keyof typeof countryStats].name}` : 'Terbaru'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg flex items-center gap-1">
                <CheckCircle2 size={12} /> Terverifikasi
              </div>
              
              <h3 className="font-bold text-lg mb-2 text-slate-800">{job.title}</h3>
              
              <div className="flex items-center gap-2 text-slate-600 mb-2">
                <Building size={16} />
                <span>{job.company}</span>
              </div>
              
              <div className="flex items-center gap-2 text-green-700 font-semibold mb-4">
                <Briefcase size={16} />
                <span>{job.salary}</span>
              </div>
              
              <button className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800 transition">
                Lihat Detail
              </button>
            </div>
          ))}
          
          {jobs.length === 0 && (
            <div className="col-span-full text-center text-slate-500 py-8">
              Tidak ada lowongan tersedia saat ini.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
