"use client";

import React, { useState } from "react";
import { candidatesData } from "@/data/candidates";
import {
  Home,
  Building2,
  Receipt,
  HeartPulse,
  Scale,
  ShieldCheck,
  ShieldAlert,
  KeyRound,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  TrendingDown,
  Calculator,
  ArrowRight,
  Award,
  Quote,
  Check,
  TrainTrack,
  Layers,
  MapPin,
  Globe2,
  Coins,
  Droplets,
  HardHat,
  ChevronRight
} from "lucide-react";

export default function AffordabilityDeepDive() {
  const affordabilityData = candidatesData.affordability_deep_dive;
  const hb8002 = affordabilityData.hb8002_deep_dive;
  const dimensions = affordabilityData.dimensions;
  const savingsMetrics = affordabilityData.household_savings_breakdown;

  const [activeTab, setActiveTab] = useState<string>("homebuyer-assistance");
  const [selectedPersona, setSelectedPersona] = useState<string>("all");
  const [hbScope, setHbScope] = useState<"district" | "statewide">("district");

  const currentDimension = dimensions.find((d) => d.id === activeTab) || dimensions[0];

  const getDimensionIcon = (iconName: string) => {
    switch (iconName) {
      case "Receipt":
        return <KeyRound className="w-5 h-5" />;
      case "Building2":
        return <Building2 className="w-5 h-5" />;
      case "Scale":
        return <Scale className="w-5 h-5" />;
      case "ShieldAlert":
        return <Home className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5" />;
      default:
        return <Home className="w-5 h-5" />;
    }
  };

  // Filter savings metrics based on persona
  const filteredMetrics = savingsMetrics.filter((metric) => {
    if (selectedPersona === "all") return true;
    if (selectedPersona === "homebuyers") {
      return metric.id === "time-to-own" || metric.id === "weatherization-energy" || metric.id === "downtown-danbury-bonds";
    }
    if (selectedPersona === "renters") {
      return metric.id === "fair-rent-commission" || metric.id === "eviction-defense" || metric.id === "downtown-danbury-bonds";
    }
    if (selectedPersona === "seniors") {
      return metric.id === "senior-circuit-breaker" || metric.id === "weatherization-energy";
    }
    return true;
  });

  return (
    <section id="affordability" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Home className="w-4 h-4 text-emerald-400" />
            Special Issue Deep Dive
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            Housing Affordability in District 24
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-light">
            With median home prices topping $450,000 and Danbury rents rising, housing costs are the #1 challenge facing working families, first-time buyers, and seniors. Here is how the candidates’ records and plans compare.
          </p>
        </div>

        {/* ============================================================ */}
        {/* COMPREHENSIVE HB 8002 LANDMARK HOUSING DEEP DIVE MODULE */}
        {/* ============================================================ */}
        <div className="mb-20 bg-gradient-to-br from-emerald-950/95 via-slate-850 to-slate-900 border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-emerald-500/30">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-emerald-900/90 border border-emerald-400/50 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-4 h-4 text-emerald-400" />
                Historic 2025 Legislative Milestone • Landmark Housing Omnibus Act (HB 8002)
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
                Julie Kushner’s Leadership on Building Affordable Housing
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                As <strong>Senate Deputy President Pro Tempore</strong> and Labor Committee Co-Chair, Senator Julie Kushner was the chief Senate architect and negotiator of Connecticut’s landmark 2025 Housing Omnibus Act (originally <strong>HB 8002</strong>)—unleashing over <strong>$350 million in state bonding</strong> for transit-oriented workforce housing, sewer infrastructure, and $50,000 first-time homebuyer grants.
              </p>
            </div>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 shrink-0 w-full lg:w-auto">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-400 font-serif">10,000+</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Units Unlocked</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-400 font-serif">$350M+</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">State Capital</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-400 font-serif">$50,000</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Homebuyer Grants</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-400 font-serif">$15M+</span>
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">Danbury Transit</span>
              </div>
            </div>
          </div>

          {/* Interactive Impact Scope Switcher */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                Explore The Impact of HB 8002:
              </span>
              <p className="text-slate-300 text-xs sm:text-sm">
                Toggle between local district deliverables in Western Connecticut and statewide structural changes.
              </p>
            </div>

            <div className="inline-flex rounded-xl bg-slate-900/90 p-1 border border-emerald-500/40 shadow-inner">
              <button
                onClick={() => setHbScope("district")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  hbScope === "district"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>District 24 Impact</span>
              </button>
              <button
                onClick={() => setHbScope("statewide")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  hbScope === "statewide"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>Statewide Impact (Connecticut)</span>
              </button>
            </div>
          </div>

          {/* Dynamic Impact Display Grid */}
          <div className="mt-6">
            {hbScope === "district" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <TrainTrack className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Danbury Rail & Downtown Core
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      $15M+ Downtown Transit Housing
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Directed over $15 million in dedicated state bonding and CIF funds to modernize Downtown Danbury's sewer and transit infrastructure, accelerating the conversion of vacant commercial parcels and surface lots near the Metro-North station into vibrant workforce housing with ground-floor retail.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Unlocks 500+ downtown workforce units
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Local Workforce Pipeline
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      Danbury Hospital & Teacher Housing
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Established dedicated workforce preference allocations ensuring Danbury Hospital nurses, medical technicians, public school educators, and Western Connecticut State University (WCSU) faculty can afford to live in the community where they serve.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Keeps essential municipal workers in Danbury
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <Scale className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      New Fairfield & Ridgefield
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      Suburban Planning & 8-30g Moratoriums
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Provided direct state planning grants to New Fairfield and Ridgefield to craft town-tailored housing plans, expand gentle middle housing, and achieve statutory 8-30g moratoriums cooperatively without contentious builder lawsuits.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Preserves local zoning authority
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Environmental Protection
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      Candlewood Lake & Watershed Safeguards
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Built in strict environmental review and water capacity safeguards protecting Candlewood Lake, Squantz Pond, Lake Kenosia, and local wetlands from inappropriate high-density runoff or septic overload.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ 100% CTLCV environmental compliance
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <KeyRound className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      First-Time Homebuyers
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      $50,000 Time To Own Down Payment Grants
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Replenished Connecticut's signature 0% forgivable down payment assistance fund so local young families, nurses, firefighters, and municipal workers can afford to buy their first single-family home or condo in District 24.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Turns renters into homeowners with immediate equity
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <Home className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Senior Homeowners
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      Senior Aging-in-Place & ADU Flexibility
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Provided funding for accessible home retrofits (ramps, walk-in showers) and ADU permitting flexibility so longtime senior residents across District 24 can generate rental income or downsize without leaving their hometowns.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Helps seniors stay in their family homes
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <Coins className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      State Capital Investment
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      $350M+ Housing Bonding Authorization
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Authorizes over $350 million in new state bonding across the Housing Trust Fund and Community Investment Fund (CIF) to finance shovel-ready workforce, multi-family, and middle-density housing developments statewide.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Unlocks 10,000+ new homes statewide
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <TrainTrack className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Transit Corridors
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      Transit-Oriented Development (TOD)
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Creates powerful financial incentives and streamlined state permitting for mixed-use and mixed-income communities within a half-mile radius of passenger rail stations and bus rapid transit hubs (Metro-North, CTrail, Shore Line East).
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Builds housing near jobs without traffic congestion
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Local Budget Relief
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      Municipal Water & Sewer Grants
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Establishes a dedicated state grant program subsidizing municipal water, sewer, and electric grid upgrades so local property taxpayers do not bear the infrastructure costs of new residential developments.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Shields local property tax mill rates
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Attainable Housing
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      Middle Housing & Gentle Density
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Encourages development of starter townhomes, duplexes, accessory dwelling units (ADUs), and live-work spaces to provide attainable options for young workers and downsizing seniors across Connecticut.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Expands inventory for middle-class buyers
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <KeyRound className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Statewide Homeownership
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      $100M+ Time To Own Infusion
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Injected over $100 million into CHFA's signature 0% interest, fully forgivable down payment assistance program ($25,000–$50,000 per family) to expand working-class homeownership statewide.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Builds generational wealth for thousands of families
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 flex items-center justify-center mb-3">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Consumer Protections
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-2 mb-2">
                      Banning Rental Junk Fees Statewide
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Outlawed deceptive rental application junk fees (capping application screening fees at $50), prohibited hidden move-in surcharges, standardized security deposit return timelines, and enhanced Fair Rent Commission enforcement against predatory rent gouging.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-emerald-400">
                    ✓ Protects over 450,000 CT renter households
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Coalition Leadership & Contrast Box */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                  <HardHat className="w-4 h-4 text-emerald-400" />
                  How Julie Kushner Built the HB 8002 Coalition
                </div>
                <h4 className="text-lg font-bold text-white font-serif mb-2">
                  Uniting Labor, Towns, and Environmental Champions
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {hb8002.legislative_coalition}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-600/30 text-xs text-emerald-200/90 italic flex items-start gap-2">
                <Quote className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{hb8002.kushner_quote}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Challenger Melissa Lindsey's Stance
                </div>
                <h4 className="text-lg font-bold text-white font-serif mb-2">
                  Opposed State Housing Funds & Demands 8-30g Repeal
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {hb8002.lindsey_contrast}
                </p>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200">
                <strong>District 24 Risk:</strong> Lindsey’s opposition to HB 8002 would forfeit over $15M in state infrastructure funds for Danbury and eliminate $50,000 homebuyer grants for local families.
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE HOUSING SAVINGS & RELIEF BREAKDOWN WIDGET */}
        {/* ============================================================ */}
        <div className="mb-20 bg-slate-800/80 backdrop-blur-md border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-700/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-900/60 border border-emerald-600/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                Delivered Housing Impact
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                How Julie Kushner Delivers Real Housing Relief
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                From $50,000 Time To Own homebuyer grants (HB 8002) to Fair Rent Commissions and senior property tax relief, explore the concrete statutory programs supporting District 24 residents.
              </p>
            </div>

            {/* Persona Switcher Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedPersona("all")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedPersona === "all"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                    : "bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                All Housing Areas
              </button>
              <button
                onClick={() => setSelectedPersona("homebuyers")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedPersona === "homebuyers"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                    : "bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                First-Time Homebuyers
              </button>
              <button
                onClick={() => setSelectedPersona("renters")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedPersona === "renters"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                    : "bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                Renters & Tenants
              </button>
              <button
                onClick={() => setSelectedPersona("seniors")}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedPersona === "seniors"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                    : "bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                Senior Homeowners
              </button>
            </div>
          </div>

          {/* Savings Metric Cards Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMetrics.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.beneficiary}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white font-serif group-hover:text-emerald-300 transition-colors mb-2">
                    {item.title}
                  </h4>

                  <div className="my-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-emerald-400 font-serif">
                      {item.average_annual_savings}
                    </span>
                    <span className="text-xs text-emerald-200/80">delivered support</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <p className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-100">Julie Kushner:</strong> {item.kushner_action}
                      </span>
                    </p>
                    <p className="flex items-start gap-1.5 text-slate-400">
                      <span className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5 text-center font-bold text-[10px]">✕</span>
                      <span>
                        <strong className="text-slate-300">Melissa Lindsey:</strong> {item.lindsey_alternative}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 italic">
                  Statutory Basis: {item.policy_basis}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Takeaway Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-600/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-emerald-200">
              <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                <strong>The Housing Bottom Line:</strong> Julie Kushner passed HB 8002 to bring $15M+ in state bonding to Danbury and $50,000 down payment grants to buyers. Melissa Lindsey opposes down payment grants and tenant protections.
              </span>
            </div>
            <a
              href="#dimension-details"
              className="shrink-0 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <span>Explore 6 Housing Pillars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 6 CORE HOUSING DIMENSIONS TABS & HEAD-TO-HEAD CARDS */}
        {/* ============================================================ */}
        <div id="dimension-details" className="pt-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              Head-to-Head Deep Dive by Housing Issue
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Select a housing topic below to compare candidate stances, voting actions, and district impact.
            </p>
          </div>

          {/* Dimension Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {dimensions.map((dim) => (
              <button
                key={dim.id}
                onClick={() => setActiveTab(dim.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === dim.id
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/60 scale-[1.02]"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700"
                }`}
              >
                {getDimensionIcon(dim.icon)}
                <span>{dim.title}</span>
              </button>
            ))}
          </div>

          {/* Active Dimension Comparison Display */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-xl">
            {/* Header info for selected dimension */}
            <div className="mb-8 pb-6 border-b border-slate-700/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                    {getDimensionIcon(currentDimension.icon)}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white font-serif">
                      {currentDimension.title}
                    </h4>
                    <p className="text-sm text-emerald-300 font-medium mt-0.5">
                      {currentDimension.tagline}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 text-sm mt-4 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                {currentDimension.overview}
              </p>
            </div>

            {/* Candidate Head-to-Head Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Julie Kushner Card */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-900/90 border-2 border-emerald-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  Incumbent Record • HB 8002 Leader
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-950 border-2 border-emerald-400 overflow-hidden shrink-0">
                      <img
                        src={candidatesData.candidates.julie_kushner.image}
                        alt="Senator Julie Kushner"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-white font-serif">
                        Senator Julie Kushner
                      </h5>
                      <span className="text-xs font-semibold text-emerald-400">
                        Democrat / Working Families • Deputy Senate President Pro Tempore
                      </span>
                    </div>
                  </div>

                  <div className="mb-5 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-600/30 text-xs text-slate-200 leading-relaxed">
                    <strong className="text-emerald-300 block mb-1 text-[11px] uppercase tracking-wide">
                      Stance & Legislative Approach:
                    </strong>
                    {currentDimension.kushner.stance}
                  </div>

                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Enacted Policies & Delivered Housing Actions:
                    </span>
                    {currentDimension.kushner.delivered_policies.map((policy, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{policy}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80 mb-6">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                      <TrendingDown className="w-3.5 h-3.5" />
                      Quantifiable District Impact:
                    </span>
                    <p className="text-xs text-slate-200 font-medium">
                      {currentDimension.kushner.quantifiable_impact}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-emerald-200/90 italic flex items-start gap-2">
                  <Quote className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{currentDimension.kushner.quote_or_highlight}</span>
                </div>
              </div>

              {/* Melissa Lindsey Card */}
              <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-700 text-slate-300 text-[11px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  Challenger Platform
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 overflow-hidden shrink-0">
                      <img
                        src={candidatesData.candidates.melissa_lindsey.image}
                        alt="Melissa Lindsey"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-white font-serif">
                        Melissa Lindsey
                      </h5>
                      <span className="text-xs font-semibold text-slate-400">
                        Republican Nominee • Former New Fairfield First Selectman
                      </span>
                    </div>
                  </div>

                  <div className="mb-5 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300 leading-relaxed">
                    <strong className="text-slate-200 block mb-1 text-[11px] uppercase tracking-wide">
                      Stance & Approach:
                    </strong>
                    {currentDimension.lindsey.stance}
                  </div>

                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Proposed Platform & Stated Stances:
                    </span>
                    {currentDimension.lindsey.proposed_policies.map((policy, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                        <span className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5 text-center font-bold text-[11px]">•</span>
                        <span>{policy}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 mb-6">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      Policy Tradeoffs & District Risks:
                    </span>
                    <p className="text-xs text-slate-300">
                      {currentDimension.lindsey.drawbacks_and_risks}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 italic flex items-start gap-2">
                  <Quote className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>{currentDimension.lindsey.quote_or_highlight}</span>
                </div>
              </div>
            </div>

            {/* Bottom Line Verdict */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-teal-950/80 border border-emerald-500/40">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                    District 24 Housing Verdict:
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {currentDimension.verdict}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SIDE-BY-SIDE SUMMARY REALITY CHECK MATRIX */}
        {/* ============================================================ */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 block">
              Housing Comparison Matrix
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              Housing Reality Check: Delivery vs. Stated Positions
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden shadow-xl text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-700 text-slate-200">
                  <th className="py-4 px-4 sm:px-6 font-bold w-1/4">Housing Pillar</th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-emerald-400 w-3/8 bg-emerald-950/40 border-r border-slate-700">
                    Senator Julie Kushner (Record & HB 8002)
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-slate-300 w-3/8">
                    Melissa Lindsey (Platform)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/70 text-slate-300">
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-white">
                    First-Time Homebuyers (HB 8002)
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-emerald-300 bg-emerald-950/20 border-r border-slate-700">
                    <span className="font-semibold text-white block">Time To Own ($25K–$50K Grants)</span>
                    Passed HB 8002 funding 0% forgivable equity loans for young families and teachers.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">
                    <span className="font-semibold text-slate-300 block">Opposes Homebuyer Subsidies</span>
                    Believes state assistance distorts mortgage markets; offers zero down payment aid.
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-white">
                    Downtown Danbury Housing (HB 8002)
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-emerald-300 bg-emerald-950/20 border-r border-slate-700">
                    <span className="font-semibold text-white block">$15M+ State Grants via HB 8002</span>
                    Transit-oriented development, sewer upgrades, and mixed-income workforce housing.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">
                    <span className="font-semibold text-slate-300 block">Opposes State Multi-Family Aid</span>
                    Focuses on suburban single-family roads; opposes state urban housing funds.
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-white">
                    Suburban Zoning & 8-30g
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-emerald-300 bg-emerald-950/20 border-r border-slate-700">
                    <span className="font-semibold text-white block">Collaborative Planning Grants</span>
                    Helps towns secure 8-30g moratoriums while protecting lake environments.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">
                    <span className="font-semibold text-slate-300 block">Total 8-30g Repeal Rhetoric</span>
                    Demands repeal without any replacement plan for senior/workforce housing.
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-white">
                    Senior Homeowners Aging in Place
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-emerald-300 bg-emerald-950/20 border-r border-slate-700">
                    <span className="font-semibold text-white block">100% Pension Tax Exemption</span>
                    Expanded elderly homeowner circuit breakers and home weatherization.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">
                    <span className="font-semibold text-slate-300 block">Local Spending Caps Only</span>
                    Offers no state senior tax relief or homeowner assistance programs.
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-white">
                    Tenant Rights & Junk Fees (HB 8002)
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-emerald-300 bg-emerald-950/20 border-r border-slate-700">
                    <span className="font-semibold text-white block">Fair Rent & Junk Fee Bans (HB 8002)</span>
                    Outlawed hidden rental fees and passed Fair Rent Commissions to halt rent gouging.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">
                    <span className="font-semibold text-slate-300 block">Opposes Rent Boards</span>
                    Advocates landlord deregulation and opposes tenant legal defense aid.
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-white">
                    Homelessness & Veterans
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-emerald-300 bg-emerald-950/20 border-r border-slate-700">
                    <span className="font-semibold text-white block">Millions for Shelters & Vets</span>
                    Funded Danbury emergency shelters and Permanent Supportive Housing.
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">
                    <span className="font-semibold text-slate-300 block">Policing & Public Order Focus</span>
                    Treats homelessness as a policing issue; opposes suburban shelter services.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
