import { useState } from 'react';
import ContourPattern from '../components/ContourPattern';
import { Download as DownloadIcon, FileCode, Folder, Info, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Download = () => {
  const [copied, setCopied] = useState(false);

  const handleDownloadInstructions = () => {
    toast.success('Check the instructions below to export your site!');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const instructions = [
    {
      step: '1',
      title: 'Build the Project',
      description: 'Run the build command to create production-ready files',
      command: 'yarn build',
    },
    {
      step: '2',
      title: 'Locate Build Folder',
      description: 'Find the generated build folder in your project directory',
      path: '/app/frontend/build',
    },
    {
      step: '3',
      title: 'Download Files',
      description: 'Download the entire build folder to your local machine',
    },
    {
      step: '4',
      title: 'WordPress Integration',
      description: 'Upload to WordPress and integrate with Elementor',
      details: [
        'Create a new page in WordPress',
        'Use Elementor HTML widget',
        'Copy the index.html content',
        'Upload static assets to WordPress media library',
        'Update asset paths in the HTML',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1d] relative overflow-hidden">
      <ContourPattern />
      
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-[#2a9d8f]/20 rounded-full mb-6">
              <DownloadIcon className="w-12 h-12 text-[#2a9d8f]" />
            </div>
            <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e9c46a] to-[#f4a261] mb-4">
              Export Your Site
            </h1>
            <p className="font-manrope text-lg text-gray-300 max-w-2xl mx-auto">
              Follow these steps to export and integrate with WordPress & Elementor
            </p>
          </div>

          {/* Alert box */}
          <div className="backdrop-blur-xl bg-[#e9c46a]/10 border border-[#e9c46a]/30 rounded-xl p-6 mb-12 flex gap-4">
            <Info className="w-6 h-6 text-[#e9c46a] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-space-grotesk text-lg font-bold text-[#e9c46a] mb-2">
                Important Note
              </h3>
              <p className="font-manrope text-gray-300 text-sm leading-relaxed">
                This React application requires proper server configuration or static hosting. 
                For WordPress integration, you'll need to convert the React components to static HTML 
                or use a plugin that supports React applications. The Three.js 3D scene requires JavaScript 
                to be enabled and may need additional configuration in Elementor.
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-6 mb-12">
            {instructions.map((instruction, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-[#252529]/60 border border-[#2a9d8f]/20 rounded-xl p-8 hover:border-[#2a9d8f]/40 transition-all"
                data-testid={`download-step-${instruction.step}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2a9d8f]/20 border-2 border-[#2a9d8f] flex items-center justify-center">
                    <span className="font-space-grotesk text-xl font-bold text-[#2a9d8f]">
                      {instruction.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space-grotesk text-xl font-bold text-white mb-2">
                      {instruction.title}
                    </h3>
                    <p className="font-manrope text-gray-300 mb-4">
                      {instruction.description}
                    </p>
                    
                    {instruction.command && (
                      <div className="bg-[#1a1a1d]/60 border border-[#2a9d8f]/30 rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center justify-between gap-4">
                          <code className="text-[#e9c46a]">{instruction.command}</code>
                          <button
                            onClick={() => copyToClipboard(instruction.command)}
                            className="text-xs text-[#2a9d8f] hover:text-[#e9c46a] transition-colors font-manrope"
                            data-testid="copy-command-button"
                          >
                            {copied ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    )}

                    {instruction.path && (
                      <div className="bg-[#1a1a1d]/60 border border-[#2a9d8f]/30 rounded-lg p-4 flex items-center gap-3">
                        <Folder className="w-5 h-5 text-[#2a9d8f]" />
                        <code className="text-[#e9c46a] font-mono text-sm">{instruction.path}</code>
                      </div>
                    )}

                    {instruction.details && (
                      <ul className="space-y-2 mt-4">
                        {instruction.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#2a9d8f] flex-shrink-0 mt-0.5" />
                            <span className="font-manrope text-gray-300 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional resources */}
          <div className="backdrop-blur-xl bg-[#252529]/60 border border-[#2a9d8f]/20 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <FileCode className="w-6 h-6 text-[#2a9d8f] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-space-grotesk text-xl font-bold text-white mb-2">
                  Technical Details
                </h3>
                <p className="font-manrope text-gray-300 text-sm leading-relaxed mb-4">
                  This site is built with React and Three.js. The production build creates optimized 
                  static files that can be hosted on any web server or static hosting platform like 
                  Netlify, Vercel, or GitHub Pages.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#2a9d8f]" />
                    <span className="font-manrope text-sm text-gray-300">React 19.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#2a9d8f]" />
                    <span className="font-manrope text-sm text-gray-300">Three.js for 3D rendering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#2a9d8f]" />
                    <span className="font-manrope text-sm text-gray-300">Tailwind CSS for styling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button
              onClick={handleDownloadInstructions}
              className="bg-[#e9c46a] text-[#1a1a1d] font-space-grotesk font-bold px-8 py-4 rounded-full hover:bg-[#f4a261] transition-all hover:scale-105 shadow-lg inline-flex items-center gap-3"
              data-testid="download-cta-button"
            >
              <DownloadIcon className="w-5 h-5" />
              Ready to Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
