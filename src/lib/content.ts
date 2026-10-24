// ─── QTM Minerals — Enterprise Content & Product Data Model ───────────────────
// In compliance with corporate transparency guidelines:
// Unverified specifications, grades, certifications, or performance claims
// are explicitly flagged as 'pending_verification' rather than published as fact.

export type VerificationStatus = "verified" | "pending_verification";

export type TechnicalDataSheet = {
  /** True only when an authorized, lab-certified PDF document exists and is published */
  available: boolean;
  documentTitle?: string;
  fileUrl?: string;
  fileSize?: string;
  lastUpdated?: string;
  status: VerificationStatus;
  notice: string;
};

export type MineralGrade = {
  name: string;
  status: VerificationStatus;
  brightness?: string;
  moisture?: string;
  particle?: string;
  note: string;
};

export type KeyProperty = {
  label: string;
  value: string;
  status: VerificationStatus;
};

export type Mineral = {
  slug: string;
  name: string;
  scientific: string;
  index: string;
  description: string;
  longDescription: string;
  applications: readonly string[];
  image: string;
  heroImage: string;
  color: string;
  originRegion: string;
  qaStatus: string;
  tds: TechnicalDataSheet;
  grades: readonly MineralGrade[];
  keyProperties: readonly KeyProperty[];
  packagingOptions: readonly string[];
  relatedIndustries: readonly string[];
};

export const COMPANY_DISCLAIMER =
  "Corporate Disclosure: All physical, chemical and particle size ranges shown represent typical industrial processing targets from Gujarat processing operations. They do not constitute a binding legal certificate of analysis (COA). Final grade availability, certified specifications and lot release criteria must be formally confirmed in writing with QTM technical sales prior to procurement.";

export const COMPANY_INFO = {
  name: "Quantum Terra Minerals",
  shortName: "QTM Minerals",
  establishedYear: "1989",
  establishedNote: "Historical milestone records subject to official archival verification by QTM.",
  headquarters: "Gujarat, India",
  facilities: [
    {
      type: "Processing Facility & Beneficiation Plant",
      region: "Gujarat, India",
      addressStatus: "Specific industrial plot coordinates pending official company publication",
    },
    {
      type: "Regional Commercial Office",
      region: "Chennai, Tamil Nadu, India",
      addressStatus: "Corporate address pending final lease documentation sign-off",
    },
  ],
  channels: {
    salesEmail: "sales@qtmminerals.com",
    generalEmail: "info@qtmminerals.com",
    phoneDisplay: "+91 (Official Line Pending Sign-off)",
    phoneRaw: "+910000000000",
  },
  certificationStatus:
    "Quality management and laboratory characterization testing active. Official ISO certificate registry files are currently pending corporate repository upload.",
  sustainabilityStatement:
    "QTM is committed to responsible mineral extraction and processing. Our operations prioritize physical beneficiation, closed-loop water recirculation in washing circuits, and adherence to environmental regulatory standards in Gujarat.",
} as const;

