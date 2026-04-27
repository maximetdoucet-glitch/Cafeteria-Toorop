"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, User, ShoppingBag, Bell, Trash2, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Order {
  id: string;
  userName: string;
  items: any[];
  totalPrice: number;
  timestamp: string;
  status: 'pending' | 'preparing' | 'done';
}

export default function KitchenDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const { t } = useLanguage();
  const [lastNotification, setLastNotification] = useState<string | null>(null);

  useEffect(() => {
    // Initial load
    const saved = localStorage.getItem('cafeteria_orders');
    if (saved) setOrders(JSON.parse(saved));

    // Listen for new orders via BroadcastChannel
    const channel = new BroadcastChannel('order_channel');
    channel.onmessage = (event) => {
      if (event.data.type === 'NEW_ORDER') {
        const newOrder = event.data.order;
        setOrders(prev => [newOrder, ...prev]);
        setLastNotification(newOrder.userName);
        // Play notification sound (simulated with a visual alert)
        setTimeout(() => setLastNotification(null), 5000);
      }
    };

    return () => channel.close();
  }, []);

  const updateStatus = (id: string, status: Order['status']) => {
    const updated = orders.map(o => o.id === id ? { ...o, status } : o);
    setOrders(updated);
    localStorage.setItem('cafeteria_orders', JSON.stringify(updated));
  };

  const deleteOrder = (id: string) => {
    const updated = orders.filter(o => o.id !== id);
    setOrders(updated);
    localStorage.setItem('cafeteria_orders', JSON.stringify(updated));
  };

  const clearAllDone = () => {
    const updated = orders.filter(o => o.status !== 'done');
    setOrders(updated);
    localStorage.setItem('cafeteria_orders', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-white p-6 md:p-12 font-body">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(227,34,34,0.3)] animate-pulse">
            <Bell size={32} className="text-white" />
          </div>
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-2">{t('order.dashboard.title')}</h1>
            <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.3em]">Kitchen Management System • v1.0</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
           <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl flex items-center space-x-4">
              <div className="text-right">
                 <div className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">LIVE STATUS</div>
                 <div className="text-xs font-black uppercase text-green-500 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                    CONNECTED
                 </div>
              </div>
           </div>
           <button 
            onClick={clearAllDone}
            className="px-8 py-5 bg-white/10 hover:bg-brand-red transition-all font-black uppercase tracking-widest text-xs rounded-xl"
           >
             Clear Completed
           </button>
        </div>
      </div>

      {/* Incoming Order Notification Alert */}
      <AnimatePresence>
        {lastNotification && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[200] bg-brand-red text-white px-10 py-6 rounded-2xl shadow-2xl flex items-center space-x-6 border-4 border-white/10"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
               <ShoppingBag size={24} className="text-brand-red animate-bounce" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{t('order.dashboard.incoming')}</div>
              <div className="text-2xl font-black uppercase tracking-tighter">{lastNotification} wants to eat!</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {orders.map((order) => (
            <motion.div 
              key={order.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`relative bg-white text-brand-charcoal rounded-3xl overflow-hidden shadow-2xl border-l-[12px] ${
                order.status === 'pending' ? "border-brand-red" : 
                order.status === 'preparing' ? "border-blue-500" : 
                "border-green-500"
              }`}
            >
              <div className="p-8">
                {/* Order Meta */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-black uppercase text-brand-charcoal/30 tracking-widest mb-1 block">#{order.id}</span>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{order.userName || "Guest"}</h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                     order.status === 'pending' ? "bg-red-100 text-brand-red" : 
                     order.status === 'preparing' ? "bg-blue-100 text-blue-600" : 
                     "bg-green-100 text-green-600"
                  }`}>
                    {order.status}
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-4 mb-8">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-brand-cream/50 p-3 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 rounded-lg bg-brand-charcoal text-white flex items-center justify-center font-black text-xs">{item.quantity}</span>
                        <span className="text-[10px] font-black uppercase tracking-tight opacity-70 truncate max-w-[120px]">{t(item.nameKey)}</span>
                      </div>
                      <Check size={14} className="text-green-500" />
                    </div>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col space-y-3 pt-6 border-t border-brand-charcoal/5">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-[8px] font-black uppercase text-brand-charcoal/20 tracking-widest">PLACED AT</span>
                      <span className="text-[8px] font-black uppercase text-brand-charcoal/60">{new Date(order.timestamp).toLocaleTimeString()}</span>
                   </div>

                   <div className="grid grid-cols-2 gap-3">
                      {order.status === 'pending' && (
                        <button 
                          onClick={() => updateStatus(order.id, 'preparing')}
                          className="col-span-2 bg-brand-charcoal text-white py-4 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-black transition-all flex items-center justify-center gap-2"
                        >
                          <Clock size={14} /> Start order
                        </button>
                      )}
                      {order.status === 'preparing' && (
                        <button 
                          onClick={() => updateStatus(order.id, 'done')}
                          className="col-span-2 bg-green-500 text-white py-4 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                        >
                          <Check size={14} /> Mark ready
                        </button>
                      )}
                      {order.status === 'done' && (
                        <button 
                          onClick={() => deleteOrder(order.id)}
                          className="col-span-2 bg-brand-charcoal text-white py-4 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-red-600 transition-all flex items-center justify-center gap-2"
                        >
                          <Trash2 size={14} /> Archive
                        </button>
                      )}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {orders.length === 0 && (
          <div className="col-span-full py-32 text-center border-4 border-dashed border-white/5 rounded-[40px]">
             <ShoppingBag size={64} className="mx-auto text-white/10 mb-8" />
             <h2 className="text-3xl font-black uppercase text-white/20 tracking-tighter">{t('order.dashboard.empty')}</h2>
          </div>
        )}
      </div>

      {/* Secret link back to home */}
      <div className="mt-24 pt-12 border-t border-white/5 text-center">
         <a href="/" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-brand-red transition-colors">BACK TO STOREFRONT</a>
      </div>
    </div>
  );
}
