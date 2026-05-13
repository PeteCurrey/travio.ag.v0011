import React from 'react';
import './AdminHome.css';

const kpis = [
  { label: 'Total Revenue', value: '£42,890.00', trend: '+12.4%', up: true },
  { label: 'Active Orders', value: '156', trend: '+4', up: true },
  { label: 'Active Subscriptions', value: '12,402', trend: '+342', up: true },
  { label: 'SEO Health', value: '92/100', trend: '+2', up: true },
];

const recentOrders = [
  { id: '#12890', customer: 'John Miller', date: '2 mins ago', total: '£129.00', status: 'PAID' },
  { id: '#12889', customer: 'Sarah Taylor', date: '15 mins ago', total: '£89.00', status: 'PENDING' },
  { id: '#12888', customer: 'David West', date: '1 hour ago', total: '£109.00', status: 'SHIPPED' },
  { id: '#12887', customer: 'Rachel King', date: '3 hours ago', total: '£199.00', status: 'PAID' },
  { id: '#12886', customer: 'Michael Chen', date: '5 hours ago', total: '£69.00', status: 'PAID' },
];

const AdminHome = () => {
  return (
    <div className="admin-home">
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <span className="kpi-label">{kpi.label}</span>
            <div className="kpi-main">
              <span className="kpi-value">{kpi.value}</span>
              <span className={`kpi-trend ${kpi.up ? 'up' : 'down'}`}>{kpi.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="main-chart-card card">
          <div className="card-header">
            <h3>Revenue Overview</h3>
            <div className="timeframe-selector">
              <button className="active">7D</button>
              <button>1M</button>
              <button>1Y</button>
            </div>
          </div>
          <div className="chart-placeholder">
            <div className="chart-bar" style={{ height: '40%' }} />
            <div className="chart-bar" style={{ height: '60%' }} />
            <div className="chart-bar" style={{ height: '45%' }} />
            <div className="chart-bar" style={{ height: '70%' }} />
            <div className="chart-bar" style={{ height: '90%' }} />
            <div className="chart-bar" style={{ height: '80%' }} />
            <div className="chart-bar" style={{ height: '85%' }} />
          </div>
        </div>

        <div className="recent-orders-card card">
          <div className="card-header">
            <h3>Recent Orders</h3>
            <button className="btn-text">View All</button>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>ORDER</th>
                <th>CUSTOMER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td><strong>{order.id}</strong></td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>
                    <span className={`status-pill ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
