"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './AdminLayout.css';

const navItems = [
  { label: 'Dashboard', path: '/admin', icon: '🏠' },
  { label: 'Orders', path: '/admin/orders', icon: '🛍' },
  { label: 'Products', path: '/admin/products', icon: '📦' },
  { label: 'Customers', path: '/admin/customers', icon: '👤' },
  { label: 'SEO Manager', path: '/admin/seo', icon: '🔍' },
  { label: 'Marketing', path: '/admin/marketing', icon: '📣' },
  { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <span className="brand-name">Travio GPS</span>
          <span className="brand-tag">Admin</span>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">Store</div>
          {navItems.slice(0, 4).map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`nav-item ${pathname === item.path ? 'active' : ''}`}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
          
          <div className="nav-section">Marketing</div>
          {navItems.slice(4, 6).map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`nav-item ${pathname === item.path ? 'active' : ''}`}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}

          <div className="nav-section">System</div>
          {navItems.slice(6).map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`nav-item ${pathname === item.path ? 'active' : ''}`}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Area */}
      <div className="admin-main">
        <header className="admin-topbar">
          <div className="topbar-left">
            <h1 className="page-title">
              {navItems.find(n => n.path === pathname)?.label || 'Admin'}
            </h1>
          </div>
          <div className="topbar-right">
            <div className="notification-bell">🔔</div>
            <div className="admin-avatar" />
          </div>
        </header>
        
        <main className="admin-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
