'use client';

import { useSearchParams } from 'next/navigation';
import { products, Product } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';
import { Check, X, Shield, Clock, Zap, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ComparePage() {
  const searchParams = useSearchParams();
  const ids = searchParams.get('ids')?.split(',') || [];
  const compareProducts = products.filter(p => ids.includes(p.id));

  if (compareProducts.length === 0) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-light mb-4">No products selected for comparison</h1>
        <Link href="/products" className="text-[#2D5A27] hover:underline">Back to Hardware</Link>
      </div>
    );
  }

  // Get unique spec categories across all selected products
  const specCategories = Array.from(new Set(
    compareProducts.flatMap(p => Object.keys(p.specs || {}))
  ));

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-32 pb-24">
        <div className="mb-12">
          <Link href="/products" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Hardware
          </Link>
          <h1 className="text-4xl md:text-5xl font-light">Product Comparison</h1>
        </div>

        <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/5">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-8 text-left border-b border-r border-white/10 w-64 bg-black/20">Specifications</th>
                {compareProducts.map(product => (
                  <th key={product.id} className="p-8 border-b border-white/10 min-w-[300px]">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 relative mb-4 bg-black/50 rounded-xl flex items-center justify-center p-4">
                        <Image src={product.image} alt={product.name} width={100} height={100} className="object-contain mix-blend-screen" />
                      </div>
                      <h3 className="text-xl font-medium mb-1">{product.name}</h3>
                      <p className="text-sm text-white/50 mb-4">{product.category}</p>
                      <Link href={`/products/${product.id}`} className="text-xs uppercase tracking-widest text-[#2D5A27] hover:text-[#3a7532] font-semibold">View Product</Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Pricing Row */}
              <tr>
                <td className="p-6 border-b border-r border-white/10 font-medium bg-black/10">Hardware Price</td>
                {compareProducts.map(p => (
                  <td key={p.id} className="p-6 border-b border-white/10 text-center text-2xl font-light">£{p.price}.00</td>
                ))}
              </tr>
              <tr>
                <td className="p-6 border-b border-r border-white/10 font-medium bg-black/10">Subscription From</td>
                {compareProducts.map(p => (
                  <td key={p.id} className="p-6 border-b border-white/10 text-center text-white/70">{p.subscriptionFrom}</td>
                ))}
              </tr>

              {/* Dynamic Specs */}
              {specCategories.map(cat => (
                <React.Fragment key={cat}>
                  <tr className="bg-white/5">
                    <td colSpan={compareProducts.length + 1} className="p-4 px-8 border-b border-white/10 text-sm font-bold uppercase tracking-widest text-[#2D5A27]">
                      {cat.replace(/([A-Z])/g, ' $1').trim()}
                    </td>
                  </tr>
                  {/* Get all unique labels within this category across all compared products */}
                  {Array.from(new Set(
                    compareProducts.flatMap(p => p.specs[cat as keyof typeof p.specs]?.map(s => s.label) || [])
                  )).map(label => (
                    <tr key={label}>
                      <td className="p-6 border-b border-r border-white/10 text-sm text-white/60 bg-black/5">{label}</td>
                      {compareProducts.map(p => {
                        const spec = p.specs[cat as keyof typeof p.specs]?.find(s => s.label === label);
                        return (
                          <td key={p.id} className="p-6 border-b border-white/10 text-center text-sm">
                            {spec ? spec.value : <span className="text-white/20">—</span>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}

              {/* Stock Status */}
              <tr>
                <td className="p-6 border-b border-r border-white/10 font-medium bg-black/10">Availability</td>
                {compareProducts.map(p => (
                  <td key={p.id} className="p-6 border-b border-white/10 text-center">
                    <span className={`text-xs px-2 py-1 rounded border ${p.stockStatus === 'In Stock' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-orange-500/10 border-orange-500/20 text-orange-400'}`}>
                      {p.stockStatus}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </main>
  );
}
