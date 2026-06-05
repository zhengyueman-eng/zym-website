import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: '一键分析视频字幕',
    description: '在 YouTube 视频页面点击"AI学语言"按钮，自动抓取当前视频字幕。',
  },
  {
    title: '三模块 AI 智能解析',
    description: '句子翻译：提供准确、通顺的中文翻译。重点单词/词组解析：提取关键词，标注词性、中文释义及用法。语法分析：解析介词用法、动词变位、固定搭配等语法现象。',
  },
  {
    title: '多模型自由切换',
    description: '支持智谱 GLM-4.7-Flash（完全免费）、DeepSeek-V3.2（高性价比）两种 AI 模型，用户可在设置中自行选择。',
  },
  {
    title: 'API Key 本地存储',
    description: '用户输入的密钥通过 chrome.storage.sync 安全保存，支持多模型独立配置。',
  },
  {
    title: '缓存机制',
    description: '相同字幕文本的分析结果自动缓存 1 小时，避免重复调用，节省成本与时间。',
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
      {/* 顶部导航 */}
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

      {/* Hero 区域 - 深色背景 */}
      <section className="relative bg-[#0a0a12] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-6">
              YouTube Learning Assistant
            </p>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              AI学语言 · 视频插件
            </h1>
            <p className="text-white/40 max-w-2xl leading-relaxed text-sm lg:text-base font-light">
              通过 Vibe Coding 构建的浏览器插件。利用大模型与轻量插件架构，将外部视频"教材化"。支持一键获取逐句翻译、重点词汇解析、语法点拆解三大 AI 输出。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 图片展示区域 */}
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
              alt="AI学语言 · 视频插件功能演示"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </section>

      {/* 内容区域 */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 标签 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-black/40 bg-black/[0.03] border border-black/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-black/20"></span>
              V1.0 拓展Demo 以开发者模式加载
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* 已实现功能 */}
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
                当前已实现功能
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
                      <span className="text-black/10 group-hover:text-black/25 transition-colors duration-300">—</span>
                      {feature.title}
                    </h3>
                    <p className="text-black/40 text-sm leading-relaxed pl-6">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 未来规划 */}
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
                未来最终版规划
              </h2>
              <div className="space-y-8">
                {futurePlans.map((plan, index) => (
                  <motion.div
                    key={plan.title}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-base font-semibold text-[#1a1a2e] mb-2 flex items-center gap-3">
                      <span className="text-black/10 group-hover:text-black/25 transition-colors duration-300">—</span>
                      {plan.title}
                    </h3>
                    <p className="text-black/40 text-sm leading-relaxed pl-6">
                      {plan.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-black/[0.04]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-black/20 text-xs tracking-[0.15em] uppercase">
            © 2024 郑月满 · 用 AI 创造无限可能
          </p>
        </div>
      </footer>
    </div>
  );
};

export default YouTubePlugin;
