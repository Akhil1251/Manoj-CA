"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageThemeLoaderProps {
  isVisible: boolean;
}

export const LanguageThemeLoader: React.FC<LanguageThemeLoaderProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md"
        >
          {/* Animated SVG Sweep simulating a complex loading video */}
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* Spinning Outer Ring */}
            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="spinner-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="url(#spinner-grad)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="180 80"
              />
            </svg>

            {/* Inner Video Simulation Pulse */}
            <div className="absolute inset-4 rounded-full bg-slate-900 border border-slate-800 flex flex-col items-center justify-center overflow-hidden shadow-inner">
              {/* Virtual scanning line */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 h-10 w-full animate-bounce" />
              
              <div className="relative w-8 h-8 rounded-full border border-indigo-500/30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-indigo-500 animate-ping" />
              </div>
            </div>
          </div>

          {/* Status Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center"
          >
            <h3 className="text-md font-bold text-white tracking-widest uppercase">
              Updating Workspace
            </h3>
            <p className="text-xs text-indigo-400 mt-1.5 font-medium animate-pulse">
              Re-calculating taxation variables...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
