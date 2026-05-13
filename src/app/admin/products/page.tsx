"use client";

import React, { useState } from 'react';
import './AdminProducts.css';

const productList = [
  { id: 1, name: 'CHAVIO PRO 4G', type: 'Hardwired', price: '£129.00', inventory: 142, status: 'ACTIVE' },
  { id: 2, name: 'CHAVIO ONE', type: 'OBD', price: '£89.00', inventory: 68, status: 'ACTIVE' },
  { id: 3, name: 'CHAVIO SILENT', type: 'Magnetic', price: '£109.00', inventory: 0, status: 'OUT OF STOCK' },
  { id: 4, name: 'CHAVIO GUARD', type: 'Thatcham', price: '£199.00', inventory: 24, status: 'ACTIVE' },
  { id: 5, name: 'CHAVIO FLEET', type: 'Professional', price: '£149.00', inventory: 56, status: 'ACTIVE' },
];

const AdminProducts = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="admin-products-page">
      <div className="page-header-actions">
        <div className="search-box">
          <input type="text" placeholder="Search products..." />
        </div>
        <button className="btn btn-primary" onClick={() => setIsDrawerOpen(true)}>+ Add Product</button>
      </div>

      <div className="products-table-card card">
        <table className="admin-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>PRODUCT</th>
              <th>STATUS</th>
              <th>INVENTORY</th>
              <th>TYPE</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product.id}>
                <td><input type="checkbox" /></td>
                <td className="product-cell">
                  <div className="product-img-small" />
                  <strong>{product.name}</strong>
                </td>
                <td>
                  <span className={`status-pill ${product.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {product.status}
                  </span>
                </td>
                <td>
                  <span className={product.inventory === 0 ? 'text-danger' : ''}>
                    {product.inventory} in stock
                  </span>
                </td>
                <td>{product.type}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Slide-over Drawer Mockup */}
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}>
          <div className="drawer" onClick={(e) => e.stopPropagation()}>
            <header className="drawer-header">
              <h2>Add Product</h2>
              <button className="close-btn" onClick={() => setIsDrawerOpen(false)}>×</button>
            </header>
            <div className="drawer-content">
              <div className="form-group">
                <label>Title</label>
                <input type="text" placeholder="e.g. CHAVIO PRO 4G" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea rows={4} placeholder="Product details..."></textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price</label>
                  <input type="text" placeholder="£0.00" />
                </div>
                <div className="form-group">
                  <label>Inventory</label>
                  <input type="number" placeholder="0" />
                </div>
              </div>
            </div>
            <footer className="drawer-footer">
              <button className="btn btn-white-border" onClick={() => setIsDrawerOpen(false)}>Cancel</button>
              <button className="btn btn-primary">Save Product</button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
