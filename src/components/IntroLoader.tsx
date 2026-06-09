"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        // Increment by variable values to feel realistic
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden">
      {/* Background glowing particles/circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow" />

      {/* Main 3D loader visual */}
      <div className="relative flex flex-col items-center justify-center max-w-md px-4 text-center">
        {/* Animated 3D geometric sphere simulation */}
        <div className="relative w-40 h-40 mb-10 flex items-center justify-center perspective-1000">
          <motion.div
            className="absolute w-36 h-36 border-4 border-amber-500/30 rounded-full"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: 360, rotateY: 180 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-28 h-28 border-4 border-dashed border-purple-400/50 rounded-full"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: 180, rotateY: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-20 h-20 border-2 border-cyan-400 rounded-full flex items-center justify-center"
            animate={{ rotateZ: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">
              MV
            </span>
          </motion.div>
        </div>

        {/* Brand Text */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-purple-300 mb-2"
        >
          MANOJ CA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4 }}
          className="text-xs uppercase tracking-[0.25em] text-amber-300 font-medium mb-8"
        >
          Premium Financial Advisory
        </motion.p>

        {/* Progress bar container */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden relative mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-amber-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress percentage */}
        <span className="text-sm font-mono text-cyan-400 font-semibold">
          {progress}%
        </span>
      </div>
    </div>
  );
};
