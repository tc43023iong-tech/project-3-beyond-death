import React, { useState } from 'react';
import { motion } from 'motion/react';

const FOODS = [
  { id: 'taco', name: 'Taco', zh: '塔可餅', emoji: '🌮', color: 'bg-orange-100 border-orange-200' },
  { id: 'churros', name: 'Churros', zh: '吉拿棒', emoji: '🥨', color: 'bg-yellow-100 border-yellow-200' },
  { id: 'pan', name: 'Pan de Muerto', zh: '亡靈麵包', emoji: '🍞', color: 'bg-purple-100 border-purple-200' },
  { id: 'tamales', name: 'Tamales', zh: '玉米粽', emoji: '🫔', color: 'bg-emerald-100 border-emerald-200' },
];

export const FoodGallery = () => {
  const [selected, setSelected] = useState(FOODS[0]);

  return (
    <div className="bg-white/50 p-6 rounded-3xl border-4 border-muertos-pink/20 shadow-xl">
      <h3 className="text-lg font-bold mb-6 text-muertos-pink">美食標籤 (Comida)</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {FOODS.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelected(f)}
            className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
              selected.id === f.id 
                ? `${f.color} scale-105 shadow-lg ring-2 ring-muertos-pink ring-offset-2` 
                : 'bg-white border-stone-100 hover:border-stone-200 grayscale-[0.5]'
            }`}
          >
            <span className="text-4xl">{f.emoji}</span>
            <span className="text-xs font-bold uppercase tracking-tight">{f.name}</span>
          </button>
        ))}
      </div>

      <motion.div 
        key={selected.id}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white p-6 rounded-2xl border-2 border-stone-100 flex items-center gap-6"
      >
        <div className="text-6xl">{selected.emoji}</div>
        <div>
          <h4 className="text-2xl font-bold text-stone-800">{selected.name}</h4>
          <p className="text-muertos-pink font-medium">{selected.zh}</p>
          <div className="mt-2 text-xs text-stone-400 max-w-xs">
            這是西班牙語系國家的傳統美食。在亡靈節期間，人們會準備這些食物來紀念祖先。
          </div>
        </div>
      </motion.div>
    </div>
  );
};
