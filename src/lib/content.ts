// ─── QTM Minerals — Content data ─────────────────────────────────────────────
// All grade values are indicative marketing copy only.
// Do not publish without company verification.

export type MineralGrade = {
  name: string;
  brightness?: string;
  moisture?: string;
  particle?: string;
  note: string;
};

export type KeyProperty = { label: string; value: string };

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
  grades: readonly MineralGrade[];
  keyProperties: readonly KeyProperty[];
  packagingOptions: readonly string[];
};

export const minerals: readonly Mineral[] = [
  {
    slug: "china-clay",
    name: "China Clay",
    scientific: "Kaolin · Al₂Si₂O₅(OH)₄",
    index: "01",
    description: "A versatile, ultrafine industrial mineral prized for its brightness, plasticity and chemical inertness across ceramics, paper and performance coatings.",
    longDescription:
      "China clay (kaolin) is one of the most widely used industrial minerals in the world. QTM sources and processes high-brightness, low-iron calcined and hydrous grades from Gujarat. Its unique combination of whiteness, platelet morphology and chemical neutrality makes it indispensable across ceramics, paper, paints, plastics and rubber.",
    applications: ["Ceramics & sanitaryware", "Paper coating & filling", "Paints & coatings", "Plastics & rubber", "Refractories"],
    image: "/images/mineral-kaolin.png",
    heroImage: "/images/mineral-kaolin.png",
    color: "#d4c9a8",
    grades: [
      { name: "HB-1 Hydrous", brightness: "84–86 ISO", moisture: "≤ 18%", particle: "d50 ~1.8 µm", note: "General ceramics and filler applications." },
      { name: "CB-2 Calcined", brightness: "90–92 ISO", moisture: "≤ 0.5%", particle: "d50 ~1.2 µm", note: "Paper coating and high-brightness applications." },
      { name: "UF-3 Ultrafine", brightness: "88–90 ISO", moisture: "≤ 1%", particle: "d90 < 2 µm", note: "Performance coatings and specialty polymers." },
    ],
    keyProperties: [
      { label: "Specific gravity", value: "2.58–2.63 g/cm³" },
      { label: "Refractive index", value: "1.56–1.57" },
      { label: "pH (10% slurry)", value: "5.5–7.0" },
      { label: "Oil absorption", value: "35–45 g/100g" },
    ],
    packagingOptions: ["25 kg PP bags", "500 kg jumbo bags", "Bulk tanker"],
  },
  {
    slug: "bentonite",
    name: "Bentonite",
    scientific: "Smectite clay · Na/Ca montmorillonite",
    index: "02",
    description: "A highly functional clay with exceptional swelling, binding and sealing properties, critical to foundry, construction, environmental and specialty applications.",
    longDescription:
      "Bentonite is a clay mineral dominated by montmorillonite, formed from the weathering of volcanic ash. QTM supplies both sodium-activated and natural calcium bentonite grades from Gujarat, providing strong binding performance, high liquid limit and versatile functionality for demanding industrial and civil applications.",
    applications: ["Foundry sand bonding", "Civil construction & drilling", "Environmental lining", "Animal feed binder", "Industrial applications"],
    image: "/images/mineral-bentonite.png",
    heroImage: "/images/mineral-bentonite.png",
    color: "#b8a88e",
    grades: [
      { name: "FD-1 Foundry Grade", moisture: "≤ 10%", particle: "90% < 200 mesh", note: "High-swelling foundry sand binder." },
      { name: "DR-2 Drilling Grade", moisture: "≤ 13%", particle: "85% < 200 mesh", note: "API-conformant rheology for drilling fluids." },
      { name: "GS-3 Civil/Geotechnical", moisture: "≤ 15%", note: "Barrier and lining applications. Confirm permeability with QTM." },
    ],
    keyProperties: [
      { label: "Free swell (Na-type)", value: "≥ 24 mL/2g" },
      { label: "Liquid limit", value: "≥ 400%" },
      { label: "Specific gravity", value: "2.4–2.8 g/cm³" },
      { label: "pH (2% suspension)", value: "8.5–10.5" },
    ],
    packagingOptions: ["25 kg PP bags", "1 MT jumbo bags", "Bulk supply"],
  },
  {
    slug: "silica-sand",
    name: "Silica Sand",
    scientific: "Crystalline silica · SiO₂",
    index: "03",
    description: "A high-purity industrial raw material delivering consistent grain distribution, chemical resistance and thermal stability for foundry, glass and construction sectors.",
    longDescription:
      "Silica sand is one of the foundational industrial raw materials, valued for its high SiO₂ content, uniform grain size and exceptional thermal and chemical durability. QTM's processed silica grades are washed, dried and sized to meet demanding foundry, glassmaking and construction specifications.",
    applications: ["Foundry moulding", "Glass manufacture", "Construction & filtration", "Abrasives", "Oil & gas"],
    image: "/images/mineral-silica.png",
    heroImage: "/images/mineral-silica.png",
    color: "#cfc9a0",
    grades: [
      { name: "FS-30/60 Foundry", particle: "AFS GFN 30–60", note: "High-purity grade for green-sand foundry moulds." },
      { name: "GL-10 Glass", moisture: "≤ 0.2%", particle: "0.3–0.8 mm", note: "Low-iron silica for flat glass and container glass." },
      { name: "CF-20 Coarse Filter", particle: "0.8–2.0 mm", note: "Water treatment and construction fill." },
    ],
    keyProperties: [
      { label: "SiO₂ content", value: "98.5–99.5%" },
      { label: "Fe₂O₃", value: "< 0.05%" },
      { label: "Specific gravity", value: "2.65 g/cm³" },
      { label: "Hardness (Mohs)", value: "7" },
    ],
    packagingOptions: ["25 kg bags", "1 MT jumbo bags", "Bulk truck / rail"],
  },
  {
    slug: "bauxite",
    name: "Bauxite",
    scientific: "Aluminium-bearing ore · Al(OH)₃ / AlO(OH)",
    index: "04",
    description: "A mineral resource with high alumina content, essential to metallurgical supply chains, refractory manufacturing and specialty chemical production.",
    longDescription:
      "Bauxite is the primary ore of aluminium and a strategic resource for refractory and metallurgical industries. QTM's bauxite grades offer variable alumina content to suit sintered refractory bricks, cement and calcination applications. Specific chemistry and grade suitability should be confirmed directly with QTM.",
    applications: ["Metallurgy & aluminium smelting", "Refractory products", "Calcium aluminate cement", "Abrasives"],
    image: "/images/mineral-bauxite.png",
    heroImage: "/images/mineral-bauxite.png",
    color: "#c8956e",
    grades: [
      { name: "RF-60 Refractory", note: "Al₂O₃ ≥ 60%; for refractory brick and castable manufacture." },
      { name: "MT-45 Metallurgical", note: "Al₂O₃ 45–55%; suitable for calcination and smelter flux." },
      { name: "CA-70 Calcined", note: "Calcined high-alumina bauxite, Al₂O₃ ≥ 70%; specialty applications." },
    ],
    keyProperties: [
      { label: "Al₂O₃ range", value: "45–70% (by grade)" },
      { label: "SiO₂", value: "6–18% (by grade)" },
      { label: "Fe₂O₃", value: "1.5–8%" },
      { label: "LOI", value: "12–28%" },
    ],
    packagingOptions: ["25 kg PP bags", "1 MT jumbo bags", "Bulk"],
  },
  {
    slug: "ball-clay",
    name: "Ball Clay",
    scientific: "Plastic sedimentary clay · kaolinite / illite",
    index: "05",
    description: "A highly plastic clay that provides essential binding strength, green strength and fired brightness to ceramic bodies and sanitaryware formulations.",
    longDescription:
      "Ball clay is a fine-grained, highly plastic sedimentary clay used primarily in ceramics and sanitaryware manufacturing. Its high organic content, plasticity and fired whiteness make it a critical binder in body formulations. QTM's ball clay grades are processed and characterised for consistent workability and fired performance.",
    applications: ["Ceramics & tableware", "Sanitaryware & vitreous china", "Floor & wall tiles", "Refractory castables"],
    image: "https://images.unsplash.com/photo-1611095562057-4ac75fca3ff5?auto=format&fit=crop&w=1400&q=85",
    heroImage: "https://images.unsplash.com/photo-1611095562057-4ac75fca3ff5?auto=format&fit=crop&w=2000&q=90",
    color: "#c2b89a",
    grades: [
      { name: "BC-P Premium", brightness: "78–82 ISO (fired)", moisture: "≤ 20%", particle: "d50 ~0.6 µm", note: "High-plasticity grade for sanitaryware bodies." },
      { name: "BC-S Standard", brightness: "74–78 ISO (fired)", moisture: "≤ 22%", note: "General ceramics and tile formulations." },
    ],
    keyProperties: [
      { label: "Plasticity index", value: "25–40%" },
      { label: "Specific gravity", value: "2.55–2.65 g/cm³" },
      { label: "Shrinkage (fired)", value: "8–14%" },
      { label: "MOR (green)", value: "0.6–1.4 MPa" },
    ],
    packagingOptions: ["25 kg bags", "500 kg jumbo bags"],
  },
  {
    slug: "quartz",
    name: "Quartz",
    scientific: "Silica mineral · SiO₂",
    index: "06",
    description: "A hard, chemically inert mineral used in engineered surfaces, glass, ceramics and performance applications requiring high purity and consistent particle geometry.",
    longDescription:
      "Quartz is one of the most abundant and versatile minerals in industrial use. QTM processes high-purity quartz from Indian sources into micronised, milled and granular grades for engineered stone, glass, ceramics and specialist performance applications. Its hardness, chemical stability and controlled morphology make it a precision industrial input.",
    applications: ["Engineered quartz surfaces", "Glass & frit", "Industrial filtration", "Electronic applications"],
    image: "/images/mineral-quartz.png",
    heroImage: "/images/mineral-quartz.png",
    color: "#c8c4b8",
    grades: [
      { name: "QZ-M Micronised", brightness: "≥ 88 ISO", moisture: "≤ 0.2%", particle: "d50 ~8 µm", note: "Paints, coatings and polymer filler." },
      { name: "QZ-G Granular", particle: "0.1–0.5 mm", note: "Engineered stone and industrial filtration." },
      { name: "QZ-HP High Purity", brightness: "≥ 90 ISO", particle: "d50 ~5 µm", note: "Electronics and specialty glass." },
    ],
    keyProperties: [
      { label: "SiO₂ purity", value: "99.2–99.8%" },
      { label: "Hardness (Mohs)", value: "7" },
      { label: "Specific gravity", value: "2.65 g/cm³" },
      { label: "Oil absorption", value: "22–28 g/100g" },
    ],
    packagingOptions: ["25 kg bags", "500 kg / 1 MT jumbo bags", "Bulk supply"],
  },
] as const;

export const industries = [
  {
    title: "Ceramics & sanitaryware",
    no: "01",
    description: "Mineral inputs for ceramic bodies, tableware and sanitaryware — from china clay and ball clay to silica and quartz.",
  },
  {
    title: "Paper",
    no: "02",
    description: "Calcined and hydrous kaolin grades for paper coating, filling and opacity improvement.",
  },
  {
    title: "Paints & coatings",
    no: "03",
    description: "Functional mineral extenders for architectural and industrial coating formulations.",
  },
  {
    title: "Plastics & polymers",
    no: "04",
    description: "Mineral fillers delivering opacity, stiffness and surface quality in thermoplastic compounds.",
  },
  {
    title: "Rubber",
    no: "05",
    description: "Reinforcing and semi-reinforcing mineral inputs for natural and synthetic rubber compounds.",
  },
  {
    title: "Glass & construction",
    no: "06",
    description: "High-purity silica sand and quartz for flat glass, container glass, construction and filtration.",
  },
] as const;

export const companyStats = [
  { value: "1989", label: "Established" },
  { value: "6", label: "Core mineral groups" },
  { value: "India", label: "Operational base" },
  { value: "35+", label: "Years of mineral expertise" },
] as const;
