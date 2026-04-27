"use client";

import React from "react";
import Link from "next/link";
import { Star, Quote, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "A Wayfarer's Tale, Dipa",
      text: t('testimonials.item1.text'),
      stars: 5,
      tag: t('reviews.tag.guide')
    },
    {
      name: "Mónica Bernal Montero",
      text: t('testimonials.item2.text'),
      stars: 5,
      tag: t('reviews.tag.verified')
    },
    {
      name: "Alitha Natriezia",
      text: t('testimonials.item3.text'),
      stars: 5,
      tag: t('reviews.tag.guide')
    }
  ];
  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-4xl">
             <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-brand-charcoal uppercase tracking-tighter leading-none mb-4 md:whitespace-nowrap">
                {t('testimonials.title').split(' ').map((word, i) => (
                  i === t('testimonials.title').split(' ').length - 1 ? <span key={i} className="text-brand-red">{word}</span> : word + ' '
                ))}
             </h2>
             <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                {t('testimonials.subtitle')}
             </p>
          </div>
          <a 
            href="https://www.google.com/search?q=Cafetaria+Toorop+Nijmegen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium-primary shimmer flex items-center gap-3 !px-8 !py-4 text-[11px]"
          >
            {t('reviews.cta.button')}
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((tr, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 border border-gray-100 relative group hover:border-brand-red/20 transition-all shadow-sm hover:shadow-xl">
              <Quote className="absolute top-8 right-8 text-gray-50 group-hover:text-brand-red/10 transition-colors" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(tr.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              <p className="text-brand-charcoal font-medium italic text-lg mb-8 leading-relaxed relative z-10">
                &quot;{tr.text}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-charcoal rounded-full flex items-center justify-center text-white font-black text-xs overflow-hidden border border-gray-50">
                  {tr.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-brand-charcoal uppercase tracking-widest text-[11px] mb-0.5">{tr.name}</p>
                  <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-[8px]">{tr.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
 
        <div className="mt-16 flex justify-center">
          <Link 
            href="/reviews"
            className="btn-premium-primary shimmer flex items-center gap-3 !px-10 !py-5"
          >
            {t('testimonials.cta.all')}
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
