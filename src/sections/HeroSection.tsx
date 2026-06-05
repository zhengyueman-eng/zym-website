import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import TypewriterText from '../components/TypewriterText';

interface HeroSectionProps {
  onScrollDown: () => void;
}

export default function HeroSection({ onScrollDown }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* 主内容 */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 标签 - 更醒目 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-xs sm:text-sm text-white/50 tracking-[0.4em] uppercase mb-8 font-medium"
        >
          AI领域的探索者 · 跨界自学实践者
        </motion.p>

        {/* 主标题 - 打字机效果 + 衬线字体 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-none"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}>
            <TypewriterText
              texts={['Zheng Yueman', '郑月满']}
              typingSpeed={150}
              deletingSpeed={80}
              pauseDuration={3000}
            />
          </h1>
        </motion.div>

        {/* 价值主张 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          在 AI 与人文的交汇处持续探索
        </motion.p>

        {/* 装饰线 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="w-16 h-px bg-white/20 mx-auto mb-12"
        />

        {/* 滚动提示 - 精致的线条动画 */}
        <motion.button
          onClick={onScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="group flex flex-col items-center gap-3 text-white/20 hover:text-white/40 transition-colors duration-500"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      {/* 底部渐变 - 与内容区平滑过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent pointer-events-none" />
    </section>
  );
}
