import React from 'react';
import { motion } from 'framer-motion';

function Logo({ size = 40 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      {/* Define gradients */}
      <defs>
        <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#f093fb" />
        </linearGradient>
        
        <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#00f2fe" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Outer hexagon ring */}
      <motion.path
        d="M 50 8 L 80 25 L 80 60 L 50 77 L 20 60 L 20 25 Z"
        stroke="url(#logoGradient1)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Inner geometric shape */}
      <motion.path
        d="M 50 25 L 65 35 L 65 55 L 50 65 L 35 55 L 35 35 Z"
        fill="url(#logoGradient2)"
        opacity="0.3"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: '50px 45px' }}
      />

      {/* Letter K - stylized */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Vertical line of K */}
        <motion.path
          d="M 42 35 L 42 55"
          stroke="url(#logoGradient1)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
        
        {/* Upper diagonal of K */}
        <motion.path
          d="M 42 43 L 58 35"
          stroke="url(#logoGradient1)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        />
        
        {/* Lower diagonal of K */}
        <motion.path
          d="M 42 47 L 58 55"
          stroke="url(#logoGradient1)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        />
      </motion.g>

      {/* Accent dots */}
      <motion.circle
        cx="50"
        cy="20"
        r="2"
        fill="url(#logoGradient2)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      />
      
      <motion.circle
        cx="50"
        cy="70"
        r="2"
        fill="url(#logoGradient2)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2.1 }}
      />

      {/* Orbiting particle */}
      <motion.circle
        cx="50"
        cy="15"
        r="1.5"
        fill="#4facfe"
        animate={{
          cx: [50, 75, 50, 25, 50],
          cy: [15, 42.5, 70, 42.5, 15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ opacity: 0.8 }}
      />
    </svg>
  );
}

// Static version for situations where animation isn't needed
export function LogoStatic({ size = 40 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradientStatic1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#f093fb" />
        </linearGradient>
        
        <linearGradient id="logoGradientStatic2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#00f2fe" />
        </linearGradient>

        <filter id="glowStatic">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <path
        d="M 50 8 L 80 25 L 80 60 L 50 77 L 20 60 L 20 25 Z"
        stroke="url(#logoGradientStatic1)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M 50 25 L 65 35 L 65 55 L 50 65 L 35 55 L 35 35 Z"
        fill="url(#logoGradientStatic2)"
        opacity="0.3"
      />

      <path
        d="M 42 35 L 42 55"
        stroke="url(#logoGradientStatic1)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glowStatic)"
      />
      
      <path
        d="M 42 43 L 58 35"
        stroke="url(#logoGradientStatic1)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glowStatic)"
      />
      
      <path
        d="M 42 47 L 58 55"
        stroke="url(#logoGradientStatic1)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glowStatic)"
      />

      <circle cx="50" cy="20" r="2" fill="url(#logoGradientStatic2)" />
      <circle cx="50" cy="70" r="2" fill="url(#logoGradientStatic2)" />
      <circle cx="75" cy="42.5" r="1.5" fill="#4facfe" opacity="0.8" />
    </svg>
  );
}

export default Logo;

