"use client";

import React from "react";
import { AlertCircle, HelpCircle, FileText, Scale, Zap, ShieldAlert, BookOpen, Heart } from "lucide-react";

export default function LindseyAnalysis() {
  return (
    <section id="lindsey-review" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            Challenger Platform Analysis
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            An Objective Review of Melissa Lindsey's Stated Platform
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            Examining the proposals, rhetoric, and practical district implications of the Republican challenger's 2026 campaign.
          </p>
        </div>

        {/* 4 Pillars Analysis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Affordability */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Campaign Pillar 1
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  "Affordability" & Utility Charges
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-900 block mb-1 text-xs uppercase tracking-wide">
                  Stated Position:
                </span>
                <p className="text-slate-600">
                  Advocates eliminating the "public benefits charge" on electric bills and opposes state climate fees on fossil fuel companies (HB 5156).
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-950 block mb-1 flex items-center gap-1.5 text-xs text-amber-800">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Policy Analysis & Tradeoffs:
                </span>
                <p className="text-slate-600 leading-relaxed text-xs">
                  While utility charges are a visible friction point, the public benefits charge finances energy efficiency audits, low-income heating assistance, and solar incentives. Cutting these charges without replacement revenue would shift costs directly onto municipal budgets. Meanwhile, Lindsey offers no framework for income tax reductions or property tax offsets.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Constitutional Freedoms & Medical Autonomy */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Campaign Pillar 2
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  "Constitutional Freedoms" & Vaccines
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-900 block mb-1 text-xs uppercase tracking-wide">
                  Stated Position:
                </span>
                <p className="text-slate-600">
                  Focuses on "Medical Autonomy" and "Religious Liberty," advocating to restore religious exemptions for school vaccines and opposing state public health standards.
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-950 block mb-1 flex items-center gap-1.5 text-xs text-blue-800">
                  <AlertCircle className="w-4 h-4 text-blue-600" />
                  Policy Analysis & Tradeoffs:
                </span>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Lindsey adopts slogans like "My Body, My Choice" solely in the context of resisting immunization requirements, while noticeably declining to support reproductive freedom, abortion access, or safe harbor protections for Connecticut women and healthcare providers.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Education & School Choice */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Campaign Pillar 3
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  "Parental Rights" & School Vouchers
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-900 block mb-1 text-xs uppercase tracking-wide">
                  Stated Position:
                </span>
                <p className="text-slate-600">
                  Explicitly states on her campaign site: <em>"How and where children are educated — I support school choice."</em>
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-950 block mb-1 flex items-center gap-1.5 text-xs text-emerald-800">
                  <AlertCircle className="w-4 h-4 text-emerald-600" />
                  Policy Analysis & Tradeoffs:
                </span>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Voucher / school choice programs siphon essential public tax dollars out of Danbury and New Fairfield public classrooms and redirect them to private academies. In contrast, Senator Kushner secured a historic 80% state reimbursement rate for the $164M Danbury Career Academy to strengthen local public education.
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 4: Public Safety & Law Enforcement */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Campaign Pillar 4
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  "Public Safety" & Firearms
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-900 block mb-1 text-xs uppercase tracking-wide">
                  Stated Position:
                </span>
                <p className="text-slate-600">
                  Supports the right to bear arms, opposes creating new gun regulations, and emphasizes reversing police accountability legislation.
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-950 block mb-1 flex items-center gap-1.5 text-xs text-purple-800">
                  <AlertCircle className="w-4 h-4 text-purple-600" />
                  Policy Analysis & Tradeoffs:
                </span>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Connecticut's evidence-based gun safety statutes (banning untraceable ghost guns, safe storage, and red flag laws) have made Connecticut one of the safest states in America. Opposing sensible gun safety measures runs contrary to the public safety interests of suburban and urban communities across District 24.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Callout */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
              <Scale className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 font-serif">
                The Core Choice for Voters in 2026
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mt-1">
                While Melissa Lindsey offers standard challenger critiques regarding Hartford bureaucracy, Senator Julie Kushner has consistently used her seniority and majority leadership to deliver tangible legislative victories: paid family leave, insulin price caps, 100% senior retirement tax relief, and record school construction funds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
