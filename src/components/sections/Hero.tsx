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
    <section className="relative h-[100svh] min-h-[600px] w-full flex items-end overflow-hidden bg-brand-charcoal">
      {/* Full-bleed storefront photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/shop-real.png"
          alt="Cafetaria Toorop Nijmegen"
          fill
          sizes="100vw"
          quality={100}
          unoptimized
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay — strongest at bottom for text contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-black/30" />
        {/* Subtle warm tint on top */}
        <div className="absolute inset-0 bg-linear-to-b from-[#1F1612]/50 to-transparent" />
      </div>

      {/* Yellow accent stripe — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-brand-yellow z-10" />

      {/* Bottom-aligned content */}
      <div className="container mx-auto px-5 sm:px-6 md:px-10 pb-12 sm:pb-16 md:pb-24 relative z-10">
        <div className="max-w-3xl xl:max-w-5xl">
          <span className="inline-flex items-center gap-2 sm:gap-3 text-brand-yellow font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] md:text-xs mb-4 sm:mb-6">
            <span className="w-6 sm:w-8 h-px bg-brand-yellow" />
            {t('hero.since')}
          </span>

          <h1 className="font-heading font-black text-[44px] sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] leading-[0.85] mb-4 sm:mb-6 text-white uppercase tracking-tighter drop-shadow-2xl">
            Cafetaria<br />
            <span className="text-brand-yellow italic">Toorop</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/85 font-medium max-w-xl mb-2 sm:mb-3 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-yellow mb-8 sm:mb-10">
            {t('pickup.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={openOrder}
              className="btn-premium-primary shimmer flex items-center justify-center gap-3 group !py-4 sm:!py-4 min-h-[52px]"
            >
              {t('hero.cta.order')}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/menu"
              className="relative overflow-hidden border-2 border-white/80 text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-brand-charcoal hover:-translate-y-1 active:translate-y-0 active:scale-95 flex items-center justify-center min-h-[52px]"
            >
              {t('hero.cta.menu')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
