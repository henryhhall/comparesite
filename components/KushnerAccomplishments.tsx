"use client";

import React from "react";
import { candidatesData } from "@/data/candidates";
import { Award, CheckCircle2, ShieldCheck, Heart, Sparkles, Building, Landmark, Trees, Clock, Users } from "lucide-react";

export default function KushnerAccomplishments() {
  const { julie_kushner } = candidatesData.candidates;

  return (
    <section id="accomplishments" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-emerald-400" />
            Proven Leadership in the Connecticut General Assembly
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            How Senator Julie Kushner Delivers for District 24
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-light">
            From passing the nation-leading Paid Family & Medical Leave Act to securing historic 80% state aid for Danbury schools, Julie’s tenure has reshaped Connecticut for the better.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-center shadow-lg hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif">100%</div>
            <div className="text-sm font-semibold text-emerald-400 mt-1">Voting Attendance</div>
            <p className="text-xs text-slate-400 mt-2">
              Perfect roll-call voting record for 5 consecutive years in the State Senate.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-center shadow-lg hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Building className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif">$164M+</div>
            <div className="text-sm font-semibold text-emerald-400 mt-1">Danbury Career Academy</div>
            <p className="text-xs text-slate-400 mt-2">
              Secured an unprecedented 80% state reimbursement rate saving local taxpayers millions.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-center shadow-lg hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif">100,000+</div>
            <div className="text-sm font-semibold text-emerald-400 mt-1">Workers Protected</div>
            <p className="text-xs text-slate-400 mt-2">
              Utilized CT Paid Family & Medical Leave to heal from illness or care for newborns.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 text-center shadow-lg hover:border-emerald-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Trees className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif">100%</div>
            <div className="text-sm font-semibold text-emerald-400 mt-1">Conservation Score</div>
            <p className="text-xs text-slate-400 mt-2">
              Named 'Environmental Champion' by CT League of Conservation Voters.
            </p>
          </div>
        </div>

        {/* Detailed Victories Timeline / Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-100 font-serif mb-6 flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <span>Landmark Legislative Victories Spearheaded by Julie Kushner</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {julie_kushner.major_victories.map((vic, index) => (
              <div
                key={index}
                className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 hover:bg-slate-800 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-600/30">
                      {vic.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{vic.year}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-serif group-hover:text-emerald-300 transition-colors">
                    {vic.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed mt-3">
                    {vic.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/50 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Enacted into Connecticut State Law</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clout & Seniority Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950 via-slate-850 to-slate-900 border border-emerald-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Senate Majority Leadership Clout
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                Why Seniority & Committee Leadership Matter for Our District
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As <strong>Deputy President Pro Tempore</strong> and <strong>Labor Committee Senate Co-Chair</strong>, Senator Julie Kushner sits at the decision-making table when the state budget is negotiated and bonding projects are allocated. This leadership ensures Danbury, New Fairfield, and Ridgefield receive their fair share of state resources every single year.
              </p>
            </div>
            <a
              href="#voting-info"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shrink-0 shadow-lg shadow-emerald-950/60"
            >
              Support Julie's Re-election
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
