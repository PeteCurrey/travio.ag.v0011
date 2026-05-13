"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import './FeaturedProducts.css';

const products = [
  { id: 1, name: 'Travio Pro 4G', descriptor: 'Hardwired 4G Tracker — Car & Van', price: '£89.00', sub: 'from £4.99/mo', badge: 'Best Seller' },
  { id: 2, name: 'Travio One', descriptor: 'OBD Plug-In Tracker', price: '£69.00', sub: 'from £4.99/mo', badge: 'New' },
  { id: 3, name: 'Travio Silent', descriptor: 'Battery Magnetic Tracker', price: '£109.00', sub: 'from £4.99/mo', badge: 'Best Seller' },
  { id: 4, name: 'Travio Guard', descriptor: 'Thatcham S5+ Approved', price: '£199.00', sub: 'from £9.99/mo', badge: 'Thatcham Approved' },
  { id: 5, name: 'Travio Fleet', descriptor: 'Multi-Vehicle Management', price: '£149.00', sub: 'from £12.99/mo', badge: 'Business' },
];

const FeaturedProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="featured-products section">
      <div className="container">
        <div className="featured-header">
          <div className="header-left">
            <span className="eyebrow small-label">Most Popular</span>
            <h2>Tracker range</h2>
          </div>
          <Link href="/shop" className="view-all-link">
            View All Products <span>→</span>
          </Link>
        </div>

        <div className="carousel-container">
          <div className="carousel-track" ref={scrollRef}>
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-area">
                  <div className="product-image-placeholder" />
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                </div>
                <div className="product-info-area">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-descriptor">{product.descriptor}</p>
                  <div className="product-compat">
                    {/* Tiny vehicle icons placeholders */}
                    <div className="compat-icon" />
                    <div className="compat-icon" />
                    <div className="compat-icon" />
                  </div>
                  <div className="product-price-row">
                    <span className="price">{product.price}</span>
                    <span className="subscription">{product.sub}</span>
                  </div>
                  <button className="btn btn-primary product-cta">Add to cart</button>
                  <Link href={`/products/${product.id}`} className="view-details">
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-nav prev" onClick={() => scroll('left')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="carousel-nav next" onClick={() => scroll('right')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
