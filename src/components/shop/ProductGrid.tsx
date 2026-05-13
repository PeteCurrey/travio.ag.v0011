"use client";

import React, { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import './ProductGrid.css';

const shopProducts = products.map(p => ({
  ...p,
  rating: 4.5 + Math.random() * 0.5,
  reviews: Math.floor(Math.random() * 200) + 20,
  badge: p.id === 'pro' ? 'BEST SELLER' : p.id === 'one' ? 'MOST POPULAR' : p.id === 'silent' ? 'WIRELESS' : undefined
}));

const ProductGrid = () => {
  const [cols, setCols] = useState(3);

  return (
    <div className="product-grid-container">
      <div className="grid-sort-bar">
        <span className="results-count">Showing {shopProducts.length} of {shopProducts.length} products</span>
        <div className="sort-actions">
          <div className="view-toggle">
            <button className={cols === 2 ? 'active' : ''} onClick={() => setCols(2)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="18" />
                <rect x="14" y="3" width="7" height="18" />
              </svg>
            </button>
            <button className={cols === 3 ? 'active' : ''} onClick={() => setCols(3)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="5" height="18" />
                <rect x="9.5" y="3" width="5" height="18" />
                <rect x="17" y="3" width="5" height="18" />
              </svg>
            </button>
          </div>
          <div className="sort-dropdown">
            <span>Sort by:</span>
            <select>
              <option>Best Sellers</option>
              <option>Price Low-High</option>
              <option>Price High-Low</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className={`shop-grid cols-${cols}`}>
        {shopProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="pagination">
        <button className="page-nav prev">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="page-num active">1</button>
        <button className="page-num">2</button>
        <button className="page-num">3</button>
        <button className="page-nav next">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
