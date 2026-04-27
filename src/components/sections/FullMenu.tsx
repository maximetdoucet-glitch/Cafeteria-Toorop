"use client";

import React, { useState } from "react";
import Image from "next/image";
import { menuData } from "@/data/menuData";
import { Flame, Leaf, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useOrder } from "@/context/OrderContext";

const categoryImages: Record<string, string> = {
  friet: "/images/friet-speciaal.png",
  snacks: "/images/snacks.png",
  kapsalon: "/images/kapsalon.png",
  pizza: "/images/pizza-real.png",
  burgers: "/images/burger-real.png",
  schotels: "/images/schotels.png",
  dranken: "/images/drinks.png",
};

export default function FullMenu() {
  const { t } = useLanguage();
  const { openOrder } = useOrder();
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Sticky Category Tabs */}
        <div className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 -mx-4 px-4 mb-16">
          <div className="flex overflow-x-auto gap-1 py-3 no-scrollbar">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  document.getElementById(`cat-${cat.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`whitespace-nowrap px-6 py-2.5 font-black uppercase tracking-widest text-[11px] transition-all flex-shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-brand-red text-white shadow-lg"
                    : "text-gray-400 hover:text-brand-charcoal hover:bg-gray-50"
                }`}
              >
                {t(cat.nameKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-24">
          {menuData.map((category, catIdx) => (
            <div key={category.id} id={`cat-${category.id}`} className="scroll-mt-32">
              {/* Category Hero Banner */}
              <div className={`flex flex-col ${catIdx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-0 mb-12 overflow-hidden bg-brand-charcoal`}>
                {/* Image Side */}
                <div className="relative w-full md:w-2/5 aspect-[16/10] md:aspect-auto min-h-[200px]">
                  <Image
                    src={categoryImages[category.id] || "/images/friet-speciaal.png"}
                    alt={t(category.nameKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                {/* Info Side */}
                <div className="w-full md:w-3/5 flex flex-col justify-center p-8 md:p-12">
                  <span className="text-brand-red font-black uppercase tracking-[0.3em] text-[9px] mb-3">
                    {category.items.length} {t('menu.popular').toLowerCase()}
                  </span>
                  <h3 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                    {t(category.nameKey)}
                  </h3>
                  <p className="text-white/50 text-sm font-medium leading-relaxed max-w-md">
                    {t(`cat.${category.id}.desc`)}
                  </p>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1 px-2 md:px-6">
                {category.items.map((item) => (
                  <div
                    key={item.nameKey}
                    className="group flex items-center justify-between py-5 border-b border-gray-100 hover:border-brand-red/30 transition-all"
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className="font-black text-brand-charcoal text-base group-hover:text-brand-red transition-colors">
                          {t(item.nameKey)}
                        </span>
                        {item.popular && (
                          <span className="flex items-center gap-0.5 bg-brand-red/10 text-brand-red text-[8px] font-black uppercase px-2 py-0.5 tracking-tight rounded-sm">
                            <Flame size={9} />
                            {t('menu.popular')}
                          </span>
                        )}
                        {item.vegetarian && (
                          <span className="flex items-center gap-0.5 bg-green-50 text-green-600 text-[8px] font-black uppercase px-2 py-0.5 tracking-tight rounded-sm">
                            <Leaf size={9} />
                            {t('menu.vegetarian')}
                          </span>
                        )}
                      </div>
                      {item.descriptionKey && (
                        <p className="text-gray-400 text-xs font-medium">
                          {t(item.descriptionKey)}
                        </p>
                      )}
                    </div>
                    {/* Price with dots */}
                    <div className="flex items-baseline gap-2">
                      <span className="hidden md:block flex-1 border-b border-dotted border-gray-200 min-w-[40px]" />
                      <span className="font-black text-brand-charcoal text-base whitespace-nowrap tabular-nums">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="mt-24 text-center">
          <div className="bg-brand-charcoal p-12 md:p-20 relative overflow-hidden rounded-[2.5rem]">
            <div className="absolute inset-0 bg-brand-red opacity-5 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4" />
            <div className="relative z-10">
              <p className="text-white font-black uppercase tracking-widest text-xs mb-2">
                {t('section.order.info')}
              </p>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
                {t('about.cta.title').split(' ').map((word, i) => (
                  word.toLowerCase() === 'ervaar' || word.toLowerCase() === 'experience' || word.toLowerCase() === 'erleben' ? <span key={i} className="text-brand-red">{word}</span> : word + ' '
                ))}
              </h3>
              <button
                onClick={openOrder}
                className="btn-premium-primary shimmer inline-flex items-center gap-3 !px-16 !py-5"
              >
                <ShoppingCart size={20} />
                {t('hero.cta.order')}
              </button>
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-6">
                {t('location.address.title')} Cafetaria Toorop
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
