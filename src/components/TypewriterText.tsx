import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  texts,
  className = '',
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseDuration = 1500,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentText = texts[currentIndex];

  const tick = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // 打字中
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else {
        // 打完，暂停一下开始删除
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // 删除中
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        // 删完，切换到下一个文本
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayText, currentText, isDeleting, isPaused, texts.length, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(
      tick,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-accent ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  );
}
