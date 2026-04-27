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

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-brand-cream pt-24 md:pt-28 pb-20 md:pb-24 flex items-center">
      {/* Decorative blurred color blobs */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-brand-yellow/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-brick/10 rounded-full blur-3xl pointer-events-none" />

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 xl:gap-12 items-center">

          {/* Left column — typographic hero */}
          <div className="lg:col-span-7 xl:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 sm:gap-3 mb-5 sm:mb-7 bg-brand-charcoal/5 border border-brand-charcoal/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
            >
              <Sparkles size={14} className="fill-brand-yellow text-brand-yellow" />
              <span className="text-brand-charcoal font-black uppercase tracking-[0.25em] text-[9px] sm:text-[10px]">
                {t('hero.since')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-[44px] sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[10rem] 2xl:text-[11rem] leading-[0.85] mb-5 sm:mb-7 text-brand-charcoal uppercase tracking-tighter"
            >
              Cafetaria<br />
              <span className="relative inline-block">
                <span className="text-brand-red italic">Toorop</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-brand-yellow origin-left -z-10"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-brand-charcoal/70 max-w-xl mb-3 sm:mb-4 leading-relaxed font-medium"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-red mb-7 sm:mb-9"
            >
              {t('pickup.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10"
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

            {/* Mini stat strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 pt-6 sm:pt-8 border-t border-brand-charcoal/10"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <span className="text-brand-charcoal font-black text-xs">4.7</span>
              </div>
              <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-charcoal/50">
                Tooropstraat 2 · Nijmegen
              </div>
              <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-red">
                {t('location.hours.days')}
              </div>
            </motion.div>
          </div>

          {/* Right column — animated food mosaic */}
          <div className="lg:col-span-5 xl:col-span-5 order-1 lg:order-2">
            <div className="relative max-w-[420px] sm:max-w-[480px] mx-auto lg:max-w-none lg:ml-auto">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
                      sizes="(max-width: 1024px) 45vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Yellow border on hover */}
                    <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-brand-yellow transition-all duration-300 pointer-events-none" />
                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-brand-charcoal/95 via-brand-charcoal/70 to-transparent p-3 sm:p-4 pt-8 sm:pt-12">
                      <div className="text-brand-yellow font-black uppercase tracking-widest text-[10px] sm:text-xs">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating "verse friet" badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                transition={{ duration: 0.6, delay: 1.0, type: "spring" }}
                className="hidden md:flex absolute -top-5 -right-3 lg:-top-6 lg:-right-6 bg-brand-red text-white font-black uppercase tracking-tight text-[10px] sm:text-xs px-4 py-3 sm:px-5 sm:py-4 rounded-full shadow-2xl items-center justify-center text-center leading-none w-20 h-20 sm:w-24 sm:h-24 z-10"
              >
                Vers<br />gebakken
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee — infinite scrolling categories */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-charcoal py-4 overflow-hidden border-t-2 border-brand-yellow">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 sm:gap-14 whitespace-nowrap will-change-transform"
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
