import React from 'react';
import { Star, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-dark">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white py-2 px-4 rounded-md z-50 font-medium"
      >
        Aller au contenu principal
      </a>

      {/* Header / Navbar */}
      <header className="absolute top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl">
              M
            </div>
            <span className="font-heading font-extrabold text-[24px] tracking-tight text-primary">Mcn Paysages</span>
          </div>
          
          <a
            href="tel:0169449868"
            className="hidden md:flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors duration-300"
            aria-label="Appeler Mcn Paysages au 01 69 44 98 68"
          >
            <Phone size={20} />
            <span className="text-[16px]">01 69 44 98 68</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main id="main-content">
        <section className="relative pt-[120px] pb-[48px] md:pt-[160px] lg:pt-[200px] desktop:pb-[80px] lg:px-10 overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-[48px] lg:gap-[64px] items-center">
              
              {/* Text Content */}
              <div className="px-6 lg:px-0 z-10 flex flex-col items-start">
                {/* Social Proof Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 mb-[32px]">
                  <div className="flex text-[#FACC15]">
                    <Star className="w-[16px] h-[16px] fill-current" />
                    <Star className="w-[16px] h-[16px] fill-current" />
                    <Star className="w-[16px] h-[16px] fill-current" />
                    <Star className="w-[16px] h-[16px] fill-current" />
                    <Star className="w-[16px] h-[16px] fill-current" />
                  </div>
                  <span className="text-[14px] font-semibold text-gray-800">
                    4.9/5 (<span className="text-primary">170 avis Google</span>)
                  </span>
                </div>

                <h1 className="font-heading text-[40px] md:text-[48px] lg:text-[64px] font-extrabold leading-[1.2] text-dark mb-[24px]">
                  Votre Jardin d'Exception à <br className="hidden lg:block" />
                  <span className="text-primary">Savigny-sur-Orge</span>
                </h1>
                
                <p className="text-[16px] md:text-[18px] leading-[1.6] text-gray-700 max-w-[65ch] mb-[40px]">
                  Création, aménagement et entretien sur-mesure. Transformez votre espace extérieur avec <strong>Mcn Paysages</strong>, artisan de confiance. Résultat rapide, devis transparent et tranquillité d'esprit garantie.
                </p>

                {/* CTAs */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-[16px]">
                  <a 
                    href="#contact" 
                    className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-[32px] py-[16px] bg-accent text-dark font-bold text-[16px] rounded-[12px] shadow-[0_8px_40px_rgba(163,230,53,0.3)] hover:bg-accent-hover hover:-translate-y-1 transition-all duration-300"
                  >
                    Obtenir mon devis gratuit
                    <ArrowRight className="ml-2 w-[20px] h-[20px]" />
                  </a>
                  <a 
                    href="tel:0169449868" 
                    className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-[32px] py-[16px] bg-white text-primary font-bold text-[16px] rounded-[12px] border-2 border-primary/10 hover:bg-primary/5 transition-colors duration-300"
                  >
                    <Phone className="mr-2 w-[20px] h-[20px] border-primary" />
                    01 69 44 98 68
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="mt-[32px] flex flex-wrap items-center gap-[24px] text-[14px] font-medium text-gray-600">
                  <div className="flex items-center gap-2">
                     <ShieldCheck className="w-[20px] h-[20px] text-primary" />
                     <span>Savoir-faire Artisanal</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <MapPin className="w-[20px] h-[20px] text-primary" />
                     <span>Intervention Essonne</span>
                  </div>
                </div>
              </div>

              {/* Visuals */}
              <div className="relative px-6 lg:px-0 mt-[24px] lg:mt-0">
                <div className="relative rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] aspect-[4/3] w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?w=800&q=75&fm=webp" 
                    alt="Jardin paysager verdoyant et bien entretenu par un professionnel" 
                    width="800"
                    height="600"
                    className="w-full h-full object-cover rounded-[20px]"
                    loading="eager"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-[24px] left-[24px] bg-white/90 backdrop-blur-sm px-[16px] py-[8px] rounded-[8px] shadow-sm flex items-center gap-2 animate-pulse">
                    <div className="w-[8px] h-[8px] bg-[#A3E635] rounded-full"></div>
                    <span className="text-[12px] font-bold text-dark">Disponibilité Rapide</span>
                  </div>

                  <div className="absolute -bottom-8 -left-8 bg-white p-[16px] flex items-center gap-[16px] rounded-[12px] shadow-[0_8px_40px_rgba(0,0,0,0.1)] hidden md:flex border border-gray-50 z-20">
                     <div className="w-[48px] h-[48px] bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-[20px]">10+</span>
                     </div>
                     <div className="flex flex-col pr-[16px]">
                        <span className="font-bold text-dark text-[14px]">Années d'expérience</span>
                        <span className="text-gray-500 text-[12px]">au service de votre jardin</span>
                     </div>
                  </div>
                </div>
                
                {/* Decorative blob for premium feel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-[16px] bg-white border-t border-gray-100 shadow-[0_-8px_40px_rgba(0,0,0,0.05)] md:hidden z-50">
          <a 
            href="tel:0169449868" 
            className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-primary text-white font-bold text-[16px] rounded-[12px] shadow-md"
          >
            <Phone size={20} />
            Appeler Maintenant
          </a>
      </div>
    </div>
  );
}
