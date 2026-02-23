/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bell, 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  Edit3,
  Flame, 
  Footprints, 
  Home, 
  LayoutGrid, 
  Plus, 
  Scan, 
  Star, 
  TrendingUp, 
  Waves,
  Utensils,
  Search,
  Camera,
  X,
  Sparkles,
  Sun
} from "lucide-react";

export default function App() {
  const [showMonthlyCalendar, setShowMonthlyCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState('tracker');

  const weeklyDays = [
    { d: '12', w: 'DOM', status: 'met' },
    { d: '13', w: 'SEG', status: 'exceeded' },
    { d: '14', w: 'TER', status: 'met' },
    { d: '15', w: 'QUA', active: true },
    { d: '16', w: 'QUI', status: 'pending' },
    { d: '17', w: 'SEX', status: 'pending' },
    { d: '18', w: 'SAB', status: 'pending' },
  ];

  const mealData = [
    {
      title: "Café da Manhã",
      time: "08:00",
      foods: [
        { name: "Pão Integral", amount: "2 fatias", kcal: 140, c: 24, p: 5, f: 2 },
        { name: "Ovo Mexido", amount: "2 unidades", kcal: 150, c: 1, p: 12, f: 10 },
        { name: "Café sem Açúcar", amount: "1 xícara", kcal: 2, c: 0, p: 0, f: 0 }
      ],
      gradient: "from-blue-100 to-teal-50",
      progress: 60
    },
    {
      title: "Almoço",
      time: "12:30",
      foods: [
        { name: "Arroz Integral", amount: "3 colheres", kcal: 110, c: 23, p: 2, f: 1 },
        { name: "Peito de Frango", amount: "120g", kcal: 195, c: 0, p: 37, f: 4 },
        { name: "Salada Verde", amount: "À vontade", kcal: 15, c: 3, p: 1, f: 0 },
        { name: "Feijão Preto", amount: "1 concha", kcal: 90, c: 16, p: 6, f: 0 }
      ],
      gradient: "from-emerald-100 to-teal-50",
      progress: 75
    },
    {
      title: "Lanche da Tarde",
      time: "16:00",
      foods: [
        { name: "Iogurte Natural", amount: "1 pote", kcal: 120, c: 12, p: 8, f: 4 },
        { name: "Granola sem Açúcar", amount: "2 colheres", kcal: 80, c: 14, p: 2, f: 3 },
        { name: "Banana", amount: "1 unidade", kcal: 90, c: 23, p: 1, f: 0 }
      ],
      gradient: "from-orange-100 to-yellow-50",
      progress: 0
    },
    {
      title: "Jantar",
      time: "20:00",
      foods: [
        { name: "Sopa de Legumes", amount: "1 prato fundo", kcal: 150, c: 20, p: 4, f: 5 },
        { name: "Torrada Integral", amount: "2 unidades", kcal: 70, c: 12, p: 2, f: 1 },
        { name: "Chá de Camomila", amount: "1 xícara", kcal: 0, c: 0, p: 0, f: 0 }
      ],
      gradient: "from-purple-100 to-blue-50",
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen topo-bg pb-32 flex flex-col items-center">
      <div className="w-full max-w-[480px] px-5 pt-8 space-y-6 relative z-10">
        
        {/* Header (Common) */}
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img 
                src="https://picsum.photos/seed/user123/100/100" 
                alt="Avatar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm border border-white/50">
              <span className="text-xs font-medium text-text-soft">Olá, João!</span>
              <Star size={12} className="text-text" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm border border-white/50">
              <Flame size={16} className="text-orange-500" />
              <span className="text-sm font-bold text-text">1</span>
            </div>
          </div>
        </header>

        {activeTab === 'tracker' ? (
          <motion.div 
            key="tracker"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6 w-full"
          >
            {/* Balanced Diet Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="semi-card p-6 space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-text">Dieta Equilibrada : 1200 kcal</h2>
                <button className="text-text-soft"><Edit3 size={18} /></button>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-text-soft text-xs">
                      <Utensils size={14} className="text-primary-dark" />
                      <span>Consumido</span>
                    </div>
                    <p className="text-xl font-bold text-text">455 <span className="text-xs font-medium text-text-soft">kcal</span></p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-text-soft text-xs">
                      <Flame size={14} className="text-primary-dark" />
                      <span>Queimado</span>
                    </div>
                    <p className="text-xl font-bold text-text">0 <span className="text-xs font-medium text-text-soft">kcal</span></p>
                  </div>
                </div>

                <div className="relative">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-text-soft/10" />
                    <motion.circle 
                      cx="64" 
                      cy="64" 
                      r="54" 
                      stroke="currentColor" 
                      strokeWidth="12" 
                      fill="transparent" 
                      strokeDasharray={339} 
                      initial={{ strokeDashoffset: 339 }}
                      animate={{ strokeDashoffset: 339 * (1 - 0.38) }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="text-primary" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-text">745</span>
                    <span className="text-[10px] font-medium text-text-soft">kcal rest.</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <MacroBar label="Carboidratos" current={8.4} target={165} color="bg-blue-400" />
                <MacroBar label="Proteínas" current={58.4} target={65} color="bg-green-500" />
                <MacroBar label="Gorduras" current={20.9} target={35} color="bg-yellow-400" />
              </div>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="semi-card p-5 space-y-4">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-bold text-text leading-tight">Atividade<br/>Física</p>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Footprints className="text-primary-dark" size={20} />
                  </div>
                </div>
                <p className="text-xl font-bold text-text">5.500 <span className="text-xs font-medium text-text-soft">passos</span></p>
              </div>
              
              <div className="semi-card p-5 space-y-4">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-bold text-text leading-tight">Beber<br/>Água</p>
                  <button className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark hover:bg-primary/30 transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="text-primary-dark" size={16} />
                  <p className="text-xl font-bold text-text">12 <span className="text-xs font-medium text-text-soft">copos</span></p>
                </div>
              </div>
            </div>

            {/* Weekly Calendar (Moved here) */}
            <button 
              onClick={() => setShowMonthlyCalendar(true)}
              className="w-full text-left space-y-2"
            >
              <div className="grid grid-cols-7 gap-2 py-2 w-full">
                {weeklyDays.map((item, i) => {
                  let bgColor = "bg-white/50";
                  let textColor = "text-text-soft";
                  
                  if (item.active) {
                    bgColor = "bg-primary"; 
                    textColor = "text-black";
                  } else if (item.status === 'met') {
                    bgColor = "bg-primary/20"; 
                    textColor = "text-text-soft";
                  } else if (item.status === 'exceeded') {
                    bgColor = "bg-rose-100"; 
                    textColor = "text-rose-700";
                  }

                  return (
                    <div key={i} className={`flex flex-col items-center py-3 rounded-t-2xl rounded-b-2xl transition-all ${bgColor} ${textColor}`}>
                      <span className="text-sm font-bold">{item.d}</span>
                      <span className="text-[10px] font-medium opacity-70">{item.w}</span>
                    </div>
                  );
                })}
              </div>
            </button>

            {/* Consumido Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center px-1">
                <h3 className="text-lg font-bold text-text">Consumido</h3>
                <button className="text-xs font-medium text-text-soft flex items-center gap-1">
                  Escolher plano <ChevronRight size={14} />
                </button>
              </div>
              
              {mealData.map((meal, idx) => (
                <PlanMealCard 
                  key={idx}
                  title={meal.title}
                  time={meal.time}
                  foods={meal.foods}
                  gradient={meal.gradient}
                  progress={meal.progress}
                  showProgress={true}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="plan"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6 w-full"
          >
            {/* AI Generate Button */}
            <button className="w-full bg-black text-white rounded-[24px] py-5 px-6 flex items-center justify-between shadow-xl hover:scale-[1.02] transition-transform active:scale-95 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Sparkles size={24} className="text-primary fill-primary" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold leading-tight">Gerar Plano</p>
                  <p className="text-xs opacity-60">Com Inteligência Artificial</p>
                </div>
              </div>
              <ChevronRight size={24} className="opacity-40" />
            </button>

            {/* Weekly Calendar (Added here for consistency) */}
            <button 
              onClick={() => setShowMonthlyCalendar(true)}
              className="w-full text-left space-y-2"
            >
              <div className="grid grid-cols-7 gap-2 py-2 w-full">
                {weeklyDays.map((item, i) => {
                  let bgColor = "bg-white/50";
                  let textColor = "text-text-soft";
                  
                  if (item.active) {
                    bgColor = "bg-primary"; 
                    textColor = "text-black";
                  } else if (item.status === 'met') {
                    bgColor = "bg-primary/20"; 
                    textColor = "text-text-soft";
                  } else if (item.status === 'exceeded') {
                    bgColor = "bg-rose-100"; 
                    textColor = "text-rose-700";
                  }

                  return (
                    <div key={i} className={`flex flex-col items-center py-3 rounded-t-2xl rounded-b-2xl transition-all ${bgColor} ${textColor}`}>
                      <span className="text-sm font-bold">{item.d}</span>
                      <span className="text-[10px] font-medium opacity-70">{item.w}</span>
                    </div>
                  );
                })}
              </div>
            </button>

            {/* Plan Meals Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text px-1">Seu Plano Alimentar</h3>
              
              {mealData.map((meal, idx) => (
                <PlanMealCard 
                  key={idx}
                  title={meal.title}
                  time={meal.time}
                  foods={meal.foods}
                  gradient={meal.gradient}
                />
              ))}
            </div>
          </motion.div>
        )}

      </div>

      {/* Monthly Calendar Modal */}
      <AnimatePresence>
        {showMonthlyCalendar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMonthlyCalendar(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-[400px] rounded-[32px] shadow-2xl overflow-hidden relative z-10"
            >
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 text-sm font-bold text-text hover:opacity-70 transition-opacity">
                      2026 <ChevronDown size={16} className="text-text-soft" />
                    </button>
                    <button className="flex items-center gap-1 text-sm font-bold text-text hover:opacity-70 transition-opacity">
                      Fevereiro <ChevronDown size={16} className="text-text-soft" />
                    </button>
                  </div>
                  <button 
                    onClick={() => setShowMonthlyCalendar(false)}
                    className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-text-soft hover:text-text transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
                    <span key={i} className="text-xs font-bold text-muted py-2">{d}</span>
                  ))}
                  {Array.from({ length: 28 }).map((_, i) => {
                    const day = i + 1;
                    const isToday = day === 22;
                    
                    // Simulated status for demo
                    const status = day < 22 ? (day % 3 === 0 ? 'exceeded' : 'met') : 'pending';
                    
                    let bgColor = "hover:bg-zinc-50 text-text";
                    if (isToday) {
                      bgColor = "bg-primary text-black";
                    } else if (status === 'met') {
                      bgColor = "bg-primary/20 text-text-soft";
                    } else if (status === 'exceeded') {
                      bgColor = "bg-rose-100 text-rose-700";
                    }

                    return (
                      <button 
                        key={i}
                        className={`aspect-square rounded-2xl flex items-center justify-center text-sm font-bold transition-all ${bgColor}`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-200" />
                    <span className="text-[10px] font-medium text-text-soft">Meta batida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-100 border border-rose-200" />
                    <span className="text-[10px] font-medium text-text-soft">Meta excedida</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-white/90 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/20 px-6 py-3 flex justify-between items-center z-50">
        <NavItem 
          icon={<Sun size={24} />} 
          label="Hoje" 
          active={activeTab === 'tracker'} 
          onClick={() => setActiveTab('tracker')}
        />
        <NavItem 
          icon={<CalendarIcon size={24} />} 
          label="Planos" 
          active={activeTab === 'plan'} 
          onClick={() => setActiveTab('plan')}
        />
        
        <div className="relative -top-8">
          <button className="w-16 h-16 rounded-full bg-black shadow-lg flex items-center justify-center text-white border-4 border-bg ring-2 ring-primary/30 ring-offset-2 ring-offset-bg">
            <Scan size={28} />
          </button>
        </div>
        
        <NavItem icon={<TrendingUp size={24} />} label="Progresso" />
        <NavItem icon={<LayoutGrid size={24} />} label="Perfil" />
      </nav>
    </div>
  );
}

interface FoodItem {
  name: string;
  amount: string;
  kcal: number;
  c: number;
  p: number;
  f: number;
}

interface PlanMealCardProps {
  key?: any;
  title: string;
  time: string;
  foods: FoodItem[];
  gradient: string;
  progress?: number;
  showProgress?: boolean;
}

function PlanMealCard({ title, time, foods, gradient, progress, showProgress }: PlanMealCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`rounded-3xl p-5 flex flex-col gap-4 bg-gradient-to-br ${gradient} shadow-sm border border-white/50`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/50 flex items-center justify-center">
            <Utensils size={16} className="text-text" />
          </div>
          <div>
            <h4 className="text-base font-bold text-text">{title}</h4>
            <p className="text-[10px] font-medium text-text-soft">{time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-text hover:bg-white/80 transition-colors"
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          <button className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-text hover:bg-white/80 transition-colors">
            <Plus size={18} />
          </button>
        </div>
      </div>
      
      {showProgress && progress !== undefined && (
        <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-primary rounded-full" 
          />
        </div>
      )}

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden space-y-2"
          >
            {foods.map((food, i) => (
              <div key={i} className="bg-white/40 rounded-2xl p-3 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-text">{food.name}</span>
                  <span className="text-[10px] font-medium text-text-soft">{food.amount}</span>
                </div>
                <div className="flex gap-3 text-[9px] font-bold uppercase tracking-wider">
                  <span className="text-orange-600">{food.kcal} kcal</span>
                  <span className="text-blue-600">{food.c}g carbo</span>
                  <span className="text-emerald-600">{food.p}g prot</span>
                  <span className="text-amber-600">{food.f}g gord</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
            <img 
              src={`https://picsum.photos/seed/${title}/100/100`} 
              alt="Food" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-text">
              {foods.length} itens planejados
            </p>
            <p className="text-[10px] text-text-soft">
              Total: {foods.reduce((acc, f) => acc + f.kcal, 0)} kcal
            </p>
          </div>
          <button className="text-text-soft hover:text-text transition-colors">
            <LayoutGrid size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

function MacroBar({ label, current, target, color }: { label: string, current: number, target: number, color: string }) {
  const progress = Math.min((current / target) * 100, 100);
  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-bold text-text">{label}</p>
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color} rounded-full`} 
        />
      </div>
      <p className="text-[10px] font-medium text-text-soft">
        <span className="text-text font-bold">{current}</span> / {target}g
      </p>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-primary scale-110' : 'text-muted hover:text-text-soft'}`}
    >
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}
