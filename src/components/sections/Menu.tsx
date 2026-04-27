"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Flame, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useOrder } from "@/context/OrderContext";

export default function Menu() {
  const { t } = useLanguage();
  const { openOrder } = useOrder();

  const highlights = [
    {
      name: t('highlights.friet.title'),
      description: t('highlights.friet.desc'),
      price: "v.a. €3,00",
      image: "/images/friet-speciaal.png",
      popular: true,
    },
    {
      name: t('highlights.kapsalon.title'),
      description: t('highlights.kapsalon.desc'),
      price: "v.a. €10,50",
      image: "/images/kapsalon.png",
      popular: true,
    },
    {
      name: t('highlights.burger.title'),
      description: t('highlights.burger.desc'),
      price: "v.a. €9,50",
      image: "/images/burger-real.png",
      popular: true,
    },
    {
      name: t('highlights.pizza.title'),
      description: t('highlights.pizza.desc'),
      price: "v.a. €8,50",
      image: "/images/pizza-round.png",
      popular: true,
    },
  ];
  return (
    <section id="highlights" className="py-16 md:py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-brand-charcoal uppercase tracking-tighter leading-none mb-4">
            {t('menu.title')}
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs max-w-md mx-auto">
            {t('menu.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div key={item.name} className="group bg-white border border-gray-100 food-card-shadow overflow-hidden relative flex flex-col">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-brand-red text-white font-black text-[10px] uppercase px-3 py-1.5 shadow-lg">
                <Flame size={12} />
                <span>{t('section.highlights.badge')}</span>
              </div>

              {/* Food Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black text-brand-charcoal leading-none group-hover:text-brand-red transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-brand-red font-black italic text-lg">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={openOrder}
                    className="md:hidden w-full btn-premium-primary shimmer text-xs py-3"
                  >
                    {t('nav.order')}
                  </button>
                  <Link
                    href="/menu"
                    className="w-full btn-premium-primary shimmer text-xs py-3 text-center flex items-center justify-center translate-y-0"
                  >
                    {t('menu.cta.full')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to full menu */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-6">
            {t('section.order.info')}
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
            <button
              onClick={openOrder}
              className="btn-premium-secondary shimmer flex w-full md:w-auto justify-center items-center gap-3"
            >
              {t('hero.cta.order')}
              <ChevronRight size={18} />
            </button>
            <Link
              href="/menu"
              className="btn-premium-secondary shimmer flex w-full md:w-auto justify-center items-center gap-3"
            >
              {t('menu.cta.full')}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
