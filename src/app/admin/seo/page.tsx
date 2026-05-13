"use client";

import React, { useState } from 'react';
import './AdminSEO.css';

const seoPages = [
  { path: '/', title: 'Travio GPS | Premium Vehicle Tracking & Theft Protection', health: 98, issues: 0, status: 'SYNCED' },
  { path: '/shop', title: 'Shop GPS Trackers | Travio GPS', health: 85, issues: 2, status: 'SYNCED' },
  { path: '/products/pro-4g', title: 'Travio Pro 4G Hardwired Tracker', health: 92, issues: 1, status: 'PENDING' },
  { path: '/solutions/car', title: 'Car GPS Tracking Solutions | Travio', health: 76, issues: 4, status: 'SYNCED' },
  { path: '/solutions/van', title: 'Van GPS Tracking & Tool Protection', health: 88, issues: 1, status: 'SYNCED' },
];

const AdminSEO = () => {
  return (
    <div className="admin-seo-page">
      <div className="seo-stats-grid">
        <div className="stat-card card">
          <span className="label">OVERALL SEO SCORE</span>
          <div className="score-ring">
            <span className="score">92</span>
          </div>
        </div>
        <div className="stat-card card">
          <span className="label">GOOGLE MERCHANT SYNC</span>
          <div className="sync-status">
            <span className="pulse-dot green" />
            <span className="status-text">Connected & Healthy</span>
          </div>
          <p className="sub">Last sync: 12 mins ago</p>
          <button className="btn btn-white-border small">Sync Now</button>
        </div>
        <div className="stat-card card">
          <span className="label">INDEXED PAGES</span>
          <span className="big-num">42</span>
          <p className="sub">2 pending indexing</p>
        </div>
      </div>

      <div className="seo-table-card card">
        <div className="card-header">
          <h3>Page-Level SEO</h3>
          <button className="btn btn-primary small">Bulk Action</button>
        </div>
        <table className="admin-table">
          <thead>
            <tr>
              <th>PAGE PATH</th>
              <th>SEO TITLE</th>
              <th>HEALTH</th>
              <th>ISSUES</th>
              <th>GMC SYNC</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {seoPages.map((page) => (
              <tr key={page.path}>
                <td><code>{page.path}</code></td>
                <td className="title-cell">{page.title}</td>
                <td>
                  <div className="health-bar-bg">
                    <div className="health-bar-fill" style={{ width: `${page.health}%`, background: page.health > 80 ? '#10B981' : '#F59E0B' }} />
                  </div>
                </td>
                <td>
                  <span className={page.issues > 0 ? 'issue-count warning' : 'issue-count'}>
                    {page.issues} issues
                  </span>
                </td>
                <td>
                  <span className={`sync-pill ${page.status.toLowerCase()}`}>{page.status}</span>
                </td>
                <td><button className="btn-text">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSEO;
