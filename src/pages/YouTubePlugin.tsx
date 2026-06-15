import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: '一键分析视频字幕',
    description: '在 YouTube 视频页面读取字幕内容，减少用户复制、整理和切换工具的成本。',
  },
  {
    title: '三模块 AI 智能分析',
    description: '输出句子翻译、词组解析和语法分析，覆盖看视频学外语时最常见的理解需求。',
  },
  {
    title: '两种模型选择',
    description: '支持免费模型 GLM-4.7-Flash 和高性价比模型 DeepSeek-V3.2，用户可以按成本与效果切换。',
  },
  {
    title: 'API Key 本地存储',
    description: '将用户配置保存在本地，降低重复输入成本，同时让插件保持轻量部署。',
  },
  {
    title: '字幕缓存机制',
    description: '相同字幕文件自动缓存，避免重复消耗 token，提升响应速度和使用体验。',
  },
];

const notes = [
  {
    title: '技术栈',
    description: 'Chrome Extension、JavaScript、智谱 GLM、DeepSeek API。',
  },
  {
    title: '使用场景',
    description: '面向通过 YouTube 看访谈、公开课、影视片段和短视频学习外语的用户。',
  },
  {
    title: '产品思路',
    description: '把外部视频转化成可被 AI 拆解的学习材料，让用户在观看过程中完成理解、记录和复习。',
  },
];

const futurePlans = [
  {
    title: '多平台支持',
    description: '从 YouTube 扩展到 TikTok、Bilibili、Netflix 等流媒体网站，覆盖更广的外语学习场景。',
  },
  {
    title: '实时双语字幕',
    description: '在视频播放时动态生成并叠加双语字幕，无需点击按钮即可边看边学。',
  },
  {
    title: '生词本与复习功能',
    description: '自动收集解析过的重点词汇，生成记忆卡片或导出 Anki 牌组，支持定期复习提醒。',
  },
  {
    title: '学习进度追踪',
    description: '记录用户分析过的视频、掌握的知识点数量，生成学习报告与可视化图表。',
  },
  {
    title: '自定义提示词',
    description: '允许用户修改 AI 分析提示词，定制解析风格（例如更简单/更学术的讲解）。',
  },
  {
    title: '一键导出笔记',
    description: '将每次分析的翻译、词汇、语法笔记导出为 Markdown、PDF 或 Notion 格式。',
  },
];

const YouTubePlugin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center h-16 lg:h-20">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 text-sm text-black/40 hover:text-black transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              <span>返回首页</span>
            </button>
          </div>
        </div>
      </motion.header>

      <section className="relative bg-[#0a0a12] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6">
              Chrome Extension / YouTube Assistant
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              外语学习视频插件
            </h1>
            <p className="text-white/40 max-w-2xl leading-relaxed text-sm lg:text-base font-light">
              一款面向 YouTube 外语学习场景的 Chrome 浏览器扩展。它自动提取视频字幕，并结合 AI 大模型完成实时翻译、词汇解析、俚语解释和语法分析。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 mx-6 sm:mx-8 lg:mx-12 max-w-6xl lg:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="bg-[#1a1a2e] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20"
        >
          <div className="aspect-video w-full flex items-center justify-center">
            <img
              src="/demo-photo.png"
              alt="外语学习视频插件功能演示"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-black/40 bg-black/[0.03] border border-black/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-black/20"></span>
              Chrome Extension Demo
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl font-semibold text-[#1a1a2e] mb-10 tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
              >
                核心功能
              </h2>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-base font-semibold text-[#1a1a2e] mb-2 flex items-center gap-3">
                      <span className="text-black/10 group-hover:text-black/25 transition-colors duration-300">•</span>
                      {feature.title}
                    </h3>
                    <p className="text-black/40 text-sm leading-relaxed pl-6">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-2xl font-semibold text-[#1a1a2e] mb-10 tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
              >
                项目说明
              </h2>
              <div className="space-y-8">
                {notes.map((note) => (
                  <div key={note.title} className="group">
                    <h3 className="text-base font-semibold text-[#1a1a2e] mb-2 flex items-center gap-3">
                      <span className="text-black/10 group-hover:text-black/25 transition-colors duration-300">•</span>
                      {note.title}
                    </h3>
                    <p className="text-black/40 text-sm leading-relaxed pl-6">
                      {note.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2
              className="text-2xl font-semibold text-[#1a1a2e] tracking-tight"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              未来规划功能
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futurePlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                className="border-b border-black/[0.06] pb-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3 flex items-center gap-3">
                  <span className="text-black/10">—</span>
                  {plan.title}
                </h3>
                <p className="text-black/40 leading-relaxed text-sm pl-6">
                  {plan.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-black/[0.04]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-black/20 text-xs tracking-[0.15em] uppercase">
            © 2026 郑月满
          </p>
        </div>
      </footer>
    </div>
  );
};

export default YouTubePlugin;
