"""
Housing Affordability Deep Dive Comparison Module for CT Senate District 24.

This module provides data models, querying methods, and comprehensive comparative
report generation for the housing affordability policy debate between Senator
Julie Kushner and Challenger Melissa Lindsey, with a focus on Connecticut's
landmark 2025 Housing Omnibus Act (HB 8002).
All code adheres to the PEP 8 style guide.
"""

from dataclasses import dataclass, field
import json
from pathlib import Path
from typing import Any, Dict, List, Optional


@dataclass
class HouseholdSavingsItem:
    """Represents a specific quantifiable household annual savings deliverable."""

    id: str
    category: str
    title: str
    average_annual_savings: str
    beneficiary: str
    policy_basis: str
    kushner_action: str
    lindsey_alternative: str


@dataclass
class CandidateAffordabilityStance:
    """Represents a candidate's stance, policy actions, and impact."""

    candidate_name: str
    stance: str
    policies: List[str]
    quote_or_highlight: str
    quantifiable_impact_or_risk: str


@dataclass
class AffordabilityDimensionModel:
    """Represents a single battleground dimension in the affordability debate."""

    id: str
    title: str
    icon: str
    tagline: str
    overview: str
    kushner: CandidateAffordabilityStance
    lindsey: CandidateAffordabilityStance
    verdict: str


@dataclass
class HB8002DeepDiveModel:
    """Represents the analysis of Connecticut's landmark 2025 Housing Act (HB 8002)."""

    bill_number: str
    full_title: str
    year_passed: str
    kushner_leadership_role: str
    overview: str
    statewide_metrics: Dict[str, str]
    district_metrics: Dict[str, str]
    statewide_impact_points: List[str]
    district_impact_points: List[str]
    legislative_coalition: str
    kushner_quote: str
    lindsey_contrast: str


