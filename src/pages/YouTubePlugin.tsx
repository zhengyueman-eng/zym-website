import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Sparkles, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const YouTubePlugin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-hd-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      >
        <button
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-hd-muted hover:text-hd-orange transition-colors mb-8 font-bold"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">返回首页</span>
        </button>

        <div className="bg-hd-card rounded-[2.5rem] shadow-[6px_6px_0px_rgba(138,115,99,0.15)] border-[3px] border-dashed border-hd-border overflow-hidden">
          <div className="aspect-video w-full bg-[#3A3028] flex items-center justify-center">
            <img
              src="/demo-photo.png"
              alt="AI学语言 · 视频插件功能演示"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-8 sm:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-hd-orange" />
                <h1 className="text-2xl sm:text-3xl font-bold text-hd-heading">
                  AI学语言 · YouTube语言学习助手
                  <span className="ml-3 text-base font-bold text-hd-orange bg-hd-orange-light px-3 py-1 rounded-full border-2 border-hd-orange shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">
                    V1.0 拓展Demo 以开发者模式加载
                  </span>
                </h1>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-hd-orange-lighter rounded-[2rem] p-6 sm:p-8 border-[3px] border-dashed border-hd-orange-light shadow-[4px_4px_0px_rgba(138,115,99,0.12)]"
              >
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-hd-orange" />
                  <h2 className="text-xl font-bold text-hd-heading">当前已实现功能</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-orange-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-orange rounded-full"></span>
                      一键分析视频字幕
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      在 YouTube 视频页面点击&ldquo;AI学语言&rdquo;按钮，自动抓取当前视频字幕。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-amber-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-amber rounded-full"></span>
                      三模块 AI 智能解析
                    </h3>
                    <ul className="text-hd-body text-sm leading-relaxed space-y-1.5 mt-2 font-medium">
                      <li>&bull; <strong>句子翻译</strong>：提供准确、通顺的中文翻译。</li>
                      <li>&bull; <strong>重点单词/词组解析</strong>：提取关键词，标注词性、中文释义及用法。</li>
                      <li>&bull; <strong>语法分析</strong>：解析介词用法、动词变位、固定搭配等语法现象。</li>
                    </ul>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-amber-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-amber rounded-full"></span>
                      多模型自由切换
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      支持智谱 GLM-4.7-Flash（完全免费）、DeepSeek-V3.2（高性价比）两种 AI 模型，用户可在设置中自行选择。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-rose border-hd-rose/30 shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-rose rounded-full"></span>
                      API Key 本地存储
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      用户输入的密钥通过 chrome.storage.sync 安全保存，支持多模型独立配置。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-pink/30 shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-pink rounded-full"></span>
                      缓存机制
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      相同字幕文本的分析结果自动缓存 1 小时，避免重复调用，节省成本与时间。
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-hd-purple-lighter rounded-[2rem] p-6 sm:p-8 border-[3px] border-dashed border-hd-purple-light shadow-[4px_4px_0px_rgba(138,115,99,0.12)]"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-hd-purple" />
                  <h2 className="text-xl font-bold text-hd-heading">未来最终版规划</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-purple-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-purple rounded-full"></span>
                      多平台支持
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      从 YouTube 扩展到 TikTok、Bilibili、Netflix 等流媒体网站，覆盖更广的外语学习场景。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-purple-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-purple rounded-full"></span>
                      实时双语字幕
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      在视频播放时动态生成并叠加双语字幕，无需点击按钮即可边看边学。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-blue-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-blue rounded-full"></span>
                      生词本与复习功能
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      自动收集解析过的重点词汇，生成记忆卡片或导出 Anki 牌组，支持定期复习提醒。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-blue-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-blue rounded-full"></span>
                      学习进度追踪
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      记录用户分析过的视频、掌握的知识点数量，生成学习报告与可视化图表。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-cyan/30 shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-cyan rounded-full"></span>
                      自定义提示词
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      允许用户修改 AI 分析提示词，定制解析风格（例如更简单/更学术的讲解）。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-teal-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-teal rounded-full"></span>
                      一键导出笔记
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      将每次分析的翻译、词汇、语法笔记导出为 Markdown、PDF 或 Notion 格式。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default YouTubePlugin;