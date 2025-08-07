'use client';

import Image from 'next/image';

interface ProductCardsProps {
  showProducts: boolean;
  setShowProducts: (show: boolean) => void;
}

const products = [
  {
    name: 'Junmai',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/280f9ae4e40e210c6df9485b684dfce68135994e?width=96',
    width: 47.994,
    height: 147.746,
    aspectRatio: '38/117',
    headerLineClass: 'header-line-junmai'
  },
  {
    name: 'Aruten',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/58e88d50748db4573ef5bcf75bf2c9b8f3d63458?width=290',
    width: 145,
    height: 145,
    aspectRatio: '1/1',
    headerLineClass: 'header-line-aruten'
  },
  {
    name: 'Fresh',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/5db407575632d9fc34520ea1d6ee434c3b45a6b5?width=222',
    width: 111,
    height: 150,
    aspectRatio: '37/50',
    headerLineClass: 'header-line-fresh'
  },
  {
    name: 'Grape',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/25121719ac93a59235d2e1ad83234e965586ab10?width=324',
    width: 162,
    height: 162,
    aspectRatio: '1/1',
    headerLineClass: 'header-line-grape'
  },
  {
    name: 'Strawberry',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/7d4533223e7bed38a9d5c24bae8c66fde7253722?width=320',
    width: 160,
    height: 160,
    aspectRatio: '1/1',
    headerLineClass: 'header-line-strawberry'
  }
];

export default function ProductCards({ showProducts, setShowProducts }: ProductCardsProps) {
  if (!showProducts) return null;

  return (
    <div
      className="product-cards-container"
      style={{
        opacity: showProducts ? 1 : 0,
        visibility: showProducts ? 'visible' : 'hidden',
      }}
      onMouseEnter={() => setShowProducts(true)}
      onMouseLeave={() => setShowProducts(false)}
    >
      <div className="product-cards-grid">
        {/* Main product cards container */}
        <div className="product-cards-main">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              {/* Top section with product name */}
              <div className="product-header">
                <div className="product-header-inner">
                  <div className={`header-line ${product.headerLineClass}`} />
                  <div className="product-name">
                    {product.name}
                  </div>
                  <div className={`header-line ${product.headerLineClass}`} />
                </div>
              </div>

              {/* Product image */}
              <div
                className="product-image-container"
                style={{
                  width: `${product.width}px`,
                  height: `${product.height}px`,
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={product.width}
                  height={product.height}
                  style={{
                    width: `${product.width}px`,
                    height: `${product.height}px`,
                    aspectRatio: product.aspectRatio,
                  }}
                />
              </div>

              {/* Bottom section with info and buy */}
              <div className="product-footer">
                <div className="product-footer-inner">
                  <div className="footer-text">info</div>
                  <div className="footer-line" />
                  <div className="footer-text">buy</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative text elements */}
        <div className="decorative-text-1">
          <div className="decorative-line decorative-line-1" />
          <span>For our sake</span>
          <div className="decorative-line decorative-line-1" />
        </div>

        <div className="decorative-text-2">
          <div className="decorative-line decorative-line-2" />
          <span>soju on my mind</span>
          <div className="decorative-line decorative-line-2" />
        </div>

        {/* Bottom navigation */}
        <div className="bottom-nav">
          <div className="bottom-nav-products">Products</div>
          <div className="bottom-nav-line" />
          <div className="bottom-nav-details">details</div>
        </div>
      </div>
    </div>
  );
}
