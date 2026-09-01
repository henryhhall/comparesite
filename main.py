"""
Main Entry Point for the Connecticut Senate District 24 Comparison Platform.

This script showcases dataset validation and summary generation by invoking
dedicated modular functions, adhering to the PEP 8 style guide.
"""

import sys
from affordability_comparison import AffordabilityDeepDiveService
from candidate_data import District24DataService
from site_manager import ComparisonReportGenerator


def example_validate_district_data() -> None:
    """
    Demonstrate dataset validation for District 24 candidate comparison.

    Loads the dataset via District24DataService, executes integrity checks
    via ComparisonReportGenerator, and displays verification results.
    """
    print("Initializing District 24 Candidate Data Service...")
    service = District24DataService()
    report_gen = ComparisonReportGenerator(service)

    print("Running comprehensive data integrity checks...")
    result = report_gen.validate_dataset()

    if result["valid"]:
        print("\n[SUCCESS] Dataset validated successfully!")
        counts = result["counts"]
        print(f" - Policy Pillars Analyzed: {counts['issues_count']}")
        print(f" - Senator Kushner Victories: {counts['kushner_victories_count']}")
        print(f" - Municipalities Covered: {counts['towns_covered']}")
        print(f" - Interactive Quiz Questions: {counts['quiz_questions']}")
    else:
        print("\n[ERROR] Dataset validation failed with the following issues:")
        for error in result["errors"]:
            print(f"  * {error}")
        sys.exit(1)


def example_candidate_comparison_summary() -> None:
    """
    Demonstrate candidate comparison summary output.

    Generates and outputs the head-to-head executive summary report
    comparing Senator Julie Kushner and Melissa Lindsey.
    """
    service = District24DataService()
    report_gen = ComparisonReportGenerator(service)
    summary_text = report_gen.generate_executive_summary()
    print("\n" + summary_text)


def example_affordability_deep_dive() -> None:
    """
    Demonstrate the candidate comparison on the issue of housing affordability.

    Utilizes AffordabilityDeepDiveService to generate and output the
    detailed head-to-head housing affordability comparison report contrasting
    Senator Julie Kushner's delivered relief with Melissa Lindsey's platform.
    """
    print("\nInitializing District 24 Housing Affordability Deep Dive Service...")
    affordability_service = AffordabilityDeepDiveService()
    affordability_report = (
        affordability_service.generate_affordability_report()
    )
    print("\n" + affordability_report)


def main() -> None:
    """
    Entry point to showcase application functionality.

    Calls the dedicated example demonstration methods without inline logic.
    """
    example_validate_district_data()
    example_candidate_comparison_summary()
    example_affordability_deep_dive()


if __name__ == "__main__":
    main()
