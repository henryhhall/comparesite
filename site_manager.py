"""
Site Manager and Data Exporter Module for CT Senate District 24.

This module provides data validation, integrity checks, and summary report
generation functions for the candidate comparison web application.
All code adheres to the PEP 8 style guide.
"""

from typing import Dict, Any, List
from candidate_data import District24DataService, Candidate, IssueComparison


class ComparisonReportGenerator:
    """Generates structured comparison reports and performs data validation."""

    def __init__(self, service: District24DataService) -> None:
        """
        Initialize the report generator with a data service instance.

        Args:
            service: An instance of District24DataService.
        """
        self.service = service

    def validate_dataset(self) -> Dict[str, Any]:
        """
        Validate completeness and integrity of the candidate dataset.

        Returns:
            Dictionary containing validation status, errors, and summary counts.
        """
        errors: List[str] = []

        district = self.service.get_district_info()
        if not district.get("name"):
            errors.append("District name missing.")

        julie = self.service.get_candidate("julie_kushner")
        if not julie:
            errors.append("Julie Kushner profile missing.")
        elif len(julie.major_victories) == 0:
            errors.append("Julie Kushner has no major victories listed.")

        lindsey = self.service.get_candidate("melissa_lindsey")
        if not lindsey:
            errors.append("Melissa Lindsey profile missing.")

        issues = self.service.get_all_issue_comparisons()
        if len(issues) < 5:
            errors.append(f"Expected at least 5 issue comparisons, found {len(issues)}.")

        for issue in issues:
            if not issue.kushner_stance or not issue.lindsey_stance:
                errors.append(f"Incomplete stances in issue '{issue.title}'.")
            if not issue.analysis:
                errors.append(f"Missing comparative analysis in issue '{issue.title}'.")

        town_impacts = self.service.get_town_deliverables()
        if len(town_impacts) < 3:
            errors.append(f"Expected 3 town impact summaries, found {len(town_impacts)}.")

        quiz_questions = self.service.get_quiz_questions()
        if len(quiz_questions) < 3:
            errors.append(f"Expected at least 3 quiz questions, found {len(quiz_questions)}.")

        is_valid = len(errors) == 0
        return {
            "valid": is_valid,
            "errors": errors,
            "counts": {
                "issues_count": len(issues),
                "kushner_victories_count": len(julie.major_victories) if julie else 0,
                "towns_covered": len(town_impacts),
                "quiz_questions": len(quiz_questions),
            }
        }

    def generate_executive_summary(self) -> str:
        """
        Generate a text summary contrasting both candidates.

        Returns:
            Formatted string summarizing the key takeaways of the race.
        """
        julie: Candidate = self.service.get_candidate("julie_kushner")  # type: ignore
        lindsey: Candidate = self.service.get_candidate("melissa_lindsey")  # type: ignore
        issues: List[IssueComparison] = self.service.get_all_issue_comparisons()

        lines: List[str] = [
            "=" * 70,
            "CONNECTICUT STATE SENATE DISTRICT 24: CANDIDATE COMPARISON REPORT",
            "=" * 70,
            f"Incumbent:  Senator {julie.name} ({julie.party_short}) - {julie.residence}",
            f"Role:       {julie.leadership_role}",
            f"Attendance: {julie.voting_attendance_record}",
            f"Environment:{julie.conservation_score}",
            "-" * 70,
            f"Challenger: {lindsey.name} ({lindsey.party_short}) - {lindsey.residence}",
            f"Background: {lindsey.background_summary}",
            "=" * 70,
            f"TOTAL POLICY PILLARS COMPARED: {len(issues)}",
            "-" * 70,
        ]

        for idx, issue in enumerate(issues, start=1):
            lines.append(f"[{idx}] {issue.title} ({issue.category})")
            lines.append(f"   Julie Kushner:   {issue.kushner_stance[:110]}...")
            lines.append(f"   Melissa Lindsey: {issue.lindsey_stance[:110]}...")
            lines.append(f"   Takeaway:        {issue.analysis[:110]}...")
            lines.append("")

        lines.append("=" * 70)
        lines.append("CONCLUSION: Julie Kushner's legislative seniority, 100% voting record,")
        lines.append("and landmark bills (Paid Leave, Minimum Wage, Danbury Career Academy)")
        lines.append("demonstrate unmatched delivery for District 24 and Connecticut.")
        lines.append("=" * 70)

        return "\n".join(lines)
