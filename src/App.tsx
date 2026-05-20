import { useState, useEffect, useRef, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, GraduationCap, Code, Award, Mail, Phone, MapPin, ChevronRight, BookOpen, Star, Menu, X, ArrowUpRight, Sparkles, Heart, Cloud } from 'lucide-react';
import ProjectDetail from './pages/ProjectDetail';
import YouTubePlugin from './pages/YouTubePlugin';

const TABS = [
  { id: 'about', label: '个人简介', icon: User },
  { id: 'projects', label: 'AI 项目', icon: Code },
  { id: 'experience', label: '主要经历', icon: Briefcase },
  { id: 'education', label: '教育&技能', icon: GraduationCap },
];

const Avatar = () => {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const formats = ['/avatar.png', '/avatar.jpg', '/avatar.jpeg'];
    
    const tryLoadImage = (url: string) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(new Error(`Failed to load ${url}`));
        img.src = url;
      });
    };

    const detectAvatar = async () => {
      for (const format of formats) {
        try {
          const url = await tryLoadImage(format);
          if (isMounted) {
            setAvatarSrc(url);
            setLoading(false);
            return;
          }
        } catch (e) {
          continue;
        }
      }
      if (isMounted) setLoading(false);
    };

    detectAvatar();

    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem] bg-hd-border-light flex items-center justify-center shadow-inner border-[3px] border-dashed border-hd-border animate-pulse" />;
  }

  if (avatarSrc) {
    return (
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem] overflow-hidden shadow-[4px_4px_0px_rgba(138,115,99,0.2)] border-[3px] border-dashed border-hd-border shrink-0 group relative rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
        <img 
          src={avatarSrc} 
          alt="郑月满" 
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.5]"
          style={{ objectPosition: '48% 45%', transform: 'scale(1.42)' }}
        />
      </div>
    );
  }
  
  return (
    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem] bg-hd-orange-lighter flex items-center justify-center shadow-[4px_4px_0px_rgba(138,115,99,0.2)] border-[3px] border-dashed border-hd-border transition-transform duration-300 hover:-translate-y-1 group relative overflow-hidden shrink-0 rotate-[1deg] hover:rotate-0">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-300"></div>
      <span className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-hd-blue drop-shadow-sm select-none">满</span>
    </div>
  );
}

