"use client";

import React, { useState } from "react";
import { Vote, Menu, X, ShieldCheck, CheckCircle2, Award, Building, Sparkles, Home } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & District Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white shadow-md shadow-emerald-900/30">
              <Vote className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-slate-100">
                  CT Senate <span className="text-emerald-400">District 24</span>
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700/50">
                  2026 Voter Guide
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Danbury • New Fairfield • Ridgefield
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 font-medium text-sm">
            <a
              href="#candidates"
              className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Candidates
            </a>
            <a
              href="#affordability"
              className="px-3 py-2 rounded-md text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/60 transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Home className="w-4 h-4 text-emerald-400" />
              Housing Affordability
            </a>
            <a
              href="#issues"
              className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Issue Comparison
            </a>
            <a
              href="#accomplishments"
              className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              Julie's Record
            </a>
            <a
              href="#towns"
              className="px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Town Impact
            </a>
            <a
              href="#quiz"
              className="px-3 py-2 rounded-md text-amber-400 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Voter Quiz
            </a>
            <a
              href="#voting-info"
              className="ml-3 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-sm flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              How to Vote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          <a
            href="#candidates"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Candidate Profiles
          </a>
          <a
            href="#affordability"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-emerald-400 hover:bg-slate-800 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Housing Affordability Deep Dive
          </a>
          <a
            href="#issues"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Head-to-Head Issues
          </a>
          <a
            href="#accomplishments"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Julie Kushner's Record & Accomplishments
          </a>
          <a
            href="#lindsey-review"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Challenger Platform Analysis
          </a>
          <a
            href="#towns"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Town Deliverables (Danbury, New Fairfield, Ridgefield)
          </a>
          <a
            href="#quiz"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-amber-400 hover:bg-slate-800"
          >
            Interactive Voter Alignment Quiz
          </a>
          <a
            href="#voting-info"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-2.5 rounded-lg bg-emerald-600 font-semibold text-white mt-4"
          >
            Voter & Election Information
          </a>
        </div>
      )}
    </nav>
  );
}
