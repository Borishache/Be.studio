import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Loader2, X } from 'lucide-react';
import { generateMarketingStrategy } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

export const AIStrategyWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [businessType, setBusinessType] = useState('');
  const [goals, setGoals] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const strategy = await generateMarketingStrategy(businessType, goals);
    setResult(strategy || null);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 md:w-96 glass-card rounded-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="p-4 bg-brand-blue text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-brand-lime" />
                <span className="font-bold tracking-tight">be. STUDIO AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
                <X size={18} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              {!result ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-gray-600 mb-4">
                    Obtén una estrategia de alto nivel de nuestra consultoría impulsada por IA.
                  </p>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Tipo de Negocio</label>
                    <input
                      required
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      placeholder="ej. Marca de Relojes de Lujo"
                      className="w-full bg-gray-50 border-2 border-brand-black rounded-none px-3 py-2 text-sm focus:outline-none focus:bg-brand-lime/10"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Objetivos Principales</label>
                    <textarea
                      required
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      placeholder="ej. Incrementar ventas online un 20%"
                      className="w-full bg-gray-50 border-2 border-brand-black rounded-none px-3 py-2 text-sm focus:outline-none focus:bg-brand-lime/10 h-24 resize-none"
                    />
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-brand-black text-white py-3 rounded-none font-bold flex items-center justify-center gap-2 hover:bg-brand-blue transition-colors disabled:opacity-50 shadow-[4px_4px_0px_0px_rgba(0,70,253,1)]"
                  >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : <><Send size={16} /> Generar Estrategia</>}
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown>{result}</ReactMarkdown>
                  </div>
                  <button
                    onClick={() => setResult(null)}
                    className="text-xs font-bold uppercase tracking-widest text-brand-blue hover:underline"
                  >
                    Nueva Estrategia
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-blue text-white p-4 rounded-full shadow-xl flex items-center gap-2 group border-2 border-brand-black"
      >
        <Sparkles className="text-brand-lime group-hover:rotate-12 transition-transform" />
        <span className="font-bold pr-2">AI Consultant</span>
      </motion.button>
    </div>
  );
};
