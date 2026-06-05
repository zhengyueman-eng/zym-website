import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: '云端自动化字幕生成',
    description: '支持本地视频（MP4等）上传，后端自动执行 FFmpeg 音频分离，并静默对接阿里云 OSS 与 NLS（智能语音交互）引擎，毫秒级返回带精确时间戳的字幕流。',
  },
  {
    title: '毫秒级高性能查词算法',
    description: '内置 25,000 词量本地高性能词库，自研词根还原（Lemmatization）算法，完美解决外语中动词时态、名词复数变形导致的查词失败问题。',
  },
  {
    title: 'DeepSeek 语境家教解析',
    description: '告别死板的机器翻译。前端实时捕获用户点击的"生词 + 当前整句字幕"，通过后端 Prompt 链调动 DeepSeek API，在精美的毛玻璃弹窗中给出结合当前电影画面的深度词汇用法解析。',
  },
];

const futurePlans = [
  {
    title: '全网链接解析（首发接入 YouTube）',
    description: '告别繁琐的本地上传。用户只需粘贴 YouTube 视频链接，后端即可通过 yt-dlp 提取音源进行解析，前端通过 IFrame API 实现无缝播放，打通无限内容库。',
  },
  {
    title: '多模型动态路由与本地缓存',
    description: '支持用户在 MiniMax、智谱 GLM 等多款 AI 模型间自由切换；通过前端 localStorage 或 Chrome Storage 同步配置，实现成本（性价比）与解析质量的完美平衡。',
  },
  {
    title: '原生多轨字幕无感抓取',
    description: '针对自带字幕的流媒体（如 YouTube .vtt 格式），系统将优先执行毫秒级原生抓取，仅在无字幕状态下调用阿里云识别，大幅降低 API 运营成本。',
  },
  {
    title: '个人学习资产云端化',
    description: '上线云端生词本与笔记同步功能，支持将单部电影的生词、AI 语境解析一键导出为"PDF 专属单词表"或导入 Anki 记忆库。',
  },
];

const ProjectDetail = () => {
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
              SaaS Demo / Web Application
            </p>
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              沉浸式 AI 视频外语学习平台
            </h1>
            <p className="text-white/40 max-w-2xl leading-relaxed text-sm lg:text-base font-light">
              一款通过 Vibe Coding（自然语言驱动开发）独立构建的 AI 辅助外语学习 Web 应用。通过自动化音视频流处理与大模型语境分析，彻底改变传统"查词割裂、缺乏语境"的观影学习体验。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 视频展示区域 */}
      <section className="relative z-10 -mt-10 mx-6 sm:mx-8 lg:mx-12 max-w-6xl lg:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="bg-[#1a1a2e] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20"
        >
          <div className="aspect-video w-full">
            <video 
              className="w-full h-full object-contain"
              controls
              playsInline
              poster="/moon_8k.jpg"
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
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
              V1.0 Demo 本地运行
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
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
                未来规划功能
              </h2>
              <div className="space-y-8">
                {futurePlans.map((plan, index) => (
                  <motion.div
                    key={plan.title}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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

export default ProjectDetail;
