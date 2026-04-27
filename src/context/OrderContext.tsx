"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '@/data/menuData';

export type OrderStep = 'identity' | 'drinks' | 'food' | 'dessert' | 'summary' | 'success';

interface OrderItem extends MenuItem {
  quantity: number;
}

interface OrderContextType {
  openOrder: () => void;
  closeOrder: () => void;
  step: OrderStep;
  setStep: (step: OrderStep) => void;
  userName: string;
  setUserName: (name: string) => void;
  selectedItems: OrderItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemNameKey: string) => void;
  clearOrder: () => void;
  submitOrder: () => void;
  totalPrice: number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

import { useRouter } from 'next/navigation';

export function OrderProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [step, setStep] = useState<OrderStep>('identity');
  const [userName, setUserName] = useState('');
  const [selectedItems, setSelectedItems] = useState<OrderItem[]>([]);

  const openOrder = () => {
    setStep('identity');
    router.push('/order');
  };

  const closeOrder = () => {
    router.push('/');
  };

  const addItem = (item: MenuItem) => {
    setSelectedItems(prev => {
      const existing = prev.find(i => i.nameKey === item.nameKey);
      if (existing) {
        return prev.map(i => i.nameKey === item.nameKey ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (itemNameKey: string) => {
    setSelectedItems(prev => {
      const existing = prev.find(i => i.nameKey === itemNameKey);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.nameKey === itemNameKey ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.nameKey !== itemNameKey);
    });
  };

  const clearOrder = () => {
    setSelectedItems([]);
    setUserName('');
    setStep('identity');
  };

  const totalPrice = selectedItems.reduce((acc, item) => {
    const priceNum = parseFloat(item.price.replace('€', '').replace(',', '.'));
    return acc + (priceNum * item.quantity);
  }, 0);

  const submitOrder = () => {
    const orderData = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      userName,
      items: selectedItems,
      totalPrice,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Save to localStorage for the dashboard
    const existingOrders = JSON.parse(localStorage.getItem('cafeteria_orders') || '[]');
    localStorage.setItem('cafeteria_orders', JSON.stringify([orderData, ...existingOrders]));

    // Broadcast the new order to other tabs (dashboard)
    if (typeof window !== 'undefined' && window.BroadcastChannel) {
      const channel = new BroadcastChannel('order_channel');
      channel.postMessage({ type: 'NEW_ORDER', order: orderData });
    }

    setStep('success');
  };

  return (
    <OrderContext.Provider value={{
      openOrder, closeOrder,
      step, setStep,
      userName, setUserName,
      selectedItems, addItem, removeItem,
      clearOrder, submitOrder,
      totalPrice
    }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}
