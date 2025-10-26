import { useState } from "react";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Location et Vente de Véhicules",
      shortTitle: "Véhicules",
      description: "Trouvez le véhicule parfait pour vos besoins. Location flexible ou achat.",
      features: [
        "Véhicules récents et bien entretenus",
        "Location courte ou longue durée",
        "Vente avec garantie"
      ],
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      iconBg: "from-red-500 to-orange-600",
      hoverShadow: "hover:shadow-red-400/30"
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Agence de Voyage",
      shortTitle: "Voyages",
      description: "Organisez vos voyages en toute sérénité avec notre accompagnement.",
      features: [
        "Réservation de billets d'avion",
        "Packages tout compris",
        "Assistance visa et documents"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      iconBg: "from-blue-600 to-cyan-600",
      hoverShadow: "hover:shadow-blue-400/30"
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      title: "Avenir Sport Management",
      shortTitle: "Sport",
      description: "Accompagnement des talents sportifs et gestion de carrière.",
      features: [
        "Gestion de carrière sportive",
        "Programmes de formation",
        "Coaching professionnel"
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      iconBg: "from-green-600 to-emerald-600",
      hoverShadow: "hover:shadow-green-400/30"
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Vente de Portables",
      shortTitle: "Téléphones",
      description: "Large sélection de smartphones neufs et reconditionnés.",
      features: [
        "Smartphones neufs et occasions",
        "Toutes marques disponibles",
        "Prix compétitifs",
        "Garentie"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "from-purple-600 to-pink-600",
      hoverShadow: "hover:shadow-purple-400/30"
    }
  ];

  return (
    <section id="services" className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-blue-100 rounded-full text-sm font-semibold text-red-700 mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            Nos Services
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-700 bg-clip-text text-transparent">
              Des Solutions Complètes
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Quatre domaines d'expertise pour répondre à tous vos besoins. 
            De la mobilité aux voyages, du sport à la technologie.
          </p>
        </div>

        {/* Services Grid - Affichage Horizontal sur Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg ${service.hoverShadow} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.iconBg} text-white mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-red-600 group-hover:to-blue-700 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2 text-gray-700"
                      style={{
                        animation: activeService === service.id ? `slideIn 0.3s ease-out ${idx * 0.05}s both` : 'none'
                      }}
                    >
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn mt-auto`}
                >
                  En savoir plus
                  <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center bg-gradient-to-r from-red-50 via-white to-blue-50 rounded-2xl p-8 lg:p-10 shadow-lg border border-red-100">
            <div className="text-center sm:text-left">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                Besoin d'un service personnalisé ?
              </h3>
              <p className="text-gray-600">
                Contactez-nous pour discuter de vos besoins spécifiques
              </p>
            </div> <br />
            <a
              href="https://wa.me/2250749545979"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 via-red-500 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-red-400/30 transform hover:scale-105 transition-all duration-300 group"
            >
              Demander un service
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}