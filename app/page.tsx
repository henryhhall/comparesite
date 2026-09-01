"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CandidateProfiles from "@/components/CandidateProfiles";
import AffordabilityDeepDive from "@/components/AffordabilityDeepDive";
import IssueMatrix from "@/components/IssueMatrix";
import KushnerAccomplishments from "@/components/KushnerAccomplishments";
import LindseyAnalysis from "@/components/LindseyAnalysis";
import TownImpact from "@/components/TownImpact";
import VoterQuiz from "@/components/VoterQuiz";
import VotingInfo from "@/components/VotingInfo";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Live Stats */}
      <Hero />

      {/* Candidate Profile Cards */}
      <CandidateProfiles />

      {/* Special Deep Dive: Affordability & Cost of Living */}
      <AffordabilityDeepDive />

      {/* Interactive 7-Pillar Issue Matrix */}
      <IssueMatrix />

      {/* Senator Julie Kushner Landmark Accomplishments & Clout */}
      <KushnerAccomplishments />

      {/* Objective Review of Challenger Platform */}
      <LindseyAnalysis />

      {/* Town-by-Town Impact (Danbury, New Fairfield, Ridgefield) */}
      <TownImpact />

      {/* Interactive 5-Question Voter Match Quiz */}
      <VoterQuiz />

      {/* District 24 Voting Guide & Resources */}
      <VotingInfo />

      {/* Footer */}
      <Footer />
    </main>
  );
}
