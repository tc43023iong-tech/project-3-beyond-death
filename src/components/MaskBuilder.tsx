import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flower2, Sparkles, Heart, Star, Trash2 } from 'lucide-react';

const STICKERS = [
  { icon: Flower2, color: 'text-muertos-orange', label: '花朵' },
  { icon: Sparkles, color: 'text-muertos-yellow', label: '星星' },
  { icon: Heart, color: 'text-muertos-pink', label: '愛心' },
  { icon: Star, color: 'text-muertos-purple', label: '光芒' },
];

interface StickerInstance {
  id: number;
  type: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export const MaskBuilder = () => {
  const [stickers, setStickers] = useState<StickerInstance[]>([]);
  const [selectedColor, setSelectedColor] = useState('#9D50BB');

  const addSticker = (typeIndex: number) => {
    const newSticker: StickerInstance = {
      id: Date.now(),
      type: typeIndex,
      x: 40 + Math.random() * 20,
      y: 40 + Math.random() * 20,
      scale: 1,
      rotation: Math.random() * 360,
    };
    setStickers([...stickers, newSticker]);
  };

  const clearStickers = () => setStickers([]);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-6 bg-white/50 rounded-3xl border-4 border-muertos-orange/20 shadow-xl">
      {/* Canvas Area */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 bg-stone-50 rounded-full border-8 border-muertos-purple/30 flex items-center justify-center overflow-hidden shadow-inner">
        {/* Skull Base */}
        <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 drop-shadow-lg">
          <path 
            d="M50 5 C25 5 10 25 10 50 C10 70 20 85 35 90 L35 95 L65 95 L65 90 C80 85 90 70 90 50 C90 25 75 5 50 5 Z" 
            fill="white" 
            stroke={selectedColor} 
            strokeWidth="2"
          />
          {/* Eyes */}
          <circle cx="32" cy="42" r="10" fill={selectedColor} opacity="0.1" />
          <circle cx="68" cy="42" r="10" fill={selectedColor} opacity="0.1" />
          <circle cx="32" cy="42" r="5" fill="#333" />
          <circle cx="68" cy="42" r="5" fill="#333" />
          {/* Nose */}
          <path d="M46 58 L50 52 L54 58" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          {/* Mouth */}
          <path d="M35 75 Q50 85 65 75" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          <line x1="42" y1="77" x2="42" y2="81" stroke="#333" strokeWidth="1" />
          <line x1="50" y1="79" x2="50" y2="83" stroke="#333" strokeWidth="1" />
          <line x1="58" y1="77" x2="58" y2="81" stroke="#333" strokeWidth="1" />
        </svg>

        {/* Stickers Layer */}
        <AnimatePresence>
          {stickers.map((s) => {
            const StickerIcon = STICKERS[s.type].icon;
            return (
              <motion.div
                key={s.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute cursor-move"
                style={{ 
                  left: `${s.x}%`, 
                  top: `${s.y}%`,
                  transform: `rotate(${s.rotation}deg)`
                }}
              >
                <StickerIcon className={STICKERS[s.type].color} size={32} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-6 w-full md:w-48">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">選擇顏色</h3>
          <div className="flex gap-2 flex-wrap">
            {['#9D50BB', '#F27D26', '#FF0080', '#FFD700'].map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${selectedColor === c ? 'border-stone-800 scale-110' : 'border-transparent'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3">裝飾貼紙</h3>
          <div className="grid grid-cols-2 gap-2">
            {STICKERS.map((s, i) => (
              <button
                key={i}
                onClick={() => addSticker(i)}
                className="p-3 bg-white rounded-xl border-2 border-stone-100 hover:border-muertos-orange hover:bg-muertos-orange/5 transition-colors flex items-center justify-center"
              >
                <s.icon className={s.color} size={24} />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={clearStickers}
          className="mt-4 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-stone-100 text-stone-500 hover:bg-red-50 hover:text-red-500 transition-colors text-sm font-medium"
        >
          <Trash2 size={16} />
          清除全部
        </button>
      </div>
    </div>
  );
};
