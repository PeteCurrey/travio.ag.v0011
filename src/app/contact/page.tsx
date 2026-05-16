"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white text-travio-black">
      <Navbar />

      <section className="pt-32 pb-24 bg-travio-off-white">
        <div className="container animate-fade-up">
           <span className="text-travio-accent text-[12px] font-body font-medium tracking-[0.16em] uppercase mb-4 block">
              GET IN TOUCH
           </span>
           <h1 className="text-[56px] md:text-[88px] font-display font-black text-travio-black uppercase leading-[0.9] mb-8">
              CONTACT US
           </h1>
           <p className="text-travio-mid text-[18px] font-body max-w-xl">
              Have a question about fitment, fleet tracking, or your account? Our UK support team is here to help.
           </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-5 space-y-12">
                 <div className="space-y-8">
                    <div className="flex gap-6">
                       <div className="w-12 h-12 bg-travio-off-white flex items-center justify-center text-travio-accent rounded-[2px]">
                          <Phone size={24} />
                       </div>
                       <div>
                          <h4 className="text-[12px] font-body font-bold text-travio-mid uppercase tracking-widest mb-1">Call Us</h4>
                          <div className="text-[20px] font-display font-black text-travio-black uppercase">01234 567 890</div>
                          <div className="text-[13px] font-body text-travio-mid mt-1">Mon-Fri: 8am - 6pm | Sat: 9am - 4pm</div>
                       </div>
                    </div>

                    <div className="flex gap-6">
                       <div className="w-12 h-12 bg-travio-off-white flex items-center justify-center text-travio-accent rounded-[2px]">
                          <Mail size={24} />
                       </div>
                       <div>
                          <h4 className="text-[12px] font-body font-bold text-travio-mid uppercase tracking-widest mb-1">Email Support</h4>
                          <div className="text-[20px] font-display font-black text-travio-black uppercase">support@traviogps.com</div>
                          <div className="text-[13px] font-body text-travio-mid mt-1">Response within 2 hours during office hours.</div>
                       </div>
                    </div>

                    <div className="flex gap-6">
                       <div className="w-12 h-12 bg-travio-off-white flex items-center justify-center text-travio-accent rounded-[2px]">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <h4 className="text-[12px] font-body font-bold text-travio-mid uppercase tracking-widest mb-1">UK Headquarters</h4>
                          <div className="text-[20px] font-display font-black text-travio-black uppercase">Innovation House, Manchester, UK</div>
                       </div>
                    </div>
                 </div>

                 <div className="p-10 bg-travio-black text-white space-y-6" style={{ borderRadius: '2px' }}>
                    <h3 className="text-[28px] font-display font-black uppercase">Live Chat</h3>
                    <p className="text-[15px] font-body text-white/70 leading-relaxed">
                       Need an instant answer? Chat with a technician right now in the app or on this website.
                    </p>
                    <button className="bg-travio-accent hover:bg-travio-accent-dk text-white h-[48px] px-8 text-[13px] font-body font-bold uppercase tracking-widest transition-all rounded-[2px] flex items-center gap-2">
                       <MessageSquare size={18} />
                       Start Chat
                    </button>
                 </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                 <form className="bg-travio-off-white p-12 space-y-8" style={{ borderRadius: '2px' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[11px] font-body font-bold text-travio-black uppercase tracking-widest">Full Name</label>
                          <input type="text" className="w-full h-[52px] bg-white border border-travio-subtle px-4 outline-none focus:border-travio-black transition-all" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[11px] font-body font-bold text-travio-black uppercase tracking-widest">Email Address</label>
                          <input type="email" className="w-full h-[52px] bg-white border border-travio-subtle px-4 outline-none focus:border-travio-black transition-all" />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[11px] font-body font-bold text-travio-black uppercase tracking-widest">Subject</label>
                       <select className="w-full h-[52px] bg-white border border-travio-subtle px-4 outline-none focus:border-travio-black transition-all appearance-none">
                          <option>Sales Inquiry</option>
                          <option>Technical Support</option>
                          <option>Fleet / Trade</option>
                          <option>Press</option>
                       </select>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[11px] font-body font-bold text-travio-black uppercase tracking-widest">Message</label>
                       <textarea className="w-full h-[200px] bg-white border border-travio-subtle p-4 outline-none focus:border-travio-black transition-all resize-none"></textarea>
                    </div>

                    <button className="w-full h-[56px] bg-travio-black text-white text-[14px] font-body font-bold uppercase tracking-widest hover:bg-travio-charcoal transition-all rounded-[2px]">
                       Send Message
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
