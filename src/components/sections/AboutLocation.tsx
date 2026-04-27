"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutLocation() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-16 md:py-24 bg-white text-brand-charcoal relative overflow-hidden">
      {/* Subtle decorative accent */}
      <div className="absolute -top-32 -right-20 w-72 h-72 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 md:mb-14"
        >
          <span className="text-brand-red font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 inline-block">
            Welkom · Welcome · Willkommen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Onze plek in <span className="text-brand-yellow italic">Nijmegen</span>
          </h2>
        </motion.div>

        {/* Photo + info two-column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          {/* Photo — small editorial framing with offset shadow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 relative md:pl-2 lg:pl-4"
          >
            <div className="relative aspect-[4/5] max-w-[320px] sm:max-w-sm mx-auto md:mx-0 ring-1 ring-brand-charcoal/10 overflow-hidden shadow-[10px_10px_0px_0px_rgba(244,180,26,0.9)] md:shadow-[16px_16px_0px_0px_rgba(244,180,26,0.9)]">
              <Image
                src="/images/shop-real.png"
                alt="Cafetaria Toorop, Tooropstraat 2"
                fill
                sizes="(max-width: 768px) 80vw, 35vw"
                quality={100}
                unoptimized
                className="object-cover"
              />
              {/* Pin badge */}
              <div className="absolute top-3 left-3 bg-brand-charcoal text-white font-black uppercase tracking-widest text-[9px] sm:text-[10px] px-3 py-1.5 flex items-center gap-1.5 backdrop-blur-sm">
                <MapPin size={11} className="text-brand-yellow" />
                Tooropstraat 2
              </div>
            </div>
          </motion.div>

          {/* Intro + facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-7"
          >
            <p className="text-base sm:text-lg md:text-xl text-brand-charcoal/80 leading-relaxed font-medium mb-8 md:mb-10">
              {t('about.origins.text1')}
            </p>

            {/* Mini facts grid — adress / hours / phone */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-8 md:mb-10">
              <div className="border-t-2 border-brand-yellow pt-4">
                <div className="flex items-center gap-2 mb-2 text-brand-red">
                  <MapPin size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{t('location.address.title')}</span>
                </div>
                <p className="text-brand-charcoal font-black text-sm uppercase leading-tight">
                  Tooropstraat 2<br />6521 NP Nijmegen
                </p>
              </div>
              <div className="border-t-2 border-brand-yellow pt-4">
                <div className="flex items-center gap-2 mb-2 text-brand-red">
                  <Clock size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{t('location.hours.title')}</span>
                </div>
                <p className="text-brand-charcoal font-black text-sm uppercase leading-tight">
                  {t('location.hours.days')}
                </p>
              </div>
              <div className="border-t-2 border-brand-yellow pt-4">
                <div className="flex items-center gap-2 mb-2 text-brand-red">
                  <Phone size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{t('location.contact.title')}</span>
                </div>
                <a href="tel:024-3241143" className="text-brand-charcoal font-black text-sm uppercase leading-tight hover:text-brand-red transition-colors">
                  024 324 1143
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Tooropstraat+2+Nijmegen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-outline shimmer inline-flex items-center justify-center gap-3 group min-h-[52px]"
            >
              {t('location.route')}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Map embed — full width, modest height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[16/10] sm:aspect-[21/9] md:aspect-[24/8] overflow-hidden bg-brand-charcoal ring-1 ring-brand-charcoal/10"
        >
          <iframe
            title={t('location.maps.title')}
            src="https://maps.google.com/maps?q=Cafetaria%20Toorop,%20Tooropstraat%202,%20Nijmegen&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
