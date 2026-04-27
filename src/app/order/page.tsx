"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ShoppingCart, Check, Star, X } from "lucide-react";
import { useOrder, OrderStep } from "@/context/OrderContext";
import { useLanguage } from "@/context/LanguageContext";
import { menuData } from "@/data/menuData";

export default function OrderPage() {
  const {
    closeOrder, step, setStep, userName, setUserName,
    selectedItems, addItem, removeItem, totalPrice, submitOrder, clearOrder
  } = useOrder();
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when step changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [step]);

  const steps: { id: OrderStep; label: string }[] = [
    { id: 'identity', label: t('order.step.identity') },
    { id: 'drinks', label: t('order.step.drinks') },
    { id: 'food', label: t('order.step.food') },
    { id: 'dessert', label: t('order.step.dessert') },
    { id: 'summary', label: t('order.step.confirm') },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === step);

  const handleNext = () => {
    if (step === 'identity') setStep('drinks');
    else if (step === 'drinks') setStep('food');
    else if (step === 'food') setStep('dessert');
    else if (step === 'dessert') setStep('summary');
  };

  const handleBack = () => {
    if (step === 'drinks') setStep('identity');
    else if (step === 'food') setStep('drinks');
    else if (step === 'dessert') setStep('food');
    else if (step === 'summary') setStep('dessert');
  };

  return (
    <div className="w-full h-screen h-[100dvh] bg-white flex flex-col md:flex-row relative overflow-hidden overscroll-none">
      {/* Cancel / Close Button */}
      {step !== 'success' && (
        <button
          onClick={closeOrder}
          aria-label="Annuleer bestelling"
          title="Annuleren"
          className="btn-premium-secondary shimmer !fixed !top-[88px] md:!top-8 !right-2 md:!right-8 !left-auto z-[100] flex items-center gap-2 !px-6 !py-3 !text-[10px] !rounded-xl group"
        >
          <span>Annuleren</span>
          <X size={14} className="group-hover:scale-125 transition-transform" />
        </button>
      )}

      {/* Sidebar - Progress & Information (Desktop) */}
      <div className="hidden md:flex w-64 h-full bg-brand-charcoal p-8 flex-col justify-between text-white border-r border-white/10 shrink-0 md:rounded-r-[2.5rem] z-20">
        <div>
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shadow-lg">
                <ShoppingCart size={20} className="text-white" />
              </div>
              <span className="font-heading font-black text-xl italic uppercase tracking-tighter">Toorop.</span>
            </div>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter">
              {t('order.modal.title')}
            </h2>
          </div>

          <div className="space-y-6">
            {steps.map((s, idx) => (
              <div key={s.id} className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all duration-300 ${idx < currentStepIndex ? "bg-green-500 text-white" :
                    idx === currentStepIndex ? "bg-brand-red text-white scale-110 shadow-lg" :
                      "bg-white/10 text-white/40"
                  }`}>
                  {idx < currentStepIndex ? <Check size={14} /> : idx + 1}
                </div>
                <span className={`text-[10px] uppercase tracking-widest font-black transition-colors ${idx <= currentStepIndex ? "text-white" : "text-white/30"
                  }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] uppercase font-black text-white/40 tracking-widest">{t('order.summary.total')}</span>
            <span className="text-2xl font-black italic text-brand-red">€{totalPrice.toFixed(2)}</span>
          </div>
          <p className="text-[8px] uppercase font-bold text-white/20 tracking-widest">Inclusief BTW • Pickup seulement</p>
        </div>
      </div>

      {/* Main Content Area - Grid restricted height on mobile */}
      <div className="flex-1 flex flex-col h-full min-h-0 relative">
        {/* Mobile Progress Bar - FIXED on mobile */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-brand-charcoal/5 flex items-center justify-between px-6 pb-4 pt-8 shrink-0 shadow-sm z-50">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex flex-col items-center gap-1.5 flex-1 relative">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="absolute top-3.5 left-1/2 w-full h-[2px] bg-brand-charcoal/5 -z-10">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: idx < currentStepIndex ? "100%" : "0%" }}
                    className="h-full bg-green-500"
                  />
                </div>
              )}
              
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-[10px] transition-all duration-300 ${
                idx < currentStepIndex ? "bg-green-500 text-white" :
                idx === currentStepIndex ? "bg-brand-red text-white scale-110 shadow-lg ring-4 ring-brand-red/10" :
                "bg-white border-2 border-brand-charcoal/10 text-brand-charcoal/30"
              }`}>
                {idx < currentStepIndex ? <Check size={12} /> : idx + 1}
              </div>
              <span className={`text-[7px] uppercase font-black transition-colors text-center ${
                idx === currentStepIndex ? "text-brand-red" : 
                idx < currentStepIndex ? "text-brand-charcoal" : "text-brand-charcoal/20"
              }`}>
                {s.label.split(' ')[0]}
              </span>
            </div>
          ))}
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-6 md:p-12 pt-[140px] md:pt-12 pb-[140px] md:pb-8"
        >
          <AnimatePresence mode="wait">
            {step === 'identity' && (
              <motion.div
                key="step-identity"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-md"
              >
                <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-brand-red mb-2 block">Step 01</span>
                <h3 className="text-3xl md:text-4xl font-black text-brand-charcoal uppercase tracking-tighter mb-8">{t('order.step.identity')}</h3>

                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/40 mb-2 block">{t('order.name.label')}</label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder={t('order.name.placeholder')}
                      className="w-full bg-white border-2 border-brand-charcoal/5 px-6 py-4 text-brand-charcoal font-bold focus:border-brand-red transition-colors outline-none text-lg"
                    />
                  </div>

                  <div className="relative py-4 flex items-center">
                    <div className="flex-grow border-t border-brand-charcoal/10"></div>
                    <span className="flex-shrink mx-4 text-[10px] font-black uppercase tracking-widest text-brand-charcoal/20">OR</span>
                    <div className="flex-grow border-t border-brand-charcoal/10"></div>
                  </div>

                  <button
                    onClick={() => { setUserName("Maxime Doucet"); handleNext(); }}
                    className="w-full bg-white border-2 border-brand-charcoal text-brand-charcoal font-black uppercase tracking-widest text-xs py-4 flex items-center justify-center space-x-3 hover:bg-brand-charcoal hover:text-white transition-all shadow-md group"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span>{t('order.google.login')}</span>
                  </button>
                </div>
              </motion.div>
            )}

            {(step === 'drinks' || step === 'food' || step === 'dessert') && (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-brand-red mb-2 block">
                  {step === 'drinks' ? 'Step 02' : step === 'food' ? 'Step 03' : 'Step 04'}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-brand-charcoal uppercase tracking-tighter mb-4">{t(`order.step.${step}`)}</h3>
                <p className="text-xs font-bold text-brand-charcoal/40 uppercase tracking-widest mb-10">Selecteer de items die je wilt toevoegen.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {menuData.filter(cat => {
                    if (step === 'drinks') return cat.id === 'dranken';
                    if (step === 'dessert') return cat.id === 'desserts';
                    if (step === 'food') return ['friet', 'snacks', 'kapsalon', 'pizza', 'burgers', 'schotels'].includes(cat.id);
                    return false;
                  }).map(cat => (
                    <React.Fragment key={cat.id}>
                      <div className="col-span-1 sm:col-span-2 mt-4 first:mt-0">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-red mb-4 py-2 border-b border-brand-charcoal/5">{t(cat.nameKey)}</h4>
                      </div>
                      {cat.items.map(item => {
                        const selected = selectedItems.find(i => i.nameKey === item.nameKey);
                        return (
                          <button
                            key={item.nameKey}
                            onClick={() => addItem(item)}
                            className={`flex items-center justify-between p-5 bg-white border-2 transition-all group ${selected ? "border-brand-red ring-1 ring-brand-red/20 shadow-md" : "border-brand-charcoal/5 hover:border-brand-charcoal/20"
                              }`}
                          >
                            <div className="text-left">
                              <div className="font-black text-sm uppercase tracking-tight text-brand-charcoal group-hover:text-brand-red transition-colors">{t(item.nameKey)}</div>
                              <div className="text-brand-red font-black italic text-xs mt-1">{item.price}</div>
                            </div>
                            {selected ? (
                              <div className="flex items-center space-x-3">
                                <button
                                  onClick={(e) => { e.stopPropagation(); removeItem(item.nameKey); }}
                                  className="w-8 h-8 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all"
                                >
                                  -
                                </button>
                                <span className="font-black text-sm text-brand-charcoal w-4 text-center">{selected.quantity}</span>
                                <button
                                  onClick={(e) => { e.stopPropagation(); addItem(item); }}
                                  className="w-8 h-8 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all"
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-brand-charcoal/5 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all">
                                +
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 'summary' && (
              <motion.div
                key="step-summary"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-xl"
              >
                <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-brand-red mb-2 block">Step 05</span>
                <h3 className="text-4xl font-black text-brand-charcoal uppercase tracking-tighter mb-4">{t('order.step.confirm')}</h3>

                <div className="bg-white border-2 border-brand-charcoal shadow-xl p-8 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-charcoal opacity-[0.02] transform translate-x-16 -translate-y-16 rotate-45"></div>
                  <div className="border-b-2 border-dashed border-brand-charcoal/10 pb-6 mb-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-1">CUSTOMER</h4>
                    <span className="text-xl font-black text-brand-charcoal uppercase">{userName || "Valued Customer"}</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {selectedItems.map(item => (
                      <div key={item.nameKey} className="flex justify-between items-center px-2 py-1">
                        <span className="text-xs font-bold text-brand-charcoal/60 uppercase">
                          <span className="inline-block w-6 font-black text-brand-red">{item.quantity}x</span>
                          {t(item.nameKey)}
                        </span>
                        <span className="text-xs font-black text-brand-charcoal">
                          €{(parseFloat(item.price.replace('€', '').replace(',', '.')) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                    {selectedItems.length === 0 && (
                      <p className="text-center py-4 text-brand-charcoal/40 font-black italic">Geen items geselecteerd...</p>
                    )}
                  </div>

                  <div className="border-t-2 border-brand-charcoal pt-6 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-charcoal/40 block">TOTAAL BEDRAG</span>
                      <span className="text-3xl md:text-4xl font-black text-brand-red italic">€{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1 justify-end">
                        <span className="w-1 h-3 bg-brand-red"></span>
                        <span className="w-1 h-3 bg-brand-red opaity-50"></span>
                        <span className="w-1 h-3 bg-brand-red opacity-20"></span>
                      </div>
                      <span className="text-[8px] font-black text-brand-charcoal/30 uppercase tracking-[0.2em]">CAFETARIA TOOROP NIJMEGEN</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="step-success"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Check size={48} className="text-white" />
                  </motion.div>
                  <div className="absolute -inset-4 border-4 border-green-500/20 rounded-full animate-ping"></div>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-brand-charcoal uppercase tracking-tighter mb-4">{t('order.success.title')}</h3>
                <p className="text-brand-charcoal/60 font-medium max-w-sm mx-auto mb-12 leading-relaxed">
                  {t('order.success.desc')}
                </p>

                <div className="bg-brand-cream border-2 border-brand-charcoal/5 p-8 max-w-md mx-auto relative overflow-hidden group mb-12">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                    <Star size={80} className="text-brand-red fill-current" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-brand-red mb-2 tracking-widest">{t('order.success.review')}</h4>
                  <p className="text-[10px] font-bold text-brand-charcoal/40 uppercase mb-6">{userName}, help ons restaurant groeien!</p>
                  <a
                    href="https://google.com/search?q=Cafetaria+Toorop+Nijmegen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-brand-charcoal text-white px-8 py-4 font-black uppercase tracking-widest text-[10px] hover:bg-brand-red transition-all shadow-lg"
                  >
                    <Star size={14} className="fill-current text-yellow-400" />
                    <span>{t('order.success.review.btn')}</span>
                  </a>
                </div>

                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <a
                    href={`mailto:orders@cafetariatoorop.nl?subject=Nieuwe%20Bestelling%20-%20${encodeURIComponent(userName)}&body=${encodeURIComponent("Bestelling van: " + userName + "\nTotaal: €" + totalPrice.toFixed(2) + "\n\nBekijk het dashboard voor meer details.")}`}
                    className="w-full bg-brand-red text-white px-8 py-5 font-black uppercase tracking-widest text-[11px] hover:bg-brand-charcoal transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    Stuur Order via Email
                  </a>

                  <button
                    onClick={() => { clearOrder(); closeOrder(); }}
                    className="w-full border-4 border-brand-charcoal text-brand-charcoal px-8 py-4 font-black uppercase tracking-widest text-[11px] hover:bg-brand-charcoal hover:text-white transition-all shadow-xl"
                  >
                    TERUG NAAR HOMEPAGE
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Nav - FIXED on mobile */}
        <div className={`shrink-0 fixed bottom-0 left-0 right-0 md:relative p-4 md:p-8 border-t border-brand-charcoal/5 bg-white z-50 transition-transform pb-[calc(1rem+env(safe-area-inset-bottom))] md:pb-8 ${step === 'success' ? 'hidden' : ''}`}>
          <div className="flex justify-between items-center max-w-5xl mx-auto">
            <div className="flex items-center space-x-4">
              {currentStepIndex > 0 && step !== 'success' && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleBack}
                  className="p-3 md:p-4 border-2 border-brand-charcoal/10 rounded-full text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all shadow-sm"
                >
                  <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </motion.button>
              )}
              <div className="hidden sm:block">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-charcoal/30 block mb-1">STAP</span>
                <span className="text-xs font-black uppercase text-brand-charcoal">{steps[currentStepIndex].label}</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-right">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-charcoal/30 block mb-1">{t('order.summary.total')}</span>
                <span className="text-xl font-black italic text-brand-red">€{totalPrice.toFixed(2)}</span>
              </div>
              {step !== 'success' && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={step === 'summary' ? submitOrder : handleNext}
                  disabled={step === 'identity' && !userName || step === 'summary' && selectedItems.length === 0}
                  className={`shimmer inline-flex items-center space-x-2 md:space-x-3 !px-6 !py-3 md:!px-10 md:!py-4 transition-all disabled:opacity-20 disabled:grayscale ${
                    step === 'summary' ? "btn-premium-primary" : "btn-premium-secondary"
                  }`}
                >
                  <span className="text-[10px] md:text-xs">
                    {step === 'identity' && !userName ? "GEEF NAAM OP" :
                      step === 'summary' ? t('order.summary.place') :
                        t('order.category.next')}
                  </span>
                  {step === 'summary' ? <Check size={16} /> : <ChevronRight size={16} />}
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
