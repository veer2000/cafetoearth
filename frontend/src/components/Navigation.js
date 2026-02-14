import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee, BookOpen, Mail, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Coffee },
    { path: '/menu', label: 'Menu', icon: BookOpen },
    { path: '/about', label: 'About', icon: Coffee },
    { path: '/contact', label: 'Contact', icon: Mail },
    { path: '/download', label: 'Download', icon: Download },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden backdrop-blur-xl bg-black/40 border border-white/10 p-3 rounded-full hover:bg-[#2a9d8f]/20 transition-all"
        data-testid="mobile-menu-toggle"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6 text-[#e9c46a]" /> : <Menu className="w-6 h-6 text-[#e9c46a]" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-8 left-1/2 -translate-x-1/2 z-40 backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <ul className="flex items-center gap-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <Link
                to={path}
                data-testid={`nav-${label.toLowerCase()}`}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-manrope font-medium transition-all ${
                  isActive(path)
                    ? 'bg-[#e9c46a] text-[#1a1a1d]'
                    : 'text-white/60 hover:text-[#e9c46a] hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 backdrop-blur-xl bg-[#1a1a1d]/95" onClick={() => setIsOpen(false)} />
        <div className="relative h-full flex items-center justify-center">
          <ul className="flex flex-col items-center gap-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-${label.toLowerCase()}`}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full font-space-grotesk text-xl font-bold transition-all ${
                    isActive(path)
                      ? 'bg-[#e9c46a] text-[#1a1a1d] scale-110'
                      : 'text-white/80 hover:text-[#e9c46a] hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
