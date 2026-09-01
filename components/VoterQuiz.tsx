"use client";

import React, { useState } from "react";
import { candidatesData } from "@/data/candidates";
import { Sparkles, CheckCircle2, RotateCcw, ArrowRight, Star, Award, HeartHandshake } from "lucide-react";

export default function VoterQuiz() {
  const questions = candidatesData.quiz_questions;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
      if (typeof window !== "undefined") {
        import("canvas-confetti")
          .then((confettiModule) => {
            const confetti = confettiModule.default;
            confetti({
              particleCount: 80,
              spread: 70,
              origin: { y: 0.6 },
            });
          })
          .catch(() => {});
      }
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setShowResults(false);
  };

  // Calculate score
  let kushnerMatches = 0;
  let lindseyMatches = 0;

  questions.forEach((q) => {
    const selectedIdx = selectedAnswers[q.id];
    if (selectedIdx !== undefined) {
      const chosen = q.options[selectedIdx];
      if (chosen.matches === "julie_kushner") {
        kushnerMatches += 1;
      } else {
        lindseyMatches += 1;
      }
    }
  });

  const totalAnswered = Object.keys(selectedAnswers).length;
  const currentQuestion = questions[currentStep];
  const isCurrentAnswered = selectedAnswers[currentQuestion?.id] !== undefined;

  return (
    <section id="quiz" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Interactive District 24 Voter Alignment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Where Do You Stand?
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Answer 5 quick policy questions to see which candidate's legislative votes align with your family's priorities.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {!showResults ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 rounded-full"
                    style={{
                      width: `${((currentStep + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mb-6 leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentQuestion.id, idx)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                        isSelected
                          ? "bg-emerald-950/70 border-emerald-500 ring-2 ring-emerald-500/40 text-white"
                          : "bg-slate-750/50 border-slate-700 text-slate-300 hover:bg-slate-700/60 hover:border-slate-600"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? "bg-emerald-500 border-emerald-400 text-slate-950"
                            : "border-slate-500"
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-4 h-4 fill-slate-950 text-emerald-400" />}
                      </div>
                      <span className="text-sm sm:text-base font-medium leading-relaxed">
                        {option.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <button
                  type="button"
                  onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                  disabled={currentStep === 0}
                  className={`text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors ${
                    currentStep === 0 ? "opacity-0 pointer-events-none" : ""
                  }`}
                >
                  ← Previous Question
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isCurrentAnswered}
                  className={`px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                    isCurrentAnswered
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50"
                      : "bg-slate-700 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  <span>{currentStep === questions.length - 1 ? "View Match Results" : "Next Question"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mb-2">
                Your Values Align With{" "}
                <span className="text-emerald-400">Senator Julie Kushner</span>!
              </h3>

              <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8">
                Based on your answers regarding paid family leave, fully funded local public schools, senior tax exemptions, and clean lake protections, Senator Julie Kushner's legislative votes champion your priorities.
              </p>

              {/* Score Breakdown Bar */}
              <div className="max-w-md mx-auto bg-slate-900/80 p-5 rounded-2xl border border-slate-700 mb-8 text-left">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="text-emerald-400">Julie Kushner Match: {kushnerMatches} / {totalAnswered}</span>
                  <span className="text-slate-400">Melissa Lindsey Match: {lindseyMatches} / {totalAnswered}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden flex">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-500"
                    style={{ width: `${(kushnerMatches / totalAnswered) * 100}%` }}
                  />
                  <div
                    className="bg-red-500 h-full transition-all duration-500"
                    style={{ width: `${(lindseyMatches / totalAnswered) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Summaries */}
              <div className="text-left space-y-4 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  How Senator Kushner Championed Your Choices in Hartford:
                </h4>
                {questions.map((q) => {
                  const chosenIdx = selectedAnswers[q.id];
                  const chosenOpt = q.options[chosenIdx];
                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 text-xs text-slate-300"
                    >
                      <div className="font-semibold text-white mb-1">{q.question}</div>
                      <div className="text-emerald-300 mt-1 flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{chosenOpt?.explanation}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-700">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Alignment Quiz</span>
                </button>
                <a
                  href="#voting-info"
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
                >
                  <span>Learn How to Vote on Nov 3</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
