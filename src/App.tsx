import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { User, Code, Briefcase, GraduationCap, Menu, X } from 'lucide-react';
import Moon from './components/Moon';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import ProjectDetail from './pages/ProjectDetail';
import YouTubePlugin from './pages/YouTubePlugin';
import GestureMagic from './pages/GestureMagic';

const TABS = [
  { id: 'about', label: '个人简介', icon: User },
  { id: 'projects', label: 'AI 项目', icon: Code },
  { id: 'education', label: '教育&技能', icon: GraduationCap },
  { id: 'experience', label: '主要经历', icon: Briefcase },
];

function MainContent() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    { id: 'about', ref: aboutRef },
    { id: 'projects', ref: projectsRef },
    { id: 'education', ref: educationRef },
    { id: 'experience', ref: experienceRef },
  ];

  const activeTab = TABS[activeTabIndex].id;

  // 滚动进度用于月球淡出
  const { scrollY } = useScroll();
  const moonOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const moonScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  // 滚动监听 - 高亮当前区块
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      setIsScrolled(window.scrollY > 50);

      // 找到当前可见的区块
      for (let i = sectionRefs.length - 1; i >= 0; i--) {
        const section = sectionRefs[i].ref.current;
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveTabIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
    setIsMobileMenuOpen(false);
    const section = sectionRefs[index].ref.current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContent = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* 3D月球背景 - 带滚动淡出效果 */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          opacity: moonOpacity,
          scale: moonScale,
        }}
      >
        <Moon />
      </motion.div>

      {/* 导航栏 - 滚动后显示背景 */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center h-16 lg:h-20">
            {/* Desktop Nav - 居中 */}
            <nav className="hidden md:flex items-center gap-1">
              {TABS.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(index)}
                    className={`relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-black'
                        : isScrolled
                          ? 'text-black/40 hover:text-black'
                          : 'text-white/50 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                    {tab.label}
                    {isActive && (
                      <motion.div
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                          isScrolled ? 'bg-black/30' : 'bg-white/30'
                        }`}
                        layoutId="activeTab"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-black/60' : 'text-white/60'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5">
            <nav className="flex flex-col p-4 gap-2">
              {TABS.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(index)}
                    className={`px-4 py-3 rounded-lg flex items-center gap-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-black'
                        : 'text-black/50 hover:text-black'
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <HeroSection onScrollDown={scrollToContent} />

      {/* 渐变过渡带 - 从深色背景平滑过渡到浅色内容区 */}
      <div className="relative z-10 h-80 bg-gradient-to-b from-[#020205] via-[#0f0f14] via-[#1e1e28] via-[#3a3a48] to-[#fafafa]" />

      {/* Content Area - 单页长滚动 */}
      <div className="relative z-10 bg-[#fafafa]">
        {/* 关于我 */}
        <section ref={aboutRef} id="about" className="scroll-mt-20">
          <div className="py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
              <ScrollReveal>
                <p className="text-xs text-black/30 tracking-[0.2em] uppercase mb-6">
                  About Me
                </p>
                <h2 
                  className="text-3xl sm:text-4xl font-semibold text-[#1a1a2e] mb-6 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
                >
                  关于我
                </h2>
                <p className="text-sm text-black/40 mb-8">
                  深圳职业技术大学应用德语专业 · GPA 3.7/4.0 · 专业排名前 5% · AI Coding 实践者
                </p>
                <div className="w-12 h-px bg-black/10 mx-auto mb-8" />
                <p className="text-lg text-[#4a4a5a] leading-relaxed max-w-2xl mx-auto font-light">
                  我从应用德语和跨文化沟通出发，把语言学习中的真实痛点转化为可以运行的 AI 产品原型。
                  目前持续用 Vibe Coding、Prompt 设计和模型选型测试，搭建外语学习视频助手、YouTube 学习插件
                  与手势交互网页等项目，关注 AI 如何真正提升学习效率、内容理解和互动体验。
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* AI 项目 */}
        <section ref={projectsRef} id="projects">
          <ProjectsSection />
        </section>

        {/* 教育&技能 */}
        <section ref={educationRef} id="education" className="scroll-mt-20">
          <EducationSection />
        </section>

        {/* 主要经历 */}
        <section ref={experienceRef} id="experience" className="scroll-mt-20">
          <ExperienceSection />
        </section>

        {/* Footer */}
        <footer className="py-16 border-t border-black/[0.04]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-black/20 text-xs tracking-[0.15em] uppercase">
              © 2026 郑月满 · 用 AI 创造无限可能
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// ScrollReveal wrapper
function ScrollReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/project/ai-video-learning" element={<ProjectDetail />} />
      <Route path="/project/youtube-plugin" element={<YouTubePlugin />} />
      <Route path="/project/gesture-magic" element={<GestureMagic />} />
      <Route path="*" element={<MainContent />} />
    </Routes>
  );
}
