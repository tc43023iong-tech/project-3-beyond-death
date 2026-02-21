import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Printer, FileDown, Flower2, Sparkles, Heart, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { MaskBuilder } from './components/MaskBuilder';
import { AlphabetArt } from './components/AlphabetArt';
import { FoodGallery } from './components/FoodGallery';
import { PrintTemplate } from './components/PrintTemplate';

export default function App() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Día-de-los-Muertos-Activity',
  });

  return (
    <div className="min-h-screen font-sans selection:bg-muertos-orange/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FDFCF0]/80 backdrop-blur-md border-b border-stone-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-muertos-orange p-2 rounded-xl shadow-lg rotate-3">
              <Flower2 className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-stone-800">Día de los Muertos</h1>
              <p className="text-xs font-medium text-muertos-orange uppercase tracking-widest">亡靈節繽紛面具</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePrint()}
              className="flex items-center gap-2 bg-stone-800 text-white px-4 py-2 rounded-xl hover:bg-stone-700 transition-all active:scale-95 shadow-lg group"
              title="列印或儲存為 PDF"
            >
              <FileDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              <span className="hidden sm:inline font-medium">匯出 PDF</span>
            </button>
            <button
              onClick={() => handlePrint()}
              className="flex items-center justify-center w-10 h-10 bg-white border border-stone-200 text-stone-600 rounded-xl hover:bg-stone-50 transition-all active:scale-95 shadow-sm"
              title="直接列印"
            >
              <Printer size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Intro Section */}
        <section className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-muertos-pink/10 text-muertos-pink px-4 py-1 rounded-full text-sm font-bold"
          >
            <Sparkles size={14} />
            墨西哥文化遺產
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight"
          >
            色彩斑斕的節慶藝術
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 max-w-2xl mx-auto text-lg"
          >
            亡靈節不是恐怖的節日，而是一個充滿愛、色彩與音樂的紀念日。
            讓我們一起透過藝術創作來認識這個美麗的文化！
          </motion.p>
        </section>

        {/* Mask Builder Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-l-4 border-muertos-orange pl-4">
            <h3 className="text-2xl font-bold text-stone-800">1. Máscara (面具創作)</h3>
          </div>
          <MaskBuilder />
        </section>

        {/* Alphabet Art Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-l-4 border-muertos-purple pl-4">
            <h3 className="text-2xl font-bold text-stone-800">2. Letra (字母藝術)</h3>
          </div>
          <AlphabetArt />
        </section>

        {/* Food Gallery Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-l-4 border-muertos-pink pl-4">
            <h3 className="text-2xl font-bold text-stone-800">3. Comida (美食標籤)</h3>
          </div>
          <FoodGallery />
        </section>

        {/* Footer Info */}
        <footer className="pt-12 border-t border-stone-200">
          <div className="bg-stone-100 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6 text-stone-600">
            <div className="bg-white p-3 rounded-2xl shadow-sm">
              <Info className="text-muertos-orange" size={24} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-bold text-stone-800 mb-1">給老師的小提示</h4>
              <p className="text-sm leading-relaxed">
                點擊右上角的印表機圖示，可以下載專為課堂設計的 A4 學習單。
                建議列印時勾選「背景圖形」，讓學生在紙上動手繪畫，體驗真實的藝術創作！
              </p>
            </div>
            <div className="flex gap-4 opacity-40">
              <Heart size={20} />
              <Flower2 size={20} />
              <Sparkles size={20} />
            </div>
          </div>
          <p className="text-center mt-8 text-xs text-stone-400 uppercase tracking-widest">
            ¡Feliz Día de los Muertos!
          </p>
        </footer>
      </main>

      {/* Hidden Print Template */}
      <div className="hidden">
        <PrintTemplate ref={printRef} />
      </div>
    </div>
  );
}
