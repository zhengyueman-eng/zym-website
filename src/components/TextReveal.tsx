import { motion, type Variants } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'word' | 'character';
}

export default function TextReveal({ 
  text, 
  className = '', 
  delay = 0,
  type = 'word' 
}: TextRevealProps) {
  const items = type === 'word' ? text.split(' ') : text.split('');
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: type === 'word' ? 0.12 : 0.03, 
        delayChildren: delay 
      },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ marginRight: type === 'word' ? '0.3em' : '0' }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}
