import { useState } from 'react';
import ThreeScene from '../components/ThreeScene';
import { X } from 'lucide-react';

const Home = () => {
  const [selectedObject, setSelectedObject] = useState(null);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ThreeScene onObjectClick={setSelectedObject} />
      
      {/* Welcome overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10">
        <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e9c46a] to-[#f4a261] mb-4">
          Contour Cafe
        </h1>
        <p className="font-manrope text-lg md:text-xl text-gray-300 mb-8">
          Explore our interactive 3D space
        </p>
        <div className="text-sm text-gray-400 font-manrope">
          Click on objects to learn more
        </div>
      </div>

      {/* Object info popup */}
      {selectedObject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedObject(null)} />
          <div 
            className="relative backdrop-blur-xl bg-[#1a1a1d]/90 border border-[#2a9d8f]/30 rounded-xl p-8 max-w-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform transition-all"
            data-testid="object-info-popup"
          >
            <button
              onClick={() => setSelectedObject(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-[#e9c46a] transition-colors"
              data-testid="close-popup-button"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-space-grotesk text-2xl font-bold text-[#e9c46a] mb-3">
              {selectedObject.name}
            </h3>
            <p className="font-manrope text-gray-300 leading-relaxed">
              {selectedObject.info}
            </p>
          </div>
        </div>
      )}

      {/* Instructions for mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden">
        <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-full px-6 py-3 text-sm text-gray-300 font-manrope">
          Tap objects to explore
        </div>
      </div>
    </div>
  );
};

export default Home;
