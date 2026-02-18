/*
 * Design: Botanical Kitchen
 * Card de grupo alimentar com opções alternativas expansíveis.
 * Tags coloridas por tipo (proteína=terracotta, fibra=sage, carbo=gold).
 * Tipografia: Playfair Display para títulos, DM Sans para corpo.
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FoodGroup } from "@/lib/mealData";
import { getGroupColor } from "@/lib/mealData";

interface FoodGroupCardProps {
  group: FoodGroup;
  index: number;
}

export default function FoodGroupCard({ group, index }: FoodGroupCardProps) {
  const [expanded, setExpanded] = useState(false);
  const colors = getGroupColor(group.type);
  const hasAlternatives = group.alternatives.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
    >
      <div
        className={`rounded-xl border ${colors.border} bg-card p-4 transition-all duration-300 hover:shadow-sm ${
          hasAlternatives ? "cursor-pointer" : ""
        }`}
        onClick={hasAlternatives ? () => setExpanded(!expanded) : undefined}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase mb-2.5 ${colors.badge}`}
            >
              {group.group}
            </span>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-medium text-foreground text-base sm:text-[15px] leading-snug">
                {group.mainOption.name}
              </span>
              <span className="text-sm sm:text-sm text-muted-foreground whitespace-nowrap">
                {group.mainOption.quantity}
              </span>
            </div>
          </div>

          {hasAlternatives && (
            <div
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 flex-shrink-0 ${colors.badge}`}
            >
              <span>{expanded ? "Menos" : `+${group.alternatives.length}`}</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </div>
          )}
        </div>

        {/* Alternatives */}
        <AnimatePresence>
          {expanded && hasAlternatives && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-dashed border-border/50 space-y-2.5">
                {group.alternatives.map((alt, i) => (
                  <div key={i} className="flex items-baseline gap-2 flex-wrap">
                    <span className={`text-xs font-bold tracking-wider uppercase ${colors.text} opacity-50`}>ou</span>
                    <span className="text-[15px] text-foreground leading-snug">{alt.name}</span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{alt.quantity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Observation */}
        {group.observation && (
          <p className="mt-3 text-sm text-muted-foreground italic leading-relaxed border-l-2 border-sage-light/30 pl-3">
            {group.observation}
          </p>
        )}
      </div>
    </motion.div>
  );
}
