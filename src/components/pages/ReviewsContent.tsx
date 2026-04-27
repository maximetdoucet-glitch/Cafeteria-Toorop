"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Star, MessageSquare, Quote, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ReviewsContent() {
  const { t } = useLanguage();

  const allReviews = [
    { name: "A Wayfarer's Tale, Dipa", date: "2 jaar geleden", text: t('reviews.item1.text'), stars: 5, tag: t('reviews.tag.guide') },
    { name: "Mónica Bernal Montero", date: "10 maanden geleden", text: t('reviews.item2.text'), stars: 5, tag: t('reviews.tag.verified') },
    { name: "Alitha Natriezia", date: "3 jaar geleden", text: t('reviews.item3.text'), stars: 5, tag: t('reviews.tag.guide') },
    { name: "Anna Tőkés", date: "8 jaar geleden", text: t('reviews.item4.text'), stars: 5, tag: t('reviews.tag.verified') },
    { name: "Lynn Le", date: "2 jaar geleden", text: t('reviews.item5.text'), stars: 5, tag: t('reviews.tag.verified') },
    { name: "Csaba Bálint", date: "8 jaar geleden", text: t('reviews.item6.text'), stars: 5, tag: t('reviews.tag.verified') },
    { name: "Jelte Schermer", date: "5 jaar geleden", text: t('reviews.item7.text'), stars: 5, tag: t('reviews.tag.verified') },
    { name: "Bram Thijssen", date: "5 jaar geleden", text: t('reviews.item8.text'), stars: 5, tag: t('reviews.tag.verified') }
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="bg-brand-cream">
        {/* Header — warm dark with yellow stars */}
        <section className="relative bg-brand-charcoal pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-brand-red rounded-full blur-3xl opacity-10" />
          <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-brand-yellow z-10" />

          <div className="container mx-auto px-5 sm:px-6 text-center relative z-10">
            <div className="flex justify-center gap-1 sm:gap-1.5 mb-5 md:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-brand-yellow text-brand-yellow drop-shadow-lg w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              ))}
            </div>
            <h1 className="font-heading font-black text-[36px] sm:text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-none mb-5 md:mb-6">
              {t('reviews.hero.title').split(' ').map((word, i, arr) => (
                i === arr.length - 1
                  ? <span key={i} className="text-brand-yellow italic">{word}</span>
                  : word + ' '
              ))}
            </h1>
            <p className="text-white/60 font-medium text-sm sm:text-base md:text-lg max-w-xl mx-auto">
              {t('reviews.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-6">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
              {allReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="break-inside-avoid bg-white border border-brand-charcoal/5 p-7 sm:p-8 md:p-10 relative group hover:border-brand-yellow/40 hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-start mb-5 md:mb-6">
                    <div className="flex gap-1">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-brand-charcoal/30 uppercase tracking-widest">{review.date}</span>
                  </div>

                  <Quote className="absolute top-8 right-8 md:top-10 md:right-10 text-brand-yellow/15 group-hover:text-brand-yellow/30 transition-colors w-9 h-9 md:w-[42px] md:h-[42px]" />

                  <p className="text-brand-charcoal font-medium italic mb-6 md:mb-8 leading-relaxed relative z-10 text-[15px] sm:text-base">
                    &quot;{review.text}&quot;
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-brand-charcoal rounded-full flex items-center justify-center text-brand-yellow font-black text-sm overflow-hidden border border-brand-charcoal/10 shadow-sm shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-black text-brand-charcoal uppercase tracking-widest text-[11px] sm:text-xs mb-0.5 truncate">{review.name}</p>
                      <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-[8px]">{review.tag}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Reviews CTA */}
            <div className="mt-16 md:mt-24 text-center">
              <div className="inline-block bg-brand-charcoal p-8 sm:p-12 md:p-20 relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] max-w-2xl">
                <div className="absolute inset-0 bg-brand-yellow opacity-5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-brand-red rounded-full blur-3xl opacity-15" />
                <div className="relative z-10">
                  <MessageSquare className="text-brand-yellow mx-auto mb-5 md:mb-6 w-10 h-10 md:w-12 md:h-12" />
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-3 md:mb-4">
                    {t('reviews.cta.title')}
                  </h2>
                  <p className="text-white/55 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-8 md:mb-10 max-w-sm mx-auto">
                    {t('reviews.cta.subtitle')}
                  </p>
                  <a
                    href="https://www.google.com/search?q=Cafetaria+Toorop+Nijmegen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium-primary shimmer inline-flex items-center justify-center gap-3 min-h-[52px]"
                  >
                    {t('reviews.cta.button')}
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
