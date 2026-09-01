"use client";

import React, { useState } from "react";
import { candidatesData } from "@/data/candidates";
import { Building2, Trees, Compass, CheckCircle2, Sparkles, MapPin, ChevronRight } from "lucide-react";

export default function TownImpact() {
  const townImpacts = candidatesData.town_impacts;
  const [activeTown, setActiveTown] = useState<string>("Danbury");

  const getTownIcon = (townName: string) => {
    switch (townName) {
      case "Danbury":
        return <Building2 className="w-5 h-5" />;
      case "New Fairfield":
        return <Trees className="w-5 h-5" />;
      case "Ridgefield":
        return <Compass className="w-5 h-5" />;
      default:
        return <MapPin className="w-5 h-5" />;
    }
  };

  const currentTownData =
    townImpacts.find((t) => t.town === activeTown) || townImpacts[0];

  return (
    <section id="towns" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Local Impact Across District 24
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            What Julie Kushner Has Delivered for Your Town
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Select your municipality to see direct funding, tax relief, and capital projects secured for our local communities.
          </p>
        </div>

        {/* Town Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            {townImpacts.map((t) => {
              const isActive = activeTown === t.town;
              return (
                <button
                  key={t.town}
                  onClick={() => setActiveTown(t.town)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-700 text-white shadow-md shadow-emerald-950/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {getTownIcon(t.town)}
                  <span>{t.town}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Town Details Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-50 to-white rounded-3xl border-2 border-emerald-500/30 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-900/20">
                {getTownIcon(currentTownData.town)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Municipal Deliverables
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                  {currentTownData.town}, Connecticut
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
              State Senate District 24
            </span>
          </div>

          {/* Deliverables List */}
          <div className="mt-8 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Key Projects & Investments Secured by Senator Julie Kushner:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentTownData.kushner_deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 hover:border-emerald-300 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Callout */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-50/50 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6">
            <div className="flex items-center gap-2 text-xs text-emerald-950 font-medium">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Re-electing Senator Kushner preserves our district's seniority on the Senate Appropriations and Labor committees.
              </span>
            </div>
            <a
              href="#voting-info"
              className="px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shrink-0 shadow-sm"
            >
              Voting Info for {currentTownData.town}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
