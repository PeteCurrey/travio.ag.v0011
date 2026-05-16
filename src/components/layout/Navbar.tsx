"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="nav-left">
          <Link href="/" className="logo">
            Travio GPS
          </Link>
          <div className="nav-separator" />
          <span className="tagline">Gps Vehicle Trackers</span>
        </div>

        {/* Centre: Nav Links */}
        <div className="nav-centre">
          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMenu('shop')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link href="/shop" className="nav-link">Hardware</Link>
            {activeMenu === 'shop' && (
              <div className="mega-menu shop-menu">
                <div className="mega-menu-content container">
                  <div className="menu-column">
                    <h3>GPS Trackers</h3>
                    <Link href="/shop?category=HARDWIRED">Hardwired</Link>
                    <Link href="/shop?category=PLUG%20&%20PLAY">Plug & Play</Link>
                    <Link href="/shop?category=WIRELESS">Wireless Battery</Link>
                    <Link href="/shop?category=BATTERY%20TERMINAL">Battery Terminal</Link>
                  </div>
                  <div className="featured-product">
                    <div className="product-card-mini">
                      <div className="product-image-placeholder" />
                      <div className="product-info">
                        <h4>Travio One 4G</h4>
                        <p>£89.00</p>
                        <Link href="/products/one" className="shop-now">Shop now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMenu('solutions')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link href="/solutions/car" className="nav-link">Solutions</Link>
            {activeMenu === 'solutions' && (
              <div className="mega-menu solutions-menu">
                <div className="mega-menu-content container">
                  <div className="solutions-grid">
                    {[
                      { name: 'Cars', path: '/solutions/car' },
                      { name: 'Vans', path: '/solutions/van' },
                      { name: 'Motorhomes', path: '/solutions/motorhome' },
                      { name: 'Motorbikes', path: '/solutions/motorbike' },
                      { name: 'Caravans', path: '/solutions/caravan' },
                      { name: 'Plant & Equipment', path: '/solutions/plant-equipment' }
                    ].map((item) => (
                      <Link key={item.name} href={item.path} className="solution-tile">
                        <div className="icon-placeholder" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/demo" className="nav-link">Live Demo</Link>
          <Link href="/how-it-works" className="nav-link">How it works</Link>
        </div>

        {/* Right: Cart & CTA */}
        <div className="nav-right">
          <Link href="/cart" className="cart-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
          <Link href="/shop" className="btn btn-primary nav-cta">
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
