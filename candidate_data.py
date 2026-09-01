"""
Candidate Data Module for Connecticut State Senate District 24.

This module defines data structures, models, and retrieval functions
for comparing candidates Julie Kushner (incumbent) and Melissa Lindsey (challenger).
All code complies with the PEP 8 style guide.
"""

from dataclasses import dataclass, field
import json
from pathlib import Path
from typing import Any, Dict, List, Optional


@dataclass
class KeyMetric:
    """Represents a quantifiable metric or highlight for a candidate."""
    label: str
    value: str
    detail: str


@dataclass
class MajorVictory:
    """Represents a major legislative or career achievement."""
    title: str
    year: str
    category: str
    description: str


@dataclass
class Candidate:
    """Represents a political candidate's complete profile and platform."""
    id: str
    name: str
    title: str
    party: str
    party_short: str
    residence: str
    years_in_office: str
    leadership_role: str
    committee_assignments: List[str]
    website: str
    image: str
    tagline: str
    background_summary: str
    voting_attendance_record: str
    conservation_score: str
    key_metrics: List[KeyMetric] = field(default_factory=list)
    major_victories: List[MajorVictory] = field(default_factory=list)


@dataclass
class IssueComparison:
    """Represents a head-to-head comparison on a specific policy issue."""
    id: str
    title: str
    category: str
    icon: str
    kushner_stance: str
    kushner_actions: List[str]
    lindsey_stance: str
    lindsey_actions: List[str]
    analysis: str


class District24DataService:
    """Service class for loading, querying, and verifying candidate comparison data."""

    def __init__(self, data_path: Optional[Path] = None) -> None:
        """
        Initialize the data service.

        Args:
            data_path: Optional path to the candidates.json data file.
                       Defaults to data/candidates.json relative to project root.
        """
        if data_path is None:
            base_dir = Path(__file__).resolve().parent
            self.data_path = base_dir / "data" / "candidates.json"
        else:
            self.data_path = data_path

        self._raw_data: Dict[str, Any] = {}
        self.load_data()

    def load_data(self) -> None:
        """Load JSON data from disk and parse into internal structures."""
        if not self.data_path.exists():
            raise FileNotFoundError(f"Data file not found at: {self.data_path}")

        with open(self.data_path, "r", encoding="utf-8") as file_handle:
            self._raw_data = json.load(file_handle)

    def get_district_info(self) -> Dict[str, Any]:
        """Return general information regarding CT Senate District 24."""
        return self._raw_data.get("district", {})

    def get_candidate(self, candidate_id: str) -> Optional[Candidate]:
        """
        Retrieve a candidate model by their identifier.

        Args:
            candidate_id: Identifier ('julie_kushner' or 'melissa_lindsey').

        Returns:
            Candidate instance if found, None otherwise.
        """
        raw_candidates = self._raw_data.get("candidates", {})
        cand_dict = raw_candidates.get(candidate_id)
        if not cand_dict:
            return None

        metrics = [
            KeyMetric(
                label=m["label"],
                value=m["value"],
                detail=m["detail"]
            )
            for m in cand_dict.get("key_metrics", [])
        ]

        victories = [
            MajorVictory(
                title=v["title"],
                year=v["year"],
                category=v["category"],
                description=v["description"]
            )
            for v in cand_dict.get("major_victories", [])
        ]

        return Candidate(
            id=cand_dict["id"],
            name=cand_dict["name"],
            title=cand_dict["title"],
            party=cand_dict["party"],
            party_short=cand_dict["party_short"],
            residence=cand_dict["residence"],
            years_in_office=cand_dict["years_in_office"],
            leadership_role=cand_dict["leadership_role"],
            committee_assignments=cand_dict.get("committee_assignments", []),
            website=cand_dict["website"],
            image=cand_dict["image"],
            tagline=cand_dict["tagline"],
            background_summary=cand_dict["background_summary"],
            voting_attendance_record=cand_dict["voting_attendance_record"],
            conservation_score=cand_dict["conservation_score"],
            key_metrics=metrics,
            major_victories=victories,
        )

    def get_all_issue_comparisons(self) -> List[IssueComparison]:
        """Retrieve all 7 policy pillars comparing both candidates."""
        raw_issues = self._raw_data.get("issues_comparison", [])
        results: List[IssueComparison] = []

        for item in raw_issues:
            results.append(
                IssueComparison(
                    id=item["id"],
                    title=item["title"],
                    category=item["category"],
                    icon=item["icon"],
                    kushner_stance=item["kushner_stance"],
                    kushner_actions=item["kushner_actions"],
                    lindsey_stance=item["lindsey_stance"],
                    lindsey_actions=item["lindsey_actions"],
                    analysis=item["analysis"],
                )
            )

        return results

    def get_town_deliverables(self) -> List[Dict[str, Any]]:
        """Retrieve town-by-town accomplishments (Danbury, New Fairfield, Ridgefield)."""
        return self._raw_data.get("town_impacts", [])

    def get_quiz_questions(self) -> List[Dict[str, Any]]:
        """Retrieve interactive quiz questions for voter issue alignment."""
        return self._raw_data.get("quiz_questions", [])
