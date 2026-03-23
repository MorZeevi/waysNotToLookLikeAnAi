'use client';

import { useState } from 'react';

type ImageComparisonProps = {
  beforeSrc?: string;
  afterSrc?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function ImageComparison({
  beforeSrc = '',
  afterSrc = '',
  className,
  style,
}: ImageComparisonProps) {
  const [inset, setInset] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;
    if ('touches' in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ('clientX' in e) {
      x = (e as React.MouseEvent).clientX - rect.left;
    }
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setInset(pct);
  };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        userSelect: 'none',
        touchAction: 'none',
        borderRadius: 'inherit',
        ...style,
      }}
      onMouseDown={() => setDragging(true)}
      onMouseMove={handleMove}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchStart={(e) => { setDragging(true); handleMove(e); }}
      onTouchMove={handleMove}
      onTouchEnd={() => setDragging(false)}
    >
      {/* Base layer (after / right side) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: afterSrc ? undefined : '#2a2a2a',
      }}>
        {afterSrc && (
          <img src={afterSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        )}
      </div>

      {/* Clipped layer (before / left side) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        clipPath: `inset(0 ${100 - inset}% 0 0)`,
        background: beforeSrc ? undefined : '#e8e8e8',
      }}>
        {beforeSrc && (
          <img src={beforeSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        )}
      </div>

      {/* Divider line */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: `${inset}%`,
        width: '2px',
        transform: 'translateX(-50%)',
        background: 'rgba(255,255,255,0.85)',
        zIndex: 10,
        pointerEvents: 'none',
      }} />

      {/* Drag handle */}
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: `${inset}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'white',
          border: 'none',
          cursor: 'ew-resize',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
          transition: 'transform 0.15s ease',
        }}
        onMouseDown={() => setDragging(true)}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <line x1="4" y1="2" x2="4" y2="12" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="2" x2="10" y2="12" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
