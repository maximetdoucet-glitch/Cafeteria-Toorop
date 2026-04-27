"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useOrder } from "@/context/OrderContext";

export default function Hero() {
  const { t } = useLanguage();
  const { openOrder } = useOrder();
  return (
    <section className="relative h-screen min-h-[640px] w-full flex items-end overflow-hidden bg-brand-charcoal">
      {/* Full-bleed storefront photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/shop-real.png"
          alt="Cafetaria Toorop Nijmegen"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center scale-105"
          priority
        />
        {/* Dark gradient overlay — strongest at bottom for text contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-black/30" />
        {/* Subtle warm tint on top to push the brick warmer */}
        <div className="absolute inset-0 bg-linear-to-b from-[#1F1612]/40 to-transparent" />
      </div>

      {/* Yellow accent stripe — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-brand-yellow z-10" />

      {/* Bottom-aligned content */}
      <div className="container mx-auto px-6 md:px-10 pb-16 md:pb-24 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-brand-yellow font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">
            <span className="w-8 h-px bg-brand-yellow" />
            {t('hero.since')}
          </span>

          <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-6 text-white uppercase tracking-tighter drop-shadow-2xl">
            Cafetaria<br />
            <span className="text-brand-yellow italic">Toorop</span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 font-medium max-w-xl mb-3 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <p className="text-xs font-black uppercase tracking-widest text-brand-yellow mb-10">
            {t('pickup.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openOrder}
              className="btn-premium-primary shimmer flex items-center justify-center gap-3 group"
            >
              {t('hero.cta.order')}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/menu"
              className="relative overflow-hidden border-2 border-white/80 text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-brand-charcoal hover:-translate-y-1 active:translate-y-0 active:scale-95 flex items-center justify-center"
            >
              {t('hero.cta.menu')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
