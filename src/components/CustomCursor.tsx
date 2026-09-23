import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('[data-cursor]') as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        setCursorText(interactiveEl.getAttribute('data-cursor') || '');
      } else {
        const buttonOrLink = target?.closest('a, button, [role="button"]') as HTMLElement | null;
        if (buttonOrLink) {
          setIsHovered(true);
          setCursorText('');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#27140b] bg-[#27140b]/15 transition-transform duration-150 ease-out flex items-center justify-center text-[10px] font-mono tracking-widest text-[#27140b] font-extrabold uppercase backdrop-blur-[3px] ${
          isHovered ? 'w-20 h-20 -ml-10 -mt-10 bg-[#27140b] text-[#fef3c7] border-[#27140b] shadow-[0_0_25px_rgba(39,20,11,0.4)]' : 'w-4 h-4 -ml-2 -mt-2'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0px)`
        }}
      >
        {isHovered && cursorText && (
          <span className="animate-fade-in px-1 text-center leading-tight">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
