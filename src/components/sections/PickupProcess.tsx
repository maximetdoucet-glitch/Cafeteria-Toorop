"use client";

import { MousePointerClick, ShoppingBag, Utensils, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useOrder } from "@/context/OrderContext";

export default function PickupProcess() {
  const { t } = useLanguage();
  const { openOrder } = useOrder();

  const steps = [
    {
      icon: <MousePointerClick size={40} />,
      title: t('pickup.step1.title'),
      description: t('pickup.step1.desc'),
    },
    {
      icon: <ShoppingBag size={40} />,
      title: t('pickup.step2.title'),
      description: t('pickup.step2.desc'),
    },
    {
      icon: <Utensils size={40} />,
      title: t('pickup.step3.title'),
      description: t('pickup.step3.desc'),
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-brand-charcoal text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tighter italic">
          {t('pickup.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[20%] left-[20%] right-[20%] h-1 border-t-4 border-dashed border-white/5" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center mb-6 shadow-2xl border-4 border-white/10 group hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight italic">{step.title}</h3>
              <p className="text-white/50 text-sm font-medium leading-relaxed max-w-xs mx-auto uppercase tracking-wide">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 flex justify-center">
           <button
            onClick={openOrder}
            className="btn-premium-primary shimmer flex items-center justify-center gap-3 group"
          >
            {t('hero.cta.order')}
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
