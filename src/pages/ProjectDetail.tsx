import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projectMap: Record<string, {
  subtitle: string;
  title: string;
  description: string;
  mediaType: 'video' | 'image';
  mediaSrc: string;
  mediaAlt: string;
  demoUrl?: string;
  badge: string;
  features: { title: string; description: string }[];
  notes: { title: string; description: string }[];
  futurePlans?: { title: string; description: string }[];
}> = {
  'ai-video-learning': {
    subtitle: 'AI Native / Video Learning Platform',
    title: '外语学习 AI 视频助手',
    description:
      '主打全屏无感查词与影视语境解析的沉浸式外语学习平台。它把字幕提取、词汇解析和语境理解串成一条完整流程，减少传统查词对观看节奏的打断。',
    mediaType: 'video',
    mediaSrc: '/demo-video.mp4',
    mediaAlt: '外语学习 AI 视频助手演示视频',
    badge: 'Demo 已实现',
    features: [
      { title: '云端字幕生成', description: '接入本地视频上传与云端处理流程，自动生成字幕并支持后续解析。' },
      { title: '毫秒级查词体验', description: '围绕观看场景优化交互，减少查词中断感，强调沉浸式学习。' },
      { title: 'AI 家教 Agent', description: '根据当前语境生成解释，帮助用户理解单词、句式与影视内容之间的关系。' },
    ],
    notes: [
      { title: '技术栈', description: 'React、TypeScript、FFmpeg、DeepSeek API、阿里云 OSS/NLS。' },
      { title: '项目定位', description: '从语言学习痛点出发的产品原型，而不是单纯功能拼接。' },
    ],
    futurePlans: [
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
        description: '上线云端生词本与笔记同步功能，支持将单部电影的生词、AI 语境解析一键导出为“PDF 专属单词表”或导入 Anki 记忆库。',
      },
    ],
  },
  'gesture-magic': {
    subtitle: 'Interactive Web App / Computer Vision',
    title: 'Gesture Magic · 手势交互网页',
    description:
      '基于摄像头手势识别的交互式网页应用。通过简单动作触发烟花、爱心、拍照和小游戏，让手势输入变成可感知、可试玩的互动体验。',
    mediaType: 'image',
    mediaSrc: '/gesture-magic-demo.png',
    mediaAlt: 'Gesture Magic 交互演示图',
    demoUrl: 'https://byztluna0918.cc.cd/',
    badge: 'Interactive Demo',
    features: [
      { title: '手势识别', description: '通过摄像头识别基础手势，并将结果映射到具体交互反馈。' },
      { title: '视觉反馈', description: '支持烟花、3D 爱心和拍照等效果，强化即时反馈。' },
      { title: '轻量小游戏', description: '内置戳气球小游戏，补足纯展示型手势应用的可玩性。' },
    ],
    notes: [
      { title: '技术栈', description: 'React、Vite、Cloudflare、WebGL / Canvas。' },
      { title: '项目定位', description: '更偏向交互体验与前端实现能力展示。' },
    ],
  },
};

const fallbackProject = projectMap['ai-video-learning'];

const ProjectDetail = () => {
  const navigate = useNavigate();
  const slug = window.location.pathname.split('/').pop() || 'ai-video-learning';
  const project = projectMap[slug] ?? fallbackProject;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
              {project.subtitle}
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              {project.title}
            </h1>
            <p className="text-white/40 max-w-2xl leading-relaxed text-sm lg:text-base font-light">
              {project.description}
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
          <div className="aspect-video w-full">
            {project.mediaType === 'video' ? (
              <video className="w-full h-full object-contain" controls playsInline preload="metadata">
                <source src={project.mediaSrc} type="video/mp4" />
                你的浏览器不支持视频播放
              </video>
            ) : project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full h-full cursor-pointer"
                aria-label={`打开 ${project.title} 线上演示`}
              >
                <img src={project.mediaSrc} alt={project.mediaAlt} className="w-full h-full object-contain" />
              </a>
            ) : (
              <img src={project.mediaSrc} alt={project.mediaAlt} className="w-full h-full object-contain" />
            )}
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
              {project.badge}
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
                已实现内容
              </h2>
              <div className="space-y-8">
                {project.features.map((feature) => (
                  <div key={feature.title} className="group">
                    <h3 className="text-base font-semibold text-[#1a1a2e] mb-2 flex items-center gap-3">
                      <span className="text-black/10 group-hover:text-black/25 transition-colors duration-300">•</span>
                      {feature.title}
                    </h3>
                    <p className="text-black/40 text-sm leading-relaxed pl-6">
                      {feature.description}
                    </p>
                  </div>
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
                {project.notes.map((note) => (
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

      {project.futurePlans && (
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
              {project.futurePlans.map((plan, index) => (
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
      )}

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

export default ProjectDetail;
