import React from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import './ProductCard.css';

interface ProductCardProps {
  product: Product & {
    badge?: string;
    rating?: number;
    reviews?: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="plp-product-card">
      <div className="product-image-container">
        <div 
          className="image-placeholder" 
          style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} 
        />
        {product.badge && (
          <span className={`card-badge ${product.badge.toLowerCase().replace(/\s+/g, '-').replace(/\+/g, '-plus')}`}>
            {product.badge}
          </span>
        )}
        <button className="wishlist-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>
        <Link href={`/products/${product.id}`} className="btn btn-primary add-to-cart-overlay">
          View Details
        </Link>
      </div>

      <div className="product-card-info">
        <div className="compat-icons">
          {product.compat.slice(0, 3).map(c => (
            <span key={c} className="tiny-label">{c}</span>
          ))}
        </div>
        <h3 className="card-product-name">{product.name}</h3>
        <p className="card-descriptor">{product.tagline}</p>
        
        {product.rating && (
          <div className="card-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < Math.floor(product.rating || 0) ? "#F5A623" : "#D4D4D2"}>
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="review-count">({product.reviews})</span>
          </div>
        )}

        <div className="card-price-row">
          <span className="main-price">£{product.price}.00</span>
          <span className="sub-text">+ from £3.99/mo</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
