import React from 'react';
import { Printer, Heart, Star, Flower2, Sparkles } from 'lucide-react';

export const PrintTemplate = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="relative p-8 bg-white text-black font-serif w-[210mm] min-h-[297mm] mx-auto border-2 border-dashed border-stone-300 overflow-hidden">
      {/* Faint Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 15 L45 15 L37 22 L40 32 L30 25 L20 32 L23 22 L15 15 L25 15 Z' fill='%23000'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
      }} />
      
      {/* Decorative Corner Flowers */}
      <div className="absolute top-0 left-0 p-4 opacity-10">
        <Flower2 size={120} className="rotate-12" />
      </div>
      <div className="absolute bottom-0 right-0 p-4 opacity-10">
        <Flower2 size={120} className="-rotate-12" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-2">¡Día de los Muertos!</h1>
          <p className="text-xl italic">亡靈節文化體驗學習單</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Side: Mask Template */}
          <div className="border-2 border-stone-200 p-6 rounded-2xl bg-white/80 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-stone-800 pb-1 flex items-center gap-2">
              <Sparkles size={18} /> 1. Máscara (面具設計)
            </h2>
            <div className="aspect-square border-2 border-stone-300 rounded-full flex items-center justify-center relative overflow-hidden bg-stone-50/50">
               {/* Simple Skull Outline for Coloring */}
               <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 opacity-20">
                  <path d="M50 5 C25 5 10 25 10 50 C10 70 20 85 35 90 L35 95 L65 95 L65 90 C80 85 90 70 90 50 C90 25 75 5 50 5 Z" fill="none" stroke="black" strokeWidth="2"/>
                  <circle cx="30" cy="40" r="8" fill="none" stroke="black" strokeWidth="2"/>
                  <circle cx="70" cy="40" r="8" fill="none" stroke="black" strokeWidth="2"/>
                  <path d="M45 55 L50 50 L55 55" fill="none" stroke="black" strokeWidth="2"/>
                  <path d="M35 75 Q50 85 65 75" fill="none" stroke="black" strokeWidth="2"/>
               </svg>
               <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-xs text-center px-8">
                  請在此畫出你的繽紛骷髏面具<br/>(Usa colores brillantes)
               </div>
            </div>
            <div className="mt-6 flex gap-3 justify-center">
               <div className="w-8 h-8 rounded-full border-2 border-stone-200 bg-purple-100 flex items-center justify-center text-[10px] text-stone-400">紫</div>
               <div className="w-8 h-8 rounded-full border-2 border-stone-200 bg-orange-100 flex items-center justify-center text-[10px] text-stone-400">橘</div>
               <div className="w-8 h-8 rounded-full border-2 border-stone-200 bg-pink-100 flex items-center justify-center text-[10px] text-stone-400">粉</div>
            </div>
          </div>

          {/* Right Side: Alphabet & Food */}
          <div className="space-y-8">
            <div className="border-2 border-stone-200 p-6 rounded-2xl bg-white/80 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 border-b-2 border-stone-800 pb-1 flex items-center gap-2">
                <Star size={18} /> 2. Letra (字母藝術)
              </h2>
              <div className="h-32 border-2 border-stone-300 rounded-xl flex items-center justify-center text-4xl font-bold text-stone-100 bg-stone-50/50">
                [ 字母區域 ]
              </div>
              <p className="text-xs mt-3 text-stone-500 italic">挑選一個西語字母並裝飾它！(Decora una letra)</p>
            </div>

            <div className="border-2 border-stone-200 p-6 rounded-2xl bg-white/80 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 border-b-2 border-stone-800 pb-1 flex items-center gap-2">
                <Heart size={18} /> 3. Comida (美食標籤)
              </h2>
              <div className="h-32 border-2 border-stone-300 rounded-xl flex items-center justify-center text-stone-200 italic bg-stone-50/50">
                [ 畫出你想吃的西語美食 ]
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 border-2 border-stone-300 rounded"></div>
                  <span className="font-bold">Taco</span> <span className="text-stone-400">(塔可餅)</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 border-2 border-stone-300 rounded"></div>
                  <span className="font-bold">Churros</span> <span className="text-stone-400">(吉拿棒)</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 border-2 border-stone-300 rounded"></div>
                  <span className="font-bold">Pan de Muerto</span> <span className="text-stone-400">(亡靈麵包)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-2 border-stone-100 flex justify-between items-end">
          <div className="space-y-3">
            <p className="text-sm font-bold">Nombre (姓名): __________________________</p>
            <p className="text-sm font-bold">Clase (班級): __________________________</p>
            <p className="text-sm font-bold">Fecha (日期): __________________________</p>
          </div>
          <div className="flex gap-6 opacity-20">
             <Flower2 size={32} />
             <Sparkles size={32} />
             <Heart size={32} />
          </div>
        </div>
      </div>
    </div>
  );
});

PrintTemplate.displayName = 'PrintTemplate';
