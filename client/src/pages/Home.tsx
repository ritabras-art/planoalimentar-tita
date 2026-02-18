/*
 * Design: Botanical Kitchen — Plano Alimentar Visual
 * Paleta terrosa: creme, terracotta, sage, gold, brown
 * Tipografia: Playfair Display (display) + DM Sans (body)
 * Layout: Scroll vertical com seções de refeição, navegação sticky
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Coffee,
  Salad,
  UtensilsCrossed,
  Milk,
  Heart,
  Sunrise,
  Sun,
  Cookie,
  Moon,
  ChevronUp,
  Leaf,
  Sparkles,
} from "lucide-react";
import MealSection from "@/components/MealSection";
import { meals, routineTips, HERO_IMAGE } from "@/lib/mealData";

const tipIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  droplets: Droplets,
  coffee: Coffee,
  salad: Salad,
  utensils: UtensilsCrossed,
  milk: Milk,
  heart: Heart,
};

const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  sunrise: Sunrise,
  sun: Sun,
  cookie: Cookie,
  moon: Moon,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("desjejum");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);

      const sections = meals.map((m) => document.getElementById(m.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(meals[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-card/85 backdrop-blur-lg border-b border-border/40 shadow-sm">
        <div className="container flex items-center justify-between h-14">
          <div />
          <div className="flex items-center gap-1">
            {meals.map((meal) => {
              const Icon = navIcons[meal.icon] || Sun;
              const isActive = activeSection === meal.id;
              return (
                <a
                  key={meal.id}
                  href={`#${meal.id}`}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${isActive
                      ? "bg-terracotta text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-cream-dark"
                    }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="inline">{meal.title === "Lanche da Tarde" ? "Lanche" : meal.title}</span>
                </a>
              );
            })}

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Alimentos frescos e saudáveis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/70 via-brown/50 to-brown/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative container py-16 sm:py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-lg"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-10 bg-white/40" />
              <span className="text-xs sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70" style={{ fontFamily: "var(--font-body)" }}>
                Nutricionista Rosceli Brás — CRN 24402
              </span>
            </div>
            <h1
              className="text-5xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Plano
              <br />
              Alimentar
              <br />
              Tita
            </h1>
            <p className="text-white/75 text-base sm:text-base leading-relaxed max-w-sm" style={{ fontFamily: "var(--font-body)" }}>
              Seu guia personalizado para uma alimentação equilibrada, com opções variadas para cada refeição do dia.
            </p>


          </motion.div>
        </div>
      </header>

      {/* Routine Tips Section */}
      <section className="container py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setShowTips(!showTips)}
            className="w-full flex items-center justify-between bg-card rounded-xl p-5 border border-border/50 hover:border-sage-light/40 hover:shadow-sm transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-sage" />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  Dicas da Rotina
                </h2>
                <p className="text-base text-muted-foreground">Orientações importantes para o dia a dia</p>
              </div>
            </div>
            <ChevronUp
              className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${showTips ? "" : "rotate-180"}`}
            />
          </button>

          <AnimatePresence>
            {showTips && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                  {routineTips.map((tip, i) => {
                    const TipIcon = tipIcons[tip.icon] || Heart;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        className="bg-card rounded-lg p-4 border border-border/30 hover:border-sage-light/30 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <TipIcon className="h-4 w-4 text-sage" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-foreground mb-1">{tip.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Botanical divider */}
      <div className="container">
        <div className="flex items-center gap-4 px-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-terracotta/15 to-transparent" />
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-sage-light opacity-40 flex-shrink-0">
            <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="7" x2="12" y2="19" stroke="currentColor" strokeWidth="1" />
            <line x1="9" y1="10" x2="12" y2="13" stroke="currentColor" strokeWidth="0.8" />
            <line x1="15" y1="10" x2="12" y2="13" stroke="currentColor" strokeWidth="0.8" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-terracotta/15 to-transparent" />
        </div>
      </div>

      {/* Meals */}
      <main className="container pt-8 pb-20 space-y-20">
        {meals.map((meal, i) => (
          <MealSection key={meal.id} meal={meal} index={i} />
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-cream-dark/50">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center">
              <Leaf className="h-3.5 w-3.5 text-sage" />
            </div>
            <span className="text-base font-medium text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              Plano Alimentar Tita
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Nutricionista Rosceli Brás — CRN 24402
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-terracotta text-white shadow-lg flex items-center justify-center hover:bg-terracotta-light transition-colors z-50"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
