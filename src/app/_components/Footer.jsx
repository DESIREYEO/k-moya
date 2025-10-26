export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">

  
          {/* Copyright Bar */}
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p className="text-center md:text-left">
                  © {currentYear} <span className="font-semibold text-white">K-MOYA Services</span>. Tous droits réservés.
                </p>
                
                <p className="text-center md:text-right text-xs">
                  Cocody, Djorobite 2 • Abidjan, Côte d'Ivoire
                </p>
              </div>
            </div>
          </div>
        
      </footer>
    );
  }