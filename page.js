'use client';

import Link from 'next/link';

export default function ProductsPage() {
  
  const products = [
    { id: 1, name: 'iPhone 15 Pro' },
    { id: 2, name: 'Samsung Galaxy S24' },
    { id: 3, name: 'MacBook Air M3' },
    { id: 4, name: 'iPad Pro' },
    { id: 5, name: 'AirPods Pro' }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Products</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            <Link 
              href={`/products/${product.id}`}
              style={{
                display: 'block',
                padding: '10px',
                backgroundColor: '#f0f0f0',
                textDecoration: 'none',
                color: '#333',
                borderRadius: '5px'
              }}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
