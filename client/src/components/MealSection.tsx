/*
 * Design: Botanical Kitchen
 * Seção de refeição com imagem hero, título editorial e grid de grupos alimentares.
 * Layout assimétrico: imagem à esquerda, conteúdo à direita (alternando).
 * Tipografia: Playfair Display para títulos, DM Sans para corpo.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sunrise, Sun, Cookie, Moon, Clock, ChefHat, ChevronDown } from "lucide-react";
import FoodGroupCard from "./FoodGroupCard";
import type { Meal } from "@/lib/mealData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sunrise: Sunrise,
  sun: Sun,
  cookie: Cookie,
  moon: Moon,
};

interface MealSectionProps {
  meal: Meal;
  index: number;
}

export default function MealSection({ meal, index }: MealSectionProps) {
  const [activeOption, setActiveOption] = useState(0);
  const [showRecipe, setShowRecipe] = useState(false);
  const [openRecipeIndexes, setOpenRecipeIndexes] = useState<Set<number>>(new Set());
  const Icon = iconMap[meal.icon] || Sun;
  const isReversed = index % 2 !== 0;
  const hasOptions = meal.options && meal.options.length > 0;
  const groups = hasOptions ? meal.options![activeOption].groups : meal.groups || [];
  const currentRecipe = hasOptions ? meal.options![activeOption].recipe : undefined;
  const mealRecipes = meal.recipes;

  const toggleRecipeIndex = (idx: number) => {
    setOpenRecipeIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <section id={meal.id} className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Meal Header with Image */}
        <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:gap-8`}>
          {/* Image */}
          <div className="lg:w-[38%] relative flex-shrink-0">
            <div className="overflow-hidden rounded-2xl aspect-[16/10] shadow-md">
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Time badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm border border-border/20">
              <Clock className="h-3.5 w-3.5 text-terracotta" />
              <span className="text-sm font-semibold text-foreground">{meal.timeHint}</span>
            </div>
          </div>

          {/* Title and Content */}
          <div className="lg:flex-1 flex flex-col">
            {/* Title row */}
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-full bg-terracotta/8 flex items-center justify-center border border-terracotta/10">
                <Icon className="h-5 w-5 text-terracotta" />
              </div>
              <h2 className="text-3xl sm:text-3xl font-semibold text-foreground tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                {meal.title}
              </h2>
            </div>

            {/* Botanical separator */}
            <div className="flex items-center gap-3 my-4">
              <div className="h-px flex-1 bg-gradient-to-r from-terracotta/20 via-sage-light/20 to-transparent" />
              <svg width="16" height="16" viewBox="0 0 20 20" className="text-sage-light opacity-50 flex-shrink-0">
                <path d="M10 2C10 2 6 6 6 10C6 14 10 18 10 18C10 18 14 14 14 10C14 6 10 2 10 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="10" y1="6" x2="10" y2="16" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="h-px flex-1 bg-gradient-to-l from-terracotta/20 via-sage-light/20 to-transparent" />
            </div>

            {/* Options tabs */}
            {hasOptions && (
              <div className="flex flex-wrap gap-2 mb-5">
                {meal.options!.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveOption(i); setShowRecipe(false); }}
                    className={`px-4 py-2.5 rounded-full text-base font-medium transition-all duration-300 border ${
                      activeOption === i
                        ? "bg-terracotta text-white border-terracotta shadow-sm"
                        : "bg-card text-brown-light border-border/50 hover:border-terracotta/30 hover:bg-terracotta/5"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Food Groups Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {groups.map((group, i) => (
                <FoodGroupCard key={`${meal.id}-${activeOption}-${i}`} group={group} index={i} />
              ))}
            </div>

            {/* Inline Recipe for current option (e.g., Crepioca, Panqueca de Banana) */}
            {currentRecipe && (
              <div className="mt-5">
                <button
                  onClick={() => setShowRecipe(!showRecipe)}
                  className="w-full flex items-center justify-between bg-sage/5 rounded-xl p-4 border border-sage-light/20 hover:border-sage-light/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-sage/10 flex items-center justify-center">
                      <ChefHat className="h-4.5 w-4.5 text-sage" />
                    </div>
                    <div className="text-left">
                      <span className="text-base font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                        Receita: {currentRecipe.title}
                      </span>
                      <p className="text-sm text-muted-foreground">Toque para ver ingredientes e modo de preparo</p>
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${showRecipe ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {showRecipe && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-card rounded-xl p-5 mt-2 border border-border/30">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">Ingredientes</h4>
                            <ul className="space-y-1.5">
                              {currentRecipe.ingredients.map((ing, i) => (
                                <li key={i} className="text-sm text-foreground flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 flex-shrink-0" />
                                  {ing}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">Modo de Preparo</h4>
                            <ol className="space-y-2">
                              {currentRecipe.instructions.map((step, i) => (
                                <li key={i} className="text-sm text-foreground flex items-start gap-2.5">
                                  <span className="w-5 h-5 rounded-full bg-terracotta/10 text-terracotta text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                    {i + 1}
                                  </span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Individual Recipe Buttons (e.g., Jantar recipes, Smoothie Danoninho for Lanche) */}
            {mealRecipes && mealRecipes.length > 0 && (
              <div className="mt-5 space-y-3">
                {mealRecipes.map((recipe, ri) => {
                  const isOpen = openRecipeIndexes.has(ri);
                  return (
                    <div key={ri}>
                      <button
                        onClick={() => toggleRecipeIndex(ri)}
                        className="w-full flex items-center justify-between bg-gold/5 rounded-xl p-4 border border-gold-light/20 hover:border-gold-light/40 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
                            <ChefHat className="h-4.5 w-4.5 text-gold" />
                          </div>
                          <span className="text-base font-semibold text-foreground text-left" style={{ fontFamily: "var(--font-display)" }}>
                            {recipe.title}
                          </span>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-card rounded-xl p-5 mt-2 border border-border/30">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">Ingredientes</h4>
                                  <ul className="space-y-1.5">
                                    {recipe.ingredients.map((ing, i) => (
                                      <li key={i} className="text-sm text-foreground flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 flex-shrink-0" />
                                        {ing}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-terracotta uppercase tracking-wider mb-3">Modo de Preparo</h4>
                                  <ol className="space-y-2">
                                    {recipe.instructions.map((step, i) => (
                                      <li key={i} className="text-sm text-foreground flex items-start gap-2.5">
                                        <span className="w-5 h-5 rounded-full bg-terracotta/10 text-terracotta text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                          {i + 1}
                                        </span>
                                        {step}
                                      </li>
                                    ))}
                                  </ol>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
