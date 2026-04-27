"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useOrder } from "@/context/OrderContext";

const featured = [
  { src: "/images/friet-speciaal.png", label: "Friet", rotation: -3, corner: "rounded-tl-[2.5rem]" },
  { src: "/images/kapsalon.png", label: "Kapsalon", rotation: 2, corner: "rounded-tr-[2.5rem]" },
  { src: "/images/burger-real.png", label: "Burgers", rotation: 3, corner: "rounded-bl-[2.5rem]" },
  { src: "/images/pizza-round.png", label: "Pizza", rotation: -2, corner: "rounded-br-[2.5rem]" },
];

const marqueeItems = ["Friet", "Kapsalon", "Pizza", "Burgers", "Shoarma", "Schotels", "Snacks", "Dranken"];

export default function Hero() {
  const { t } = useLanguage();
  const { openOrder } = useOrder();

  const ratingBlock = (
    <a
      href="https://www.google.com/search?q=Cafetaria+Toorop+Nijmegen"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:opacity-70 transition-opacity"
      aria-label="Google rating 4.7"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
        ))}
      </div>
      <span className="text-brand-charcoal font-black text-xs">4.7</span>
    </a>
  );

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-brand-cream pt-20 md:pt-28 pb-20 md:pb-24 flex items-center">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-brand-yellow/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute top-1/2 left-1/3 w-64 h-64 bg-brand-brick/10 rounded-full blur-3xl pointer-events-none" />

      {/* Yellow stripe — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-brand-yellow z-20" />

      {/* Tiny dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1F1612 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-10 relative z-10 w-full">

        {/* ============ MOBILE LAYOUT (lg:hidden) ============ */}
        <div className="lg:hidden flex flex-col">
          {/* Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-5 bg-brand-charcoal/5 border border-brand-charcoal/10 px-3 py-1.5 rounded-full self-start"
          >
            <Sparkles size={14} className="fill-brand-yellow text-brand-yellow" />
            <span className="text-brand-charcoal font-black uppercase tracking-[0.25em] text-[9px]">
              {t('hero.since')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black text-[44px] sm:text-7xl leading-[0.85] mb-5 text-brand-charcoal uppercase tracking-tighter"
          >
            Cafetaria<br />
            <span className="relative inline-block">
              <span className="text-brand-red italic">Toorop</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-2 bg-brand-yellow origin-left -z-10"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-brand-charcoal/70 max-w-xl mb-2 leading-relaxed font-medium"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-7"
          >
            {t('pickup.subtitle')}
          </motion.p>

          {/* Horizontal swipe photo strip — pure mobile pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="-mx-5 sm:-mx-6 mb-7 px-5 sm:px-6"
          >
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-3">
              {featured.map((item) => (
                <div
                  key={item.label}
                  className="snap-start shrink-0 w-[68%] sm:w-[55%] relative aspect-[3/4] overflow-hidden bg-white shadow-xl ring-1 ring-brand-charcoal/10 rounded-2xl"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 640px) 68vw, 55vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-brand-charcoal/95 via-brand-charcoal/40 to-transparent p-4 pt-12">
                    <div className="text-brand-yellow font-black uppercase tracking-widest text-xs">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-1.5 mt-1">
              {featured.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-charcoal/15" />
              ))}
            </div>
          </motion.div>

          {/* CTAs — full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-3 mb-7"
          >
            <button
              onClick={openOrder}
              className="btn-premium-primary shimmer flex items-center justify-center gap-3 group min-h-[56px]"
            >
              {t('hero.cta.order')}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/menu"
              className="btn-premium-outline shimmer inline-flex items-center justify-center min-h-[56px]"
            >
              {t('hero.cta.menu')}
            </Link>
          </motion.div>

          {/* Mobile stat strip — compact, two rows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col gap-3 pt-5 border-t border-brand-charcoal/10"
          >
            {ratingBlock}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-black uppercase tracking-widest text-brand-charcoal/50">
              <span>Tooropstraat 2 · Nijmegen</span>
              <span className="text-brand-red">{t('location.hours.days')}</span>
            </div>
          </motion.div>
        </div>

        {/* ============ DESKTOP LAYOUT (hidden on mobile) ============ */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center">

          {/* Left column — typographic hero */}
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-7 bg-brand-charcoal/5 border border-brand-charcoal/10 px-4 py-2 rounded-full"
            >
              <Sparkles size={14} className="fill-brand-yellow text-brand-yellow" />
              <span className="text-brand-charcoal font-black uppercase tracking-[0.25em] text-[10px]">
                {t('hero.since')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-8xl xl:text-[10rem] 2xl:text-[11rem] leading-[0.85] mb-7 text-brand-charcoal uppercase tracking-tighter"
            >
              Cafetaria<br />
              <span className="relative inline-block">
                <span className="text-brand-red italic">Toorop</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-brand-yellow origin-left -z-10"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-brand-charcoal/70 max-w-xl mb-4 leading-relaxed font-medium"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs font-black uppercase tracking-widest text-brand-red mb-9"
            >
              {t('pickup.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-row gap-4 mb-10"
            >
              <button
                onClick={openOrder}
                className="btn-premium-primary shimmer flex items-center justify-center gap-3 group min-h-[52px]"
              >
                {t('hero.cta.order')}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/menu"
                className="btn-premium-outline shimmer inline-flex items-center justify-center min-h-[52px]"
              >
                {t('hero.cta.menu')}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 border-t border-brand-charcoal/10"
            >
              {ratingBlock}
              <div className="text-xs font-black uppercase tracking-widest text-brand-charcoal/50">
                Tooropstraat 2 · Nijmegen
              </div>
              <div className="text-xs font-black uppercase tracking-widest text-brand-red">
                {t('location.hours.days')}
              </div>
            </motion.div>
          </div>

          {/* Right column — animated 2x2 food mosaic */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="relative max-w-[460px] ml-auto">
              <div className="grid grid-cols-2 gap-4">
                {featured.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.85, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: item.rotation }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + idx * 0.12,
                      type: "spring",
                      stiffness: 110,
                      damping: 14,
                    }}
                    whileHover={{
                      scale: 1.06,
                      rotate: 0,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className={`relative aspect-square overflow-hidden bg-white shadow-2xl ring-1 ring-brand-charcoal/10 cursor-pointer group ${item.corner}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      sizes="25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-brand-yellow transition-all duration-300 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-brand-charcoal/95 via-brand-charcoal/70 to-transparent p-4 pt-12">
                      <div className="text-brand-yellow font-black uppercase tracking-widest text-xs">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating "vers gebakken" badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                transition={{ duration: 0.6, delay: 1.0, type: "spring" }}
                className="absolute -top-6 -right-6 bg-brand-red text-white font-black uppercase tracking-tight text-xs px-5 py-4 rounded-full shadow-2xl flex items-center justify-center text-center leading-none w-24 h-24 z-10"
              >
                Vers<br />gebakken
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-charcoal py-3.5 sm:py-4 overflow-hidden border-t-2 border-brand-yellow">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 sm:gap-14 whitespace-nowrap will-change-transform"
        >
          {[...Array(2)].flatMap((_, set) =>
            marqueeItems.map((label, i) => (
              <React.Fragment key={`${set}-${i}`}>
                <span className={`font-heading font-black uppercase tracking-[0.25em] text-sm sm:text-base ${i % 2 === 0 ? "text-brand-yellow" : "text-white"}`}>
                  {label}
                </span>
                <span className="text-brand-yellow/40 font-black self-center">★</span>
              </React.Fragment>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
