import { motion } from 'motion/react';
import { Briefcase, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const experiences = [
  {
    company: '深圳慧通商务有限公司（华为全资子公司）',
    role: '实习生 | 门店服务与用户沟通',
    period: '2024.03 - 2024.06',
    highlights: [
      '接受华为产品与销售政策培训，向中外用户介绍华为各类产品参数，并结合使用场景进行个性化推荐。',
      '对接门店 300+ 售后需求，通过用户沟通初步判断问题类型，协助售后按紧急度分流，并根据不同 SOP 提供咨询与答疑。',
      '在售后系统中提报需求订单，准确描述设备情况，持续跟踪服务进度并传递用户诉求。',
      '负责门店取机讲解、维修方案说明、服务政策解释和定时回访，提升用户满意度。',
      '参与投诉处理和店面管理，快速响应用户问题，协助整理库存、样品陈列与门店环境。',
    ],
  },
];

const campusExperiences = [
  {
    title: '深职大交通安全协会会长 & 商外学院德语社副社长',
    period: '2025.09 - 至今',
    description:
      '负责社团运营管理、年度活动计划和 230 名成员管理；组织招新、宣讲、面试与入社全流程；策划特色活动并对接团管理中心和指导老师，提升社团活跃度与校园影响力。',
  },
  {
    title: '深职大教科文亚非中心学生助理',
    period: '2025.09 - 至今',
    description:
      '参与国际会议筹备、接待晚会和会议室布置，协助嘉宾信息核对与联络；负责日常行政支持、文书处理、翻译、文档整理与校订工作。',
  },
  {
    title: '深圳高校互选课（德语基础）学生助教',
    period: '2025.09 - 至今',
    description:
      '根据课程内容采购或制作教具与教案材料；跟进教学计划、收集整理作业并协助批改；对接各高校选课同学，发布上课安排与注意事项。',
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal className="mb-20">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <Briefcase className="w-4 h-4 text-black/20" strokeWidth={1.5} />
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#1a1a2e] tracking-tight"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              实习经历
            </h2>
          </div>
        </ScrollReveal>

        {experiences.map((exp, index) => (
          <ScrollReveal key={exp.company} delay={index * 0.2}>
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
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-4 text-black/70 leading-relaxed text-base">
                    <span className="text-black/25 mt-1.5 shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal className="mb-12 mt-24">
          <div className="flex flex-col items-center text-center gap-4 mb-12">
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
            <ScrollReveal key={item.title} delay={index * 0.15}>
              <motion.div
                className="group cursor-default"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-[#1a1a2e] group-hover:text-black transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-xs text-black/25 tracking-[0.1em] uppercase">
                    {item.period}
                  </span>
                </div>
                <p className="text-black/60 leading-relaxed text-base">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
