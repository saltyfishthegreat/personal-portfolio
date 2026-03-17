"use client";
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const OperatorCard = ({ children, href = "#" }) => {
  // 用于追踪鼠标在卡片上的坐标
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 将鼠标坐标转换为旋转角度 (-10度 到 10度)
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // 计算中心偏移量量
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  };

  const handleMouseLeave = () => {
    // 鼠标离开时恢复原状
    x.set(0);
    y.set(0);
  };

  return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d", // 开启 3D 渲染空间
        }}
        // 基础动画配置：平滑的弹簧效果
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative block w-full font-mono select-none group cursor-pointer"
      >
        {/* 卡片背景主体 
          - group-hover:shadow-2xl: 悬停时增强阴影，增加浮动感
        */}
        <div className="relative bg-[#fafafa] rounded-[24px] p-3 border border-gray-200 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl overflow-hidden">
          {/* 内容插槽 
            translate-z-10: 让内容在 3D 空间稍微凸起，增强 Tilt 效果
          */}
          <div 
            className="rounded-[18px] overflow-hidden bg-white"
            style={{ transform: "translateZ(30px)" }} 
          >
            {children}
          </div>

          {/* 底部细微的高光层，模拟卡片边缘的光泽 */}
          <div className="absolute inset-0 rounded-[24px] pointer-events-none border-t border-l border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.a>
  );
};

// --- 展示示例 ---
interface ExampleCardProps {
  imgSrc: string;
  imgAlt: string;
  cardHref: string;
}

export default function ExampleCard({ imgSrc, imgAlt, cardHref }: ExampleCardProps) {
  return (
    <OperatorCard href={cardHref}>
      {/* 这里放你的图片 */}
      <img 
        src={imgSrc} 
        alt={imgAlt}
        className="w-full h-auto object-cover display-block"
      />
    </OperatorCard>
  );
}
