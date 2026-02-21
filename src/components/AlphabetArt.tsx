import React, { useState } from 'react';
import { motion } from 'motion/react';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export const AlphabetArt = () => {
  const [selectedLetter, setSelectedLetter] = useState('M');

  return (
    <div className="bg-white/50 p-6 rounded-3xl border-4 border-muertos-purple/20 shadow-xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-4 text-muertos-purple">挑選一個西語字母</h3>
          <div className="grid grid-cols-7 sm:grid-cols-9 gap-1">
            {LETTERS.map((l) => (
              <button
                key={l}
                onClick={() => setSelectedLetter(l)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${
                  selectedLetter === l 
                    ? 'bg-muertos-purple text-white scale-110 shadow-md' 
                    : 'bg-white text-stone-400 hover:bg-muertos-purple/10'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="w-48 h-48 bg-white rounded-2xl border-4 border-dashed border-muertos-purple/30 flex items-center justify-center relative overflow-hidden">
          <motion.span
            key={selectedLetter}
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            className="text-9xl font-bold text-muertos-purple select-none"
            style={{
              textShadow: '4px 4px 0px #F27D26, 8px 8px 0px #FF0080'
            }}
          >
            {selectedLetter}
          </motion.span>
          
          {/* Decorative elements around the letter */}
          <div className="absolute top-2 left-2 text-muertos-orange opacity-40">✿</div>
          <div className="absolute bottom-2 right-2 text-muertos-pink opacity-40">✿</div>
          <div className="absolute top-2 right-2 text-muertos-yellow opacity-40">★</div>
          <div className="absolute bottom-2 left-2 text-muertos-yellow opacity-40">★</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-stone-500 italic text-center">
        提示：在墨西哥，藝術家會用豐富的幾何圖形裝飾字母！
      </p>
    </div>
  );
};