const AboutSection = () => (
  <div className="space-y-6">
    <div className="bg-hd-card rounded-[2.5rem] p-8 sm:p-10 shadow-[4px_4px_0px_rgba(138,115,99,0.15)] border-[3px] border-dashed border-hd-border flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">
       <Avatar />
       <div className="flex-1 text-center md:text-left">
         <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border-[2.5px] border-hd-border-warm bg-hd-orange-lighter mb-6 shadow-[3px_3px_0px_rgba(138,115,99,0.15)]">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hd-orange opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-hd-orange"></span>
           </span>
           <span className="text-hd-text font-bold text-[16px] tracking-wide">AI领域的探索者 · 跨界自学实践者</span>
           <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-hd-muted rotate-45 ml-1"></div>
         </div>
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-hd-heading mb-4 tracking-tight">郑月满</h1>
         <p className="text-hd-body mb-8 leading-relaxed max-w-2xl text-[15px] sm:text-base font-medium tracking-wide">
           深圳职业技术大学应用德语专业，GPA 3.7/4.0，专业排名前 5%；目前专注于用 AI 打破语言学习的壁垒，擅长用 Vibe Coding 与大模型解决传统学习痛点，具备 AI 工具选型能力与产品思维，独立开发了两款沉浸式 AI 外语学习工具 Demo，希望让 &ldquo;看视频即学外语&rdquo; 的无缝体验成为可能。
         </p>
         <div className="flex flex-wrap justify-center md:justify-start gap-4">
           <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-hd-orange-light border-[2.5px] border-hd-border-warm text-hd-text text-sm font-bold shadow-[3px_3px_0px_rgba(138,115,99,0.15)] hover:shadow-[4px_4px_0px_rgba(138,115,99,0.2)] transition-shadow"><Phone className="w-4 h-4 text-hd-orange"/> 15018046049</div>
           <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-hd-rose-light border-[2.5px] border-[#F1AEA8] text-hd-text text-sm font-bold shadow-[3px_3px_0px_rgba(138,115,99,0.15)] hover:shadow-[4px_4px_0px_rgba(138,115,99,0.2)] transition-shadow pointer-events-auto select-all"><Mail className="w-4 h-4 text-hd-rose"/> zhenbuyaozhuti@qq.com</div>
           <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-hd-orange-light border-[2.5px] border-hd-border-warm text-hd-text text-sm font-bold shadow-[3px_3px_0px_rgba(138,115,99,0.15)] hover:shadow-[4px_4px_0px_rgba(138,115,99,0.2)] transition-shadow"><MapPin className="w-4 h-4 text-hd-orange"/> 广东省深圳市</div>
         </div>
       </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const navigate = useNavigate();
  
  return (
  <div className="space-y-8">
    <h2 className="text-2xl font-extrabold text-hd-heading flex items-center gap-3 border-b-[3px] border-dashed border-hd-border-light pb-4">
      <div className="p-2 bg-hd-blue-lighter rounded-xl text-hd-blue"><Code className="w-6 h-6"/></div>
      AI Coding 动手能力展示
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Project 1 */}
      <div 
        onClick={() => navigate('/project/ai-video-learning')}
        className="group bg-hd-card rounded-[2.5rem] p-8 shadow-[4px_4px_0px_rgba(138,115,99,0.15)] transition-all duration-300 border-[3px] border-dashed border-hd-border flex flex-col h-full hover:-translate-y-1 relative overflow-hidden cursor-pointer"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-hd-blue to-hd-purple"></div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-hd-heading mb-1 group-hover:text-hd-blue transition-colors">沉浸式AI 视频学习外语网站</h3>
              <p className="text-sm font-bold text-hd-muted">SaaS Demo / Web Application</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-hd-blue-lighter flex items-center justify-center text-hd-blue group-hover:bg-hd-blue-light group-hover:text-hd-blue-dark transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <p className="text-hd-body leading-relaxed text-[15px] mb-6 font-medium">
            通过 <span className="font-bold text-hd-blue bg-hd-blue-light px-1.5 py-0.5 rounded">Vibe Coding</span> 构建的 AI 驱动型外语学习应用。针对传统视频学习工具存在查词割裂、缺乏语境解析、全屏体验差等痛点，本项目旨在通过 AI 大模型和云服务，打造一个<span className="font-bold text-hd-heading">&ldquo;视频即教材&rdquo;</span>的无缝沉浸式学习环境，实现从&ldquo;机械查词&rdquo;到&ldquo;AI 语境家教&rdquo;的跨越。
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t-[3px] border-dashed border-hd-border-light">
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-hd-blue-lighter text-hd-blue-dark border-2 border-hd-blue-light shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">MVP 搭建</span>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-hd-blue-lighter text-hd-blue-dark border-2 border-hd-blue-light shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">AI Agent</span>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-hd-blue-lighter text-hd-blue-dark border-2 border-hd-blue-light shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">交互原型</span>
        </div>
      </div>

      {/* Project 2 */}
      <div 
        onClick={() => navigate('/project/youtube-plugin')}
        className="group bg-hd-card rounded-[2.5rem] p-8 shadow-[4px_4px_0px_rgba(138,115,99,0.15)] transition-all duration-300 border-[3px] border-dashed border-hd-border flex flex-col h-full hover:-translate-y-1 relative overflow-hidden cursor-pointer"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-hd-orange to-hd-amber"></div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-hd-heading mb-1 group-hover:text-hd-orange transition-colors">AI 学语言 · 视频插件</h3>
              <p className="text-sm font-bold text-hd-muted">YouTube Learning Assistant</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-hd-orange-lighter flex items-center justify-center text-hd-orange group-hover:bg-hd-orange-light group-hover:text-hd-orange-dark transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <p className="text-hd-body leading-relaxed text-[15px] mb-6 font-medium">
            通过 <span className="font-bold text-hd-orange bg-hd-orange-light px-1.5 py-0.5 rounded">Vibe Coding</span> 构建的浏览器插件。利用大模型与轻量插件架构，将外部视频&ldquo;教材化&rdquo;。支持一键获取<span className="font-medium text-hd-heading">逐句翻译、重点词汇解析、语法点拆解</span>三大AI输出，满足免费/付费多模型自由切换，完成&ldquo;被动看字幕&rdquo;到&ldquo;主动学语境&rdquo;的跨越。
          </p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t-[3px] border-dashed border-hd-border-light">
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-hd-orange-lighter text-hd-orange-dark border-2 border-hd-orange-light shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">产品思维</span>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-hd-orange-lighter text-hd-orange-dark border-2 border-hd-orange-light shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">浏览器拓展</span>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-hd-orange-lighter text-hd-orange-dark border-2 border-hd-orange-light shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">需求拆解</span>
        </div>
      </div>
    </div>
  </div>
  );
};

