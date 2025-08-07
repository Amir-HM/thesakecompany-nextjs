export default function Header() {
  return (
    <div className="w-full">
      <div
        style={{
          display: 'flex',
          height: '35px',
          padding: '0 16px',
          alignItems: 'center',
          background: '#FAFAFA',
          position: 'relative',
        }}
      >
        {/* Left line */}
        <div
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            width: 'calc(50% - 120px)',
            height: '1px',
            background: '#1D1D1D',
            transform: 'translateY(-50%)',
          }}
        />

        {/* Center text - fixed size */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'OCR-B, Courier Prime, Courier New, monospace',
            fontSize: '12px',
            fontWeight: 400,
            color: '#1D1D1D',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          THE SAKE COMPANY
        </div>

        {/* Right line */}
        <div
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            width: 'calc(50% - 120px)',
            height: '1px',
            background: '#1D1D1D',
            transform: 'translateY(-50%)',
          }}
        />
      </div>
    </div>
  );
}
