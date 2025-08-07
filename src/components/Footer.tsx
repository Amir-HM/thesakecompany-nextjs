import ProductCards from './ProductCards';

export default function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        padding: '8px 16px',
        alignItems: 'center',
        gap: '16px',
        alignSelf: 'stretch',
        background: '#FAFAFA',
        position: 'relative',
      }}
    >
      {/* Products */}
      <div
        className="ocr-b-text products-hover"
        style={{
          color: '#1D1D1D',
          fontFamily: 'OCR-B',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          textTransform: 'uppercase',
          position: 'relative',
        }}
      >
        <span style={{
          fontFamily: 'OCR-B, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          color: 'rgba(29,29,29,1)',
        }}>
          Products
        </span>
      </div>

      {/* Center line - exact width from Figma */}
      <div
        style={{
          width: '1219px',
          height: '1px',
          background: '#1D1D1D',
          position: 'relative',
        }}
      />

      {/* Details */}
      <div
        className="ocr-b-text"
        style={{
          color: '#1D1D1D',
          fontFamily: 'OCR-B',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          textTransform: 'uppercase',
          position: 'relative',
        }}
      >
        <span style={{
          fontFamily: 'OCR-B, -apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          color: 'rgba(29,29,29,1)',
        }}>
          details
        </span>
      </div>

      {/* Product Cards - hidden by default, shown on hover */}
      <ProductCards />
    </div>
  );
}
