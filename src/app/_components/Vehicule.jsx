import { useState } from "react";

export default function VehiculesSection() {
  const [activeCategory, setActiveCategory] = useState("tous");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const categories = [
    { id: "tous", name: "Tous", icon: "🚗" },
    { id: "economique", name: "Économique", icon: "💰" },
    { id: "suv", name: "SUV", icon: "🚙" },
    { id: "luxe", name: "Luxe", icon: "✨" },
    { id: "utilitaire", name: "Utilitaire", icon: "🚚" }
  ];

  const vehicules = [
    {
      id: 1,
      name: "Toyota Corolla",
      category: "economique",
      image: "/vehicules/corolla.jpg",
      price: "25,000",
      priceLocation: "15,000",
      passengers: 5,
      transmission: "Automatique",
      fuel: "Essence",
      features: ["Climatisation", "GPS", "Bluetooth", "Caméra recul"],
      disponible: true,
      badge: "Populaire"
    },
    {
      id: 2,
      name: "Honda CR-V",
      category: "suv",
      image: "/vehicules/crv.jpg",
      price: "45,000",
      priceLocation: "25,000",
      passengers: 7,
      transmission: "Automatique",
      fuel: "Essence",
      features: ["4x4", "Toit panoramique", "Sièges cuir", "Système audio premium"],
      disponible: true,
      badge: "Recommandé"
    },
    {
      id: 3,
      name: "Mercedes-Benz Classe E",
      category: "luxe",
      image: "/vehicules/mercedes.jpg",
      price: "85,000",
      priceLocation: "45,000",
      passengers: 5,
      transmission: "Automatique",
      fuel: "Diesel",
      features: ["Sièges massage", "Conduite autonome", "Écran tactile", "Sono Burmester"],
      disponible: true,
      badge: "Premium"
    },
    {
      id: 4,
      name: "Nissan Patrol",
      category: "suv",
      image: "/vehicules/patrol.jpg",
      price: "65,000",
      priceLocation: "35,000",
      passengers: 8,
      transmission: "Automatique",
      fuel: "Diesel",
      features: ["4x4 puissant", "7 places", "Coffre spacieux", "Caméra 360°"],
      disponible: true,
      badge: null
    },
    {
      id: 5,
      name: "Hyundai i10",
      category: "economique",
      image: "/vehicules/i10.jpg",
      price: "18,000",
      priceLocation: "10,000",
      passengers: 4,
      transmission: "Manuelle",
      fuel: "Essence",
      features: ["Économique", "Compact", "Idéal ville", "Faible consommation"],
      disponible: true,
      badge: "Meilleur prix"
    },
    {
      id: 6,
      name: "Ford Transit",
      category: "utilitaire",
      image: "/vehicules/transit.jpg",
      price: "35,000",
      priceLocation: "20,000",
      passengers: 3,
      transmission: "Manuelle",
      fuel: "Diesel",
      features: ["Grande capacité", "Charge utile 1.2T", "Robuste", "GPS pro"],
      disponible: true,
      badge: null
    },
    {
      id: 7,
      name: "Range Rover Sport",
      category: "luxe",
      image: "/vehicules/range.jpg",
      price: "120,000",
      priceLocation: "60,000",
      passengers: 5,
      transmission: "Automatique",
      fuel: "Hybride",
      features: ["Tout-terrain luxe", "Écran 13 pouces", "Sièges ventilés", "Conduite off-road"],
      disponible: false,
      badge: "Exclusif"
    },
    {
      id: 8,
      name: "Toyota Hilux",
      category: "utilitaire",
      image: "/vehicules/hilux.jpg",
      price: "42,000",
      priceLocation: "22,000",
      passengers: 5,
      transmission: "Manuelle",
      fuel: "Diesel",
      features: ["4x4 robuste", "Double cabine", "Benne plateau", "Fiable"],
      disponible: true,
      badge: null
    }
  ];

  const filteredVehicules = activeCategory === "tous" 
    ? vehicules 
    : vehicules.filter(v => v.category === activeCategory);

  return (
    <section id="vehicules" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-sm font-semibold text-red-700 mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Notre Flotte
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Trouvez Votre Véhicule Idéal
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Large choix de véhicules pour la location ou l'achat. Des modèles économiques aux SUV de luxe, 
            tous bien entretenus et prêts à partir.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-400/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-red-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 lg:mb-16">
          {[
            { label: "Véhicules disponibles", value: filteredVehicules.length, icon: "🚗" },
            { label: "Catégories", value: "4+", icon: "📊" },
            { label: "Location/jour dès", value: "10K", icon: "💰" },
            { label: "Garantie", value: "100%", icon: "✅" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredVehicules.map((vehicule, index) => (
            <div
              key={vehicule.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-400/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={vehicule.image}
                  alt={vehicule.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += `
                      <div class="absolute inset-0 flex items-center justify-center">
                        <svg class="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                    `;
                  }}
                />
                
                {/* Badge */}
                {vehicule.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
                    {vehicule.badge}
                  </div>
                )}

                {/* Disponibilité */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                  vehicule.disponible 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-800 text-white'
                }`}>
                  {vehicule.disponible ? '✓ Disponible' : 'Réservé'}
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  {vehicule.name}
                </h3>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                  <div className="flex items-center gap-1 text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>{vehicule.passengers} pers</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="truncate">{vehicule.transmission.slice(0, 4)}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    <span>{vehicule.fuel}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4 space-y-1">
                  {vehicule.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {vehicule.features.length > 2 && (
                    <div className="text-xs text-gray-500 font-medium">
                      +{vehicule.features.length - 2} autres équipements
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">Location/jour</span>
                    <span className="text-lg font-bold text-red-600">{vehicule.priceLocation} FCFA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Prix d'achat</span>
                    <span className="text-sm font-semibold text-gray-700">{vehicule.price}K FCFA</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedVehicle(vehicule)}
                    className="flex-1 py-2.5 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-red-400/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Réserver
                  </button>
                  <button className="px-4 py-2.5 border-2 border-red-600 text-red-600 rounded-lg font-semibold text-sm hover:bg-red-50 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-r from-red-50 via-orange-50 to-red-50 rounded-3xl p-10 lg:p-12 shadow-xl border border-red-100">
            <div className="space-y-3">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                Vous ne trouvez pas ce que vous cherchez ?
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl">
                Contactez-nous pour des demandes spéciales. Nous pouvons vous aider à trouver le véhicule parfait selon vos besoins.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/2250779912659"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-red-400/30 transform hover:scale-105 transition-all duration-300 group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Demande personnalisée
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-red-600 text-red-600 rounded-full font-semibold hover:bg-red-50 transform hover:scale-105 transition-all duration-300"
              >
                Voir les tarifs complets
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de réservation (simple) */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedVehicle(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Réserver {selectedVehicle.name}</h3>
              <button onClick={() => setSelectedVehicle(null)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Pour réserver ce véhicule, contactez-nous directement via WhatsApp ou appelez-nous.
            </p>
            <div className="space-y-3">
              <a
                href={`https://wa.me/2250779912659?text=Bonjour, je souhaite réserver le ${selectedVehicle.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all"
              >
                Réserver via WhatsApp
              </a>
              <button
                onClick={() => setSelectedVehicle(null)}
                className="block w-full py-3 px-6 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}