"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useOrder } from "@/context/OrderContext";
import { Language } from "@/i18n/translations";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const { openOrder } = useOrder();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: 'nl', label: 'NL' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white py-3 shadow-md border-b border-gray-100" : "bg-transparent py-5"
      }`}>
      <div className="w-full px-4 md:px-8 flex items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-4 group flex-shrink-0">
          <div className="relative w-16 h-16 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500 -translate-y-[6px]">
            <Image
              src="/images/logo-mark.png"
              alt="Cafetaria Toorop Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-[16px] sm:text-2xl leading-none uppercase tracking-tighter text-brand-charcoal">
              Cafetaria <span className="text-brand-red">Toorop</span>
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${isScrolled ? "text-gray-400" : "text-brand-charcoal/60"
              }`}>
              Nijmegen
            </span>
          </div>
        </Link>

        {/* Desktop Actions - Pushed to the right */}
        <div className="hidden md:flex items-center justify-end flex-1 space-x-10">
          <div className="flex items-center space-x-8">
            <Link href="/menu" className="text-xs font-black uppercase tracking-widest text-brand-charcoal hover:text-brand-red transition-colors text-shadow-food">
              {t('nav.menu')}
            </Link>
            <Link href="/about" className="text-xs font-black uppercase tracking-widest text-brand-charcoal hover:text-brand-red transition-colors text-shadow-food">
              {t('nav.about')}
            </Link>
            <Link href="/reviews" className="text-xs font-black uppercase tracking-widest text-brand-charcoal hover:text-brand-red transition-colors text-shadow-food">
              {t('nav.reviews')}
            </Link>
            <Link href="/#location" className="text-xs font-black uppercase tracking-widest text-brand-charcoal hover:text-brand-red transition-colors text-shadow-food">
              {t('nav.location')}
            </Link>


            {/* Language Switcher */}
            <div className="relative group/lang">
              <button className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-brand-charcoal hover:text-brand-red transition-colors">
                <Globe size={14} className="text-brand-red" />
                <span>{language}</span>
                <ChevronDown size={12} className="opacity-50" />
              </button>
              <div className="absolute top-full right-0 mt-2 bg-brand-charcoal border border-white/10 shadow-2xl opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all py-2 min-w-[80px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className={`w-full text-left px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors ${language === lang.code ? "text-brand-red" : "text-white/60"
                      }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={openOrder}
            className="btn-premium-primary shimmer flex items-center space-x-2 !px-8 !py-3 !rounded-lg text-[11px]"
          >
            <ShoppingCart size={16} />
            <span>{t('nav.order')}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden ml-auto p-2 rounded-full text-brand-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-charcoal z-[60] flex flex-col p-8 md:hidden">
          <div className="flex justify-between items-center mb-12">
            <span className="text-white font-heading font-black text-2xl uppercase tracking-tighter">
              CAFETARIA <span className="text-brand-red">TOOROP.</span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Sluit menu"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="text-white" size={32} />
            </button>
          </div>

          <div className="flex flex-col space-y-8">
            {/* Mobile Lang Selector */}
            <div className="flex gap-6 border-b border-white/10 pb-8">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as Language)}
                  className={`text-sm font-black uppercase tracking-[0.2em] transition-colors ${language === lang.code ? "text-brand-red" : "text-white/40"
                    }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col space-y-6">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-black text-white hover:text-brand-red transition-colors uppercase tracking-[0.1em]">{t('nav.home')}</Link>
              <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-black text-white hover:text-brand-red transition-colors uppercase tracking-[0.1em]">{t('nav.menu')}</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-black text-white hover:text-brand-red transition-colors uppercase tracking-[0.1em]">{t('nav.about')}</Link>
              <Link href="/reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-black text-white hover:text-brand-red transition-colors uppercase tracking-[0.1em]">{t('nav.reviews')}</Link>
              <Link href="/#location" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-black text-white hover:text-brand-red transition-colors uppercase tracking-[0.1em]">{t('nav.location')}</Link>
            </div>

            <button
              onClick={() => { setIsMobileMenuOpen(false); openOrder(); }}
              className="w-full bg-brand-red py-5 mt-4 text-white font-black uppercase text-center text-xs tracking-[0.2em] shadow-2xl cursor-pointer hover:bg-white hover:text-brand-charcoal transition-all rounded-xl"
            >
              {t('nav.order')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
