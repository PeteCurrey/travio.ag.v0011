'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, Product } from '@/data/products';
import { ChevronRight, Filter, SlidersHorizontal, Check, Shield } from 'lucide-react';
import Image from 'next/image';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [compareList, setCompareList] = useState<Product[]>([]);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(p => 
    selectedCategory === 'All' ? true : p.category === selectedCategory
  );

  const toggleCompare = (product: Product) => {
    if (compareList.find(p => p.id === product.id)) {
      setCompareList(compareList.filter(p => p.id !== product.id));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, product]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-light mb-4">Hardware Ecosystem</h1>
            <p className="text-white/60 max-w-2xl text-lg">
              Enterprise-grade tracking devices, AI dash cams, and intelligent sensors designed for total asset visibility.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Advanced Filtering Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <div className="flex items-center gap-2 text-white/80 font-medium mb-4 uppercase tracking-wider text-sm">
                  <Filter className="w-4 h-4" />
                  Category
                </div>
                <div className="flex flex-col gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category 
                          ? 'bg-[#2D5A27] text-white' 
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#2D5A27]/50 transition-colors flex flex-col h-full relative overflow-hidden">
                  {product.stockStatus === 'Low Stock' && (
                    <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full border border-orange-500/30">
                      Low Stock
                    </div>
                  )}
                  {product.stockStatus === 'Pre-order' && (
                    <div className="absolute top-4 right-4 bg-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">
                      Pre-order
                    </div>
                  )}
                  
                  <div className="aspect-video relative mb-6 bg-black/50 rounded-xl overflow-hidden flex items-center justify-center p-4">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      width={400}
                      height={300}
                      className="object-contain h-full w-auto mix-blend-screen group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#2D5A27]">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light mb-2">{product.name}</h3>
                  <p className="text-white/60 text-sm mb-6 flex-grow">{product.tagline}</p>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link 
                      href={`/products/${product.id}`}
                      className="flex items-center justify-center gap-2 w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      View Details
                    </Link>
                    <button 
                      onClick={() => toggleCompare(product)}
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium border transition-colors ${
                        compareList.find(p => p.id === product.id)
                          ? 'bg-[#2D5A27]/20 border-[#2D5A27] text-[#2D5A27]'
                          : 'border-white/10 hover:border-white/30 text-white/80'
                      }`}
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                      {compareList.find(p => p.id === product.id) ? 'Added to Compare' : 'Compare'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Engine Floating Bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-[#111111] border-t border-[#2D5A27] p-4 z-50 animate-in slide-in-from-bottom-full duration-300">
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                {compareList.map(p => (
                  <div key={p.id} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-2 min-w-[200px] flex-shrink-0">
                    <div className="w-12 h-12 relative bg-black/50 rounded flex-shrink-0 flex items-center justify-center">
                      <Image src={p.image} alt={p.name} width={40} height={40} className="object-contain mix-blend-screen" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{p.name}</p>
                      <button onClick={() => toggleCompare(p)} className="text-xs text-red-400 hover:text-red-300">Remove</button>
                    </div>
                  </div>
                ))}
                {[...Array(Math.max(0, 3 - compareList.length))].map((_, i) => (
                  <div key={i} className="flex items-center gap-3 border border-dashed border-white/20 rounded-lg p-2 min-w-[200px] h-[66px] flex-shrink-0 opacity-50">
                    <div className="w-12 h-12 bg-white/5 rounded flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-3 w-20 bg-white/10 rounded mb-1"></div>
                      <div className="h-2 w-12 bg-white/10 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button 
                  onClick={() => setCompareList([])}
                  className="text-sm text-white/60 hover:text-white"
                >
                  Clear All
                </button>
                <Link 
                  href={`/compare?ids=${compareList.map(p => p.id).join(',')}`}
                  className="bg-[#2D5A27] hover:bg-[#23471f] text-white px-6 py-3 rounded-lg font-medium transition-colors flex-shrink-0"
                >
                  Compare {compareList.length} Items
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
