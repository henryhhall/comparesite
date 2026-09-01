"use client";

import React from "react";
import { candidatesData } from "@/data/candidates";
import { CheckCircle2, Award, ExternalLink, Calendar, MapPin, Briefcase, FileText, Star, AlertTriangle } from "lucide-react";

export default function CandidateProfiles() {
  const { julie_kushner, melissa_lindsey } = candidatesData.candidates;

  return (
    <section id="candidates" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 font-serif tracking-tight sm:text-4xl">
            Candidate Profiles & Track Record
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            A side-by-side assessment of background, legislative experience, and proven public service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Julie Kushner Profile Card (Featured / Primary) */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-emerald-600/60 overflow-hidden flex flex-col relative transition-all duration-300 hover:shadow-2xl">
            {/* Top Banner */}
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold text-sm tracking-wide">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>INCUMBENT STATE SENATOR • 4 TERMS</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-900 text-emerald-100 border border-emerald-500/30">
                {julie_kushner.party_short}
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-100">
                <div className="w-24 h-24 rounded-full bg-emerald-100 border-4 border-emerald-50 overflow-hidden shrink-0 shadow-md">
                  <img
                    src={julie_kushner.image}
                    alt={julie_kushner.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                    {julie_kushner.name}
                  </h3>
                  <p className="text-emerald-700 font-semibold text-sm sm:text-base">
                    {julie_kushner.leadership_role}
                  </p>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-500 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {julie_kushner.residence}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      In Office Since 2019
                    </span>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <blockquote className="my-5 p-4 rounded-xl bg-emerald-50/80 border-l-4 border-emerald-600 text-emerald-950 font-medium italic text-sm">
                "{julie_kushner.tagline}"
              </blockquote>

              {/* Bio Summary */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {julie_kushner.background_summary}
              </p>

              {/* Key Highlights Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                {julie_kushner.key_metrics.map((metric, i) => (
                  <div key={i} className="p-2">
                    <div className="text-xl font-bold text-emerald-700 font-serif">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-800">{metric.label}</div>
                    <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Committee Roles */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Legislative Committee Roles
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {julie_kushner.committee_assignments.map((comm, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-900 border border-emerald-200/60"
                    >
                      {comm}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Voting Record (5 Years)</span>
                </div>
                <a
                  href={julie_kushner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-emerald-700"
                >
                  <span>Official Campaign Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Melissa Lindsey Profile Card */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl">
            {/* Top Banner */}
            <div className="bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold text-sm tracking-wide text-slate-200">
                <span>REPUBLICAN CHALLENGER</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-900 text-red-100 border border-red-700/30">
                {melissa_lindsey.party_short}
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-100">
                <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-slate-50 overflow-hidden shrink-0 shadow-md">
                  <img
                    src={melissa_lindsey.image}
                    alt={melissa_lindsey.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                    {melissa_lindsey.name}
                  </h3>
                  <p className="text-slate-600 font-semibold text-sm sm:text-base">
                    {melissa_lindsey.leadership_role}
                  </p>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-500 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {melissa_lindsey.residence}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      Small Business Manager
                    </span>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <blockquote className="my-5 p-4 rounded-xl bg-slate-50 border-l-4 border-slate-400 text-slate-800 font-medium italic text-sm">
                "{melissa_lindsey.tagline}"
              </blockquote>

              {/* Bio Summary */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {melissa_lindsey.background_summary}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                {melissa_lindsey.key_metrics.map((metric, i) => (
                  <div key={i} className="p-2">
                    <div className="text-xl font-bold text-slate-800 font-serif">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-800">{metric.label}</div>
                    <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Background Notes */}
              <div className="mb-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950">
                <div className="flex items-center gap-1.5 font-bold mb-1 text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Legislative Experience Consideration</span>
                </div>
                <p className="leading-relaxed">
                  Melissa Lindsey has served 1 term as New Fairfield First Selectman, but has no experience in state legislative drafting, state budget negotiation, or statewide committee leadership.
                </p>
              </div>

              {/* Footer CTA */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  First-time State Senate Candidate
                </div>
                <a
                  href={melissa_lindsey.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-red-700"
                >
                  <span>Official Campaign Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
