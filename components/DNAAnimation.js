import React from 'react'

export default function DNAAnimation() {
  return (
    <div className="dna-wrap w-full h-[70vh] flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 200 700" className="w-3/4 max-w-[420px]">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#4be1c3" />
            <stop offset="1" stopColor="#8a6ef7" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g opacity="0.9" stroke="url(#g1)" strokeWidth="0.6">
          {Array.from({ length: 16 }).map((_, i) => {
            const y = 30 + i * 40
            return <line key={i} x1="20" y1={y} x2="180" y2={y} opacity="0.12" />
          })}
        </g>

        <g filter="url(#glow)">
          {Array.from({ length: 18 }).map((_, i) => {
            const y = 30 + i * 36
            const cx = 40 + ((i % 3) * 48)
            const fill = i % 2 ? '#8a6ef7' : '#4be1c3'
            const delay = (i % 5) * 0.15
            return (
              <circle
                key={i}
                cx={cx}
                cy={y}
                r="4.2"
                fill={fill}
                style={{
                  animation: `pulse 1.9s ${delay}s ease-in-out infinite`,
                }}
              />
            )
          })}
        </g>

        <style>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.6); opacity: 1; }
            100% { transform: scale(1); opacity: 0.6; }
          }
        `}</style>
      </svg>
    </div>
  )
}
