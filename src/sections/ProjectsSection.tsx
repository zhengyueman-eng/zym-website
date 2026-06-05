import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const projects = [
  {
    id: 'ai-video-learning',
    title: '沉浸式 AI 视频学习外语网站',
    subtitle: 'SaaS Demo / Web Application',
    description: '通过 Vibe Coding 构建的 AI 驱动型外语学习应用。针对传统视频学习工具存在查词割裂、缺乏语境解析、全屏体验差等痛点，打造"视频即教材"的无缝沉浸式学习环境。查词响应从 3 秒优化至 200ms，支持 25,000+ 词量本地词库实时解析，实现视频与 AI 解析的毫秒级同步。',
    tags: ['MVP 搭建', 'AI Agent', '交互原型'],
    techStack: ['React', 'TypeScript', 'FFmpeg', 'DeepSeek API', '阿里云 OSS/NLS'],
    bgGradient: 'from-[#1a1a2e] via-[#2d2b55] to-[#1a1a2e]',
    accentColor: 'bg-indigo-500/20',
  },
  {
    id: 'youtube-plugin',
    title: 'AI 学语言 · 视频插件',
    subtitle: 'YouTube Learning Assistant',
    description: '通过 Vibe Coding 构建的浏览器插件。利用大模型与轻量插件架构，将外部视频"教材化"。支持一键获取逐句翻译、重点词汇解析、语法点拆解三大 AI 输出。插件化架构实现轻量级部署，支持 YouTube 全站点兼容，单句解析响应时间 < 500ms。',
    tags: ['产品思维', '浏览器拓展', '需求拆解'],
    techStack: ['Chrome Extension', 'JavaScript', '智谱 GLM', 'DeepSeek API'],
    bgGradient: 'from-[#1a1a2e] via-[#1e3a3a] to-[#1a1a2e]',
    accentColor: 'bg-emerald-500/20',
  },
];

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 标题 */}
        <ScrollReveal className="mb-20">
          <div className="max-w-2xl">
            <motion.p 
              className="text-xs text-black/30 tracking-[0.2em] uppercase mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Selected Works
            </motion.p>
            <h2 
              className="text-4xl sm:text-5xl font-semibold text-[#1a1a2e] tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              AI Coding<br />动手能力展示
            </h2>
          </div>
        </ScrollReveal>

        {/* 项目列表 - Apple 风格大图 */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <motion.div
                onClick={() => navigate(`/project/${project.id}`)}
                className="group relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* 渐变背景 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`} />
                
                {/* 装饰性光晕 */}
                <div className={`absolute top-1/4 right-1/4 w-64 h-64 ${project.accentColor} rounded-full blur-[100px] opacity-60`} />
                <div className={`absolute bottom-1/4 left-1/4 w-48 h-48 ${project.accentColor} rounded-full blur-[80px] opacity-40`} />

                {/* 网格纹理 */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                  }}
                />

                {/* 悬停时的额外遮罩 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                {/* 内容 */}
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                  <div className="max-w-xl">
                    <motion.p 
                      className="text-xs text-white/40 tracking-[0.15em] uppercase mb-3 font-light"
                    >
                      {project.subtitle}
                    </motion.p>
                    <h3 
                      className="text-2xl lg:text-4xl font-semibold text-white mb-4 tracking-tight leading-tight transition-transform duration-500 group-hover:translate-x-2"
                      style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-4 line-clamp-2 text-sm lg:text-base font-light">
                      {project.description}
                    </p>
                    {/* 技术栈标签 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-[10px] text-white/50 bg-white/5 border border-white/10 tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-white/40 tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-white/40">
                        <ArrowUpRight className="w-5 h-5 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 边框光效 */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/0 group-hover:border-white/10 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
