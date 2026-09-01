"use client";

import React from "react";
import { Vote, ShieldCheck, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center font-bold text-white shadow-md">
              <Vote className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg text-white">
                Connecticut State Senate <span className="text-emerald-400">District 24</span>
              </span>
              <p className="text-xs text-slate-500">
                Independent Voter Policy Guide • Danbury, New Fairfield, Ridgefield
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
            <a href="#candidates" className="hover:text-white transition-colors">
              Candidates
            </a>
            <a href="#issues" className="hover:text-white transition-colors">
              Issue Matrix
            </a>
            <a href="#accomplishments" className="hover:text-white transition-colors">
              Julie's Record
            </a>
            <a href="#towns" className="hover:text-white transition-colors">
              Town Impact
            </a>
            <a href="#quiz" className="hover:text-white transition-colors">
              Voter Quiz
            </a>
            <a href="#voting-info" className="hover:text-white transition-colors">
              Voting Guide
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Public information curated from official campaign filings, the Connecticut General Assembly legislative database (cga.ct.gov), and verified public records.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Elect Leaders Who Deliver Results</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
