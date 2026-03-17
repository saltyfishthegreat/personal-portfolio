"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import ExampleCard from "./ExampleCard";

const WorkSamples = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "start -0.1"], // Animation completes within ~10% of viewport scroll
  });

  // Animate the central black square's horizontal position
  // w-64 is 256px, so -128 is half of its width for centering
  const squareX = useTransform(scrollYProgress, [0, 1], [-128, -128 - 500]); // Start at -128px (centered), move an additional 500px left

  // Vertical centering remains constant
  // h-64 is 256px, so -128 is half of its height for centering
  const squareY = -128; // Apply -128px translateY to center vertically

  // Animate the background grid's opacity
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0]); // Fade out grid over the same scroll range

  // Animate the vertical line's opacity
  const verticalLineOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fade in vertical line over the same scroll range

  // Animate the info area from right to its current position and fade in
  const infoAreaX = useTransform(scrollYProgress, [0, 1], [500, 0]); // Start 500px to the right, move to current x: 0
  const infoAreaOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fade in from 0 to 1

  return (
    <div ref={containerRef} className="relative w-full sticky top-0 z-50 h-screen">
      {/* 1. 背景网格动画 */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: gridOpacity,
          zIndex: 1 // 确保在最底层
        }}
      ></motion.div>

      {/* 2. 斜线动画 */}
      <motion.svg style={{ opacity: gridOpacity, zIndex: 2 }} className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1.5" />
      </motion.svg>

      {/* 3. 新增竖线及渐显动画 */}
      <motion.div
        style={{ opacity: verticalLineOpacity }}
        className="absolute left-[250px] top-0 h-full w-px bg-black z-5"
      ></motion.div>

      {/* 4. 左上角文字 */}
      <div className="absolute top-10 left-10 select-none z-10"> {/* 确保文字在动画元素之上 */}
        <h2 className="text-3xl font-black tracking-tighter text-black opacity-80 leading-none">
          Tingdan Zhu
        </h2>
        <p className="text-[10px] font-bold tracking-[0.2em] text-black opacity-60">
          Work Example / 26
        </p>
      </div>

      {/* 5. 右下角文字 */}
      <div className="absolute bottom-10 right-10 flex items-center gap-2 opacity-60 z-10"> {/* 确保文字在动画元素之上 */}
        <span className="text-[10px] font-bold tracking-widest">POWERED BY REACT</span>
        <div className="w-8 h-2 bg-black"></div>
      </div>

      {/* 6. 中心黑色方块动画 */}
      {/* left: "50%", top: "50%" 将元素左上角定位到中心 */}
      {/* x: squareX, y: squareY 负责将元素自身的中心拉回到中心，并实现动画 */}
      <motion.div
        style={{ left: "50%", top: "50%", x: squareX, y: squareY, zIndex: 10 }}
        className="absolute w-64 h-64 bg-black flex flex-col items-center justify-center text-white shadow-2xl p-8"
      >
        {/* 如果你有图片，可以直接把下面的内容替换为 <img /> */}
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-1">WORK</h1>
          <h1 className="text-5xl font-bold tracking-tight mb-4">SAMPLES</h1>
          <div className="w-full h-[1px] bg-white/20 my-2"></div>
          <p className="text-[8px] tracking-[0.3em] opacity-50 uppercase">
            Damedanedameyo Damenanoyo
          </p>
        </div>
      </motion.div>
      {/* 6. 中心卡片动画 */}
      {/* left: "50%", top: "50%" 将元素左上角定位到中心 */}
      {/* x: squareX, y: squareY 负责将元素自身的中心拉回到中心，并实现动画 */}
      <motion.div
        style={{ left: "50%", top: "15%", zIndex: 10, opacity: verticalLineOpacity, perspective: "1000px" }}
        className="absolute w-[500px] h-[500px]"
      >
        <ExampleCard />
      </motion.div>
      {/* 7.--- 右侧：案例信息区 --- */}
      <motion.div
        style={{ x: infoAreaX, opacity: infoAreaOpacity }}
        className="absolute flex flex-col right-0 top-[60%] items-end font-mono z-10"
      >
        <div className="flex items-end gap-3 mb-1">
          <div className="absolute left-0 bottom-0 w-16 h-8 bg-black"></div>
          <h2 className="absolute left-20 text-3xl font-black uppercase tracking-tighter leading-none">
            Triangle Connection
          </h2>
        </div>
        <div className="relative w-[400px]">
          <div className="w-full h-[1.5px] bg-black"></div>
          <span className="absolute left-20 text-[12px] text-gray-600 font-medium tracking-widest">
            An app design for international student
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkSamples;
