import { motion } from 'motion/react';
import { GraduationCap, Star, BookOpen } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const skills = [
  'Vibe Coding',
  'Prompt 设计与优化',
  'AI 模型 / 工具选型与测试',
  '产品原型与需求拆解',
];

const certificates = [
  { name: '大学英语四级', code: 'CET-4' },
  { name: '大学德语四级', code: 'PHD-4' },
];

const courses = [
  '人工智能应用',
  '商务德语',
  '商务 ICT',
  '德国概况',
  '跨文化交际',
  '国际市场营销',
  '体育与健康（网球）',
];

export default function EducationSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="w-4 h-4 text-black/20" strokeWidth={1.5} />
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#1a1a2e] tracking-tight"
              style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
            >
              教育背景
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-16 pb-16 border-b border-black/[0.06]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#1a1a2e]">深圳职业技术大学</h3>
                <p className="text-black/60 mt-2 text-base font-medium">应用德语专业</p>
              </div>
              <span className="text-xs text-black/25 mt-3 sm:mt-0 tracking-[0.1em] uppercase">
                2024.09 - 2027.06
              </span>
            </div>

            <p className="text-base text-black/60 leading-relaxed mb-6 max-w-3xl">
              应用德语训练了我的跨文化沟通、信息整合和表达能力，也让我更习惯从用户视角理解问题。
              结合自学的 AI 工程实践，我把语言学习、内容理解和产品设计连接起来，形成了自己的复合型方向。
            </p>

            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <span className="text-xs text-black/40 uppercase tracking-[0.15em] block mb-1">学业成绩</span>
                <span className="text-black/80 text-base font-medium">GPA 3.7 / 4.0</span>
              </div>
              <div>
                <span className="text-xs text-black/40 uppercase tracking-[0.15em] block mb-1">专业排名</span>
                <span className="text-black/80 text-base font-medium">前 5%</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-black/25 uppercase tracking-[0.15em] mb-5">核心课程</p>
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <motion.span
                    key={course}
                    className="px-4 py-2 rounded-full text-sm text-black/40 bg-black/[0.03] hover:bg-black/[0.08] transition-colors duration-300 cursor-default"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={0.3}>
            <div className="flex items-center gap-3 mb-10">
              <Star className="w-4 h-4 text-black/20" strokeWidth={1.5} />
              <h2
                className="text-2xl font-semibold text-[#1a1a2e] tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
              >
                核心技能
              </h2>
            </div>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-4 group cursor-default"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-black/10 group-hover:text-black/25 transition-colors duration-300">•</span>
                  <span className="text-black/70 text-base group-hover:text-black/90 transition-colors duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex items-center gap-3 mb-10">
              <BookOpen className="w-4 h-4 text-black/20" strokeWidth={1.5} />
              <h2
                className="text-2xl font-semibold text-[#1a1a2e] tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Noto Serif SC', serif" }}
              >
                证书与语言
              </h2>
            </div>
            <div className="space-y-0">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.code}
                  className="flex items-center gap-6 py-5 border-b border-black/[0.04] group cursor-default"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-xs text-black/30 font-mono tracking-[0.1em] uppercase w-12">
                    {cert.code}
                  </span>
                  <span className="text-[#1a1a2e] text-base font-semibold group-hover:text-black transition-colors duration-300">
                    {cert.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
