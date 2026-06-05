import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  targetOpacity: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.min(200, Math.floor((canvas.width * canvas.height) / 4000));
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random(),
        targetOpacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        vx: 0,
        vy: 0,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      starsRef.current.forEach((star) => {
        // 闪烁效果
        star.opacity += (star.targetOpacity - star.opacity) * star.twinkleSpeed;
        if (Math.abs(star.opacity - star.targetOpacity) < 0.01) {
          star.targetOpacity = Math.random() * 0.8 + 0.2;
        }

        // 鼠标吸引效果
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;
          star.vx += (dx / dist) * force * 0.5;
          star.vy += (dy / dist) * force * 0.5;
        }

        // 更新位置
        star.x += star.vx;
        star.y += star.vy;

        // 速度衰减
        star.vx *= 0.95;
        star.vy *= 0.95;

        // 边界处理
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // 绘制星星
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // 绘制十字光芒（大星星）
        if (star.size > 1.5) {
          const glowSize = star.size * 3;
          ctx.beginPath();
          ctx.moveTo(star.x - glowSize, star.y);
          ctx.lineTo(star.x + glowSize, star.y);
          ctx.moveTo(star.x, star.y - glowSize);
          ctx.lineTo(star.x, star.y + glowSize);
          ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 40%, #1a1a2e 100%)' }}
    />
  );
}