const ExperienceSection = () => (
  <div className="space-y-12">
    <div>
      <h2 className="text-2xl font-extrabold text-hd-heading mb-8 flex items-center gap-3 border-b-[3px] border-dashed border-hd-border-light pb-4">
        <div className="p-2 bg-hd-blue-lighter rounded-xl text-hd-blue"><Briefcase className="w-6 h-6"/></div>
        实习与社会实践
      </h2>
      <div className="ml-4 border-l-[3px] border-dashed border-hd-blue-light space-y-10 pb-2">
         {/* Experience 1 */}
         <div className="relative pl-8">
           <div className="absolute w-4 h-4 bg-hd-blue rounded-full -left-[9px] top-1.5 ring-8 ring-hd-bg"></div>
           <div className="bg-hd-card p-6 rounded-[2rem] shadow-[4px_4px_0px_rgba(138,115,99,0.15)] border-[3px] border-dashed border-hd-border hover:shadow-[5px_5px_0px_rgba(138,115,99,0.2)] transition-shadow">
             <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
               <h3 className="text-lg font-bold text-hd-heading">华为授权服务中心</h3>
               <span className="text-sm font-bold text-hd-blue bg-hd-blue-light px-3 py-1.5 rounded-full border-2 border-hd-blue shadow-[2px_2px_0px_rgba(138,115,99,0.1)] whitespace-nowrap">2024.03 - 2024.06</span>
             </div>
             <p className="text-hd-muted font-bold mb-4 text-sm">服务体验顾问（实习生）</p>
             <ul className="space-y-3 text-hd-body text-[15px] leading-relaxed font-medium">
               <li className="flex gap-3">
                 <ChevronRight className="w-5 h-5 text-hd-blue shrink-0 mt-0.5" />
                 <span>负责客户售后问题进行预处理，日均高效处理 <b>30+</b> 用户售后咨询，提升客户满意度。</span>
               </li>
               <li className="flex gap-3">
                 <ChevronRight className="w-5 h-5 text-hd-blue shrink-0 mt-0.5" />
                 <span>协助团队提升问题解决效率，展现良好的沟通与信息分析能力，并具备<b>通过结构化提问挖掘需求本质</b>的产品共情能力。</span>
               </li>
             </ul>
           </div>
         </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-extrabold text-hd-heading mb-8 flex items-center gap-3 border-b-[3px] border-dashed border-hd-border-light pb-4">
        <div className="p-2 bg-hd-orange-lighter rounded-xl text-hd-orange"><Award className="w-6 h-6"/></div>
        校园经历
      </h2>
      <div className="ml-4 border-l-[3px] border-dashed border-hd-orange-light space-y-8 pb-4">
         
         <div className="relative pl-8">
           <div className="absolute w-3.5 h-3.5 bg-hd-orange rounded-full -left-[8px] top-2 ring-8 ring-hd-bg"></div>
           <h3 className="text-lg font-bold text-hd-heading mb-2">深职大交通安全协会会长&amp;商外学院德语社副社长</h3>
           <p className="text-hd-body text-[15px] leading-relaxed mb-4 font-medium">主要管理、服务社团和策划社团活动。曾成功组织规模超 200 人的校级安全科普活动。<span className="font-bold text-hd-blue bg-hd-blue-light px-1 py-0.5 rounded">擅长运用 AI 生图 / AI 视频生成等前沿工具</span>快速产出高质量活动宣传物料，实现数字化降本增效。</p>
         </div>
         
         <div className="relative pl-8">
           <div className="absolute w-3.5 h-3.5 bg-hd-orange rounded-full -left-[8px] top-2 ring-8 ring-hd-bg"></div>
           <h3 className="text-lg font-bold text-hd-heading mb-2">深职大教科文亚非中心学生助理</h3>
           <p className="text-hd-body text-[15px] leading-relaxed mb-1 font-medium">主要协助老师日常行政工作、参与会议筹备，协助联络嘉宾、协助翻译、整理文档与校订工作，同时具备基本的英语沟通能力。</p>
         </div>

         <div className="relative pl-8">
           <div className="absolute w-3.5 h-3.5 bg-hd-orange rounded-full -left-[8px] top-2 ring-8 ring-hd-bg"></div>
           <h3 className="text-lg font-bold text-hd-heading mb-2">专业课助教</h3>
           <p className="text-hd-body text-[15px] leading-relaxed mb-4 font-medium">负责协助老师处理教学安排事务，协助组织和联系深圳各高校同学来我校参加《高校互选课》</p>
         </div>

      </div>
    </div>
  </div>
);

