import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Rocket, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
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
          className="group flex items-center gap-2 text-hd-muted hover:text-hd-blue transition-colors mb-8 font-bold"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">返回首页</span>
        </button>

        <div className="bg-hd-card rounded-[2.5rem] shadow-[6px_6px_0px_rgba(138,115,99,0.15)] border-[3px] border-dashed border-hd-border overflow-hidden">
          <div className="aspect-video w-full bg-[#3A3028]">
            <video 
              className="w-full h-full object-contain"
              controls
              playsInline
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
          </div>

          <div className="p-8 sm:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-hd-blue" />
                <h1 className="text-2xl sm:text-3xl font-bold text-hd-heading">
                  沉浸式 AI 视频外语学习平台
                  <span className="ml-3 text-base font-bold text-hd-blue bg-hd-blue-light px-3 py-1 rounded-full border-2 border-hd-blue shadow-[2px_2px_0px_rgba(138,115,99,0.1)]">
                    V1.0 Demo 本地运行
                  </span>
                </h1>
              </div>
              <p className="text-hd-body leading-relaxed text-lg font-medium">
                一款通过 <span className="font-bold text-hd-blue">Vibe Coding（自然语言驱动开发）</span> 独立构建的 AI 辅助外语学习 Web 应用。通过自动化音视频流处理与大模型语境分析，彻底改变传统&ldquo;查词割裂、缺乏语境&rdquo;的观影学习体验。
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-hd-blue-lighter rounded-[2rem] p-6 sm:p-8 border-[3px] border-dashed border-hd-blue-light shadow-[4px_4px_0px_rgba(138,115,99,0.12)]"
              >
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle className="w-5 h-5 text-hd-blue" />
                  <h2 className="text-xl font-bold text-hd-heading">当前已实现功能：全栈闭环与沉浸式体验</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-blue-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-blue rounded-full"></span>
                      云端自动化字幕生成
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      支持本地视频（MP4等）上传，后端自动执行 FFmpeg 音频分离，并静默对接阿里云 OSS 与 NLS（智能语音交互）引擎，毫秒级返回带精确时间戳的字幕流。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-purple-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-purple rounded-full"></span>
                      毫秒级高性能查词算法
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      内置 25,000 词量本地高性能词库，自研词根还原（Lemmatization）算法，完美解决外语中动词时态、名词复数变形导致的查词失败问题。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-blue-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-blue rounded-full"></span>
                      DeepSeek 语境家教解析
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      告别死板的机器翻译。前端实时捕获用户点击的&ldquo;生词 + 当前整句字幕&rdquo;，通过后端 Prompt 链调动 DeepSeek API，在精美的毛玻璃弹窗中给出结合当前电影画面的深度词汇用法解析。
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-hd-orange-lighter rounded-[2rem] p-6 sm:p-8 border-[3px] border-dashed border-hd-orange-light shadow-[4px_4px_0px_rgba(138,115,99,0.12)]"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-hd-orange" />
                  <h2 className="text-xl font-bold text-hd-heading">未来规划功能：将从&ldquo;本地视频工具&rdquo;进化为&ldquo;跨平台的 Serverless 内容学习聚合体&rdquo;</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-orange-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-orange rounded-full"></span>
                      全网链接解析（首发接入 YouTube）
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      告别繁琐的本地上传。用户只需粘贴 YouTube 视频链接，后端即可通过 yt-dlp 提取音源进行解析，前端通过 IFrame API 实现无缝播放，打通无限内容库。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-amber-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-amber rounded-full"></span>
                      多模型动态路由与本地缓存
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      支持用户在 MiniMax、智谱 GLM 等多款 AI 模型间自由切换；通过前端 localStorage 或 Chrome Storage 同步配置，实现成本（性价比）与解析质量的完美平衡。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-amber-light shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-amber rounded-full"></span>
                      原生多轨字幕无感抓取
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      针对自带字幕的流媒体（如 YouTube .vtt 格式），系统将优先执行毫秒级原生抓取，仅在无字幕状态下调用阿里云识别，大幅降低 API 运营成本。
                    </p>
                  </div>
                  <div className="bg-hd-card/70 rounded-xl p-5 border-[2.5px] border-dashed border-hd-rose border-hd-rose/30 shadow-[2px_2px_0px_rgba(138,115,99,0.08)]">
                    <h3 className="font-bold text-hd-heading mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-hd-rose rounded-full"></span>
                      个人学习资产云端化
                    </h3>
                    <p className="text-hd-body text-sm leading-relaxed font-medium">
                      上线云端生词本与笔记同步功能，支持将单部电影的生词、AI 语境解析一键导出为&ldquo;PDF 专属单词表&rdquo;或导入 Anki 记忆库。
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

export default ProjectDetail;