"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

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
            <Link href="/shop" className="nav-link">Shop</Link>
            {activeMenu === 'shop' && (
              <div className="mega-menu shop-menu">
                <div className="mega-menu-content container">
                  <div className="menu-column">
                    <h3>GPS Trackers</h3>
                    <Link href="/shop/hardwired">Hardwired</Link>
                    <Link href="/shop/obd">OBD Plug-In</Link>
                    <Link href="/shop/magnetic">Magnetic Battery</Link>
                    <Link href="/shop/insurance">Insurance-Approved</Link>
                  </div>
                  <div className="featured-product">
                    <div className="product-card-mini">
                      <div className="product-image-placeholder" />
                      <div className="product-info">
                        <h4>Travio Pro 4G</h4>
                        <p>£129.00</p>
                        <Link href="/products/pro-4g" className="shop-now">Shop now</Link>
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
            <Link href="/solutions" className="nav-link">Solutions</Link>
            {activeMenu === 'solutions' && (
              <div className="mega-menu solutions-menu">
                <div className="mega-menu-content container">
                  <div className="solutions-grid">
                    {['Car', 'Van', 'Motorhome', 'Motorbike', 'Caravan', 'Plant & Equipment'].map((item) => (
                      <Link key={item} href={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`} className="solution-tile">
                        <div className="icon-placeholder" />
                        <span>{item}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/how-it-works" className="nav-link">How it works</Link>
          <Link href="/support" className="nav-link">Support</Link>
        </div>

        {/* Right: Cart & CTA */}
        <div className="nav-right">
          <div className="cart-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="cart-badge" />
          </div>
          <Link href="/shop" className="btn btn-primary nav-cta">
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