const EducationSection = () => (
  <div className="space-y-10">
    <h2 className="text-2xl font-extrabold text-hd-heading mb-2 flex items-center gap-3 border-b-[3px] border-dashed border-hd-border-light pb-4">
       <div className="p-2 bg-hd-teal-lighter rounded-xl text-hd-teal"><GraduationCap className="w-6 h-6"/></div>
       教育背景
    </h2>
    <div className="bg-hd-card rounded-[2.5rem] p-8 shadow-[4px_4px_0px_rgba(138,115,99,0.15)] border-[3px] border-dashed border-hd-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-hd-teal-lighter rounded-bl-full -mr-10 -mt-10 transition-transform hover:scale-110"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-2 gap-2">
          <h3 className="text-2xl font-bold text-hd-heading">深圳职业技术大学</h3>
          <span className="text-sm font-bold text-hd-teal-dark bg-hd-teal-lighter px-3 py-1.5 rounded-full border-2 border-hd-teal-light shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">2024.09 - 2027.06</span>
        </div>
        <p className="text-lg font-bold text-hd-muted mb-6">应用德语专业</p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex flex-col bg-hd-orange-lighter px-4 py-2 rounded-xl border-[2.5px] border-hd-border-warm shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">
            <span className="text-xs text-hd-muted font-bold mb-0.5">学业成绩</span>
            <span className="text-hd-heading font-bold">GPA 3.7 / 4.0</span>
          </div>
          <div className="flex flex-col bg-hd-teal-lighter px-4 py-2 rounded-xl border-[2.5px] border-hd-teal-light shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">
            <span className="text-xs text-hd-muted font-bold mb-0.5">年级排名</span>
            <span className="text-hd-teal font-bold">专业排名前 5%</span>
          </div>
        </div>
        
        <div className="pt-6 border-t-[3px] border-dashed border-hd-border-light">
          <p className="text-sm font-bold text-hd-muted mb-4 flex items-center gap-2 uppercase tracking-wide">核心课程结构</p>
          <div className="flex flex-wrap gap-2.5">
            {['人工智能应用', '商务德语', '商务 ICT', '德国概况', '跨文化交际', '国际市场营销', '体育与健康（网球）'].map(c => 
              <span key={c} className="text-[13px] bg-hd-teal-lighter hover:bg-hd-teal-light hover:text-hd-teal-dark text-hd-body border-2 border-hd-teal-light px-3 py-1.5 rounded-lg transition-colors font-bold shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                {c}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-hd-heading flex items-center gap-3 border-b-[3px] border-dashed border-hd-border-light pb-4">
           <div className="p-2 bg-hd-purple-light rounded-xl text-hd-purple"><Star className="w-5 h-5"/></div>
           核心技能特长
        </h2>
        <div className="bg-hd-card rounded-[2.5rem] p-8 shadow-[4px_4px_0px_rgba(138,115,99,0.15)] border-[3px] border-dashed border-hd-border space-y-6">
           {[
             { name: 'Vibe Coding', pct: '95%', color: 'from-hd-blue to-hd-purple' },
             { name: 'Prompt Engineering', pct: '90%', color: 'from-hd-blue to-hd-blue-dark' },
             { name: 'AI 工具选型与对比', pct: '85%', color: 'from-hd-teal to-hd-teal-dark' },
             { name: '产品思维与需求拆解', pct: '85%', color: 'from-hd-orange to-hd-orange-dark' },
           ].map((skill, i) => (
             <div key={skill.name}>
               <div className="flex justify-between text-sm mb-2">
                 <span className="font-bold text-hd-heading">{skill.name}</span>
                 <span className="font-bold text-hd-muted">{skill.pct}</span>
               </div>
               <div className="h-2.5 w-full bg-hd-border-light rounded-full overflow-hidden border border-hd-border/20">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: skill.pct }}
                   transition={{ duration: 1, ease: 'easeOut', delay: i * 0.1 }}
                   className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                 />
               </div>
             </div>
           ))}
        </div>
      </div>

      <div className="space-y-6">
         <h2 className="text-2xl font-extrabold text-hd-heading flex items-center gap-3 border-b-[3px] border-dashed border-hd-border-light pb-4">
           <div className="p-2 bg-hd-rose-light rounded-xl text-hd-rose"><BookOpen className="w-5 h-5"/></div>
           语言与证书
        </h2>
        <div className="bg-hd-card rounded-[2.5rem] p-8 shadow-[4px_4px_0px_rgba(138,115,99,0.15)] border-[3px] border-dashed border-hd-border flex flex-col gap-4">
          <div className="flex items-center gap-4 p-4 rounded-[1.5rem] border-[2.5px] border-hd-border-light hover:border-hd-blue bg-hd-blue-lighter hover:bg-hd-blue-light/50 transition-colors shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
             <div className="w-12 h-12 rounded-[1rem] bg-hd-card shadow-[2px_2px_0px_rgba(138,115,99,0.1)] flex items-center justify-center text-hd-blue font-black text-lg shrink-0 border-[2.5px] border-hd-blue-light">En</div>
             <div>
               <p className="font-bold text-hd-heading text-lg mb-0.5">大学英语四级</p>
               <p className="text-sm font-bold text-hd-muted uppercase tracking-widest">CET-4</p>
             </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-[1.5rem] border-[2.5px] border-hd-border-light hover:border-hd-orange bg-hd-orange-lighter hover:bg-hd-orange-light/50 transition-colors shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
             <div className="w-12 h-12 rounded-[1rem] bg-hd-card shadow-[2px_2px_0px_rgba(138,115,99,0.1)] flex items-center justify-center text-hd-orange font-black text-lg shrink-0 border-[2.5px] border-hd-orange-light">De</div>
             <div>
               <p className="font-bold text-hd-heading text-lg mb-0.5">大学德语四级</p>
               <p className="text-sm font-bold text-hd-muted uppercase tracking-widest">PHD-4</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);

  const activeTab = TABS[activeTabIndex].id;

  const triggerTransition = () => {
    isTransitioning.current = true;
    setTimeout(() => { isTransitioning.current = false; }, 800);
  };

  const goToNext = useCallback(() => {
    setActiveTabIndex(prev => {
      if (prev < TABS.length - 1) {
        triggerTransition();
        setTimeout(() => window.scrollTo(0, 0), 50);
        return prev + 1;
      }
      return prev;
    });
  }, []);

  const goToPrev = useCallback(() => {
    setActiveTabIndex(prev => {
      if (prev > 0) {
        triggerTransition();
        setTimeout(() => window.scrollTo(0, 0), 50);
        return prev - 1;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) return;
      
      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 5;
      const isAtTop = window.scrollY <= 5;

      if (e.deltaY > 20 && isAtBottom) {
        goToNext();
      } else if (e.deltaY < -20 && isAtTop) {
        goToPrev();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning.current) return;
      const touchEndY = e.changedTouches[0].screenY;
      const delta = touchStartY.current - touchEndY;
      
      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 5;
      const isAtTop = window.scrollY <= 5;

      if (delta > 50 && isAtBottom) { 
        goToNext();
      } 
      else if (delta < -50 && isAtTop) { 
        goToPrev();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToNext, goToPrev]);

  const handleTabClick = (index: number) => {
    if (isTransitioning.current) return;
    triggerTransition();
    setActiveTabIndex(index);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Routes>
      <Route path="/project/ai-video-learning" element={<ProjectDetail />} />
      <Route path="/project/youtube-plugin" element={<YouTubePlugin />} />
      <Route path="*" element={
        <div className="min-h-screen bg-hd-bg font-sans selection:bg-hd-orange-light selection:text-hd-heading text-hd-text pb-20 overflow-x-hidden">
          {/* Background Decorations */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.6] z-0">
            <Star className="absolute top-[8%] left-[8%] text-hd-orange fill-hd-orange/20 w-8 h-8 rotate-[15deg]" strokeWidth={1.5} />
            <Star className="absolute top-[12%] right-[12%] text-hd-amber fill-hd-amber/30 w-10 h-10 -rotate-[12deg]" strokeWidth={1.5} />
            <Star className="absolute bottom-[25%] left-[10%] text-hd-purple fill-hd-purple/20 w-7 h-7 rotate-[25deg]" strokeWidth={1.5} />
            <Star className="absolute bottom-[35%] right-[8%] text-hd-violet fill-hd-violet/10 w-6 h-6 -rotate-[15deg]" strokeWidth={1.5} />
            <Cloud className="absolute top-[6%] left-[25%] text-hd-cyan fill-hd-cyan/30 w-16 h-16" strokeWidth={1.5} />
            <Cloud className="absolute top-[20%] right-[6%] text-hd-blue fill-hd-blue/30 w-20 h-20" strokeWidth={1.5} />
            <Heart className="absolute top-[30%] left-[5%] text-hd-rose fill-hd-rose/30 w-7 h-7 rotate-[-15deg]" strokeWidth={1.5} />
            <Heart className="absolute bottom-[20%] right-[12%] text-hd-pink fill-hd-pink/40 w-8 h-8 rotate-[25deg]" strokeWidth={1.5} />
            <Sparkles className="absolute top-[45%] left-[3%] text-hd-purple w-6 h-6" strokeWidth={1.5} />
          </div>

          {/* Header */}
          <header className="sticky top-0 z-50 bg-hd-card/70 backdrop-blur-xl border-b-[3px] border-dashed border-hd-border-light shadow-[0_2px_0px_rgba(138,115,99,0.08)]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative">
              <div className="text-xl sm:text-2xl font-black tracking-tighter text-hd-blue flex gap-1 items-center select-none">
                <span>Yueman.</span>Resume
              </div>
           
           {/* Desktop Nav */}
           <nav className="hidden md:flex items-center gap-2">
             {TABS.map((tab, index) => {
               const Icon = tab.icon;
               const isActive = activeTab === tab.id;
               return (
                 <button
                   key={tab.id}
                   onClick={() => handleTabClick(index)}
                   className={`px-5 py-2.5 rounded-xl flex items-center gap-2.5 text-[15px] font-bold transition-all duration-300 border-[2.5px] ${
                     isActive 
                       ? 'bg-hd-nav-active border-hd-border-warm text-hd-heading shadow-[3px_3px_0px_hd-border-warm] -translate-y-0.5' 
                       : 'border-transparent text-hd-muted hover:bg-hd-orange-lighter hover:text-hd-text hover:border-hd-border-light hover:shadow-[2px_2px_0px_rgba(138,115,99,0.1)]'
                   }`}
                 >
                   <Icon className={`w-4 h-4 ${isActive ? 'text-hd-orange' : ''}`} />
                   {tab.label}
                 </button>
               );
             })}
           </nav>

           {/* Mobile Toggle Menu */}
           <button 
             className="md:hidden p-2 rounded-[1rem] border-[2.5px] border-hd-border-light text-hd-text bg-hd-card shadow-[2px_2px_0px_rgba(138,115,99,0.1)] hover:bg-hd-orange-lighter active:scale-95 transition-all"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           >
             {isMobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
           </button>
        </div>
        
        {/* Mobile Navigation Panel */}
        <AnimatePresence>
           {isMobileMenuOpen && (
             <motion.div
               initial={{ height: 0, opacity: 0 }}
               animate={{ height: 'auto', opacity: 1 }}
               exit={{ height: 0, opacity: 0 }}
               className="md:hidden border-t-[3px] border-dashed border-hd-border-light bg-hd-card overflow-hidden shadow-[0_4px_0px_rgba(138,115,99,0.1)] absolute w-full left-0 origin-top"
             >
               <nav className="flex flex-col p-4 gap-2">
                 {TABS.map((tab, index) => {
                   const Icon = tab.icon;
                   const isActive = activeTab === tab.id;
                   return (
                     <button
                       key={tab.id}
                       onClick={() => handleTabClick(index)}
                       className={`px-5 py-4 rounded-[1.5rem] flex items-center gap-4 text-[16px] font-bold transition-all border-[2.5px] ${
                         isActive 
                           ? 'bg-hd-nav-active border-hd-border-warm text-hd-heading shadow-[3px_3px_0px_hd-border-warm]' 
                           : 'bg-hd-orange-lighter text-hd-text hover:bg-hd-orange-light border-transparent hover:border-hd-border-light'
                       }`}
                     >
                       <Icon className={`w-5 h-5 ${isActive ? 'text-hd-orange' : 'text-hd-muted'}`} />
                       {tab.label}
                     </button>
                   );
                 })}
               </nav>
             </motion.div>
           )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
             key={activeTab}
             initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
             animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
             transition={{ duration: 0.25, ease: "easeInOut" }}
             className="w-full"
          >
            {activeTab === 'about' && <AboutSection />}
            {activeTab === 'projects' && <ProjectsSection />}
            {activeTab === 'experience' && <ExperienceSection />}
            {activeTab === 'education' && <EducationSection />}
          </motion.div>
        </AnimatePresence>
      </main>
        </div>
      } />
    </Routes>
  );
}