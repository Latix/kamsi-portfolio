import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedAvatar.css';

function AnimatedAvatar() {
  return (
    <div className="animated-avatar-container">
      {/* Floating orbs in background */}
      <motion.div
        className="orb orb-1"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="orb orb-2"
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="orb orb-3"
        animate={{
          y: [0, -35, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main avatar illustration */}
      <div className="avatar-main">
        {/* Rotating ring */}
        <motion.div
          className="rotating-ring"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 200 200" className="ring-svg">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="2"
              strokeDasharray="10 5"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#047857" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Counter-rotating ring */}
        <motion.div
          className="rotating-ring-2"
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 200 200" className="ring-svg">
            <circle
              cx="100"
              cy="100"
              r="75"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="1.5"
              strokeDasharray="5 10"
            />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Center icon/illustration */}
        <motion.div
          className="center-icon"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 200 200" className="icon-svg">
            {/* Code brackets */}
            <motion.path
              d="M 60 50 L 40 100 L 60 150"
              stroke="#10b981"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 140 50 L 160 100 L 140 150"
              stroke="#10b981"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            />
            
            {/* Slash */}
            <motion.line
              x1="110"
              y1="60"
              x2="90"
              y2="140"
              stroke="#34d399"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
            />

            {/* Dots/particles */}
            <motion.circle
              cx="70"
              cy="80"
              r="3"
              fill="#34d399"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.circle
              cx="130"
              cy="120"
              r="3"
              fill="#34d399"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
            <motion.circle
              cx="85"
              cy="130"
              r="2.5"
              fill="#047857"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            />
            <motion.circle
              cx="115"
              cy="70"
              r="2.5"
              fill="#047857"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
            />
          </svg>
        </motion.div>

        {/* Floating tech icons */}
        <motion.div
          className="tech-icon tech-icon-1"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg viewBox="0 0 40 40" className="small-icon">
            <circle cx="20" cy="20" r="18" fill="url(#techGrad1)" />
            <text x="20" y="27" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
              {'</>'}
            </text>
            <defs>
              <linearGradient id="techGrad1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="tech-icon tech-icon-2"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360],
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg viewBox="0 0 40 40" className="small-icon">
            <circle cx="20" cy="20" r="18" fill="url(#techGrad2)" />
            <path
              d="M20 10 L25 20 L20 30 L15 20 Z"
              fill="white"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="techGrad2">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="tech-icon tech-icon-3"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
            rotate: { duration: 9, repeat: Infinity, ease: "linear" },
          }}
        >
          <svg viewBox="0 0 40 40" className="small-icon">
            <circle cx="20" cy="20" r="18" fill="url(#techGrad3)" />
            <path
              d="M 15 20 L 20 15 L 25 20 L 20 25 Z M 20 12 L 20 28 M 12 20 L 28 20"
              stroke="white"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="techGrad3">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#065f46" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Particle effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default AnimatedAvatar;