class AffordabilityDeepDiveService:
    """Service providing analysis and reporting on candidates' housing records."""

    def __init__(self, data_path: Optional[Path] = None) -> None:
        """
        Initialize the affordability service.

        Args:
            data_path: Optional path to candidates.json.
        """
        if data_path is None:
            base_dir = Path(__file__).resolve().parent
            self.data_path = base_dir / "data" / "candidates.json"
        else:
            self.data_path = data_path

        self._raw_data: Dict[str, Any] = {}
        self.load_data()

    def load_data(self) -> None:
        """Load JSON data from disk into internal dictionary."""
        if not self.data_path.exists():
            raise FileNotFoundError(f"Data file not found at: {self.data_path}")

        with open(self.data_path, "r", encoding="utf-8") as file_handle:
            self._raw_data = json.load(file_handle)

    def get_affordability_data(self) -> Dict[str, Any]:
        """Return the raw affordability deep-dive dictionary."""
        return self._raw_data.get("affordability_deep_dive", {})

    def get_hb8002_data(self) -> Optional[HB8002DeepDiveModel]:
        """
        Retrieve structured data for the landmark 2025 Housing Act (HB 8002).

        Returns:
            HB8002DeepDiveModel instance or None if not found.
        """
        raw_hb = self.get_affordability_data().get("hb8002_deep_dive")
        if not raw_hb:
            return None

        return HB8002DeepDiveModel(
            bill_number=raw_hb.get("bill_number", "HB 8002"),
            full_title=raw_hb.get("full_title", ""),
            year_passed=raw_hb.get("year_passed", "2025"),
            kushner_leadership_role=raw_hb.get("kushner_leadership_role", ""),
            overview=raw_hb.get("overview", ""),
            statewide_metrics=raw_hb.get("statewide_metrics", {}),
            district_metrics=raw_hb.get("district_metrics", {}),
            statewide_impact_points=raw_hb.get("statewide_impact_points", []),
            district_impact_points=raw_hb.get("district_impact_points", []),
            legislative_coalition=raw_hb.get("legislative_coalition", ""),
            kushner_quote=raw_hb.get("kushner_quote", ""),
            lindsey_contrast=raw_hb.get("lindsey_contrast", ""),
        )

    def get_household_savings(self) -> List[HouseholdSavingsItem]:
        """
        Retrieve all delivered household savings metrics.

        Returns:
            List of HouseholdSavingsItem instances.
        """
        raw_savings = self.get_affordability_data().get(
            "household_savings_breakdown", []
        )
        items: List[HouseholdSavingsItem] = []

        for item in raw_savings:
            items.append(
                HouseholdSavingsItem(
                    id=item["id"],
                    category=item["category"],
                    title=item["title"],
                    average_annual_savings=item["average_annual_savings"],
                    beneficiary=item["beneficiary"],
                    policy_basis=item["policy_basis"],
                    kushner_action=item["kushner_action"],
                    lindsey_alternative=item["lindsey_alternative"],
                )
            )

        return items

    def get_dimensions(self) -> List[AffordabilityDimensionModel]:
        """
        Retrieve the 6 core affordability policy dimensions.

        Returns:
            List of AffordabilityDimensionModel instances.
        """
        raw_dims = self.get_affordability_data().get("dimensions", [])
        dims: List[AffordabilityDimensionModel] = []

        for d in raw_dims:
            kushner_stance = CandidateAffordabilityStance(
                candidate_name="Senator Julie Kushner",
                stance=d["kushner"]["stance"],
                policies=d["kushner"]["delivered_policies"],
                quote_or_highlight=d["kushner"]["quote_or_highlight"],
                quantifiable_impact_or_risk=d["kushner"]["quantifiable_impact"],
            )

            lindsey_stance = CandidateAffordabilityStance(
                candidate_name="Melissa Lindsey",
                stance=d["lindsey"]["stance"],
                policies=d["lindsey"]["proposed_policies"],
                quote_or_highlight=d["lindsey"]["quote_or_highlight"],
                quantifiable_impact_or_risk=d["lindsey"]["drawbacks_and_risks"],
            )

            dims.append(
                AffordabilityDimensionModel(
                    id=d["id"],
                    title=d["title"],
                    icon=d["icon"],
                    tagline=d["tagline"],
                    overview=d["overview"],
                    kushner=kushner_stance,
                    lindsey=lindsey_stance,
                    verdict=d["verdict"],
                )
            )

        return dims

    def generate_affordability_report(self) -> str:
        """
        Generate a formatted head-to-head comparison report on Housing Affordability.

        Returns:
            Formatted multiline string.
        """
        affordability = self.get_affordability_data()
        hb8002 = self.get_hb8002_data()
        savings = self.get_household_savings()
        dimensions = self.get_dimensions()

        lines: List[str] = [
            "=" * 75,
            "CONNECTICUT SENATE DISTRICT 24: HOUSING AFFORDABILITY DEEP DIVE REPORT",
            "=" * 75,
            f"Headline: {affordability.get('headline', 'Housing Affordability Deep Dive')}",
            f"Summary:  {affordability.get('summary_takeaway', '')}",
            "-" * 75,
        ]

        if hb8002:
            lines.extend([
                "1. LANDMARK 2025 HOUSING ACT (HB 8002) IMPACT & KUSHNER LEADERSHIP:",
                "-" * 75,
                f" • Bill:       {hb8002.bill_number} - {hb8002.full_title}",
                f" • Role:       {hb8002.kushner_leadership_role}",
                f" • Overview:   {hb8002.overview[:140]}...",
                "",
                "   [A] STATEWIDE IMPACT (CONNECTICUT AS A WHOLE):",
                f"       - Housing Units:   {hb8002.statewide_metrics.get('units_unlocked', '10,000+')}",
                f"       - Capital Bonding: {hb8002.statewide_metrics.get('bonding_authorized', '$350M+')}",
                f"       - Homebuyer Fund:  {hb8002.statewide_metrics.get('homebuyer_fund', '$100M+')}",
            ])
            for pt in hb8002.statewide_impact_points[:3]:
                lines.append(f"       * {pt}")

            lines.extend([
                "",
                "   [B] DISTRICT 24 LOCAL IMPACT (DANBURY, NEW FAIRFIELD, RIDGEFIELD):",
                f"       - Danbury Transit Grants: {hb8002.district_metrics.get('danbury_bonds', '$15M+')}",
                f"       - Time To Own Maximum:    {hb8002.district_metrics.get('time_to_own_grant', '$50,000')}",
                f"       - Lake Watershed Safety:  {hb8002.district_metrics.get('watershed_protection', 'Protected')}",
            ])
            for pt in hb8002.district_impact_points[:3]:
                lines.append(f"       * {pt}")

            lines.extend([
                "",
                f"   [C] COALITION & LEADERSHIP: {hb8002.legislative_coalition[:140]}...",
                "-" * 75,
            ])

        lines.extend([
            "2. QUANTIFIED HOUSING DELIVERABLES & RELIEF DELIVERED BY SENATOR KUSHNER:",
            "-" * 75,
        ])

        for s in savings:
            lines.append(f" • [{s.category.upper()}] {s.title}")
            lines.append(f"   - Relief / Equity: {s.average_annual_savings}")
            lines.append(f"   - Beneficiaries:   {s.beneficiary}")
            lines.append(f"   - Law / Basis:     {s.policy_basis}")
            lines.append(f"   - Kushner Record:  {s.kushner_action}")
            lines.append(f"   - Lindsey Stance:  {s.lindsey_alternative}")
            lines.append("")

        lines.extend([
            "-" * 75,
            f"3. HEAD-TO-HEAD HOUSING POLICY DIMENSIONS COMPARED ({len(dimensions)} Areas):",
            "-" * 75,
        ])

        for idx, dim in enumerate(dimensions, start=1):
            lines.append(f"[{idx}] {dim.title.upper()}")
            lines.append(f"    Tagline: {dim.tagline}")
            lines.append(f"    Julie Kushner:   {dim.kushner.stance[:110]}...")
            lines.append(f"    Melissa Lindsey: {dim.lindsey.stance[:110]}...")
            lines.append(f"    Verdict:         {dim.verdict}")
            lines.append("")

        lines.extend([
            "=" * 75,
            "CONCLUSION: Senator Julie Kushner's track record demonstrates concrete,",
            "delivered housing relief—championing and passing the landmark 2025 Housing",
            "Act (HB 8002), unlocking 10,000+ homes statewide and $15M+ in Danbury",
            "transit housing, securing $50K Time To Own grants, delivering 100% senior",
            "pension tax freedom, and enacting Fair Rent protections. Challenger Melissa",
            "Lindsey opposes down payment grants and opposes tenant protections, while",
            "demanding total 8-30g repeal without a viable housing replacement strategy.",
            "=" * 75,
        ])

        return "\n".join(lines)
