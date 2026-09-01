export interface KeyMetric {
  label: string;
  value: string;
  detail: string;
}

export interface MajorVictory {
  title: string;
  year: string;
  category: string;
  description: string;
}

export interface Candidate {
  id: string;
  name: string;
  title: string;
  party: string;
  party_short: string;
  residence: string;
  years_in_office: string;
  leadership_role: string;
  committee_assignments: string[];
  website: string;
  image: string;
  tagline: string;
  background_summary: string;
  voting_attendance_record: string;
  conservation_score: string;
  key_metrics: KeyMetric[];
  major_victories: MajorVictory[];
}

export interface IssueComparison {
  id: string;
  title: string;
  category: string;
  icon: string;
  kushner_stance: string;
  kushner_actions: string[];
  lindsey_stance: string;
  lindsey_actions: string[];
  analysis: string;
}

export interface TownImpact {
  town: string;
  icon: string;
  kushner_deliverables: string[];
}

export interface QuizOption {
  text: string;
  matches: string;
  explanation: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface VotingGuide {
  election_day: string;
  polls_open: string;
  early_voting: string;
  absentee_voting: string;
  registration_link: string;
  find_polling_place: string;
  kushner_campaign_url: string;
  lindsey_campaign_url: string;
}

export interface HouseholdSavingsMetric {
  id: string;
  category: string;
  title: string;
  average_annual_savings: string;
  beneficiary: string;
  policy_basis: string;
  kushner_action: string;
  lindsey_alternative: string;
}

export interface AffordabilityDimension {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  overview: string;
  kushner: {
    stance: string;
    delivered_policies: string[];
    quantifiable_impact: string;
    quote_or_highlight: string;
  };
  lindsey: {
    stance: string;
    proposed_policies: string[];
    drawbacks_and_risks: string;
    quote_or_highlight: string;
  };
  verdict: string;
}

export interface HB8002DeepDive {
  bill_number: string;
  full_title: string;
  year_passed: string;
  kushner_leadership_role: string;
  overview: string;
  statewide_metrics: {
    units_unlocked: string;
    bonding_authorized: string;
    homebuyer_fund: string;
    transit_zones: string;
  };
  district_metrics: {
    danbury_bonds: string;
    time_to_own_grant: string;
    town_planning_aid: string;
    watershed_protection: string;
  };
  statewide_impact_points: string[];
  district_impact_points: string[];
  legislative_coalition: string;
  kushner_quote: string;
  lindsey_contrast: string;
}

export interface AffordabilityDeepDive {
  headline: string;
  subtitle: string;
  summary_takeaway: string;
  hb8002_deep_dive: HB8002DeepDive;
  household_savings_breakdown: HouseholdSavingsMetric[];
  dimensions: AffordabilityDimension[];
}

export interface DistrictData {
  district: {
    name: string;
    towns: string[];
    registered_voters_approx: number;
    election_date: string;
    current_representation: string;
    description: string;
  };
  candidates: {
    julie_kushner: Candidate;
    melissa_lindsey: Candidate;
  };
  issues_comparison: IssueComparison[];
  affordability_deep_dive: AffordabilityDeepDive;
  town_impacts: TownImpact[];
  quiz_questions: QuizQuestion[];
  voting_guide: VotingGuide;
}

export const candidatesData: DistrictData = {
  district: {
    name: "Connecticut State Senate District 24",
    towns: ["Danbury", "New Fairfield", "Ridgefield (part)"],
    registered_voters_approx: 65000,
    election_date: "November 3, 2026",
    current_representation: "Senator Julie Kushner (Democratic / Working Families)",
    description: "District 24 represents Western Connecticut, centered around the bustling urban and educational center of Danbury, the lake and residential community of New Fairfield, and parts of Ridgefield. Key local issues include public school funding, property tax relief, protection of Candlewood Lake and Lake Kenosia, affordable healthcare, and workforce investments."
  },
  candidates: {
    julie_kushner: {
      id: "julie_kushner",
      name: "Julie Kushner",
      title: "State Senator (Incumbent)",
      party: "Democrat / Working Families",
      party_short: "DEM",
      residence: "Danbury, CT (Resident for 30+ years)",
      years_in_office: "2019 – Present (4 Terms)",
      leadership_role: "Deputy President Pro Tempore, Connecticut State Senate",
      committee_assignments: [
        "Labor and Public Employees Committee (Senate Co-Chair)",
        "Appropriations Committee (Vice-Chair)",
        "Committee on Children (Vice-Chair)",
        "Public Health Committee (Vice-Chair)",
        "Education Committee",
        "Executive and Legislative Nominations Committee"
      ],
      website: "https://www.juliekushnerforct.com/",
      image: "https://images.squarespace-cdn.com/content/v1/696a3ef61ab8d04fcbf4de5b/1eed9165-8f13-4dda-ae85-750d3470f174/Julie+Kushner+2022s+%281%29.png",
      tagline: "Delivering Real Results for Working Families, Seniors, and Our Local Schools.",
      background_summary: "Lifelong champion for working people, mothers, retirees, and students. Former Director of UAW Region 9A, 30-year Danbury resident and neighbor. Holds a perfect 100% voting attendance record for five consecutive years (2020–2024) and has passed some of the most consequential legislation in Connecticut history.",
      voting_attendance_record: "100% Roll Call Attendance (2020, 2021, 2022, 2023, 2024)",
      conservation_score: "100% Environmental Champion (CT League of Conservation Voters)",
      key_metrics: [
        { label: "Voting Attendance", value: "100%", detail: "5 Consecutive Years without missing a single senate vote" },
        { label: "School Funding Secured", value: "$164M+", detail: "Historic 80% state reimbursement for Danbury Career Academy" },
        { label: "Paid Leave Impact", value: "100,000+", detail: "CT workers supported during medical and family care emergencies" },
        { label: "Middle Class Tax Relief", value: "Largest in CT History", detail: "Lowered income tax rates and eliminated taxes on pensions & 401(k)s" }
      ],
      major_victories: [
        {
          title: "Landmark 2025 Connecticut Housing Omnibus Act (HB 8002)",
          year: "2025",
          category: "Housing Affordability",
          description: "Played a central Senate leadership role as Deputy President Pro Tempore in negotiating and passing Connecticut's historic 2025 Housing Omnibus Act (originally introduced as HB 8002). The landmark law delivered record state funding for transit-oriented workforce housing near downtown train corridors like Danbury, replenished the $50,000 Time To Own homebuyer grant fund, provided municipal infrastructure and sewer grants to encourage gentle housing growth, and enacted sweeping tenant protections against hidden rental junk fees and unfair evictions."
        },
        {
          title: "Connecticut Paid Family and Medical Leave Act (PA 19-25)",
          year: "2019",
          category: "Workers & Families",
          description: "Spearheaded and passed landmark legislation providing up to 12 weeks of paid wage replacement for workers facing serious health conditions, caring for ill family members, or bonding with a newborn or adopted child. Today, over 100,000 Connecticut workers have utilized this safety net without risking financial ruin."
        },
        {
          title: "Historic Minimum Wage Increase to $15+ Pegged to Inflation",
          year: "2019–Present",
          category: "Economy & Wages",
          description: "Authored and enacted the $15 minimum wage increase, with an automatic index to the federal Employment Cost Index so pay continues to keep pace with inflation (now $15.69+/hr in 2024–2026), lifting tens of thousands of local families out of poverty."
        },
        {
          title: "Danbury Career Academy & Historic ECS Education Aid",
          year: "2022–2026",
          category: "Education",
          description: "Secured an unprecedented 80% state construction reimbursement rate for the $164 million Danbury Career Academy, protecting Danbury property taxpayers while expanding career and technical education for 1,400+ high school students. Delivered record increases in Education Cost Sharing (ECS) grants to Danbury and New Fairfield."
        },
        {
          title: "Reproductive Freedom Defense Act (Safe Harbor Law)",
          year: "2022",
          category: "Healthcare",
          description: "Co-sponsored Connecticut’s groundbreaking Safe Harbor legislation protecting patients, doctors, and nurses from out-of-state legal persecution or civil penalties for providing legal reproductive and abortion healthcare services."
        },
        {
          title: "Prescription Drug & Insulin Price Caps (PA 20-4)",
          year: "2020",
          category: "Healthcare Affordability",
          description: "Capped out-of-pocket insulin costs at $25 per month and non-insulin diabetes supplies at $100 per month, directly lowering life-or-death healthcare costs for thousands of diabetic residents."
        },
        {
          title: "Largest Personal Income Tax Cut & Senior Pension Exemption",
          year: "2023–2024",
          category: "Taxes & Cost of Living",
          description: "Enacted the largest middle-class income tax rate reduction in state history (lowering marginal rates from 3% to 2% and 5% to 4.5%) and fully exempted 100% of retirement pensions and 401(k) distributions from state income tax for middle-class retirees."
        },
        {
          title: "Preserving Candlewood Lake & Banning Toxic PFAS",
          year: "2021–2026",
          category: "Environment",
          description: "Earned a 100% environmental score from CTLCV. Secured state bonding to eradicate invasive aquatic weeds in Candlewood Lake and Squantz Pond, banned toxic PFAS 'forever chemicals' in food packaging and firefighting foam, and funded clean drinking water infrastructure."
        },
        {
          title: "Worker Safety & First Responder PTSD Protections",
          year: "2021–2026",
          category: "Public Safety",
          description: "Expanded workers’ compensation coverage to include PTSD and mental health support for police, firefighters, paramedics, and healthcare workers, while enhancing safety protections for assaulted teachers and healthcare staff."
        }
      ]
    },
    melissa_lindsey: {
      id: "melissa_lindsey",
      name: "Melissa Lindsey",
      title: "Challenger / Former First Selectman",
      party: "Republican",
      party_short: "REP",
      residence: "New Fairfield, CT",
      years_in_office: "Former First Selectman of New Fairfield (1 Term)",
      leadership_role: "Republican Nominee for CT State Senate District 24",
      committee_assignments: [],
      website: "https://www.lindseyforsenatect.com/",
      image: "https://content.campaignpartner.net/images/153270/IMG_2659.jpeg",
      tagline: "Fighting for working families in District 24 — because Connecticut shouldn't be this hard to afford.",
      background_summary: "Lifelong resident of New Fairfield, former First Selectman of New Fairfield, small business office manager in Danbury for 15+ years. Bachelor's Degree in Mathematics from Western Connecticut State University. Involved in local sports coaching (field hockey) and Danbury public schools as a substitute teacher.",
      voting_attendance_record: "N/A (Has not served in the State Legislature)",
      conservation_score: "N/A (Proposes cutting renewable energy public benefit charges and expanding natural gas/fossil fuels)",
      key_metrics: [
        { label: "Municipal Experience", value: "1 Term", detail: "Former First Selectman of New Fairfield" },
        { label: "Legislative Experience", value: "0 Years", detail: "No service in the CT General Assembly" },
        { label: "Energy Platform", value: "Fossil Fuel Expansion", detail: "Proposes expanding natural gas and rolling back clean energy charges" },
        { label: "School Stance", value: "School Choice Vouchers", detail: "Supports voucher models that divert funds from public schools" }
      ],
      major_victories: [
        {
          title: "New Fairfield First Selectman Tenure",
          year: "2023–2025",
          category: "Local Government",
          description: "Served as First Selectman of New Fairfield managing town administrative functions, municipal budgeting, and local road maintenance."
        },
        {
          title: "Family Small Business Management",
          year: "2008–Present",
          category: "Private Sector",
          description: "Worked as an office manager and business leader for over 15 years in her family's small business in Danbury."
        },
        {
          title: "Youth Sports Coaching & Volunteer Work",
          year: "2015–Present",
          category: "Community",
          description: "Served as coordinator of the New Fairfield Youth Field Hockey program, expanding participation for 3rd through 5th graders."
        }
      ]
    }
  },
  issues_comparison: [
    {
      id: "cost-of-living",
      title: "Cost of Living & Tax Relief",
      category: "Taxes & Economy",
      icon: "DollarSign",
      kushner_stance: "Delivered the largest middle-class income tax cut in Connecticut history; eliminated state income taxes on 100% of pensions and 401(k) distributions for seniors; capped local motor vehicle taxes; capped insulin at $25/mo to lower living costs.",
      kushner_actions: [
        "Voted for the historic $460M middle-class tax cut lowering the 3% and 5% rates.",
        "Authored and passed full tax exemption on retiree pensions, annuities, and 401(k)s.",
        "Capped municipal car tax rates, saving Danbury and New Fairfield drivers hundreds annually.",
        "Secured state bonding that offset local property tax burdens by funding local infrastructure."
      ],
      lindsey_stance: "Focuses primarily on eliminating the 'public benefits charge' on utility bills and opposing state climate fees (Climate Superfund HB 5156). Proposes cutting state fees without outlining structural tax cuts for working-class families.",
      lindsey_actions: [
        "Calls for eliminating electric bill public benefit charges that fund energy efficiency and grid assistance.",
        "Opposes clean energy legislation (HB 5340) and fossil fuel company accountability bills (HB 5156).",
        "Supports capping property tax increases at the municipal level without providing replacement state revenue."
      ],
      analysis: "While Melissa Lindsey points to utility surcharge frustrations, Senator Julie Kushner has delivered tangible, systemic financial relief to every household in the district: the largest personal income tax cut in state history, complete tax freedom on senior pensions and 401(k)s, and multi-million dollar school construction grants that directly prevented local property tax hikes in Danbury and New Fairfield."
    },
    {
      id: "workers-rights",
      title: "Workers' Rights, Paid Leave & Wages",
      category: "Labor & Jobs",
      icon: "Briefcase",
      kushner_stance: "Senate Co-Chair of the Labor Committee; chief architect of Connecticut's landmark Paid Family & Medical Leave Act; champion of the $15.69+ inflation-adjusted minimum wage and strong protections against workplace wage theft.",
      kushner_actions: [
        "Authored and passed the CT Paid Family & Medical Leave Act (PA 19-25) benefiting 100,000+ CT residents.",
        "Enacted automatic inflation adjustments to Connecticut's minimum wage so pay keeps pace with grocery prices.",
        "Passed legislation (HB 5003) protecting sub-contracted workers from wage theft and expanding workers' comp for assaulted teachers/nurses.",
        "Banned coercive 'captive audience' employer meetings to protect worker organizing rights."
      ],
      lindsey_stance: "Small business perspective advocating deregulation. Opposes state labor mandates, workplace regulations, and expanded benefit requirements on businesses.",
      lindsey_actions: [
        "Emphasizes reducing state mandates and regulations on small businesses.",
        "Argues that state benefit programs and wage rules increase operational friction for employers.",
        "Has not proposed any legislative framework to expand wage growth or worker protections."
      ],
      analysis: "Julie Kushner is Connecticut's most effective champion for working families. Her leadership on Paid Family Leave and the inflation-indexed minimum wage ensures that when a loved one is sick or a child is born, workers don't have to choose between their paycheck and their family. Lindsey's deregulatory approach offers no safety net for working people facing illness or caregiving burdens."
    },
    {
      id: "education",
      title: "Public Schools & Higher Education",
      category: "Education",
      icon: "GraduationCap",
      kushner_stance: "Secured an unprecedented 80% state reimbursement rate for the $164M Danbury Career Academy; delivered millions in increased Education Cost Sharing (ECS) grants for Danbury and New Fairfield; champion of Debt-Free Community College (PLEDGE) and Care4Kids childcare.",
      kushner_actions: [
        "Delivered $130M+ in direct state aid for Danbury Career Academy construction.",
        "Named '2024 Children's Champion' by the CT Early Childhood Alliance for funding early childhood education.",
        "Expanded Connecticut's Debt-Free Community College program allowing local students to earn degrees without debt.",
        "Secured additional special education funding and mental health staff for local school districts."
      ],
      lindsey_stance: "Supports 'school choice' / voucher programs that divert tax revenue to private and charter alternatives; advocates for parental rights and local curriculum scrutiny; former substitute teacher and youth field hockey coordinator.",
      lindsey_actions: [
        "Explicitly endorsed school choice vouchers: 'How and where children are educated — I support school choice'.",
        "Emphasizes parental oversight of public school curricula and health guidelines.",
        "Argues that state educational guidelines infringe upon local municipal discretion."
      ],
      analysis: "Senator Kushner's monumental achievement in securing an 80% state reimbursement for the Danbury Career Academy relieved local property taxpayers of over $130 million while creating state-of-the-art vocational pipelines. In contrast, Lindsey's push for 'school choice' vouchers threatens to siphon vital state funding away from Danbury and New Fairfield public classrooms."
    },
    {
      id: "healthcare",
      title: "Healthcare, Prescription Drugs & Reproductive Freedom",
      category: "Healthcare",
      icon: "HeartPulse",
      kushner_stance: "Staunch protector of reproductive rights; co-sponsored CT's Reproductive Freedom Defense Act (Safe Harbor Law); capped insulin at $25/month; expanded access to HUSKY healthcare for children and post-partum mothers.",
      kushner_actions: [
        "Passed landmark safe harbor legislation shielding reproductive healthcare doctors and patients from out-of-state bans.",
        "Capped diabetes insulin copays at $25/month and essential diabetic equipment at $100/month.",
        "Expanded HUSKY Medicaid coverage for low-income mothers and children across Greater Danbury.",
        "Supported enhanced funding for local mental health clinics and addiction treatment facilities."
      ],
      lindsey_stance: "Emphasizes 'Medical Autonomy' and 'Religious Liberty' focused on repealing school vaccine requirements; questions adult vaccine standards; does not take an affirmative stance protecting reproductive healthcare or abortion rights.",
      lindsey_actions: [
        "Advocates restoring religious exemptions for school immunization requirements.",
        "Opposes state public health standards regarding adult vaccination guidelines.",
        "Has remained silent or uncommitted on state-level protections for reproductive healthcare and contraception."
      ],
      analysis: "Julie Kushner is a proven guardian of personal healthcare freedoms and affordable medicine, safeguarding women's reproductive autonomy in a post-Roe nation and capping prescription drug costs. Lindsey's platform focuses on anti-vaccine mandate rhetoric rather than lowering medical costs or defending reproductive rights."
    },
    {
      id: "public-safety",
      title: "Public Safety, Gun Safety & Community Welfare",
      category: "Public Safety",
      icon: "ShieldCheck",
      kushner_stance: "Balanced approach combining strong gun violence prevention laws (banning ghost guns, strengthening red flag laws, safe storage) with robust funding for local police de-escalation training, mental health crisis response, and youth crime diversion.",
      kushner_actions: [
        "Voted for comprehensive gun safety updates closing ghost gun loopholes and expanding safe storage.",
        "Secured funding for Danbury Police Department training, body cameras, and emergency responder equipment.",
        "Passed legislation providing PTSD mental health compensation for police officers and emergency personnel.",
        "Funded after-school youth engagement programs to prevent juvenile crime in Danbury."
      ],
      lindsey_stance: "Emphasizes tough-on-crime rhetoric, repealing police accountability reforms, and defending Second Amendment gun rights without additional firearms regulations.",
      lindsey_actions: [
        "Supports existing gun ownership rights and opposes new state firearm regulations.",
        "Calls for reforming state juvenile justice policies to increase penalties on repeat juvenile offenders.",
        "Advocates rolling back elements of Connecticut's Police Accountability Act."
      ],
      analysis: "Senator Kushner understands that true community safety requires keeping illegal assault weapons and ghost guns off our streets while fully equipping local police with mental health resources and community tools. Lindsey's opposition to gun safety measures runs contrary to Connecticut's nationally recognized, life-saving firearms protections."
    },
    {
      id: "environment",
      title: "Environment, Clean Lakes & Energy",
      category: "Environment",
      icon: "Trees",
      kushner_stance: "Perfect 100% environmental voting score; secured state bonding to protect Candlewood Lake, Squantz Pond, and Lake Kenosia from invasive species; banned toxic PFAS 'forever chemicals'; championed clean renewable energy transitions.",
      kushner_actions: [
        "Awarded 100% score as an 'Environmental Champion' by the CT League of Conservation Voters.",
        "Secured state grants for the Candlewood Lake Authority to combat invasive Eurasian watermilfoil and blue-green algae.",
        "Championed legislation banning PFAS chemicals in firefighting foam and consumer food packaging.",
        "Supported state incentives for residential heat pumps, rooftop solar, and modern electrical grid upgrades."
      ],
      lindsey_stance: "Advocates an 'all-of-the-above' energy approach including natural gas, nuclear, and fossil fuel expansion; opposes clean energy public benefits charges and climate accountability fees on oil companies.",
      lindsey_actions: [
        "Proposes eliminating public benefit charges that finance clean energy incentives and energy efficiency audits.",
        "Opposes the state Climate Superfund legislation (HB 5156) holding fossil fuel polluters accountable.",
        "Advocates continued long-term reliance on natural gas and fossil fuel infrastructure."
      ],
      analysis: "Preserving Candlewood Lake and our natural open spaces requires dedicated state advocacy and ecological foresight. Julie Kushner's 100% conservation record and direct funding for Candlewood Lake preservation contrast with Lindsey's platform of defunding clean energy initiatives and expanding fossil fuel reliance."
    },
    {
      id: "legislative-effectiveness",
      title: "Legislative Influence & District Results",
      category: "Leadership",
      icon: "Award",
      kushner_stance: "Deputy President Pro Tempore of the State Senate and Co-Chair of the Labor Committee; member of the Senate Majority leadership team capable of delivering state budget bonding, committee chairmanships, and direct grant allocations to District 24.",
      kushner_actions: [
        "Maintained 100% perfect voting attendance for 5 straight years (2020–2024).",
        "Directs major committee deliberations on labor, appropriations, public health, and education.",
        "Consistently delivers bipartisan victories, including the 2026 workforce omnibus package (HB 5003).",
        "Accessible neighbor holding dozens of town halls, coffee hours, and district listening sessions."
      ],
      lindsey_stance: "Former one-term town First Selectman running as an outsider; would enter the General Assembly as a junior minority party legislator with no committee seniority or leadership influence.",
      lindsey_actions: [
        "One term as First Selectman of New Fairfield.",
        "Has no experience drafting state statutes or negotiating state biennial budgets in Hartford.",
        "Would lack the legislative seniority required to secure major capital bonding or committee chairs for the district."
      ],
      analysis: "Influence in Hartford matters. As Deputy President Pro Tempore and Labor Co-Chair, Julie Kushner wields significant clout to bring state tax dollars back to Danbury, New Fairfield, and Ridgefield. Replacing a respected Senate leader with a junior minority backbencher would drastically reduce District 24's voice and funding in Hartford."
    }
  ],
  affordability_deep_dive: {
    headline: "Housing Affordability: Candidate Deep Dive",
    subtitle: "Contrasting Senator Julie Kushner's leadership on the landmark 2025 Housing Act (HB 8002), down payment grants, and senior property tax relief against Challenger Melissa Lindsey's deregulatory approach.",
    summary_takeaway: "Housing costs are the #1 financial pressure on District 24 residents. As Senate Deputy President Pro Tempore, Senator Julie Kushner was instrumental in negotiating and passing Connecticut's landmark 2025 Housing Omnibus Act (originally HB 8002)—authorizing record state bonding for transit-oriented workforce housing in Downtown Danbury, replenishing the $50,000 Time To Own first-time homebuyer grant fund, providing municipal infrastructure aid, and banning predatory rental fees. Combined with exempting 100% of senior pensions from state taxes and mandating Fair Rent Commissions, Kushner has systematically tackled the housing crisis. In contrast, Melissa Lindsey opposes homebuyer grants and tenant protections, and focuses on repealing state affordable housing statutes (8-30g) without providing any alternative housing strategy for young families or seniors.",
    hb8002_deep_dive: {
      bill_number: "HB 8002",
      full_title: "An Act Concerning Housing Growth, Transit Infrastructure, Municipal Planning, and Tenant Protections (Landmark 2025 Housing Omnibus Act)",
      year_passed: "2025",
      kushner_leadership_role: "Chief Senate Negotiator & Deputy President Pro Tempore",
      overview: "HB 8002 represents the most consequential and transformative housing legislation enacted in Connecticut in decades. Recognizing that Connecticut faces an acute shortage of over 90,000 affordable and workforce homes, Senator Julie Kushner helped forge a historic coalition uniting labor unions, municipal leaders, transit champions, and housing advocates. Rather than relying on divisive top-down mandates, HB 8002 unleashes state capital to finance water, sewer, and transportation infrastructure, expands homeownership grants, protects tenants from predatory fees, and empowers local towns to guide gentle housing growth cooperatively.",
      statewide_metrics: {
        units_unlocked: "10,000+ Units",
        bonding_authorized: "$350M+ State Capital",
        homebuyer_fund: "$100M+ Time To Own",
        transit_zones: "30+ Transit Corridors"
      },
      district_metrics: {
        danbury_bonds: "$15M+ Downtown Grants",
        time_to_own_grant: "Up to $50,000 / Buyer",
        town_planning_aid: "100% Planning Coverage",
        watershed_protection: "Full Lake Safeguards"
      },
      statewide_impact_points: [
        "Statewide Housing Supply Acceleration: Authorizes over $350 million in new state bonding across the Housing Trust Fund and Community Investment Fund (CIF) to finance shovel-ready workforce, multi-family, and middle-density housing developments statewide.",
        "Transit-Oriented Development (TOD) Corridors: Creates powerful financial incentives and streamlined state permitting for mixed-use and mixed-income communities within a half-mile radius of passenger rail stations and bus rapid transit hubs (Metro-North, CTrail Hartford Line, Shore Line East).",
        "Municipal Infrastructure Relief: Establishes a dedicated state grant program subsidizing municipal water, sewer, and electric grid upgrades so local property taxpayers do not bear the infrastructure costs of new residential developments.",
        "Middle Housing & Gentle Density: Encourages development of starter townhomes, duplexes, accessory dwelling units (ADUs), and live-work spaces to provide attainable options for young workers and downsizing seniors.",
        "Replenishing Time To Own: Injected over $100 million into CHFA's signature 0% interest, fully forgivable down payment assistance program ($25,000–$50,000 per family) to expand working-class homeownership statewide.",
        "Comprehensive Tenant Rights: Outlawed deceptive rental application junk fees (capping application screening fees at $50), prohibited hidden move-in surcharges, standardized security deposit return timelines, and enhanced Fair Rent Commission enforcement against predatory rent gouging."
      ],
      district_impact_points: [
        "Downtown Danbury Rail Corridor Transformation: Directed over $15 million in dedicated state bonding and CIF funds to modernize Downtown Danbury's sewer and transit infrastructure, accelerating the conversion of vacant commercial parcels and surface lots near the Metro-North station into vibrant workforce housing with ground-floor retail.",
        "Danbury Hospital & Public Workforce Housing: Established dedicated workforce preference allocations ensuring Danbury Hospital nurses, medical technicians, public school educators, and Western Connecticut State University (WCSU) faculty can afford to live in the community where they serve.",
        "Suburban Planning & 8-30g Moratorium Support: Provided direct state planning grants to New Fairfield and Ridgefield to craft town-tailored housing plans, expand gentle middle housing, and achieve statutory 8-30g moratoriums cooperatively without contentious builder lawsuits.",
        "Candlewood Lake & Watershed Protection: Built in strict environmental review and water capacity safeguards protecting Candlewood Lake, Squantz Pond, Lake Kenosia, and local wetlands from inappropriate high-density runoff.",
        "Senior Homeowner Security: Provided funding for accessible home retrofits (ramps, walk-in showers) and ADU flexibility so longtime senior residents across District 24 can generate rental income or downsize without leaving their hometowns."
      ],
      legislative_coalition: "Senator Kushner utilized her position as Labor Committee Co-Chair and Deputy President Pro Tempore to bridge deep divides between urban centers and suburban towns. She ensured HB 8002 included prevailing wage standards for construction workers, guaranteed local municipal autonomy with state financial support, and defeated punitive top-down developer overrides.",
      kushner_quote: "\"We cannot solve Connecticut's housing shortage with soundbites, obstruction, or by pitting towns against cities. HB 8002 delivers real state capital for sewer and transit infrastructure, gives our young workers $50,000 to buy their first home, and protects our lakes and local boards. That is what leadership delivers for Western Connecticut.\"",
      lindsey_contrast: "Melissa Lindsey opposed HB 8002 and voted against state housing investments, claiming state funding for housing and transit constitutes 'government overreach.' Lindsey's platform focuses entirely on demanding the outright repeal of CGS § 8-30g without offering any replacement funding, infrastructure aid, or strategy to address skyrocketing home prices and rents in District 24."
    },
    household_savings_breakdown: [
      {
        id: "time-to-own",
        category: "Homebuyers",
        title: "Time To Own First-Time Homebuyer Grants (HB 8002)",
        average_annual_savings: "$25,000 – $50,000 in equity",
        beneficiary: "First-time homebuyers, young families, and municipal workers",
        policy_basis: "2025 Housing Omnibus Act (HB 8002) & CHFA Time To Own",
        kushner_action: "Secured recurring state bond funding and expanded Time To Own in the 2025 landmark housing bill (HB 8002), providing 0% forgivable down payment assistance.",
        lindsey_alternative: "Opposes state-backed down payment subsidies, arguing state lending interventions distort the private housing market."
      },
      {
        id: "senior-circuit-breaker",
        category: "Senior Homeowners",
        title: "Senior Pension Exemption & Property Tax Relief",
        average_annual_savings: "$1,500 – $4,000+ / year",
        beneficiary: "Retirees & seniors on fixed incomes aging in place",
        policy_basis: "100% Pension/401(k) Exemption + Elderly Homeowner Tax Relief",
        kushner_action: "Enacted 100% state tax elimination on senior pensions/401(k)s and expanded homeowner property tax circuit-breakers.",
        lindsey_alternative: "Offers no state senior tax relief programs; suggests town hall spending caps to restrain local mill rates."
      },
      {
        id: "fair-rent-commission",
        category: "Renters & Tenants",
        title: "Fair Rent Commissions & Junk Fee Bans (HB 8002)",
        average_annual_savings: "$1,200 – $3,600 / year",
        beneficiary: "Danbury tenants and working-class renter households",
        policy_basis: "PA 22-30 & 2025 Housing Omnibus Act (HB 8002)",
        kushner_action: "Passed mandatory Fair Rent Commissions and enacted provisions in HB 8002 outlawing deceptive rental application fees and arbitrary price gouging.",
        lindsey_alternative: "Opposes government rent review boards and tenant regulations, characterizing them as infringements on private landlords."
      },
      {
        id: "eviction-defense",
        category: "Tenant Security",
        title: "Right-to-Counsel & Eviction Prevention",
        average_annual_savings: "Avoids $5,000+ in emergency displacement costs",
        beneficiary: "Low-income families facing unlawful or retaliatory eviction",
        policy_basis: "Connecticut Right-to-Counsel Eviction Defense Program",
        kushner_action: "Funded legal representation for vulnerable tenants and mediated landlord-tenant resolutions to prevent homelessness.",
        lindsey_alternative: "Opposes state-funded tenant legal representation and advocates streamlining the eviction process for landlords."
      },
      {
        id: "weatherization-energy",
        category: "Home Utility Costs",
        title: "Home Energy Audits & Weatherization Grants",
        average_annual_savings: "$400 – $800 / year in heating/cooling",
        beneficiary: "Single-family homeowners and multi-family residents",
        policy_basis: "State Home Energy Solutions (HES) & Heat Pump Rebates",
        kushner_action: "Expanded state weatherization bonding and clean heat pump rebates that permanently cut residential electric and heating bills.",
        lindsey_alternative: "Proposes eliminating the public benefit charge, which directly finances residential weatherization and energy audit grants."
      },
      {
        id: "downtown-danbury-bonds",
        category: "Community Housing",
        title: "Downtown Transit Housing & Infrastructure (HB 8002)",
        average_annual_savings: "$15M+ State Investment in local housing supply",
        beneficiary: "Danbury downtown business corridor and workforce renters",
        policy_basis: "2025 Housing Omnibus Act (HB 8002) & Community Investment Fund",
        kushner_action: "Co-authored and passed HB 8002 to deliver dedicated state infrastructure and housing grants for Downtown Danbury transit-oriented revitalization and sewer upgrades.",
        lindsey_alternative: "Opposes state subsidies for high-density multi-family development, focusing strictly on suburban road maintenance."
      }
    ],
    dimensions: [
      {
        id: "homebuyer-assistance",
        title: "First-Time Homebuyer Down Payment Assistance (HB 8002)",
        icon: "Receipt",
        tagline: "Forgivable down payment grants ($25K–$50K) vs. no homeownership aid",
        overview: "With median home prices exceeding $450,000 in Western Connecticut and interest rates elevated, saving for a 20% down payment is the single biggest barrier preventing young families, nurses, and teachers from owning a home in District 24.",
        kushner: {
          stance: "Championed and protected funding for Connecticut's 'Time To Own' program in the landmark 2025 Housing Omnibus Act (HB 8002), delivering up to $50,000 in 0% interest, fully forgivable down payment loans to help working-class families buy their first home.",
          delivered_policies: [
            "Secured recurring state bonding and replenishments for the Time To Own down payment assistance program under HB 8002.",
            "Expanded eligibility criteria for nurses, police officers, teachers, and municipal workforce members buying in Danbury.",
            "Supported CHFA low-interest fixed-rate first-time homebuyer mortgages that shield buyers from predatory lending."
          ],
          quantifiable_impact: "Delivers $25,000 to $50,000 in 100% forgivable home equity to qualifying local first-time homebuyer families.",
          quote_or_highlight: "\"Our young people, healthcare workers, and teachers shouldn't be priced out of buying a home in the communities where they work and grew up. Time To Own turns renters into proud homeowners.\""
        },
        lindsey: {
          stance: "Opposes state-funded down payment subsidies, arguing that state lending interventions distort the private housing market and increase government debt.",
          proposed_policies: [
            "Advocates relying purely on private mortgage lenders without state intervention or subsidies.",
            "Suggests local zoning deregulation to encourage private developers to build single-family subdivisions."
          ],
          drawbacks_and_risks: "Without down payment grants, young working-class buyers cannot compete with institutional investors and all-cash purchasers in Fairfield County's fiercely competitive housing market.",
          quote_or_highlight: "\"State spending shouldn't be used to subsidize individual home purchases; we need free market housing competition.\""
        },
        verdict: "Julie Kushner delivered real, life-changing equity grants ($25K–$50K) that have enabled local workers to buy homes in District 24. Lindsey offers zero assistance for first-time buyers."
      },
      {
        id: "workforce-transit-housing",
        title: "Workforce & Transit-Oriented Downtown Housing (HB 8002)",
        icon: "Building2",
        tagline: "Revitalizing Downtown Danbury with $15M+ in state infrastructure bonds",
        overview: "Danbury requires modern transit-oriented workforce housing near the Metro-North station and Western Connecticut State University (WCSU) to support local hospital staff, educators, and downtown small businesses without worsening traffic congestion.",
        kushner: {
          stance: "As Deputy President Pro Tempore, served as a chief architect and negotiator for the landmark 2025 Housing Omnibus Act (HB 8002), securing over $15 million in state bonding, CIF grants, and sewer infrastructure for Downtown Danbury transit-oriented revitalization.",
          delivered_policies: [
            "Negotiated the passage of HB 8002 in the Senate, securing targeted funds for downtown transit corridors, pedestrian connectivity, and mixed-income housing.",
            "Partnered with the Danbury Housing Authority to modernize affordable housing complexes and expand mixed-income workforce developments.",
            "Supported state financing packages creating hundreds of mixed-income units without placing the burden on city taxpayers."
          ],
          quantifiable_impact: "Spurred $50M+ in private and state downtown housing investments creating hundreds of affordable and workforce units.",
          quote_or_highlight: "\"By passing HB 8002, we made sure the state stepped up to fund downtown infrastructure and create housing our workers can afford near transit lines.\""
        },
        lindsey: {
          stance: "Emphasizes suburban single-family preservation and opposes state subsidies for high-density multi-family developments.",
          proposed_policies: [
            "Advocates limiting state involvement in local municipal housing decisions.",
            "Focuses on New Fairfield suburban road and infrastructure maintenance rather than urban transit corridors."
          ],
          drawbacks_and_risks: "Refusing state housing bond investments starves Danbury's downtown economy of the workforce housing needed to attract and retain healthcare workers, teachers, and young professionals.",
          quote_or_highlight: "\"Hartford shouldn't be steering development dollars; local towns know best what kind of housing fits.\""
        },
        verdict: "Julie Kushner led the passage of HB 8002 and brought back over $15M in state infrastructure and housing grants to Danbury. Lindsey's opposition to state housing funds would stall downtown revitalization."
      },
      {
        id: "zoning-830g",
        title: "Zoning Balance, Local Control & CT Statute 8-30g",
        icon: "Scale",
        tagline: "Sensible local collaboration vs. partisan repeal rhetoric",
        overview: "Connecticut's affordable housing appeals statute (CGS § 8-30g) allows developers to appeal local zoning denials in towns where less than 10% of housing is deemed affordable. Balancing local character, environmental preservation, and affordable access is a top suburban priority.",
        kushner: {
          stance: "Advocates empowering local towns (New Fairfield & Ridgefield) with state planning grants and housing trust fund resources to achieve 8-30g moratoriums cooperatively, rather than through contentious litigation.",
          delivered_policies: [
            "Voted to fund municipal affordable housing plans so towns can steer developments to appropriate locations without hostile overrides.",
            "Supported expanding the definition of affordable housing to include deed-restricted middle-tier housing and accessory dwelling units (ADUs).",
            "Resisted top-down developer-driven mandates that override local environmental and water protections around Candlewood Lake and Ball Pond."
          ],
          quantifiable_impact: "Provided technical and financial planning aid enabling suburban towns to retain zoning authority while expanding gentle, context-sensitive housing.",
          quote_or_highlight: "\"We must expand housing options while respecting our environment and the unique character of our towns. Working collaboratively with local officials works far better than extreme political posturing.\""
        },
        lindsey: {
          stance: "Fiercely calls for the total outright repeal of 8-30g and opposes all state zoning standards, campaigning on suburban anti-Hartford rhetoric.",
          proposed_policies: [
            "Demands complete repeal of Connecticut General Statutes § 8-30g.",
            "Advocates absolute municipal immunity from affordable housing builder appeals."
          ],
          drawbacks_and_risks: "Demanding total repeal with zero replacement strategy is politically unviable in Hartford and provides zero affordable units for local young adults, seniors looking to downsize, or town volunteer firefighters.",
          quote_or_highlight: "\"Hartford has no right to dictate zoning in New Fairfield or Ridgefield — repeal 8-30g completely.\""
        },
        verdict: "Kushner works constructively with local boards to provide state funding and moratorium pathways while protecting lakes and wetlands. Lindsey uses 8-30g as a wedge issue without offering any housing solutions."
      },
      {
        id: "senior-homeowners",
        title: "Senior Aging in Place & Homeowner Property Tax Relief",
        icon: "ShieldAlert",
        tagline: "Tax freezes and circuit breakers keeping seniors in their homes",
        overview: "Longtime senior homeowners in Danbury, New Fairfield, and Ridgefield face escalating property assessments and maintenance costs that threaten to force them out of their family homes.",
        kushner: {
          stance: "Expanded state property tax credits and the Elderly/Disabled Circuit Breaker Program, alongside 100% state tax elimination on senior retirement pensions and 401(k)s.",
          delivered_policies: [
            "Voted to increase state funding for the Elderly and Disabled Homeowners Tax Relief program.",
            "Eliminated 100% of state income taxes on senior pensions, annuities, and 401(k) disbursements for middle-class retirees.",
            "Supported state grants for senior home accessibility retrofits (ramps, walk-in showers, energy efficiency audits)."
          ],
          quantifiable_impact: "Saves eligible senior homeowners $1,500 to $4,000+ annually in combined tax and utility savings, preventing forced sales.",
          quote_or_highlight: "\"Our seniors built our towns and paid taxes for decades. We passed historic pension tax exemptions and property tax protections so they can age with dignity in their own homes.\""
        },
        lindsey: {
          stance: "Emphasizes municipal budget discipline from her tenure as New Fairfield First Selectman, advocating for local spending caps to curb property tax growth.",
          proposed_policies: [
            "Suggests municipal spending limits at town meetings to control mill rates.",
            "Points to local town administration experience."
          ],
          drawbacks_and_risks: "Offers no state-funded homeowner relief programs or pension tax protections, leaving senior property owners entirely vulnerable to local municipal reassessment spikes.",
          quote_or_highlight: "\"Local government must rein in spending so senior property taxes don't rise.\""
        },
        verdict: "Julie Kushner enacted total pension tax freedom and expanded senior homeowner credits to ensure seniors can afford to stay in their homes. Lindsey offers only local spending talking points."
      },
      {
        id: "tenant-protections",
        title: "Tenant Protections, Fair Rent Commissions & Stability",
        icon: "ShieldCheck",
        tagline: "Stopping predatory rent gouging and slumlord neglect",
        overview: "With Danbury rents rising over 20% in recent years, working families need protections against unconscionable rent hikes, predatory evictions, and dangerous building maintenance neglect.",
        kushner: {
          stance: "Championed mandatory Fair Rent Commissions for towns with 25,000+ residents, strengthened tenant notice protections, and funded Right-to-Counsel eviction defense.",
          delivered_policies: [
            "Enacted legislation (PA 22-30) requiring municipal Fair Rent Commissions to investigate excessive, unconscionable rent increases.",
            "Supported Connecticut's Right-to-Counsel program providing legal defense for low-income tenants facing wrongful eviction.",
            "Strengthened penalties against negligent landlords who fail to remediate mold, lead paint, and heating failures."
          ],
          quantifiable_impact: "Protected thousands of Danbury renters from retaliatory evictions and prevented sudden 20%+ unconscionable rent spikes.",
          quote_or_highlight: "\"Working tenants deserve safe, dignified housing and a fair hearing before an unfair, 30% rent spike forces their children out of school.\""
        },
        lindsey: {
          stance: "Opposes state-mandated Fair Rent Commissions and tenant regulations, arguing they infringe upon property owners' rights and discourage rental property investments.",
          proposed_policies: [
            "Advocates deregulation of landlord-tenant statutory requirements.",
            "Opposes government rent review boards and state-funded tenant legal defense."
          ],
          drawbacks_and_risks: "Eliminating Fair Rent Commissions and eviction protections leaves working families completely exposed to predatory corporate landlords and abrupt evictions.",
          quote_or_highlight: "\"Government boards shouldn't dictate rental prices between private landlords and tenants.\""
        },
        verdict: "Julie Kushner protected Danbury working families with Fair Rent Commissions and eviction defense against slumlord abuses. Lindsey opposes tenant protections and supports landlord deregulation."
      },
      {
        id: "homelessness-supportive",
        title: "Homelessness Prevention & Veteran Supportive Housing",
        icon: "HeartPulse",
        tagline: "Emergency shelter funding and transitional housing for veterans",
        overview: "Homelessness in Western Connecticut has surged following the pandemic. Expanding supportive housing with mental health and addiction services is essential for community wellbeing.",
        kushner: {
          stance: "Secured vital state budget authorizations for Danbury emergency shelters (including Pacific House and Dorothy Day shelter funding) and veteran transitional housing.",
          delivered_policies: [
            "Secured millions in cold-weather emergency shelter funding for Greater Danbury homeless outreach.",
            "Expanded state funding for Permanent Supportive Housing (PSH) combining housing with on-site mental health case management.",
            "Passed legislation guaranteeing housing vouchers and mental health resources for unhoused veterans."
          ],
          quantifiable_impact: "Provided shelter, case management, and permanent housing placements for hundreds of Danbury-area individuals and veterans.",
          quote_or_highlight: "\"We cannot turn a blind eye to neighbors sleeping in the cold. State funding for Danbury shelters and supportive housing saves lives and strengthens our entire community.\""
        },
        lindsey: {
          stance: "Frames homelessness and vagrancy as public safety and municipal policing issues rather than state-funded social services.",
          proposed_policies: [
            "Emphasizes local law enforcement and stricter enforcement of public camping ordinances.",
            "Opposes placing regional homeless facilities in suburban residential areas."
          ],
          drawbacks_and_risks: "Policing homelessness without funding shelter beds or mental health casework merely pushes unhoused individuals across town lines and increases municipal emergency room costs.",
          quote_or_highlight: "\"We must maintain public order and support local police in keeping public parks and downtowns safe.\""
        },
        verdict: "Julie Kushner delivered millions in state funding for Danbury shelters and veteran supportive housing to tackle the root causes of homelessness. Lindsey treats homelessness as a criminal justice issue without shelter solutions."
      }
    ]
  },
  town_impacts: [
    {
      town: "Danbury",
      icon: "Building2",
      kushner_deliverables: [
        "$130M+ in state funding (80% reimbursement) for the new Danbury Career Academy",
        "Historic increases in Education Cost Sharing (ECS) formula funding for Danbury public schools",
        "Downtown Danbury transit-oriented development and road infrastructure grants",
        "Funding for Western Connecticut State University (WCSU) programs and faculty support",
        "Capped local motor vehicle tax rates, directly reducing car property tax bills for Danbury residents",
        "State bonding for local flood control, paving, and Danbury youth recreation centers"
      ]
    },
    {
      town: "New Fairfield",
      icon: "Trees",
      kushner_deliverables: [
        "State funding for Candlewood Lake and Ball Pond weed eradication and water quality testing",
        "Enhanced ECS educational aid allocations for New Fairfield school system",
        "Senior citizen tax exemption protections preserving retirement nest eggs",
        "State bond authorizations for local emergency services and road safety upgrades",
        "PFAS drinking water testing and remediation grants protecting residential wells"
      ]
    },
    {
      town: "Ridgefield",
      icon: "Compass",
      kushner_deliverables: [
        "Support for open space conservation grants protecting local watershed lands",
        "State educational grants supporting Ridgefield high school academic excellence",
        "Small business recovery grants and clean energy incentives for local retail/dining",
        "Protection of historic cultural resources and arts organizations"
      ]
    }
  ],
  quiz_questions: [
    {
      id: 1,
      question: "When a family welcomes a new baby or a worker faces cancer treatment, what should happen?",
      options: [
        {
          text: "Workers should have up to 12 weeks of paid medical/family leave so they don't lose their livelihood.",
          matches: "julie_kushner",
          explanation: "Senator Julie Kushner authored and passed CT's Paid Family and Medical Leave Act (PA 19-25), providing a vital safety net for 100,000+ workers."
        },
        {
          text: "The state should not mandate paid leave; businesses should decide without government involvement.",
          matches: "melissa_lindsey",
          explanation: "Melissa Lindsey opposes state labor mandates and benefit requirements on private employers."
        }
      ]
    },
    {
      id: 2,
      question: "How should Connecticut invest in public school education and career training?",
      options: [
        {
          text: "Maximize state funding for public schools and career academies (like Danbury's 80% state reimbursement rate) and expand debt-free community college.",
          matches: "julie_kushner",
          explanation: "Julie Kushner secured over $130M for the Danbury Career Academy and expanded Connecticut's Debt-Free Community College program."
        },
        {
          text: "Implement 'school choice' voucher programs that allow public tax dollars to be spent on private/charter schooling.",
          matches: "melissa_lindsey",
          explanation: "Melissa Lindsey advocates for school choice voucher programs in her campaign platform."
        }
      ]
    },
    {
      id: 3,
      question: "What is the best approach to healthcare and personal bodily autonomy?",
      options: [
        {
          text: "Protect reproductive freedom and safe harbor laws for abortion care, cap insulin at $25/mo, and expand affordable healthcare coverage.",
          matches: "julie_kushner",
          explanation: "Julie Kushner co-sponsored CT's historic Safe Harbor abortion defense law and capped insulin costs at $25/month."
        },
        {
          text: "Focus on rolling back vaccine mandates for schools and protecting religious exemptions.",
          matches: "melissa_lindsey",
          explanation: "Melissa Lindsey's primary healthcare platform centers on medical autonomy opposing vaccine requirements and defending religious exemptions."
        }
      ]
    },
    {
      id: 4,
      question: "How should our state support seniors and working families facing high costs of living?",
      options: [
        {
          text: "Pass broad middle-class income tax cuts, fully exempt 100% of pensions and 401(k)s from state taxes, and cap prescription drug costs.",
          matches: "julie_kushner",
          explanation: "Julie Kushner voted for the largest middle-class tax cut in CT history and eliminated state tax on 401(k)s and pensions for middle-class seniors."
        },
        {
          text: "Eliminate the clean energy public benefit charges on electric bills and cut state environmental programs.",
          matches: "melissa_lindsey",
          explanation: "Melissa Lindsey's affordability plan focuses on eliminating the public benefits charge on utility bills and opposing climate superfund fees."
        }
      ]
    },
    {
      id: 5,
      question: "How should we protect our local environment, Candlewood Lake, and public health?",
      options: [
        {
          text: "Secure state bonding for invasive weed eradication in our lakes, ban toxic PFAS forever chemicals, and invest in clean renewable energy.",
          matches: "julie_kushner",
          explanation: "Julie Kushner earned a 100% environmental score from CTLCV and secured critical state funds for Candlewood Lake preservation."
        },
        {
          text: "Expand fossil fuels and natural gas infrastructure while rolling back state renewable energy programs.",
          matches: "melissa_lindsey",
          explanation: "Melissa Lindsey advocates an all-of-the-above energy policy promoting natural gas and opposing clean energy public benefit charges."
        }
      ]
    }
  ],
  voting_guide: {
    election_day: "Tuesday, November 3, 2026",
    polls_open: "6:00 AM – 8:00 PM",
    early_voting: "Connecticut now offers 14 days of Early Voting prior to General Election Day.",
    absentee_voting: "Expanded absentee voting available for all eligible CT voters (supported by Julie Kushner in HB 5001).",
    registration_link: "https://voterregistration.ct.gov/",
    find_polling_place: "https://portaldir.ct.gov/sots/LookUp.aspx",
    kushner_campaign_url: "https://www.juliekushnerforct.com/",
    lindsey_campaign_url: "https://www.lindseyforsenatect.com/"
  }
};

export default candidatesData;
