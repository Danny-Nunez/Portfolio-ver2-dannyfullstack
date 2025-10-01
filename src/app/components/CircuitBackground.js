'use client';

import React, { useState, useEffect } from 'react';

export default function CircuitBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-50">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00ff88" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00ff88" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Circuit Grid */}
        <g className="circuit-grid">
          {/* Horizontal lines */}
          {Array.from({ length: 20 }, (_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 20}
              x2="400"
              y2={i * 20}
              stroke="#00ff88"
              strokeWidth="1"
              opacity="0.2"
              className="circuit-line"
            />
          ))}
          
          {/* Vertical lines */}
          {Array.from({ length: 20 }, (_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 20}
              y1="0"
              x2={i * 20}
              y2="400"
              stroke="#00ff88"
              strokeWidth="1"
              opacity="0.2"
              className="circuit-line"
            />
          ))}
          
          {/* Circuit traces */}
          {Array.from({ length: 15 }, (_, i) => (
            <g key={`trace-${i}`}>
              <line
                x1={Math.random() * 400}
                y1={Math.random() * 400}
                x2={Math.random() * 400}
                y2={Math.random() * 400}
                stroke="url(#circuitGradient)"
                strokeWidth="2"
                filter="url(#glow)"
                className="circuit-trace"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            </g>
          ))}
          
          {/* Circuit nodes */}
          {Array.from({ length: 25 }, (_, i) => (
            <circle
              key={`node-${i}`}
              cx={Math.random() * 400}
              cy={Math.random() * 400}
              r="3"
              fill="#00ff88"
              filter="url(#glow)"
              className="circuit-node"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${1.5 + Math.random() * 1}s`
              }}
            />
          ))}
        </g>
      </svg>
      
      <style jsx>{`
        .circuit-line {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .circuit-trace {
          animation: traceFlow 4s ease-in-out infinite;
        }
        
        .circuit-node {
          animation: nodeGlow 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        
        @keyframes traceFlow {
          0%, 100% { opacity: 0.3; stroke-dasharray: 5, 5; }
          50% { opacity: 0.8; stroke-dasharray: 10, 5; }
        }
        
        @keyframes nodeGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
