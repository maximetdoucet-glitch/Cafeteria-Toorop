"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FullMenu from "@/components/sections/FullMenu";
import { useLanguage } from "@/context/LanguageContext";

export default function MenuContent() {
  const { t } = useLanguage();
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        {/* Menu Page Hero Banner */}
        <section className="bg-brand-charcoal pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="container mx-auto px-5 sm:px-6 text-center">
            <span className="text-brand-yellow font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] md:text-xs mb-4 inline-block">
              Cafetaria Toorop • Nijmegen
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-none mb-4">
              {t('nav.menu').split(' ').map((word, i) => (
                i === t('nav.menu').split(' ').length - 1 ? <span key={i} className="text-brand-yellow italic">{word}</span> : word + ' '
              ))}
            </h1>
            <p className="text-white/50 font-medium text-sm md:text-base max-w-lg mx-auto">
              {t('cat.pizza.desc')}
            </p>
          </div>
        </section>
        <FullMenu />
      </main>
      <Footer />
    </div>
  );
}
