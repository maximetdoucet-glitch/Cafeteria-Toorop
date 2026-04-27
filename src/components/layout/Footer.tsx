"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useOrder } from "@/context/OrderContext";

export default function Footer() {
  const { t } = useLanguage();
  const { openOrder } = useOrder();
  
  return (
    <footer className="bg-brand-charcoal py-10 md:py-16">
      <div className="container mx-auto px-6 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-12 border-b border-white/5 md:pb-12">
           {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start pb-4 md:pb-0">
             <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/10 bg-white/10">
                    <Image 
                      src="/images/logo-mark.png" 
                      alt="Cafetaria Toorop Logo"
                      fill
                      className="object-cover"
                    />
                 </div>
                <span className="text-2xl font-black tracking-tighter uppercase text-white Oswald">
                  Cafetaria <span className="text-brand-red">Toorop</span>
                </span>
             </div>
             <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-3">Nijmegen</p>
             <p className="text-white/40 text-xs leading-relaxed max-w-[240px] md:max-w-xs text-center md:text-left italic">
               "{t('footer.tagline')}"
             </p>
          </div>

          <div className="w-full h-px bg-white/5 md:hidden mb-4" />

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start pb-6 md:pb-0">
             <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-3">{t('nav.about')}</h4>
             <div className="flex flex-col items-center md:items-start gap-2">
                {[
                  { name: t('nav.menu'), href: "/menu" },
                  { name: t('nav.about'), href: "/about" },
                  { name: t('nav.reviews'), href: "/reviews" }
                ].map(item => (
                   <Link key={item.name} href={item.href} className="font-bold text-xs text-white/50 hover:text-brand-red transition-colors tracking-wide">
                      {item.name}
                   </Link>
                ))}
                <button onClick={openOrder} className="font-bold text-xs text-center md:text-left text-white/50 hover:text-brand-red transition-colors cursor-pointer tracking-wide">
                   {t('nav.order')}
                </button>
             </div>
          </div>

          <div className="w-full h-px bg-white/5 md:hidden mb-6" />

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start pb-6 md:pb-0">
             <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-4">{t('location.contact.title')}</h4>
             <div className="flex flex-col items-center md:items-start gap-3">
                <a href="tel:024-3241143" className="flex items-center gap-3 text-white/50 hover:text-brand-red transition-colors group">
                   <Phone size={14} className="text-brand-red group-hover:scale-110 transition-transform" />
                   <span className="text-xs font-bold tracking-tight">024 - 324 1143</span>
                </a>
                <a href="mailto:info@cafetariatoorop.nl" className="flex items-center gap-3 text-white/50 hover:text-brand-red transition-colors group">
                   <Mail size={14} className="text-brand-red group-hover:scale-110 transition-transform" />
                   <span className="text-xs font-bold tracking-tight">info@cafetariatoorop.nl</span>
                </a>
                <div className="flex items-center md:items-start gap-3 text-white/50">
                   <MapPin size={14} className="text-brand-red flex-shrink-0" />
                   <span className="text-xs font-bold tracking-tight text-center md:text-left">
                     Tooropstraat 2, Nijmegen
                   </span>
                </div>
             </div>
          </div>

          <div className="w-full h-px bg-white/5 md:hidden mb-6" />

          {/* Social & Hours */}
          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-white font-black uppercase tracking-widest text-[11px] mb-6">{t('location.social.title')}</h4>
             <a 
               href="https://www.facebook.com/p/Cafetaria-De-Fest-100036648867206/" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-3 text-white/40 hover:text-brand-red transition-colors mb-6"
             >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand-red" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-xs font-bold">Facebook</span>
             </a>
             <div className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold space-y-1">
                <p>{t('location.hours.days')}</p>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
         <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
               {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
            </div>
            <div className="hidden md:block text-[8px] font-black uppercase tracking-[0.6em] text-white/10 italic">
               {t('footer.tagline')}
            </div>
         </div>
      </div>
    </footer>
  );
}

