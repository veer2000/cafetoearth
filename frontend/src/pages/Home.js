// import { useState } from 'react';
// import ThreeScene from '../components/ThreeScene';
// import { X } from 'lucide-react';

// const Home = () => {
//   const [selectedObject, setSelectedObject] = useState(null);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <ThreeScene onObjectClick={setSelectedObject} />
      
//       {/* Welcome overlay */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10">
//         <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e9c46a] to-[#f4a261] mb-4">
//           Contour Cafe
//         </h1>
//         <p className="font-manrope text-lg md:text-xl text-gray-300 mb-8">
//           Explore our interactive 3D space
//         </p>
//         <div className="text-sm text-gray-400 font-manrope">
//           Click on objects to learn more
//         </div>
//       </div>

//       {/* Object info popup */}
//       {selectedObject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedObject(null)} />
//           <div 
//             className="relative backdrop-blur-xl bg-[#1a1a1d]/90 border border-[#2a9d8f]/30 rounded-xl p-8 max-w-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform transition-all"
//             data-testid="object-info-popup"
//           >
//             <button
//               onClick={() => setSelectedObject(null)}
//               className="absolute top-4 right-4 text-white/60 hover:text-[#e9c46a] transition-colors"
//               data-testid="close-popup-button"
//               aria-label="Close popup"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <h3 className="font-space-grotesk text-2xl font-bold text-[#e9c46a] mb-3">
//               {selectedObject.name}
//             </h3>
//             <p className="font-manrope text-gray-300 leading-relaxed">
//               {selectedObject.info}
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Instructions for mobile */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden">
//         <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-full px-6 py-3 text-sm text-gray-300 font-manrope">
//           Tap objects to explore
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useState, useEffect, useCallback } from 'react';
import '../App.css';
import { X } from 'lucide-react';

const Home = () => {
  const [selectedObject, setSelectedObject] = useState(null);
  const [showFallback, setShowFallback] = useState(false);

  // WebGL support check
  useEffect(() => {
    const checkWebGL = async () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        if (!gl) {
          setShowFallback(true);
        }
      } catch {
        setShowFallback(true);
      }
    };
    checkWebGL();
  }, []);

  // Demo objects for clicks (no Three.js needed)
  const demoObjects = [
    { 
      name: "Espresso Machine", 
      info: "Our premium La Marzocco espresso machine brews the perfect shot every time.",
      color: "#e9c46a"
    },
    { 
      name: "Coffee Grinder", 
      info: "Mahlkönig grinder with single-dosing capability for ultimate freshness.",
      color: "#f4a261"
    },
    { 
      name: "Pour Over Dripper", 
      info: "Hario V60 in ceramic - perfect for single-origin pour overs.",
      color: "#2a9d8f"
    }
  ];

  const handleObjectClick = useCallback((object) => {
    setSelectedObject(object);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1a1a1d] via-[#2a2a2e] to-[#1a1a1d]">
      
      {/* Animated 2D Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#e9c46a33,#1a1a1d00),radial-gradient(circle_at_80%_20%,#f4a26133,#1a1a1d00),radial-gradient(circle_at_40%_40%,#2a9d8f33,#1a1a1d00)] animate-pulse" />
        
        {/* Interactive 3D-like objects */}
        <div 
          className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-[#e9c46a]/20 to-[#f4a261]/20 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-[#e9c46a]/30 animate-float hover:animate-none"
          style={{ animationDelay: '0s' }}
          onClick={() => handleObjectClick(demoObjects[0])}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleObjectClick(demoObjects[0])}
        />
        
        <div 
          className="absolute top-2/3 right-1/4 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-[#f4a261]/20 to-[#2a9d8f]/20 backdrop-blur-xl rounded-full shadow-2xl border-2 border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-[#f4a261]/30 animate-float-delayed hover:animate-none"
          style={{ animationDelay: '1s' }}
          onClick={() => handleObjectClick(demoObjects[1])}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleObjectClick(demoObjects[1])}
        />
        
        <div 
          className="absolute bottom-1/4 left-1/6 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#2a9d8f]/20 to-[#e9c46a]/20 backdrop-blur-xl rounded-xl shadow-2xl border-2 border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-[#2a9d8f]/30 animate-float-slow hover:animate-none"
          style={{ animationDelay: '2s' }}
          onClick={() => handleObjectClick(demoObjects[2])}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleObjectClick(demoObjects[2])}
        />
      </div>

      {/* Welcome overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10">
        <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e9c46a] to-[#f4a261] mb-4 drop-shadow-2xl">
          Contour Cafe
        </h1>
        <p className="font-manrope text-lg md:text-xl text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
          Explore our interactive space
        </p>
        <div className="text-sm text-gray-400 font-manrope">
          Click on objects to learn more
        </div>
      </div>

      {/* Object info popup */}
      {selectedObject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-testid="object-info-popup">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setSelectedObject(null)}
          />
          <div 
            className="relative backdrop-blur-xl bg-[#1a1a1d]/90 border border-[#2a9d8f]/30 rounded-xl p-8 max-w-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform transition-all max-h-[80vh] overflow-y-auto"
            data-testid="object-info-popup-content"
          >
            <button
              onClick={() => setSelectedObject(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-[#e9c46a] transition-colors p-1 hover:bg-white/10 rounded-full"
              data-testid="close-popup-button"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-space-grotesk text-2xl font-bold mb-3" style={{ color: selectedObject.color }}>
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

      {/* WebGL fallback notice (only if needed) */}
      {showFallback && (
        <div className="absolute top-4 right-4 bg-yellow-500/90 text-black text-xs px-3 py-1 rounded-full font-manrope font-medium">
          2D Mode (WebGL unavailable)
        </div>
      )}
    </div>
  );
};

// Add these to your globals.css
/*
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-delayed { animation: float 6s ease-in-out infinite 1s; }
.animate-float-slow { animation: float 8s ease-in-out infinite 2s; }
*/

export default Home;
