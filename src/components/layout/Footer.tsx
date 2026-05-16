import React from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">Travio GPS</Link>
          </div>
          <p className="footer-tagline">
            Professional vehicle security and real-time tracking solutions for the UK.
          </p>
          
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Products</h4>
              <Link href="/shop?category=HARDWIRED">Hardwired Trackers</Link>
              <Link href="/shop?category=WIRELESS">Wireless Trackers</Link>
              <Link href="/shop?category=BATTERY%20TERMINAL">Battery Trackers</Link>
              <Link href="/shop?category=PLUG%20&%20PLAY">Plug & Play</Link>
              <Link href="/shop">All Products</Link>
            </div>
            <div className="footer-column">
              <h4>Solutions</h4>
              <Link href="/solutions/car">Car Trackers</Link>
              <Link href="/solutions/van">Van Trackers</Link>
              <Link href="/solutions/motorhome">Motorhome Trackers</Link>
              <Link href="/solutions/motorbike">Motorbike Trackers</Link>
              <Link href="/solutions/caravan">Caravan Trackers</Link>
              <Link href="/solutions/plant-equipment">Plant Trackers</Link>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <Link href="/installation">Installation Guides</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/track-order">Track My Order</Link>
              <Link href="/warranty">Warranty</Link>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <Link href="/about">About Travio</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/trade">Trade & Fleet</Link>
              <Link href="/partner">Partner Programme</Link>
              <Link href="/press">Press</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="bottom-content">
            <span className="copyright">© 2025 Travio GPS Ltd. All rights reserved.</span>
            <div className="legal-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/cookies">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
