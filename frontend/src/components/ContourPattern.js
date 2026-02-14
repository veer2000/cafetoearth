const ContourPattern = () => {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="contour" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path
            d="M0,50 Q25,40 50,50 T100,50"
            stroke="#2a9d8f"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0,30 Q25,20 50,30 T100,30"
            stroke="#2a9d8f"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M0,70 Q25,60 50,70 T100,70"
            stroke="#e9c46a"
            strokeWidth="0.3"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contour)" />
    </svg>
  );
};

export default ContourPattern;
