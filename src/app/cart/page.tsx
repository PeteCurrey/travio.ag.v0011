"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Truck, Lock } from 'lucide-react';
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <main className="min-h-screen bg-white text-travio-black">
      <Navbar />

      <section className="pt-32 pb-24 bg-travio-off-white">
        <div className="container animate-fade-up">
           <h1 className="text-[56px] md:text-[88px] font-display font-black text-travio-black uppercase leading-[0.9] mb-4">
              YOUR CART
           </h1>
           <div className="text-travio-mid text-[18px] font-body uppercase tracking-wider">
             {totalItems} {totalItems === 1 ? 'Item' : 'Items'} Selected
           </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
          {cart.length === 0 ? (
            <div className="text-center py-24 space-y-8">
               <div className="text-travio-mid text-[20px] font-body">Your cart is currently empty.</div>
               <Link href="/shop" className="inline-block bg-travio-black text-white px-10 py-4 text-[14px] font-body font-bold uppercase tracking-widest rounded-[2px] hover:bg-travio-charcoal transition-all">
                  Return to Shop
               </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* CART LIST */}
              <div className="lg:col-span-8 space-y-8">
                <div className="hidden md:grid grid-cols-12 pb-4 border-b border-travio-subtle text-[11px] font-body font-bold text-travio-mid uppercase tracking-widest">
                   <div className="col-span-6">Product</div>
                   <div className="col-span-2 text-center">Price</div>
                   <div className="col-span-2 text-center">Quantity</div>
                   <div className="col-span-2 text-right">Total</div>
                </div>

                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.planIndex}`} className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 pb-8 border-b border-travio-subtle">
                    {/* Product Info */}
                    <div className="col-span-6 flex gap-6">
                       <div className="w-24 h-24 bg-travio-off-white border border-travio-subtle flex items-center justify-center p-4 rounded-[2px]">
                          <div className="w-12 h-8 bg-travio-charcoal/10 border border-travio-charcoal/20"></div>
                       </div>
                       <div className="space-y-1">
                          <h3 className="text-[20px] font-display font-black text-travio-black uppercase leading-tight">
                            {item.product.name}
                          </h3>
                          <div className="text-[12px] font-body text-travio-accent uppercase tracking-wider font-medium">
                            {item.product.subscriptionPlans?.[item.planIndex || 0].name} Plan
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="flex items-center gap-1 text-red-500 text-[11px] font-body font-bold uppercase tracking-widest pt-2 hover:text-red-700 transition-all"
                          >
                            <Trash2 size={12} />
                            Remove
                          </button>
                       </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center">
                       <div className="text-[16px] font-body font-semibold text-travio-black">£{item.product.price.toFixed(2)}</div>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2 flex justify-center">
                       <div className="flex border border-travio-subtle h-[40px] w-[100px] rounded-[2px]">
                          <button 
                            onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="flex-1 flex items-center justify-center hover:bg-travio-off-white"
                          >
                             <Minus size={12} />
                          </button>
                          <div className="flex-1 flex items-center justify-center font-body text-[14px] font-bold">
                             {item.quantity}
                          </div>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="flex-1 flex items-center justify-center hover:bg-travio-off-white"
                          >
                             <Plus size={12} />
                          </button>
                       </div>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-2 text-right">
                       <div className="text-[18px] font-body font-bold text-travio-black">£{(item.product.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                ))}

                <div className="pt-4">
                   <Link href="/shop" className="flex items-center gap-2 text-travio-accent text-[13px] font-body font-bold uppercase tracking-widest hover:underline">
                      <ArrowLeft size={16} />
                      Continue Shopping
                   </Link>
                </div>
              </div>

              {/* SUMMARY */}
              <div className="lg:col-span-4">
                 <div className="bg-travio-off-white p-10 space-y-8" style={{ borderRadius: '2px' }}>
                    <h3 className="text-[28px] font-display font-black text-travio-black uppercase">Order Summary</h3>
                    
                    <div className="space-y-4 pb-8 border-b border-travio-subtle">
                       <div className="flex justify-between text-[14px] font-body text-travio-mid uppercase">
                          <span>Subtotal</span>
                          <span className="text-travio-black font-bold">£{totalPrice.toFixed(2)}</span>
                       </div>
                       <div className="flex justify-between text-[14px] font-body text-travio-mid uppercase">
                          <span>Shipping</span>
                          <span className="text-travio-accent font-bold uppercase tracking-widest">Free</span>
                       </div>
                       <div className="flex justify-between text-[14px] font-body text-travio-mid uppercase">
                          <span>VAT (20%)</span>
                          <span className="text-travio-black font-bold">Included</span>
                       </div>
                    </div>

                    <div className="flex justify-between items-baseline pt-4">
                       <div className="text-[14px] font-body font-bold text-travio-black uppercase tracking-widest">Total</div>
                       <div className="text-[36px] font-body font-black text-travio-black leading-none">£{totalPrice.toFixed(2)}</div>
                    </div>

                    <button className="w-full h-[64px] bg-travio-accent hover:bg-travio-accent-dk text-white text-[14px] font-body font-bold uppercase tracking-[0.1em] transition-all rounded-[2px] flex items-center justify-center gap-2">
                       <Lock size={18} />
                       Checkout Securely
                    </button>

                    <div className="space-y-4 pt-6">
                       <div className="flex items-center gap-3 text-[12px] font-body text-travio-mid uppercase tracking-wide">
                          <ShieldCheck size={16} className="text-travio-accent" />
                          <span>2-Year UK Warranty Included</span>
                       </div>
                       <div className="flex items-center gap-3 text-[12px] font-body text-travio-mid uppercase tracking-wide">
                          <Truck size={16} className="text-travio-accent" />
                          <span>Fast & Free UK Delivery</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CartPage;
