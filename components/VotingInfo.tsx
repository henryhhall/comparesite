"use client";

import React from "react";
import { candidatesData } from "@/data/candidates";
import { Calendar, Clock, MapPin, CheckSquare, ExternalLink, ShieldCheck, Vote, Info, FileText } from "lucide-react";

export default function VotingInfo() {
  const guide = candidatesData.voting_guide;

  return (
    <section id="voting-info" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Vote className="w-4 h-4 text-emerald-700" />
            Voter Action & Resource Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            Connecticut 24th Senate District Voting Guide
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            Everything you need to know about casting your ballot in Danbury, New Fairfield, and Ridgefield.
          </p>
        </div>

        {/* Voting Key Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Election Day */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif mb-1">
                General Election Day
              </h3>
              <p className="text-emerald-700 font-semibold text-sm mb-3">
                {guide.election_day}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Polls Open: {guide.polls_open}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All regular municipal polling places across Danbury, New Fairfield, and Ridgefield will be open for in-person voting.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={guide.find_polling_place}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Find Your Polling Place</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 14 Days Early Voting */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold mb-4">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif mb-1">
                14 Days of Early Voting
              </h3>
              <p className="text-blue-700 font-semibold text-sm mb-3">
                Available In-Person Prior to Election Day
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {guide.early_voting} Registered voters can vote early at designated early voting locations in their town hall before November 3.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={guide.registration_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800"
              >
                <span>Check Your Voter Registration</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Absentee Voting */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif mb-1">
                Absentee & Mail Voting
              </h3>
              <p className="text-purple-700 font-semibold text-sm mb-3">
                Expanded Access (HB 5001)
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {guide.absentee_voting} Senator Julie Kushner supported legislation to expand accessible absentee voting for all eligible Connecticut voters.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="https://portal.ct.gov/sots/election-services/voter-information/absentee-voting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-800"
              >
                <span>Request an Absentee Ballot</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Official Campaign Resources */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-700">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-2">
                Learn More About Both Campaigns
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with the candidates, volunteer for local grassroots efforts, or contribute to support their visions for Connecticut.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href={guide.kushner_campaign_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm text-white shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Julie Kushner Campaign</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={guide.lindsey_campaign_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-slate-700 hover:bg-slate-600 font-bold text-sm text-slate-200 border border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <span>Melissa Lindsey Campaign</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
