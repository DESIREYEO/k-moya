import { useState, useEffect } from "react";

const navigation = [
  { name: "Accueil", href: "#accueil" },
  { name: "À propos", href: "#apropos" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Header({ pathname }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Détection de la section active
      const sections = ["accueil", "services",  "apropos", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/98 backdrop-blur-md shadow-lg shadow-red-100/50 border-b border-red-100" 
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <nav
          className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl lg:px-8"
          aria-label="Global"
        >
          {/* Logo Section */}
          <div className="flex lg:flex-1">
            <a 
              href="#accueil" 
              className="-m-1.5 p-1.5 cursor-pointer group" 
              onClick={scrollToTop}
            >
              <img 
                src="/logo.png" 
                alt="k-MOYA Services Logo" 
                className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-600 hover:text-blue-700 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            <div className="flex lg:gap-x-6">
              {navigation.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative text-sm font-semibold transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg ${
                      isActive 
                        ? 'text-red-600 bg-red-50' 
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50/50'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/2250779912659"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gradient-to-r from-red-600 via-red-500 to-blue-700 hover:from-red-700 hover:via-red-600 hover:to-blue-800 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:shadow-red-400/30 cursor-pointer overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Réserver maintenant
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - En dehors du header pour éviter les problèmes de z-index */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
            {/* Header du menu mobile */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-red-100/50 bg-gradient-to-r from-red-50 to-blue-50">
              <a 
                href="#accueil" 
                className="cursor-pointer" 
                onClick={scrollToTop}
              >
                <img 
                  src="/logo.png" 
                  alt="k-MOYA Services Logo" 
                  className="h-12 w-auto"
                />
              </a>
              <button
                type="button"
                className="rounded-md p-2.5 text-red-600 hover:text-blue-700 hover:bg-red-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fermer le menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-6 py-6">
              <div className="space-y-3">
                {navigation.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 cursor-pointer ${
                        isActive 
                          ? 'text-red-600 bg-gradient-to-r from-red-50 to-blue-50 border-l-4 border-red-600' 
                          : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              {/* CTA Button Mobile */}
              <div className="mt-8">
                <a
              href="https://wa.me/2250779912659"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 via-red-500 to-blue-700 hover:from-red-700 hover:via-red-600 hover:to-blue-800 text-white px-6 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-red-400/40 cursor-pointer block text-center transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                    Réserver maintenant
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </>
  );
}