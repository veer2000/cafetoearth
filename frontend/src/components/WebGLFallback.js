const WebGLFallback = ({ onObjectClick }) => (
  <div className="w-full h-screen bg-gradient-to-br from-[#1a1a1d] via-[#2a2a2e] to-[#1a1a1d] relative overflow-hidden">
    {/* Animated particles background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#e9c46a33,#1a1a1d00),radial-gradient(circle_at_80%_20%,#f4a26133,#1a1a1d00),radial-gradient(circle_at_40%_40%,#2a9d8f33,#1a1a1d00)]" />
    
    {/* Floating cafe objects */}
    <div className="absolute top-20 left-10 w-24 h-24 bg-[#e9c46a]/20 backdrop-blur-xl rounded-2xl animate-float" />
    <div className="absolute top-1/2 right-20 w-20 h-20 bg-[#f4a261]/20 backdrop-blur-xl rounded-full animate-float-delayed" />
    <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-[#2a9d8f]/20 backdrop-blur-xl rounded-xl animate-float-slow" />
  </div>
);

export default WebGLFallback;
