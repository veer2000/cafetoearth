import ContourPattern from '../components/ContourPattern';
import { Coffee, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Quality',
      description: 'We source the finest coffee beans from around the world',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every cup is crafted with care by our expert baristas',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'A welcoming space for coffee lovers to connect',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in coffee and service',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1d] relative overflow-hidden">
      <ContourPattern />
      
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        {/* Hero section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e9c46a] to-[#f4a261] mb-6">
            About Contour Cafe
          </h1>
          <p className="font-manrope text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Welcome to Contour Cafe, where technology meets tradition. We're not just a coffee shop – 
            we're an experience. Our unique blend of modern design and timeless coffee culture creates 
            a space where ideas flow as smoothly as our espresso.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2a9d8f] to-[#e9c46a] mx-auto rounded-full" />
        </div>

        {/* Story section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="backdrop-blur-xl bg-[#252529]/60 border border-[#2a9d8f]/20 rounded-xl p-8 md:p-12">
            <h2 className="font-space-grotesk text-3xl font-bold text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 font-manrope text-gray-300 leading-relaxed">
              <p>
                Founded in 2024, Contour Cafe was born from a passion for great coffee and innovative design. 
                Our founders, a team of coffee enthusiasts and tech innovators, wanted to create a space that 
                reflected the intersection of craft and creativity.
              </p>
              <p>
                The name "Contour" reflects our philosophy – just as contour lines on a map reveal the hidden 
                depths and elevations of terrain, we believe great coffee reveals layers of flavor, aroma, and 
                experience. Each cup tells a story, each visit creates a memory.
              </p>
              <p>
                Today, we continue to push boundaries, combining traditional coffee-making techniques with 
                modern technology to deliver an unforgettable experience, both online and in our physical space.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="max-w-5xl mx-auto">
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-center text-white mb-12">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="backdrop-blur-xl bg-[#252529]/60 border border-[#2a9d8f]/20 rounded-xl p-8 hover:border-[#2a9d8f]/40 transition-all hover:shadow-[0_8px_32px_rgba(42,157,143,0.2)] group"
                  data-testid={`about-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="p-4 bg-[#2a9d8f]/20 rounded-full w-fit mb-4 group-hover:bg-[#e9c46a]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#2a9d8f] group-hover:text-[#e9c46a] transition-colors" />
                  </div>
                  <h3 className="font-space-grotesk text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-manrope text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team section */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <h2 className="font-space-grotesk text-3xl font-bold text-white mb-6">
            Meet Our Team
          </h2>
          <p className="font-manrope text-gray-300 leading-relaxed">
            Our team of passionate baristas and coffee experts are dedicated to making every visit memorable. 
            With years of combined experience and a genuine love for what they do, they're always ready to 
            craft your perfect cup and share their knowledge about coffee culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
