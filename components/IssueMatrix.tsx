"use client";

import React, { useState } from "react";
import { candidatesData } from "@/data/candidates";
import {
  DollarSign,
  Briefcase,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Trees,
  Award,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  Layers,
  Check,
  Info
} from "lucide-react";

export default function IssueMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedIssue, setExpandedIssue] = useState<string | null>("cost-of-living");

  const issues = candidatesData.issues_comparison;

  const categories = [
    { id: "all", label: "All 7 Pillars" },
    { id: "Taxes & Economy", label: "Taxes & Cost of Living" },
    { id: "Labor & Jobs", label: "Workers & Paid Leave" },
    { id: "Education", label: "Schools & Career Training" },
    { id: "Healthcare", label: "Healthcare & Reproductive Rights" },
    { id: "Public Safety", label: "Public & Gun Safety" },
    { id: "Environment", label: "Environment & Candlewood Lake" },
    { id: "Leadership", label: "Legislative Results" },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "DollarSign":
        return <DollarSign className="w-5 h-5 text-emerald-600" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-emerald-600" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-emerald-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-emerald-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case "Trees":
        return <Trees className="w-5 h-5 text-emerald-600" />;
      case "Award":
        return <Award className="w-5 h-5 text-emerald-600" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-600" />;
    }
  };

  const filteredIssues = issues.filter((issue) => {
    const matchesCategory =
      selectedCategory === "all" || issue.category === selectedCategory;
    const matchesSearch =
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.kushner_stance.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.lindsey_stance.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.analysis.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedIssue(expandedIssue === id ? null : id);
  };

  return (
    <section id="issues" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Filter className="w-3.5 h-3.5" />
            Head-to-Head Comparison Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            Where the Candidates Stand on the Issues
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            An honest look at policy positions, actual legislative votes, and how their visions impact the families of District 24.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search issues (e.g., taxes, paid leave, schools, lake)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50"
              />
            </div>

            {/* Total Results Count */}
            <div className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-800">{filteredIssues.length}</span> of{" "}
              <span className="font-bold text-slate-800">{issues.length}</span> policy pillars
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white shadow-sm ring-1 ring-slate-900"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Issue Cards Stack */}
        <div className="space-y-6">
          {filteredIssues.map((issue) => {
            const isExpanded = expandedIssue === issue.id;

            return (
              <div
                key={issue.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-emerald-500 shadow-xl ring-1 ring-emerald-500/30 bg-white"
                    : "border-slate-200 shadow-sm hover:border-slate-300 bg-slate-50/50"
                }`}
              >
                {/* Header / Clickable Toggle */}
                <button
                  type="button"
                  onClick={() => toggleExpand(issue.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                      {getIcon(issue.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                          {issue.category}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                        {issue.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
                      {isExpanded ? "Collapse Details" : "View Comparison"}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Comparison Content */}
                {isExpanded && (
                  <div className="p-5 sm:p-8 pt-0 border-t border-slate-100 bg-white">
                    {/* Side-by-Side Candidate Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
                      {/* Julie Kushner Stance (Highlight) */}
                      <div className="p-5 sm:p-6 rounded-xl bg-emerald-50/60 border border-emerald-200 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full bg-emerald-600" />
                              <span className="font-bold text-emerald-950 text-base font-serif">
                                Senator Julie Kushner (D)
                              </span>
                            </div>
                            <span className="text-xs font-bold uppercase px-2 py-0.5 rounded bg-emerald-700 text-white">
                              PROVEN RECORD
                            </span>
                          </div>

                          <p className="text-sm font-medium text-emerald-950 leading-relaxed mb-4">
                            {issue.kushner_stance}
                          </p>

                          <div className="space-y-2 mt-4 pt-4 border-t border-emerald-200/80">
                            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                              Passed Legislation & Key Actions:
                            </div>
                            {issue.kushner_actions.map((action, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-emerald-900 leading-snug">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{action}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Melissa Lindsey Stance */}
                      <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full bg-red-600" />
                              <span className="font-bold text-slate-900 text-base font-serif">
                                Melissa Lindsey (R)
                              </span>
                            </div>
                            <span className="text-xs font-bold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                              CHALLENGER PLATFORM
                            </span>
                          </div>

                          <p className="text-sm font-medium text-slate-800 leading-relaxed mb-4">
                            {issue.lindsey_stance}
                          </p>

                          <div className="space-y-2 mt-4 pt-4 border-t border-slate-200">
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                              Stated Campaign Platform:
                            </div>
                            {issue.lindsey_actions.map((action, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                                <span>{action}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pro-Julie District Impact Analysis Box */}
                    <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-850 text-white shadow-md border border-slate-800">
                      <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm mb-1.5">
                        <Sparkles className="w-4 h-4" />
                        <span>The Bottom Line for District 24 Families:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {issue.analysis}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
