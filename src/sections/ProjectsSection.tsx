import { type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const projects = [
  {
    id: 'ai-video-learning',
    title: '外语学习 AI 视频助手',
    subtitle: 'AI Native / Video Learning Platform',
    description: '全屏无感查词与影视语境解析，把字幕提取、词汇解析和 AI 家教串成完整学习流程。',
    tags: ['AI 家教 Agent', '字幕解析', '产品原型'],
    techStack: ['React', 'TypeScript', 'FFmpeg'],
    mediaType: 'video',
    mediaSrc: '/demo-video.mp4',
    status: 'Demo',
  },
  {
    id: 'youtube-plugin',
    title: '外语学习视频插件',
    subtitle: 'Chrome Extension / YouTube Assistant',
    description: '面向 YouTube 外语学习场景，自动提取字幕并输出翻译、词汇解析和语法分析。',
    tags: ['浏览器插件', 'AI 分析', '学习效率'],
    techStack: ['Chrome Extension', 'JavaScript', 'GLM'],
    mediaType: 'image',
    mediaSrc: '/demo-photo.png',
    status: 'Plugin',
  },
  {
    id: 'gesture-magic',
    title: 'Gesture Magic · 手势交互网页',
    subtitle: 'Interactive Web App / Computer Vision',
    description: '用摄像头手势触发烟花、3D 爱心、拍照和小游戏，展示更有趣的前端互动体验。',
    tags: ['手势识别', 'WebGL', '互动体验'],
    techStack: ['React', 'Vite', 'Canvas'],
    mediaType: 'image',
    mediaSrc: '/gesture-magic-demo.png',
    status: '已上线',
    demoUrl: 'https://byztluna0918.cc.cd/',
  },
];

export default function ProjectsSection() {
  const navigate = useNavigate();

  const openDemo = (event: MouseEvent<HTMLAnchorElement>, url: string) => {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 lg:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal className="mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.p
              className="text-xs text-black/30 tracking-[0.2em] uppercase mb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Selected Projects
            </motion.p>
            <h2
              className="text-4xl sm:text-5xl font-semibold text-[#1a1a2e] tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              AI 项目与产品原型
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.article
                onClick={() => navigate(`/project/${project.id}`)}
                className="group h-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_18px_45px_rgba(20,20,35,0.06)] cursor-pointer transition-colors duration-300 hover:border-black/[0.12]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#11111a]">
                  {project.mediaType === 'video' ? (
                    <video
                      className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                      src={project.mediaSrc}
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={project.mediaSrc}
                      alt={`${project.title} 演示图`}
                      className="w-full h-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/8 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-[#1a1a2e] shadow-sm">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-white/90 text-[#1a1a2e] flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.7} />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[11px] text-black/35 tracking-[0.14em] uppercase mb-3">
                    {project.subtitle}
                  </p>
                  <h3
                    className="text-xl font-semibold text-[#1a1a2e] leading-snug mb-3"
                    style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-black/55 leading-relaxed min-h-[4.5rem]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-[11px] text-black/45 bg-black/[0.035] border border-black/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-black/[0.05] pt-5">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-black/38">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => openDemo(event, project.demoUrl)}
                        className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#1a1a2e] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-black"
                      >
                        打开演示
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.7} />
                      </a>
                    ) : (
                      <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-black/45 group-hover:text-black/70 transition-colors">
                        查看详情
                        <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.7} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
