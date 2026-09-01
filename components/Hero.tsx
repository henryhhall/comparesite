"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, ChevronRight, Sparkles, Building2, Award, Calendar, Home } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-12 pb-20 border-b border-slate-800">
      {/* Background glow & subtle ambient shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Header Badges */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-300 mb-6 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Official 2026 Voter Decision & Policy Guide</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-medium">State Senate District 24</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif mb-6">
            Connecticut State Senate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              District 24
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light mb-8">
            An honest, fact-grounded head-to-head comparison between Incumbent Senator{" "}
            <span className="text-emerald-300 font-semibold underline decoration-emerald-500/50 decoration-2">
              Julie Kushner
            </span>{" "}
            and Challenger{" "}
            <span className="text-slate-200 font-semibold">
              Melissa Lindsey
            </span>
            . Explore their stances on housing affordability, schools, healthcare, and working families.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#affordability"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg shadow-emerald-950/50 flex items-center gap-2 group"
            >
              <Home className="w-5 h-5 text-emerald-200" />
              <span>Housing Deep Dive</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#issues"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/90 text-slate-200 border border-slate-700 font-semibold transition-all flex items-center gap-2"
            >
              <span>Compare 7 Issues</span>
            </a>
            <a
              href="#accomplishments"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/90 text-slate-200 border border-slate-700 font-semibold transition-all flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Julie's Record</span>
            </a>
            <a
              href="#quiz"
              className="px-6 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Voter Quiz</span>
            </a>
          </div>
        </div>

        {/* Quick Summary Highlights Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-serif">100%</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Julie Kushner Senate Attendance
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">5 Consecutive Years (2020–2024)</div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-serif">$164M+</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Danbury Career Academy
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">80% State Reimbursement Secured</div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">100,000+</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              CT Workers Supported
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Paid Family & Medical Leave Act</div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-serif">100%</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Environmental Score
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">CT League of Conservation Voters</div>
          </div>
        </div>
      </div>
    </div>
  );
}
