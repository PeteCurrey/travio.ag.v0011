"use client";

import React, { useState } from 'react';
import './AdminOrders.css';

const allOrders = [
  { id: '#12890', customer: 'John Miller', email: 'john@example.com', date: 'May 12, 2025', total: '£129.00', status: 'PAID', fulfillment: 'UNFULFILLED' },
  { id: '#12889', customer: 'Sarah Taylor', email: 'sarah.t@work.com', date: 'May 12, 2025', total: '£89.00', status: 'PENDING', fulfillment: 'UNFULFILLED' },
  { id: '#12888', customer: 'David West', email: 'dave@plant-hire.co.uk', date: 'May 11, 2025', total: '£1,402.00', status: 'PAID', fulfillment: 'SHIPPED' },
  { id: '#12887', customer: 'Rachel King', email: 'rachel.k@icloud.com', date: 'May 11, 2025', total: '£199.00', status: 'PAID', fulfillment: 'SHIPPED' },
  { id: '#12886', customer: 'Michael Chen', email: 'm.chen@outlook.com', date: 'May 10, 2025', total: '£69.00', status: 'PAID', fulfillment: 'SHIPPED' },
  { id: '#12885', customer: 'Emma Wilson', email: 'emma.w@gmail.com', date: 'May 10, 2025', total: '£109.00', status: 'REFUNDED', fulfillment: 'CANCELLED' },
  { id: '#12884', customer: 'James Bond', email: '007@mi6.gov.uk', date: 'May 09, 2025', total: '£249.00', status: 'PAID', fulfillment: 'SHIPPED' },
];

const AdminOrders = () => {
  const [filter, setFilter] = useState('ALL');

  return (
    <div className="admin-orders-page">
      <div className="page-header-actions">
        <div className="filter-tabs">
          {['ALL', 'UNFULFILLED', 'UNPAID', 'OPEN', 'CLOSED'].map((tab) => (
            <button 
              key={tab} 
              className={`filter-tab ${filter === tab ? 'active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="header-buttons">
          <button className="btn btn-white-border">Export</button>
          <button className="btn btn-primary">Create Order</button>
        </div>
      </div>

      <div className="orders-table-card card">
        <div className="table-search-bar">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Filter orders..." />
          </div>
          <div className="table-sort">
            <span>Sort: Newest first</span>
          </div>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th className="checkbox-col"><input type="checkbox" /></th>
              <th>ORDER</th>
              <th>DATE</th>
              <th>CUSTOMER</th>
              <th>TOTAL</th>
              <th>PAYMENT</th>
              <th>FULFILLMENT</th>
              <th>ITEMS</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order) => (
              <tr key={order.id}>
                <td><input type="checkbox" /></td>
                <td><strong>{order.id}</strong></td>
                <td>{order.date}</td>
                <td>
                  <div className="customer-cell">
                    <span className="name">{order.customer}</span>
                    <span className="email">{order.email}</span>
                  </div>
                </td>
                <td>{order.total}</td>
                <td>
                  <span className={`status-pill ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <span className={`fulfillment-pill ${order.fulfillment.toLowerCase()}`}>
                    {order.fulfillment}
                  </span>
                </td>
                <td>1 item</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="table-footer">
          <span>Showing {allOrders.length} orders</span>
          <div className="table-pagination">
            <button disabled>Previous</button>
            <button disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