export const minerals: readonly Mineral[] = [
  {
    slug: "china-clay",
    name: "China Clay",
    scientific: "Kaolin · Al₂Si₂O₅(OH)₄",
    index: "01",
    description:
      "A versatile, ultrafine industrial mineral prized for its natural brightness, plasticity and chemical inertness across ceramics, paper and performance coatings.",
    longDescription:
      "China clay (kaolin) is an essential mineral composed primarily of the hydrated aluminum silicate mineral kaolinite. Sourced and processed in Gujarat, QTM supplies calcined and hydrous grades tailored for ceramic body formulations, vitreous sanitaryware, paper coating, and industrial polymer extenders. Platelet morphology and controlled brightness make it an indispensable industrial input.",
    applications: [
      "Ceramics & sanitaryware",
      "Paper coating & filling",
      "Paints & coatings",
      "Plastics & rubber",
      "Refractory castables",
    ],
    image: "/images/mineral-kaolin.png",
    heroImage: "/images/mineral-kaolin.png",
    color: "#d4c9a8",
    originRegion: "Gujarat, India",
    qaStatus:
      "Standard sieve and ISO brightness laboratory testing active; official certification pending batch release.",
    tds: {
      available: false,
      documentTitle: "QTM China Clay / Kaolin Technical Specification",
      status: "pending_verification",
      notice:
        "Formal laboratory TDS document release is currently pending final company QA sign-off. Please submit a specification request below for provisional batch test parameters.",
    },
    grades: [
      {
        name: "HB-1 Hydrous Grade",
        status: "pending_verification",
        brightness: "84–86 ISO (Typical)",
        moisture: "≤ 18%",
        particle: "d50 ~1.8 µm",
        note: "Ceramic body formulations and filler applications. Values indicative.",
      },
      {
        name: "CB-2 Calcined Grade",
        status: "pending_verification",
        brightness: "90–92 ISO (Typical)",
        moisture: "≤ 0.5%",
        particle: "d50 ~1.2 µm",
        note: "Paper coating and high-opacity specialty coating applications.",
      },
      {
        name: "UF-3 Ultrafine Grade",
        status: "pending_verification",
        brightness: "88–90 ISO (Typical)",
        moisture: "≤ 1%",
        particle: "d90 < 2 µm",
        note: "Performance coatings, technical elastomers, and specialty polymers.",
      },
    ],
    keyProperties: [
      { label: "Specific gravity", value: "2.58–2.63 g/cm³", status: "pending_verification" },
      { label: "Refractive index", value: "1.56–1.57", status: "pending_verification" },
      { label: "pH (10% slurry)", value: "5.5–7.0", status: "pending_verification" },
      { label: "Oil absorption", value: "35–45 g/100g", status: "pending_verification" },
    ],
    packagingOptions: [
      "25 kg HDPE/PP valve bags",
      "500 kg / 1 MT FIBC jumbo bags",
      "Bulk pneumatic tanker (Domestic)",
    ],
    relatedIndustries: [
      "Ceramics & sanitaryware",
      "Paper",
      "Paints & coatings",
      "Plastics & polymers",
    ],
  },
  {
    slug: "bentonite",
    name: "Bentonite",
    scientific: "Smectite clay · Na/Ca montmorillonite",
    index: "02",
    description:
      "A functional smectite clay delivering high swelling volume, plasticity and thermal bonding for foundry sand, civil drilling and environmental barriers.",
    longDescription:
      "Bentonite is characterized by high concentrations of montmorillonite, formed by the natural alteration of volcanic tuff. Processed from deposits in western India, QTM offers both sodium-activated and natural calcium bentonite grades. Its high cation exchange capacity, colloidal swelling and thixotropic properties make it essential in greensand foundry casting, civil piling, drilling muds and civil lining.",
    applications: [
      "Foundry sand bonding",
      "Civil construction & piling",
      "Drilling fluids (API standard)",
      "Geotechnical barriers",
      "Agricultural pellet binder",
    ],
    image: "/images/mineral-bentonite.png",
    heroImage: "/images/mineral-bentonite.png",
    color: "#b8a88e",
    originRegion: "Gujarat, India",
    qaStatus:
      "Liquid limit and swelling index testing performed per lot; full API compliance documentation available on request.",
    tds: {
      available: false,
      documentTitle: "QTM Industrial Bentonite Technical Specification",
      status: "pending_verification",
      notice:
        "Approved technical data sheet under QA review. Request formal specification sheet or sample batch report below.",
    },
    grades: [
      {
        name: "FD-1 Foundry Binder",
        status: "pending_verification",
        moisture: "≤ 10%",
        particle: "90% < 200 mesh",
        note: "High-swelling greensand binder with controlled thermal durability.",
      },
      {
        name: "DR-2 Civil Drilling",
        status: "pending_verification",
        moisture: "≤ 13%",
        particle: "85% < 200 mesh",
        note: "Rheology tuned for horizontal directional drilling and borehole stabilization.",
      },
      {
        name: "GS-3 Environmental Barrier",
        status: "pending_verification",
        moisture: "≤ 15%",
        note: "Low hydraulic conductivity grade for containment and landfill sealing.",
      },
    ],
    keyProperties: [
      { label: "Free swell (Na-type)", value: "≥ 24 mL/2g", status: "pending_verification" },
      { label: "Liquid limit", value: "≥ 400%", status: "pending_verification" },
      { label: "Specific gravity", value: "2.4–2.8 g/cm³", status: "pending_verification" },
      { label: "pH (2% suspension)", value: "8.5–10.5", status: "pending_verification" },
    ],
    packagingOptions: [
      "25 kg PP moisture-proof bags",
      "1 MT heavy-duty jumbo bags",
      "Bulk container liner bags",
    ],
    relatedIndustries: [
      "Foundry & casting",
      "Civil & environmental construction",
      "Oil & gas exploration",
    ],
  },
  {
    slug: "silica-sand",
    name: "Silica Sand",
    scientific: "Crystalline quartz silica · SiO₂",
    index: "03",
    description:
      "High-purity washed industrial silica sand with uniform grain distribution, high thermal endurance and chemical resistance for foundry, glass and filtration.",
    longDescription:
      "Silica sand is one of the foundational raw materials of modern industry. QTM's silica sand resources are washed, hydro-classified and dried to control grain morphology, remove sub-sieve fines, and maximize SiO₂ content. Designed to satisfy rigorous foundry molding tolerances, float and container glass manufacturing, and high-performance filtration requirements.",
    applications: [
      "Foundry mold & core making",
      "Float & container glass",
      "Industrial water filtration",
      "Construction mortars & epoxies",
      "Abrasive blasting media",
    ],
    image: "/images/mineral-silica.png",
    heroImage: "/images/mineral-silica.png",
    color: "#cfc9a0",
    originRegion: "Gujarat, India",
    qaStatus:
      "XRF elemental analysis and AFS grain fineness distribution testing performed per lot.",
    tds: {
      available: false,
      documentTitle: "QTM Industrial Silica Sand Technical Specification",
      status: "pending_verification",
      notice:
        "Official laboratory sieve analysis and chemistry certificate pending corporate sign-off. Request provisional technical dossier below.",
    },
    grades: [
      {
        name: "FS-30/60 Foundry Silica",
        status: "pending_verification",
        particle: "AFS GFN 30–60",
        note: "Sub-angular grain shape for greensand and resin-bonded core sand systems.",
      },
      {
        name: "GL-10 Glass Grade",
        status: "pending_verification",
        moisture: "≤ 0.2%",
        particle: "0.3–0.8 mm",
        note: "Low iron content (Fe₂O₃ < 0.05%) for container and architectural flat glass.",
      },
      {
        name: "CF-20 Industrial Filter",
        status: "pending_verification",
        particle: "0.8–2.0 mm",
        note: "Classified media for potable and industrial effluent filtration beds.",
      },
    ],
    keyProperties: [
      { label: "SiO₂ purity", value: "98.5–99.5%", status: "pending_verification" },
      { label: "Fe₂O₃ content", value: "< 0.05%", status: "pending_verification" },
      { label: "Specific gravity", value: "2.65 g/cm³", status: "pending_verification" },
      { label: "Hardness (Mohs)", value: "7", status: "pending_verification" },
    ],
    packagingOptions: [
      "25 kg HDPE bags",
      "1 MT / 1.2 MT FIBC bags with discharge spout",
      "Bulk tipper / open rail wagon",
    ],
    relatedIndustries: [
      "Ceramics & sanitaryware",
      "Glass & construction",
      "Water treatment & filtration",
    ],
  },
  {
    slug: "bauxite",
    name: "Bauxite",
    scientific: "Aluminium-bearing ore · Al(OH)₃ / AlO(OH)",
    index: "04",
    description:
      "A strategic high-alumina mineral input supporting refractory manufacturing, metallurgical flux applications and specialty calcium aluminate cements.",
    longDescription:
      "Bauxite is the principal natural ore of aluminium and a critical mineral resource for heavy thermal industries. QTM works with Indian bauxite resources to offer graded raw, washed, and calcined options. The material delivers high refractory resistance, thermal shock stability, and low alkali content suited for refractory castables, abrasive media, and alumina-enriched cement formulations.",
    applications: [
      "Refractory brick & castables",
      "Metallurgical smelter flux",
      "Calcium aluminate cement",
      "Industrial abrasives",
      "Chemical coagulants",
    ],
    image: "/images/mineral-bauxite.png",
    heroImage: "/images/mineral-bauxite.png",
    color: "#c8956e",
    originRegion: "Gujarat / Western India",
    qaStatus:
      "Al₂O₃ and SiO₂ ratio monitoring active across extraction pits; complete chemical breakdown provided on inquiry.",
    tds: {
      available: false,
      documentTitle: "QTM Industrial Bauxite Technical Specification",
      status: "pending_verification",
      notice:
        "Official technical data sheet in preparation. Direct laboratory assay sheets are provided upon application review.",
    },
    grades: [
      {
        name: "RF-60 Refractory Grade",
        status: "pending_verification",
        note: "Al₂O₃ ≥ 60%; engineered for monolithic refractories and high-temperature kilns.",
      },
      {
        name: "MT-45 Metallurgical Flux",
        status: "pending_verification",
        note: "Al₂O₃ 45–55%; optimal slag conditioning and smelter flux applications.",
      },
      {
        name: "CA-70 Calcined Alumina",
        status: "pending_verification",
        note: "Rotary kiln calcined bauxite for severe abrasive and refractory wear environments.",
      },
    ],
    keyProperties: [
      { label: "Al₂O₃ range", value: "45–70% (grade dependent)", status: "pending_verification" },
      { label: "SiO₂ range", value: "6–18% (grade dependent)", status: "pending_verification" },
      { label: "Fe₂O₃ range", value: "1.5–8%", status: "pending_verification" },
      { label: "Loss on Ignition (LOI)", value: "12–28%", status: "pending_verification" },
    ],
    packagingOptions: [
      "25 kg woven sacks",
      "1 MT heavy-duty bulk bags",
      "Bulk loose cargo (Truck / Vessel)",
    ],
    relatedIndustries: [
      "Refractories & metallurgy",
      "Cement & infrastructure",
      "Industrial abrasives",
    ],
  },
  {
    slug: "ball-clay",
    name: "Ball Clay",
    scientific: "Plastic sedimentary clay · kaolinite / illite / quartz",
    index: "05",
    description:
      "A highly plastic sedimentary clay delivering superior green strength, workability and firing brightness to sanitaryware and fine ceramic bodies.",
    longDescription:
      "Ball clay is an exceptionally fine-grained, highly plastic sedimentary clay valued for its organic-assisted bonding characteristics. In ceramic formulations, it imparts the green handling strength and plasticity required for intricate slip casting and press molding. QTM provides characterized ball clay grades for vitreous sanitaryware, tableware, wall tiles, and technical electro-porcelains.",
    applications: [
      "Vitreous china & sanitaryware",
      "Ceramic tableware & artware",
      "Wall & floor ceramic tiles",
      "High-voltage electrical porcelain",
      "Refractory bonding clay",
    ],
    image:
      "https://images.unsplash.com/photo-1611095562057-4ac75fca3ff5?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1611095562057-4ac75fca3ff5?auto=format&fit=crop&w=2000&q=90",
    color: "#c2b89a",
    originRegion: "Western India",
    qaStatus:
      "Modulus of rupture (MOR), shrinkage, and fired whiteness testing conducted on all commercial batches.",
    tds: {
      available: false,
      documentTitle: "QTM Industrial Ball Clay Technical Specification",
      status: "pending_verification",
      notice:
        "Technical datasheet is currently undergoing annual verification. Request provisional laboratory workability curve below.",
    },
    grades: [
      {
        name: "BC-P Premium Sanitaryware",
        status: "pending_verification",
        brightness: "78–82 ISO (Fired)",
        moisture: "≤ 20%",
        particle: "d50 ~0.6 µm",
        note: "High casting rate and superior green strength for vitreous sanitaryware.",
      },
      {
        name: "BC-S Standard Ceramic",
        status: "pending_verification",
        brightness: "74–78 ISO (Fired)",
        moisture: "≤ 22%",
        note: "Cost-effective plasticity contributor for floor and wall tile bodies.",
      },
    ],
    keyProperties: [
      { label: "Plasticity index (Atterberg)", value: "25–40%", status: "pending_verification" },
      { label: "Specific gravity", value: "2.55–2.65 g/cm³", status: "pending_verification" },
      { label: "Linear firing shrinkage", value: "8–14%", status: "pending_verification" },
      { label: "Green MOR (flexural)", value: "0.6–1.4 MPa", status: "pending_verification" },
    ],
    packagingOptions: [
      "25 kg PP moisture-resistant bags",
      "500 kg / 1 MT bulk jumbo bags",
      "Crude lump supply (Bulk)",
    ],
    relatedIndustries: [
      "Ceramics & sanitaryware",
      "Refractories & metallurgy",
      "Porcelain insulators",
    ],
  },
  {
    slug: "quartz",
    name: "Quartz",
    scientific: "High-purity crystalline silica · SiO₂",
    index: "06",
    description:
      "A hard, chemically stable crystalline mineral supplying controlled particle geometry and high whiteness for engineered stone, glass and performance fillers.",
    longDescription:
      "Quartz is recognized for its Mohs hardness of 7, chemical inertness, and structural resilience. QTM supplies high-purity quartz processed through crushing, optical separation, magnetic sorting, and fine micronising. It provides the hardness and low thermal expansion required for engineered composite surfaces, optical glass, ceramic glazes, and precision electronics encapsulation.",
    applications: [
      "Engineered quartz surfaces & slabs",
      "Specialty optical glass & frit",
      "Silicone & polymer filler",
      "Ceramic body & glaze compound",
      "Electronics encapsulation",
    ],
    image: "/images/mineral-quartz.png",
    heroImage: "/images/mineral-quartz.png",
    color: "#c8c4b8",
    originRegion: "Western / Southern India",
    qaStatus:
      "Optical purity and magnetic separation controls maintained to guarantee low iron content.",
    tds: {
      available: false,
      documentTitle: "QTM Industrial Quartz Technical Specification",
      status: "pending_verification",
      notice:
        "Official technical datasheet awaiting corporate QA clearance. Detailed particle size distribution (PSD) available upon request.",
    },
    grades: [
      {
        name: "QZ-M Micronised Powder",
        status: "pending_verification",
        brightness: "≥ 88 ISO (Typical)",
        moisture: "≤ 0.2%",
        particle: "d50 ~8 µm",
        note: "Precision micronised filler for paints, industrial coatings and composite polymers.",
      },
      {
        name: "QZ-G Granular Engineered",
        status: "pending_verification",
        particle: "0.1–0.5 mm",
        note: "Optical grade sorting for engineered stone countertops and floor tiles.",
      },
      {
        name: "QZ-HP Ultra Purity",
        status: "pending_verification",
        brightness: "≥ 90 ISO (Typical)",
        particle: "d50 ~5 µm",
        note: "Low electrical conductivity filler for specialty glass and microelectronics.",
      },
    ],
    keyProperties: [
      { label: "SiO₂ purity", value: "99.2–99.8%", status: "pending_verification" },
      { label: "Hardness (Mohs)", value: "7", status: "pending_verification" },
      { label: "Specific gravity", value: "2.65 g/cm³", status: "pending_verification" },
      { label: "Oil absorption", value: "22–28 g/100g", status: "pending_verification" },
    ],
    packagingOptions: [
      "25 kg multi-wall craft/PP bags",
      "1 MT / 1.2 MT FIBC bags with liner",
      "Bulk dry container supply",
    ],
    relatedIndustries: [
      "Engineered surfaces & countertops",
      "Ceramics & sanitaryware",
      "Paints & coatings",
      "Plastics & polymers",
    ],
  },
] as const;

