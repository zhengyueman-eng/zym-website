import { motion } from 'motion/react';
import { Briefcase, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const experiences = [
  {
    company: '深圳慧通商务有限公司（华为全资子公司）',
    role: '服务体验顾问实习生 | 用户运营方向',
    period: '2024.03 - 2024.06',
    highlights: [
      '用户洞察与需求挖掘：日均接待 30+ 用户咨询，通过结构化提问快速定位问题本质，建立用户需求分类标签体系（技术故障/功能咨询/使用指导/优化建议），沉淀 50+ 典型用户场景',
      '产品思维实践：针对用户反复咨询的共性问题，主动输出《高频问题自助排查指南》，降低同类问题重复咨询率约 30%；参与门店服务流程梳理，提出 2 项流程优化建议并被采纳',
      '数据驱动运营：建立个人服务台账，追踪问题解决闭环率、用户满意度等核心指标，连续 3 个月获得门店服务评分 Top 20%',
    ],
  },
];

const campusExperiences = [
  {
    title: '深职大交通安全协会会长 & 商外学院德语社副社长',
    description: '主导策划校级安全科普活动，覆盖 200+ 师生。运用 AI 生图/AI 视频生成工具（LiblibTV 平台、Lovart 平台、Image2、Nanobanana Pro）快速产出宣传物料，设计成本降低 60%，筹备周期从 2 周压缩至 5 天。',
  },
  {
    title: '深职大教科文亚非中心学生助理',
    description: '日常行政支持：值班、报刊收发、文件传递等；会议统筹协调：参与会议筹备，协助嘉宾联络，负责会议宾客信息审核；跨园区联络对接：协调西丽湖与留仙洞园区事务；文书处理与翻译：协助翻译、整理文档与校订工作。',
  },
  {
    title: '专业课助教',
    description: '协助老师安排上课事宜，联系深圳各高校选课同学；完成课程物料的采买与制作；负责同学的课后作业辅导与跟进。',
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 实习经历 */}
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-4 h-4 text-black/20" strokeWidth={1.5} />
            <h2 
              className="text-3xl sm:text-4xl font-semibold text-[#1a1a2e] tracking-tight"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              实习与社会实践
            </h2>
          </div>
        </ScrollReveal>

        {experiences.map((exp, index) => (
          <ScrollReveal key={index} delay={index * 0.2}>
            <div className="mb-16 pb-16 border-b border-black/[0.06]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1a2e]">{exp.company}</h3>
                  <p className="text-black/60 mt-1.5 text-base font-medium">{exp.role}</p>
                </div>
                <span className="text-xs text-black/25 mt-3 sm:mt-0 tracking-[0.1em] uppercase">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-4 text-black/70 leading-relaxed text-base">
                    <span className="text-black/25 mt-1.5 shrink-0">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}

        {/* 校园经历 */}
        <ScrollReveal className="mb-12 mt-24">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-4 h-4 text-black/20" strokeWidth={1.5} />
            <h2 
              className="text-3xl sm:text-4xl font-semibold text-[#1a1a2e] tracking-tight"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              校园经历
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-14">
          {campusExperiences.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                className="group cursor-default"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3 group-hover:text-black transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-black/60 leading-relaxed text-base">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
