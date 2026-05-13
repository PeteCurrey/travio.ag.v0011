import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FilterSidebar from '@/components/shop/FilterSidebar';
import ProductGrid from '@/components/shop/ProductGrid';
import './Shop.css';

const ShopPage = () => {
  return (
    <main className="shop-page">
      <Navbar />
      
      <header className="shop-header">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <span>Shop</span>
          </nav>
          <h1 className="shop-title">GPS TRACKERS</h1>
          <p className="shop-description">
            Professional-grade GPS tracking devices for every vehicle. 
            Filter by vehicle type, installation method, or features to find your perfect match.
          </p>
        </div>
      </header>

      <section className="shop-main">
        <div className="shop-layout-container">
          <FilterSidebar />
          <ProductGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ShopPage;