export const industries = [
  {
    title: "Ceramics & sanitaryware",
    no: "01",
    description:
      "Mineral inputs for ceramic bodies, tableware and sanitaryware — from china clay and ball clay to silica and quartz.",
    minerals: ["china-clay", "ball-clay", "silica-sand", "quartz"],
  },
  {
    title: "Paper & packaging",
    no: "02",
    description:
      "Calcined and hydrous kaolin grades for paper coating, filling, brightness and opacity improvement.",
    minerals: ["china-clay"],
  },
  {
    title: "Paints & coatings",
    no: "03",
    description:
      "Functional mineral extenders delivering opacity, weatherability and surface finish in industrial coatings.",
    minerals: ["china-clay", "quartz"],
  },
  {
    title: "Plastics & polymers",
    no: "04",
    description:
      "Mineral fillers delivering dimensional stability, stiffness and surface quality in thermoplastic compounds.",
    minerals: ["china-clay", "quartz"],
  },
  {
    title: "Rubber & elastomers",
    no: "05",
    description:
      "Reinforcing and semi-reinforcing mineral inputs for natural and synthetic industrial rubber compounds.",
    minerals: ["china-clay"],
  },
  {
    title: "Glass & construction",
    no: "06",
    description:
      "High-purity silica sand and quartz for flat glass, container glass, construction mortars and filtration.",
    minerals: ["silica-sand", "quartz", "bauxite"],
  },
] as const;

export const companyStats = [
  { value: "1989", label: "Year founded", note: "Milestone archival record" },
  { value: "6", label: "Core mineral lines", note: "Industrial raw materials" },
  { value: "India", label: "Operational base", note: "Gujarat & Western India" },
  { value: "35+", label: "Years of mineral experience", note: "Processing history" },
] as const;
