"use client";

import React, { useState } from 'react';
import './FilterSidebar.css';

const filterGroups = [
  {
    title: 'VEHICLE TYPE',
    options: ['Car', 'Van', 'Motorhome', 'Motorbike', 'Caravan', 'Plant & Equipment']
  },
  {
    title: 'INSTALLATION',
    options: ['Hardwired', 'OBD Plug-In', 'Magnetic Battery', 'Professional Fit Required']
  },
  {
    title: 'FEATURES',
    options: ['Real-Time 4G', 'Thatcham Approved', 'Insurance Recognised', 'Motion Alerts', 'Geofencing', 'Journey Playback']
  },
  {
    title: 'SUBSCRIPTION',
    options: ['No Subscription', 'Annual Plan', 'Monthly Plan']
  }
];

const FilterSidebar = () => {
  const [openGroups, setOpenGroups] = useState<string[]>(['VEHICLE TYPE', 'INSTALLATION']);

  const toggleGroup = (title: string) => {
    setOpenGroups(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <aside className="filter-sidebar">
      {filterGroups.map((group) => (
        <div key={group.title} className="filter-group">
          <button 
            className="group-header" 
            onClick={() => toggleGroup(group.title)}
          >
            <span>{group.title}</span>
            <svg 
              className={openGroups.includes(group.title) ? 'rotate' : ''} 
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
          
          <div className={`group-content ${openGroups.includes(group.title) ? 'open' : ''}`}>
            {group.options.map((option) => (
              <label key={option} className="filter-checkbox">
                <input type="checkbox" />
                <span className="checkbox-custom" />
                <span className="label-text">{option}</span>
                <span className="count">(0)</span>
              </label>
            ))}
          </div>
          <div className="group-divider" />
        </div>
      ))}

      <div className="filter-group">
        <div className="group-header">
          <span>PRICE RANGE</span>
        </div>
        <div className="price-slider-placeholder">
          <div className="slider-track" />
          <div className="slider-labels">
            <span>£0</span>
            <span>£500</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
