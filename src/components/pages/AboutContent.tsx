"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Utensils, Users, History, Heart, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        {/* Hero — full-bleed storefront with warm overlay (matches homepage) */}
        <section className="relative h-[70vh] min-h-[480px] flex items-end bg-brand-charcoal overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/shop-real.png"
              alt={t('about.meta.title')}
              fill
              sizes="100vw"
              quality={90}
              className="object-cover object-center scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/55 to-black/35" />
            <div className="absolute inset-0 bg-linear-to-b from-[#1F1612]/40 to-transparent" />
          </div>

          {/* Yellow accent stripe */}
          <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-brand-yellow z-10" />

          <div className="container mx-auto px-6 md:px-10 pb-16 md:pb-20 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 text-brand-yellow font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">
                <span className="w-8 h-px bg-brand-yellow" />
                {t('about.hero.since')}
              </span>
              <h1 className="font-heading font-black text-5xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
                {t('about.hero.title').split(' ').map((word, i, arr) => (
                  i === arr.length - 1
                    ? <span key={i} className="text-brand-yellow italic">{word}</span>
                    : word + ' '
                ))}
              </h1>
            </div>
          </div>
        </section>

        {/* Narrative Section — Origins & Living Room */}
        <section className="py-24 bg-brand-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-3xl font-black text-brand-charcoal uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <History className="text-brand-yellow" />
                    {t('about.origins.title')}
                  </h2>
                  <div className="space-y-6 text-brand-charcoal/70 font-medium leading-relaxed">
                    <p>{t('about.origins.text1')}</p>
                    <p>{t('about.origins.text2')}</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-brand-charcoal uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <Users className="text-brand-yellow" />
                    {t('about.livingroom.title')}
                  </h2>
                  <div className="space-y-6 text-brand-charcoal/70 font-medium leading-relaxed">
                    <p>{t('about.livingroom.text1')}</p>
                    <p>{t('about.livingroom.text2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-charcoal uppercase tracking-tighter">
              {t('about.values.title')}
            </h2>
            <div className="w-16 h-1 bg-brand-yellow mx-auto mt-6" />
          </div>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: Utensils, title: t('about.value1.title'), text: t('about.value1.desc'), color: 'red' },
              { icon: Heart, title: t('about.value2.title'), text: t('about.value2.desc'), color: 'yellow' },
              { icon: Users, title: t('about.value3.title'), text: t('about.value3.desc'), color: 'red' }
            ].map((v, i) => (
              <div key={i} className="bg-brand-cream p-12 text-center border border-brand-charcoal/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`w-16 h-16 ${v.color === 'red' ? 'bg-brand-red' : 'bg-brand-yellow'} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                  <v.icon className={v.color === 'red' ? 'text-white' : 'text-brand-charcoal'} size={32} />
                </div>
                <h3 className="text-2xl font-black text-brand-charcoal uppercase tracking-tighter mb-4">{v.title}</h3>
                <p className="text-brand-charcoal/60 font-medium leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision CTA */}
        <section className="py-32 bg-brand-charcoal relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-yellow opacity-[0.04] mix-blend-overlay" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-red rounded-full blur-3xl opacity-15" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-10">
              {t('about.cta.title').split(' ').map((word, i) => (
                ['toorop', 'atmosphere', 'atmosphäre', 'sfeer'].includes(word.toLowerCase())
                  ? <span key={i} className="text-brand-yellow italic">{word} </span>
                  : word + ' '
              ))}
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
              <a
                href="https://www.google.com/search?q=Cafetaria+Toorop+Nijmegen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-primary shimmer flex items-center gap-3 !px-10 !py-5 group"
              >
                {t('reviews.cta.button')}
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#location"
                className="relative overflow-hidden border-2 border-white/80 text-white font-black uppercase tracking-widest px-12 py-5 rounded-xl transition-all duration-300 hover:bg-white hover:text-brand-charcoal hover:-translate-y-1 active:translate-y-0 active:scale-95 inline-flex items-center justify-center"
              >
                {t('about.cta.location')}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
