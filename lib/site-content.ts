// Central content layer for EMMYKINGZ STUDIOS.
// Edit values here to update the site — no component code changes required.

export type MediaKind = "vimeo" | "youtube" | "image" | "external" | "instagram";

export type Media = {
  kind: MediaKind;
  /** Vimeo video id, YouTube video id, or absolute image URL */
  ref: string;
  /** Optional poster image URL (absolute) for embed fallbacks */
  poster?: string;
  /** External link for "view externally" fallback button */
  externalUrl?: string;
  title?: string;
  description?: string;
};

export type ProjectCaseStudy = {
  overview: string;
  challenge: string;
  creativeDirection: string;
  process: string[];
  behindTheScenes: string;
  gallery: string[];
  finalResult: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  /** Dominant colors extracted from the project, used for ambient gradients */
  palette: [string, string, string];
  hero: Media;
  thumbnail: string;
  excerpt: string;
  caseStudy: ProjectCaseStudy;
  related: string[];
};

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  year: string;
};

export const studio = {
  name: "EMMYKINGZ STUDIOS",
  shortName: "EMMYKINGZ",
  tagline: ["Creating Motion.", "Building Experiences."],
  subheading: [
    "Animation.",
    "Motion Design.",
    "3D.",
    "Augmented Reality.",
    "Creative Direction.",
  ],
  description:
    "Motion Designer, Animator, and Video Editor with 8+ years of experience creating engaging visual content across education, music, AR, and digital media.",
  email: "eokechukwu555@gmail.com",
  phone: "+234 815 615 2468",
  location: "Abuja, Nigeria",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/emmykingz_animate" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-okechukwu" },
    { label: "Portfolio", href: "https://emmykingzanimate.com" },
  ],
};

export const showreel = {
  title: "Featured Reel",
  subtitle:
    "A cinematic showcase of motion design, animation, immersive AR experiences, and character animation crafted across education, music, and brand work.",
  media: {
    kind: "vimeo" as MediaKind,
    ref: "623651970",
    poster:
      "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Emmykingz Studios — Showreel",
  } satisfies Media,
};

export const services: {
  index: string;
  title: string;
  description: string;
  capabilities: string[];
}[] = [
  {
    index: "01",
    title: "Motion Graphics",
    description:
      "Kinetic typography, logo animations, brand systems in motion, and broadcast design that gives identity a pulse.",
    capabilities: ["Kinetic Type", "Logo Animation", "Lyric Videos", "Brand Motion", "Broadcast"],
  },
  {
    index: "02",
    title: "2D Animation",
    description:
      "Character design, rigging, and frame-by-frame craft — from explainer videos to fully produced animated music videos.",
    capabilities: ["Character Design", "Rigging", "Explainer Videos", "Music Videos", "Storyboarding"],
  },
  {
    index: "03",
    title: "3D & Illustration",
    description:
      "3D illustration, visual development, and product rendering sculpted in Blender and Cinema 4D with cinematic lighting.",
    capabilities: ["Blender", "Cinema 4D", "3D Illustration", "Visual Development", "Product Viz"],
  },
  {
    index: "04",
    title: "Augmented Reality",
    description:
      "Interactive AR filters and immersive spatial experiences built in Meta Spark AR, Artivive, and Eyejack.",
    capabilities: ["Meta Spark AR", "Artivive", "Eyejack", "Interactive Filters", "Spatial"],
  },
  {
    index: "05",
    title: "Video Production",
    description:
      "End-to-end video editing, compositing, and music visual production — concept through final delivery.",
    capabilities: ["Video Editing", "Compositing", "Music Visuals", "Premiere Pro", "Composition"],
  },
];

export const about = {
  name: "Emmanuel Okechukwu",
  roles: [
    "Motion Designer",
    "Animator",
    "Video Editor",
    "3D Illustrator",
    "AR Experience Creator",
    "Creative Director",
  ],
  portrait:
    "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1200",
  biography: [
    "Motion Designer, Animator, and Video Editor with 8+ years of experience creating engaging visual content across education, music, AR, and digital media.",
    "Specialized in motion graphics, character animation, 2D/3D illustration, music visuals, and augmented reality experiences — managing projects from concept and storyboarding through to final delivery under tight deadlines.",
    "A strong collaborator skilled at translating complex ideas into compelling visual narratives, working with clients across Nigeria, Canada, and the United States.",
  ],
  philosophy:
    "I believe motion is a language. Every transition carries meaning, every easing curve is a decision, and every frame is an opportunity to make someone feel something.",
  softSkills: [
    "Creativity",
    "Communication",
    "Collaboration",
    "Attention to Detail",
    "Time Management",
    "Problem Solving",
    "Leadership",
    "Adaptability",
  ],
  software: [
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Cinema 4D",
    "Blender",
    "Spark AR",
    "Procreate",
    "Moho Pro",
  ],
  experience: [
    {
      role: "Animator",
      company: "MIVA Open University",
      location: "Abuja, Nigeria",
      period: "Oct 2023 – Present",
      bullets: [
        "Create high-quality educational animations and motion graphics to simplify complex academic concepts.",
        "Collaborate with instructional designers, illustrators, and academic stakeholders to translate scripts into engaging visual narratives.",
        "Lead pre-production processes including storyboarding, visual planning, and animation direction.",
        "Utilize industry-standard and AI-powered animation tools to optimize content across multiple digital platforms.",
      ],
    },
    {
      role: "Augmented Reality Designer",
      company: "The Junction BIA",
      location: "Toronto, Canada",
      period: "Jun 2023 – Dec 2023",
      bullets: [
        "Designed and animated engaging educational video lessons.",
        "Collaborated with production teams to create accessible content for diverse learners.",
        "Contributed to scalable content systems to expand the company's digital library.",
      ],
    },
    {
      role: "2D Animator / Motion Graphics Artist",
      company: "Ulesson Education",
      location: "Nigeria",
      period: "Oct 2022 – Dec 2022",
      bullets: [
        "Designed and animated engaging educational video lessons.",
        "Collaborated with production teams to create accessible content for diverse learners.",
        "Contributed to scalable content systems to expand the company's digital library.",
      ],
    },
    {
      role: "Freelance Animator",
      company: "Predeet",
      location: "Nigeria",
      period: "Jul 2022 – Oct 2022",
      bullets: [
        "Produced 2D explainer videos including character design, rigging, animation, and editing.",
        "Translated scripts into storyboards and final animated outputs.",
      ],
    },
    {
      role: "Freelance Animator",
      company: "RBSM Marketplace",
      location: "Canada",
      period: "Jun 2022 – Jul 2022",
      bullets: [
        "Delivered a fully animated 2D explainer video within three weeks.",
        "Coordinated with script editor and voiceover artist for cohesive storytelling.",
      ],
    },
    {
      role: "Freelance 3D Illustrator",
      company: "Vekpuk",
      location: "New York, USA",
      period: "May 2022",
      bullets: [
        "Recreated and rendered a painting in 3D using Cinema 4D within 48 hours.",
      ],
    },
    {
      role: "Freelance Illustrator",
      company: "Nigerian Nostalgia Project",
      location: "Nigeria",
      period: "Apr 2022",
      bullets: [
        "Developed character designs and illustrations for the '12 Icons Project.'",
      ],
    },
    {
      role: "Freelance Animator",
      company: "Nelsonegh",
      location: "Atlanta, USA",
      period: "Apr 2022",
      bullets: [
        "Created animated lyric visuals and compositing for a music video within 48 hours.",
      ],
    },
    {
      role: "Freelance Animator & AR Designer",
      company: "Olivia",
      location: "USA",
      period: "Apr 2022",
      bullets: [
        "Animated NFT book cover design.",
        "Designed interactive AR filter and immersive experience using Spark AR and Eyejack.",
        "Collaborated with sound designer for synchronized sound effects.",
      ],
    },
    {
      role: "Freelance Animator",
      company: "Kronika",
      location: "USA",
      period: "May 2021",
      bullets: [
        "Fully produced a 2D animated music video from concept to final delivery.",
        "Managed character design, rigging, animation, compositing, and editing.",
      ],
    },
  ] satisfies ExperienceEntry[],

  education: [
    {
      degree: "B.Tech, Library and Information Technology",
      institution: "Federal University of Technology, Minna (FUTMINNA)",
      location: "Nigeria",
      year: "2016 – 2021",
    },
    {
      degree: "WAEC / SSCE",
      institution: "JumBen International High School",
      location: "Kano, Nigeria",
      year: "2015",
    },
  ] satisfies EducationEntry[],

  certifications: [
    { title: "Patterned Illustration in Blender", issuer: "Patata School", year: "2024" },
    { title: "Learning Moho from Beginner to Expert", issuer: "Self-directed", year: "2024" },
    { title: "Get Into 3D", issuer: "Motion Design School", year: "2022" },
    { title: "Cinema 4D Fundamentals", issuer: "Motion Design School", year: "2022" },
    { title: "Illustration for Animation", issuer: "Motion Design School", year: "2022" },
    { title: "Creative Enterprise Support Program (Animation)", issuer: "British Council", year: "2022" },
    { title: "Science of Character Animation", issuer: "Motion Design School", year: "2020" },
  ],
};

export const projects: Project[] = [
  {
    id: "joeboy-smh",
    index: "01",
    title: "Joeboy & Tempoe — SMH",
    client: "Joeboy / Tempoe",
    year: "2024",
    category: "Music Visualizers",
    tags: ["Motion Graphics", "Music Visualizer", "Lyric Video"],
    palette: ["#f59e0b", "#d97706", "#78350f"],
    hero: {
      kind: "youtube",
      ref: "y-Ab_QHzXWs",
      poster:
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Joeboy & Tempoe — SMH (Music Visualizer)",
    },
    thumbnail:
      "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A high-energy music visualizer for Joeboy and Tempoe's 'SMH' — kinetic typography and reactive motion graphics synced to the track's infectious groove.",
    caseStudy: {
      overview:
        "Commissioned to create a music visualizer for 'SMH' by Joeboy and Tempoe, the piece needed to amplify the track's afrobeats energy with motion that felt as rhythmic as the music itself.",
      challenge:
        "Music visualizers must sustain visual interest across a full song without narrative. The motion language had to evolve across the track's runtime while staying in lockstep with the beat.",
      creativeDirection:
        "Bold kinetic typography as the hero element, layered over reactive gradient fields and particle systems. The colour palette shifts with the song's energy, warm ambers and golds reflecting the track's sunny disposition.",
      process: [
        "Audio analysis to map motion beats and energy peaks.",
        "Typography design and animation in After Effects.",
        "Reactive background systems built to track frequency data.",
        "Final composite, colour grade, and render at 4K.",
      ],
      behindTheScenes:
        "The visualizer was built around a frequency-reactive rig — bass hits trigger particle bursts, hi-hats drive the typography's micro-motion. Every element has a reason to move.",
      gallery: [
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A dynamic music visualizer that elevates 'SMH' with beat-synced motion design, released on YouTube for a global audience.",
    },
    related: ["kizz-daniel-pano-tona", "joeboy-taxi-driver"],
  },
  {
    id: "kizz-daniel-pano-tona",
    index: "02",
    title: "Kizz Daniel & Adekunle Gold — Pano Tona",
    client: "Kizz Daniel / Adekunle Gold",
    year: "2024",
    category: "Music Visualizers",
    tags: ["Motion Graphics", "Music Visualizer", "Afrobeats"],
    palette: ["#ef4444", "#b91c1c", "#450a0a"],
    hero: {
      kind: "youtube",
      ref: "sGpWXwCJfyo",
      poster:
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Kizz Daniel & Adekunle Gold — Pano Tona (Music Visualizer)",
    },
    thumbnail:
      "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A vibrant music visualizer for the collaboration between two of Nigeria's biggest afrobeats stars — kinetic type and reactive graphics driving the track's celebratory energy.",
    caseStudy: {
      overview:
        "A music visualizer for 'Pano Tona' by Kizz Daniel and Adekunle Gold — a collaboration demanding a visual language as bold and charismatic as both artists.",
      challenge:
        "Two major artists on one track means the visualizer had to honour both energies without favouring either. The motion needed to feel collaborative in spirit.",
      creativeDirection:
        "A rich, celebratory palette of deep reds and warm tones. Kinetic typography alternates between bold display and rhythmic micro-type, mirroring the vocal interplay between the two artists.",
      process: [
        "Track analysis to identify vocal handoffs and energy shifts.",
        "Typography system design accommodating both artists' names and lyrics.",
        "Reactive motion graphics built around the afrobeats percussion pattern.",
        "Final composite and 4K render.",
      ],
      behindTheScenes:
        "The interplay between two vocalists drove the entire design — visual elements hand off between foreground and background in sync with the vocal exchanges.",
      gallery: [
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A beat-driven visualizer that captures the collaborative spirit of two afrobeats heavyweights, published on YouTube.",
    },
    related: ["joeboy-smh", "joeboy-taxi-driver"],
  },
  {
    id: "joeboy-taxi-driver",
    index: "03",
    title: "Joeboy — Taxi Driver",
    client: "Joeboy",
    year: "2024",
    category: "Music Visualizers",
    tags: ["Motion Graphics", "Music Visualizer", "Lyric Video"],
    palette: ["#fbbf24", "#f59e0b", "#78350f"],
    hero: {
      kind: "youtube",
      ref: "TRDfpI-T1eg",
      poster:
        "https://images.pexels.com/photos/3771060/pexels-photo-3771060.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Joeboy — Taxi Driver (Music Visualizer)",
    },
    thumbnail:
      "https://images.pexels.com/photos/3771060/pexels-photo-3771060.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A playful, narrative-driven music visualizer for Joeboy's 'Taxi Driver' — kinetic typography and character motion riding the track's melodic groove.",
    caseStudy: {
      overview:
        "A music visualizer for Joeboy's 'Taxi Driver' that leans into the track's narrative quality, blending kinetic type with character-driven motion cues.",
      challenge:
        "The track has a storyline, so the visualizer needed to hint at narrative without becoming a full animated short. The balance was suggestion over depiction.",
      creativeDirection:
        "Warm golden-hour palette with a road-trip sensibility. Typography moves with a driving rhythm, and subtle vehicle-inspired motion motifs thread through the piece.",
      process: [
        "Script and lyric breakdown to identify narrative beats.",
        "Typography and motion system design in After Effects.",
        "Character-inspired motion elements built to complement the type.",
        "Final composite, colour grade, and 4K delivery.",
      ],
      behindTheScenes:
        "The 'taxi driver' concept suggested motion itself — the visualizer uses subtle parallax and forward-driving movement to evoke a journey without literal illustration.",
      gallery: [
        "https://images.pexels.com/photos/3771060/pexels-photo-3771060.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3771060/pexels-photo-3771060.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A narrative-inflected music visualizer that gives 'Taxi Driver' a journey of its own, released on YouTube.",
    },
    related: ["joeboy-smh", "boi-heartless-freaky"],
  },
  {
    id: "boi-heartless-freaky",
    index: "04",
    title: "Boi Heartless — Freaky Freaky",
    client: "Boi Heartless",
    year: "2024",
    category: "Music Visualizers",
    tags: ["Motion Graphics", "Music Visualizer"],
    palette: ["#a855f7", "#7e22ce", "#3b0764"],
    hero: {
      kind: "youtube",
      ref: "Dqlpwxzw4Pk",
      poster:
        "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Boi Heartless — Freaky Freaky (Music Visualizer)",
    },
    thumbnail:
      "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A bold and playful music visualizer for Boi Heartless's 'Freaky Freaky' — neon-tinted motion graphics and reactive type amplifying the track's high-energy pulse.",
    caseStudy: {
      overview:
        "A music visualizer for 'Freaky Freaky' by Boi Heartless, designed to match the track's bold, playful energy with equally fearless motion design.",
      challenge:
        "The track's energy is relentless — the visualizer needed to sustain visual intensity across the full runtime without becoming repetitive or exhausting.",
      creativeDirection:
        "Neon purples and electric tones drive a high-contrast visual system. Typography bounces and morphs with the beat, while background elements pulse with the track's bassline.",
      process: [
        "Audio analysis to map the track's energy curve.",
        "Neon typography and motion system design in After Effects.",
        "Reactive background elements built to bass and drum patterns.",
        "Final composite, colour grade, and 4K render.",
      ],
      behindTheScenes:
        "Sustaining energy across a full track is harder than it looks — the visualizer introduces new motion motifs at each section change to keep the eye engaged.",
      gallery: [
        "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A high-impact visualizer that matches 'Freaky Freaky's relentless energy, released on YouTube.",
    },
    related: ["badboy-major", "joeboy-taxi-driver"],
  },
  {
    id: "badboy-major",
    index: "05",
    title: "BadboyMajor — The First Afrobeast Commando",
    client: "BadboyMajor",
    year: "2024",
    category: "Music Visualizers",
    tags: ["Motion Graphics", "Music Visualizer", "Character Animation"],
    palette: ["#10b981", "#047857", "#064e3b"],
    hero: {
      kind: "youtube",
      ref: "OP4LIfj5Dtc",
      poster:
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "BadboyMajor — The First Afrobeast Commando (Music Visualizer)",
    },
    thumbnail:
      "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A character-driven music visualizer for BadboyMajor's 'The First Afrobeast Commando' — bold motion graphics with a heroic visual identity.",
    caseStudy: {
      overview:
        "A music visualizer for 'The First Afrobeast Commando' by BadboyMajor, leaning into the track's heroic, action-oriented title with bold character-inspired motion design.",
      challenge:
        "The title suggests a narrative and character identity — the visualizer needed to evoke a sense of heroism and action without becoming a full animated story.",
      creativeDirection:
        "A commanding green and emerald palette with bold, heroic typography. Motion elements suggest action and forward momentum, with graphic shapes that feel like insignia and emblem design.",
      process: [
        "Track analysis and concept development around the 'commando' theme.",
        "Typography and emblem-inspired motion system in After Effects.",
        "Character silhouette motifs integrated with kinetic type.",
        "Final composite, colour grade, and 4K delivery.",
      ],
      behindTheScenes:
        "The 'commando' concept was translated into visual language through bold geometric shapes, insignia-like graphics, and a disciplined, forward-driving motion rhythm.",
      gallery: [
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A heroic, character-inflected visualizer that gives 'The First Afrobeast Commando' a bold visual identity, released on YouTube.",
    },
    related: ["boi-heartless-freaky", "psychoyp-lets-go"],
  },
  {
    id: "rbsm-marketplace",
    index: "06",
    title: "RBSM Marketplace",
    client: "RBSM Marketplace",
    year: "2022",
    category: "2D Animation",
    tags: ["Explainer Video", "Character Animation", "2D Animation"],
    palette: ["#3b82f6", "#1d4ed8", "#1e3a5f"],
    hero: {
      kind: "vimeo",
      ref: "931757738",
      poster:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "RBSM Marketplace — 2D Explainer",
    },
    thumbnail:
      "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A fully animated 2D explainer video for RBSM Marketplace in Canada — character design, rigging, animation, and editing delivered within three weeks.",
    caseStudy: {
      overview:
        "RBSM Marketplace, a Canadian platform, commissioned a 2D explainer video to communicate their service offering. The full production — from script to final edit — was delivered in three weeks.",
      challenge:
        "Explainer videos must make a complex service instantly understandable. The animation had to guide the viewer through the platform's value proposition without overwhelming them.",
      creativeDirection:
        "A clean, friendly visual style with approachable character design. The colour system builds trust through blues and warm accents, keeping focus on the narrative flow.",
      process: [
        "Script coordination with the client's script editor and voiceover artist.",
        "Character design, model sheets, and rigging.",
        "Scene-by-scene animation synced to the voiceover.",
        "Compositing, editing, and final delivery.",
      ],
      behindTheScenes:
        "The three-week timeline meant tight scheduling — character design and rigging happened in parallel with voiceover recording, with animation starting as soon as the first scenes were rigged.",
      gallery: [
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A complete 2D explainer video delivered on a tight three-week timeline, helping RBSM Marketplace communicate their platform to a Canadian audience.",
    },
    related: ["predeet", "lekexiv-intro"],
  },
  {
    id: "predeet",
    index: "07",
    title: "Predeet",
    client: "Predeet",
    year: "2022",
    category: "2D Animation",
    tags: ["Explainer Video", "Character Animation", "Rigging"],
    palette: ["#06b6d4", "#0891b2", "#164e63"],
    hero: {
      kind: "vimeo",
      ref: "931757637",
      poster:
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Predeet — 2D Explainer",
    },
    thumbnail:
      "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A 2D explainer video for Predeet — character design, rigging, animation, and editing, translating scripts into storyboards and final animated output.",
    caseStudy: {
      overview:
        "Predeet needed a 2D explainer video to introduce their service. The project spanned the full pipeline: script translation, storyboarding, character design, rigging, animation, and final edit.",
      challenge:
        "The explainer needed to distill Predeet's offering into a clear, engaging narrative. Every visual decision had to serve comprehension first.",
      creativeDirection:
        "A fresh, modern visual language with clean character design and a cyan-forward palette. Motion is purposeful and guiding rather than decorative.",
      process: [
        "Script analysis and storyboard development.",
        "Character design and rigging.",
        "Animation synced to voiceover and pacing.",
        "Compositing, editing, and final delivery.",
      ],
      behindTheScenes:
        "The storyboard was the project's backbone — every scene was planned on paper before a single keyframe was set, ensuring the narrative flowed before animation began.",
      gallery: [
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A clear, engaging 2D explainer that introduces Predeet's service with character-driven storytelling.",
    },
    related: ["rbsm-marketplace", "lekexiv-intro"],
  },
  {
    id: "amapiano-district",
    index: "08",
    title: "Amapiano District",
    client: "Amapiano District",
    year: "2024",
    category: "Motion Graphics",
    tags: ["Motion Graphics", "Social Content", "Instagram"],
    palette: ["#f97316", "#ea580c", "#7c2d12"],
    hero: {
      kind: "instagram",
      ref: "https://www.instagram.com/reel/DZ4-Wl_s8p6/",
      poster:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Amapiano District — Instagram Reel",
      externalUrl: "https://www.instagram.com/reel/DZ4-Wl_s8p6/",
    },
    thumbnail:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A punchy motion graphics piece for Amapiano District, built for Instagram Reels — bold type and rhythmic motion designed for vertical-first social consumption.",
    caseStudy: {
      overview:
        "A vertical-first motion graphics piece created for Amapiano District's Instagram presence, designed to capture attention in the first second and hold it through the reel's full runtime.",
      challenge:
        "Social content lives or dies in the first frame. The motion needed to hook instantly and deliver its message before the viewer scrolled past.",
      creativeDirection:
        "A bold, warm palette tuned for mobile screens. Typography is the hero — large, kinetic, and designed to be legible at small sizes. Motion is snappy and rhythmic, matching the amapiano genre's groove.",
      process: [
        "Concept and script for vertical-first delivery.",
        "Typography and motion design in After Effects.",
        "Sound-synced motion timing.",
        "Export and delivery optimized for Instagram Reels.",
      ],
      behindTheScenes:
        "Vertical-first design is a different discipline — every element must work in a 9:16 frame, with the focal point centered for mobile viewing. The motion was timed to the beat for maximum scroll-stopping power.",
      gallery: [
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A scroll-stopping Instagram Reel that brings Amapiano District's brand to life with bold, beat-synced motion graphics.",
    },
    related: ["along-reel", "joeboy-smh"],
  },
  {
    id: "along-reel",
    index: "09",
    title: "Along",
    client: "Along",
    year: "2024",
    category: "Motion Graphics",
    tags: ["Motion Graphics", "Social Content", "Instagram"],
    palette: ["#8b5cf6", "#6d28d9", "#1e1b4b"],
    hero: {
      kind: "instagram",
      ref: "https://www.instagram.com/reel/DHQdFMQIWCj/",
      poster:
        "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Along — Instagram Reel",
      externalUrl: "https://www.instagram.com/reel/DHQdFMQIWCj/",
    },
    thumbnail:
      "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A mesmerizing motion graphics reel for 'Along' — fluid transitions and atmospheric visuals crafted for Instagram's vertical canvas.",
    caseStudy: {
      overview:
        "A vertical motion graphics piece for 'Along,' designed for Instagram Reels. The work explores fluid transitions and atmospheric visual design in a mobile-first format.",
      challenge:
        "Creating a sense of flow and atmosphere within the constraints of a short-form vertical reel — the motion needed to feel continuous and immersive despite the brief runtime.",
      creativeDirection:
        "A deep violet palette with atmospheric depth. Fluid transitions and soft motion create a meditative, immersive quality. Typography is subtle, letting the visuals lead.",
      process: [
        "Concept development for a fluid, atmospheric reel.",
        "Motion design and transition system in After Effects.",
        "Sound-driven motion timing.",
        "Export optimized for Instagram Reels.",
      ],
      behindTheScenes:
        "The piece was built around continuous motion — transitions flow into each other rather than cutting, creating a seamless visual journey within the reel's short runtime.",
      gallery: [
        "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3781709/pexels-photo-3781709.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "An atmospheric, fluid motion graphics reel that stands out in the Instagram feed.",
    },
    related: ["amapiano-district", "joeboy-smh"],
  },
  {
    id: "edward-star-trek",
    index: "10",
    title: "EdwardtheCartoonist — Star Trek",
    client: "EdwardtheCartoonist",
    year: "2024",
    category: "Music Visualizers",
    tags: ["Motion Graphics", "Music Visualizer", "Sci-Fi"],
    palette: ["#3b82f6", "#1e40af", "#0c1e3d"],
    hero: {
      kind: "youtube",
      ref: "ItgE0e6NlVg",
      poster:
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "EdwardtheCartoonist — Star Trek (Music Visualizer)",
    },
    thumbnail:
      "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A sci-fi-inspired music visualizer for EdwardtheCartoonist's 'Star Trek' — cosmic motion graphics and kinetic type journeying through space and sound.",
    caseStudy: {
      overview:
        "A music visualizer for 'Star Trek' by EdwardtheCartoonist, embracing the track's sci-fi themes with cosmic motion design and space-inspired visuals.",
      challenge:
        "Sci-fi visuals risk cliché — the visualizer needed to evoke space and cosmic journey without relying on overused tropes. The motion had to feel original and atmospheric.",
      creativeDirection:
        "Deep blues and cosmic darkness form the base palette, with luminous type and particle systems suggesting starlight and nebulae. The motion is vast and slow, evoking the scale of space.",
      process: [
        "Concept development around the 'Star Trek' sci-fi theme.",
        "Cosmic particle and nebula systems in After Effects.",
        "Kinetic typography design with a futuristic type system.",
        "Final composite, colour grade, and 4K render.",
      ],
      behindTheScenes:
        "The cosmic atmosphere was built from layered particle systems and gradient meshes — each layer moving at a different rate to create depth and the illusion of vast distance.",
      gallery: [
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "An atmospheric, sci-fi visualizer that gives 'Star Trek' a cosmic visual journey, released on YouTube.",
    },
    related: ["edward-hurricane-drive", "joeboy-smh"],
  },
  {
    id: "edward-hurricane-drive",
    index: "11",
    title: "EdwardtheCartoonist — Hurricane Drive",
    client: "EdwardtheCartoonist",
    year: "2024",
    category: "Music Visualizers",
    tags: ["Motion Graphics", "Music Visualizer"],
    palette: ["#0ea5e9", "#0284c7", "#075985"],
    hero: {
      kind: "youtube",
      ref: "HEcHiLaWlI8",
      poster:
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "EdwardtheCartoonist — Hurricane Drive (Music Visualizer)",
    },
    thumbnail:
      "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A dynamic music visualizer for EdwardtheCartoonist's 'Hurricane Drive' — swirling motion graphics and kinetic type channelling the track's stormy energy.",
    caseStudy: {
      overview:
        "A music visualizer for 'Hurricane Drive' by EdwardtheCartoonist, designed to channel the track's stormy, driving energy through swirling motion graphics and kinetic typography.",
      challenge:
        "The 'hurricane' concept suggested chaos, but a good visualizer needs control. The motion had to feel turbulent without becoming visually noisy or unreadable.",
      creativeDirection:
        "A cool blue-forward palette with swirling, vortex-inspired motion systems. Typography is bold and stable, anchoring the viewer while the background elements swirl with controlled turbulence.",
      process: [
        "Track analysis to map the stormy energy curve.",
        "Vortex and swirl motion systems in After Effects.",
        "Typography design as a stable anchor against turbulent backgrounds.",
        "Final composite, colour grade, and 4K render.",
      ],
      behindTheScenes:
        "Controlled turbulence was the key — the swirling background elements follow a rigid motion path, creating the illusion of chaos while maintaining visual coherence.",
      gallery: [
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A turbulent yet controlled visualizer that channels 'Hurricane Drive's stormy energy, released on YouTube.",
    },
    related: ["edward-star-trek", "joeboy-smh"],
  },
  {
    id: "psychoyp-lets-go",
    index: "12",
    title: "PsychoYP — Let's Go",
    client: "PsychoYP",
    year: "2024",
    category: "Music Visualizers",
    tags: ["Motion Graphics", "Music Visualizer", "Hip-Hop"],
    palette: ["#dc2626", "#991b1b", "#450a0a"],
    hero: {
      kind: "youtube",
      ref: "6jeQ-HA9Wlg",
      poster:
        "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "PsychoYP — Let's Go (Music Visualizer)",
    },
    thumbnail:
      "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A hard-hitting music visualizer for PsychoYP's 'Let's Go' — aggressive kinetic type and street-forward motion graphics matching the track's raw hip-hop energy.",
    caseStudy: {
      overview:
        "A music visualizer for 'Let's Go' by PsychoYP, designed to match the track's raw, aggressive hip-hop energy with equally bold motion design.",
      challenge:
        "Hip-hop visualizers need attitude without becoming chaotic. The motion had to feel hard-hitting and direct, with a visual language that matched the track's intensity.",
      creativeDirection:
        "A deep red palette with aggressive, high-contrast typography. Motion is sharp and direct — hard cuts, snappy transitions, and type that hits like the beat.",
      process: [
        "Track analysis to map the beat's hard hits and vocal energy.",
        "Aggressive typography and motion system in After Effects.",
        "High-contrast colour grade for maximum impact.",
        "Final composite and 4K render.",
      ],
      behindTheScenes:
        "The visualizer was built around hard cuts — every beat hit triggers a visual punch. The typography doesn't ease in; it snaps, matching the track's uncompromising energy.",
      gallery: [
        "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A hard-hitting visualizer that matches PsychoYP's raw energy, released on YouTube.",
    },
    related: ["badboy-major", "edward-hurricane-drive"],
  },
  {
    id: "window-wonderland",
    index: "13",
    title: "Window Wonderland 2023",
    client: "The Junction BIA",
    year: "2023",
    category: "Augmented Reality",
    tags: ["Augmented Reality", "Spark AR", "Event"],
    palette: ["#f0abfc", "#c026d3", "#4a044e"],
    hero: {
      kind: "youtube",
      ref: "6g2mTMJSB-Y",
      poster:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Window Wonderland 2023 — AR Experience",
    },
    thumbnail:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "An augmented reality experience for The Junction BIA's Window Wonderland 2023 — bringing interactive digital storytelling to Toronto's winter streetscape.",
    caseStudy: {
      overview:
        "As part of The Junction BIA's Window Wonderland 2023 event in Toronto, an AR experience was created to bring interactive digital storytelling to the neighbourhood's holiday window displays.",
      challenge:
        "AR for a seasonal public event must work for everyone — diverse devices, cold weather, variable lighting. The experience had to be magical and frictionless for a broad public audience.",
      creativeDirection:
        "A festive, warm palette with AR overlays designed to complement the physical window displays rather than replace them. The digital layer adds magic; the physical display remains the anchor.",
      process: [
        "Site research and concept development for each AR-enabled window.",
        "AR design and animation in Spark AR and After Effects.",
        "On-site testing for tracking accuracy in winter conditions.",
        "Deployment and public access via single-link delivery.",
      ],
      behindTheScenes:
        "Winter AR in Toronto introduced real challenges — cold affected device performance, and reflective window glass complicated tracking. Robust tracking targets and optimized asset builds were essential.",
      gallery: [
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3781709/pexels-photo-3781709.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "An immersive AR experience deployed across Window Wonderland 2023, accessible to the public via a single link — no app install required.",
    },
    related: ["amapiano-district", "edward-star-trek"],
  },
  {
    id: "lekexiv-intro",
    index: "14",
    title: "Lekexiv YouTube Intro",
    client: "Lekexiv",
    year: "2023",
    category: "Motion Graphics",
    tags: ["Logo Animation", "Brand Motion", "Broadcast"],
    palette: ["#22d3ee", "#06b6d4", "#155e75"],
    hero: {
      kind: "vimeo",
      ref: "933186692",
      poster:
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Lekexiv — YouTube Intro Animation",
    },
    thumbnail:
      "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A crisp YouTube intro animation for Lekexiv — logo motion and brand identity design that opens every video with a polished, professional signature.",
    caseStudy: {
      overview:
        "Lekexiv needed a YouTube intro animation — a short, repeatable brand signature to open every video. The piece had to be memorable, professional, and brief enough not to test the viewer's patience.",
      challenge:
        "Intros must establish brand identity in seconds. The animation had to be distinctive enough to be recognizable, but short enough to not delay the content.",
      creativeDirection:
        "A clean, modern motion language with a cyan-forward palette. The logo build is the hero — every element serves the reveal of the brand mark. Motion is crisp, confident, and efficient.",
      process: [
        "Brand analysis and logo motion concept development.",
        "Animation and sound design in After Effects.",
        "Timing optimization for a sub-5-second runtime.",
        "Final composite and delivery in multiple formats.",
      ],
      behindTheScenes:
        "The intro was designed to be watched thousands of times — every frame had to earn its place. The logo reveal was timed to a sound design hit for maximum brand impact.",
      gallery: [
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A polished, repeatable YouTube intro that opens every Lekexiv video with a professional brand signature.",
    },
    related: ["degeneral-intro", "nelsonegh-logo"],
  },
  {
    id: "degeneral-intro",
    index: "15",
    title: "Degeneral Intro Animation",
    client: "Degeneral",
    year: "2023",
    category: "Motion Graphics",
    tags: ["Logo Animation", "Brand Motion", "Broadcast"],
    palette: ["#f59e0b", "#d97706", "#78350f"],
    hero: {
      kind: "vimeo",
      ref: "933186324",
      poster:
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Degeneral — Intro Animation",
    },
    thumbnail:
      "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A dynamic intro animation for Degeneral — brand motion and logo design that establishes a bold visual identity in seconds.",
    caseStudy: {
      overview:
        "Degeneral commissioned an intro animation to establish their brand identity at the start of their video content. The piece needed to be bold, memorable, and distinctly theirs.",
      challenge:
        "The intro had to stand out in a crowded content landscape. The motion design needed to feel unique to Degeneral — not a template, but a signature.",
      creativeDirection:
        "A warm amber palette with bold, confident motion. The logo build uses dynamic transitions and a strong type reveal, creating a sense of energy and forward momentum.",
      process: [
        "Brand identity analysis and motion concept.",
        "Logo animation and transition design in After Effects.",
        "Sound design integration.",
        "Final composite and multi-format delivery.",
      ],
      behindTheScenes:
        "The intro was built around the brand's energy — the motion doesn't just reveal the logo, it embodies the brand's personality. Every easing curve was chosen to match the brand's voice.",
      gallery: [
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A bold, signature intro animation that establishes Degeneral's brand identity in seconds.",
    },
    related: ["lekexiv-intro", "nelsonegh-logo"],
  },
  {
    id: "nelsonegh-logo",
    index: "16",
    title: "Nelsonegh Logo Animation",
    client: "Nelsonegh",
    year: "2021",
    category: "Motion Graphics",
    tags: ["Logo Animation", "Brand Motion", "Broadcast"],
    palette: ["#ef4444", "#b91c1c", "#450a0a"],
    hero: {
      kind: "vimeo",
      ref: "497831795",
      poster:
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Nelsonegh — Logo Animation",
    },
    thumbnail:
      "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A bold logo animation for Nelsonegh — brand motion design that brings the logo to life with energy and character, establishing a strong visual signature.",
    caseStudy: {
      overview:
        "Nelsonegh commissioned a logo animation to establish their brand at the start of video content. The animation needed to bring the logo to life with personality and energy.",
      challenge:
        "Logo animation must respect the existing brand mark while adding motion that enhances rather than distracts. The movement had to feel like a natural extension of the logo's design.",
      creativeDirection:
        "A bold red palette with energetic, characterful motion. The logo build is playful but professional — the motion suggests personality without undermining the brand's authority.",
      process: [
        "Logo analysis and motion concept development.",
        "Animation and transition design in After Effects.",
        "Sound design integration for brand impact.",
        "Final composite and delivery.",
      ],
      behindTheScenes:
        "The logo's existing design suggested its motion — the shapes within the mark implied a natural build sequence. The animation simply revealed what was already embedded in the design.",
      gallery: [
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A characterful logo animation that brings the Nelsonegh brand to life with energy and personality.",
    },
    related: ["sppace-logo", "edward-logo"],
  },
  {
    id: "sppace-logo",
    index: "17",
    title: "Sppace Logo Animation",
    client: "Sppace",
    year: "2021",
    category: "Motion Graphics",
    tags: ["Logo Animation", "Brand Motion", "Broadcast"],
    palette: ["#6366f1", "#4f46e5", "#1e1b4b"],
    hero: {
      kind: "vimeo",
      ref: "559341863",
      poster:
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Sppace — Logo Animation",
    },
    thumbnail:
      "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A sleek, modern logo animation for Sppace — clean motion design and refined transitions that establish a premium brand identity.",
    caseStudy: {
      overview:
        "Sppace needed a logo animation that conveyed modernity and precision. The animation had to feel clean, refined, and premium — matching the brand's positioning.",
      challenge:
        "Minimalist logo animation is unforgiving — every motion must be perfect. With fewer elements, any imperfection is visible. The motion had to be precise and intentional.",
      creativeDirection:
        "A deep indigo palette with clean, geometric motion. The logo build is methodical and precise — every element settles into place with deliberate timing. Nothing rushed, nothing accidental.",
      process: [
        "Logo analysis and motion concept for a premium feel.",
        "Precise animation and timing in After Effects.",
        "Subtle sound design integration.",
        "Final composite and delivery.",
      ],
      behindTheScenes:
        "Minimalism demands perfection — the animation was refined through multiple timing passes until every element settled with exactly the right ease and duration.",
      gallery: [
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A precise, premium logo animation that establishes Sppace's brand with modern refinement.",
    },
    related: ["nelsonegh-logo", "edward-logo"],
  },
  {
    id: "omah-lay-holy-ghost",
    index: "18",
    title: "Omah Lay — Holy Ghost",
    client: "Omah Lay",
    year: "2024",
    category: "Music Visualizers",
    tags: ["Motion Graphics", "Music Visualizer", "Afrobeats"],
    palette: ["#fbbf24", "#f59e0b", "#78350f"],
    hero: {
      kind: "vimeo",
      ref: "931748818",
      poster:
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Omah Lay — Holy Ghost (Music Visualizer)",
    },
    thumbnail:
      "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "An atmospheric music visualizer for Omah Lay's 'Holy Ghost' — luminous motion graphics and kinetic type elevating one of afrobeats' most soulful voices.",
    caseStudy: {
      overview:
        "A music visualizer for 'Holy Ghost' by Omah Lay, designed to match the track's soulful, atmospheric quality with luminous motion design and considered typography.",
      challenge:
        "Omah Lay's music is emotive and layered — the visualizer needed to feel soulful rather than flashy. The motion had to serve the song's mood, not overpower it.",
      creativeDirection:
        "A warm golden palette with soft, luminous motion. Typography is elegant rather than aggressive, and background elements glow and drift rather than pulse. The overall feel is reverent and atmospheric.",
      process: [
        "Track analysis to map the song's emotional arc.",
        "Atmospheric motion and typography system in After Effects.",
        "Soft, luminous colour grade.",
        "Final composite and 4K render.",
      ],
      behindTheScenes:
        "The visualizer was built around light rather than motion — glowing elements drift and breathe with the track, creating a reverent, almost spiritual visual quality.",
      gallery: [
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "An atmospheric, soulful visualizer that honours Omah Lay's 'Holy Ghost' with luminous motion design.",
    },
    related: ["joeboy-smh", "kizz-daniel-pano-tona"],
  },
  {
    id: "edward-logo",
    index: "19",
    title: "EdwardtheCartoonist Logo Animation",
    client: "EdwardtheCartoonist",
    year: "2024",
    category: "Motion Graphics",
    tags: ["Logo Animation", "Brand Motion", "YouTube Short"],
    palette: ["#f97316", "#ea580c", "#7c2d12"],
    hero: {
      kind: "youtube",
      ref: "zp_wJPN99fo",
      poster:
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "EdwardtheCartoonist — Logo Animation",
    },
    thumbnail:
      "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A playful logo animation for EdwardtheCartoonist — characterful brand motion designed for YouTube Shorts, bringing a cartoonist's identity to life.",
    caseStudy: {
      overview:
        "EdwardtheCartoonist needed a logo animation for their YouTube Shorts content. The animation had to reflect a cartoonist's sensibility — playful, characterful, and full of personality.",
      challenge:
        "A cartoonist's brand animation must feel hand-crafted and characterful, not corporate. The motion needed to embody the playful, creative spirit of a cartoonist's work.",
      creativeDirection:
        "A warm orange palette with bouncy, characterful motion. The logo build feels hand-drawn — elements bounce and settle with a playful, cartoon-like energy. Nothing stiff, nothing corporate.",
      process: [
        "Brand analysis and cartoon-inspired motion concept.",
        "Characterful animation in After Effects.",
        "Playful sound design integration.",
        "Export optimized for YouTube Shorts.",
      ],
      behindTheScenes:
        "The animation was designed to feel like a cartoonist's hand at work — bouncy eases, playful timing, and a sense of personality that corporate logo animations never have.",
      gallery: [
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A playful, characterful logo animation that brings EdwardtheCartoonist's brand to life on YouTube Shorts.",
    },
    related: ["nelsonegh-logo", "sppace-logo"],
  },
  {
    id: "highlife-nostalgia",
    index: "20",
    title: "Highlife and Nostalgia",
    client: "Personal Project",
    year: "2024",
    category: "Motion Graphics",
    tags: ["Motion Graphics", "Experimental", "YouTube Short"],
    palette: ["#22c55e", "#15803d", "#14532d"],
    hero: {
      kind: "youtube",
      ref: "yXNbvn-glrc",
      poster:
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Highlife and Nostalgia — YouTube Short",
    },
    thumbnail:
      "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "An experimental motion graphics piece exploring the visual language of highlife music and nostalgia — a personal project blending cultural memory with motion design.",
    caseStudy: {
      overview:
        "A personal experimental motion graphics piece exploring the visual language of highlife music and nostalgia. The work blends cultural memory with motion design in a vertical YouTube Short format.",
      challenge:
        "Personal projects demand a clear creative vision without a client brief to anchor to. The piece had to find its own purpose — exploring what highlife and nostalgia look like in motion.",
      creativeDirection:
        "A warm green palette evoking both Nigerian highlife album art and the faded quality of nostalgic memory. Motion is gentle and reverent, with elements that feel like they're being remembered rather than created.",
      process: [
        "Creative concept development around highlife and nostalgia.",
        "Motion design and visual system in After Effects.",
        "Colour grade evoking vintage and nostalgic tones.",
        "Export optimized for YouTube Shorts.",
      ],
      behindTheScenes:
        "The piece was an experiment in visual memory — motion elements were designed to feel like they were surfacing from the past rather than being created in the present. The vintage colour grade was essential.",
      gallery: [
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "An experimental motion piece that visualizes the intersection of highlife music and nostalgia, published as a YouTube Short.",
    },
    related: ["edward-logo", "amapiano-district"],
  },
  {
    id: "toilet-paper-curtain",
    index: "21",
    title: "Toilet Paper or Curtain?",
    client: "Personal Project",
    year: "2024",
    category: "Experimental Work",
    tags: ["Motion Graphics", "Humor", "YouTube Short"],
    palette: ["#94a3b8", "#64748b", "#1e293b"],
    hero: {
      kind: "youtube",
      ref: "ifASpG1Ma40",
      poster:
        "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Toilet Paper or Curtain? — YouTube Short",
    },
    thumbnail:
      "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A playful experimental short exploring the absurd question: what's the difference between toilet paper and a curtain? Motion design with a sense of humor.",
    caseStudy: {
      overview:
        "A playful, experimental motion graphics short that poses an absurd question — what's the difference between toilet paper and a curtain? The piece blends humor with motion design in a vertical YouTube Short format.",
      challenge:
        "Humor in motion design is hard — the timing has to be right, and the visual gag has to land. The piece needed to be funny without being forced.",
      creativeDirection:
        "A neutral, everyday palette that lets the humor do the work. Motion is expressive and characterful, with timing designed to land the visual punchline. The piece doesn't take itself seriously, and that's the point.",
      process: [
        "Concept and script development around the absurd question.",
        "Characterful motion design in After Effects.",
        "Comedic timing and sound design integration.",
        "Export optimized for YouTube Shorts.",
      ],
      behindTheScenes:
        "Comedy is timing — the animation was refined through multiple timing passes to land the visual punchline. The pause before the reveal was as important as the reveal itself.",
      gallery: [
        "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3781709/pexels-photo-3781709.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A playful, humorous motion graphics short that proves motion design can be funny, published on YouTube Shorts.",
    },
    related: ["highlife-nostalgia", "did-you-know"],
  },
  {
    id: "merry-christmas",
    index: "22",
    title: "Merry Christmas & Happy Holidays",
    client: "Personal Project",
    year: "2024",
    category: "Motion Graphics",
    tags: ["Motion Graphics", "Holiday", "YouTube Short"],
    palette: ["#dc2626", "#16a34a", "#14532d"],
    hero: {
      kind: "youtube",
      ref: "dZ1LujYGjjA",
      poster:
        "https://images.pexels.com/photos/1666068/pexels-photo-1666068.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Merry Christmas & Happy Holidays — YouTube Short",
    },
    thumbnail:
      "https://images.pexels.com/photos/1666068/pexels-photo-1666068.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "A festive motion graphics greeting for the holiday season — warm, celebratory animation spreading holiday cheer in a vertical YouTube Short format.",
    caseStudy: {
      overview:
        "A festive motion graphics piece created to spread holiday cheer. The short animation blends warm, celebratory motion design with seasonal iconography in a vertical YouTube Short format.",
      challenge:
        "Holiday content risks cliché — the piece needed to feel warm and celebratory without relying on overused visual tropes. The motion had to be festive but fresh.",
      creativeDirection:
        "A classic holiday palette of reds and greens, but executed with modern motion design sensibility. Typography is warm and elegant, and motion elements suggest celebration without being literal.",
      process: [
        "Concept development around a modern holiday greeting.",
        "Festive motion design in After Effects.",
        "Seasonal colour grade and typography.",
        "Export optimized for YouTube Shorts.",
      ],
      behindTheScenes:
        "The piece was designed to feel like a modern holiday card — warm, personal, and crafted. The motion was kept elegant rather than flashy, letting the festive message lead.",
      gallery: [
        "https://images.pexels.com/photos/1666068/pexels-photo-1666068.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1666068/pexels-photo-1666068.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A warm, modern holiday greeting that spreads festive cheer with crafted motion design, published on YouTube Shorts.",
    },
    related: ["highlife-nostalgia", "did-you-know"],
  },
  {
    id: "did-you-know",
    index: "23",
    title: "Did You Know?",
    client: "Personal Project",
    year: "2024",
    category: "Motion Graphics",
    tags: ["Motion Graphics", "Educational", "YouTube Short"],
    palette: ["#3b82f6", "#1d4ed8", "#1e3a5f"],
    hero: {
      kind: "youtube",
      ref: "iyKhKarBSqA",
      poster:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Did You Know? — YouTube Short",
    },
    thumbnail:
      "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "An educational motion graphics short in the 'Did You Know?' format — bite-sized facts brought to life with engaging animation designed for vertical social consumption.",
    caseStudy: {
      overview:
        "An educational motion graphics short in the 'Did You Know?' format, designed to deliver bite-sized facts with engaging animation. The piece was built for vertical social consumption on YouTube Shorts.",
      challenge:
        "Educational content must be both informative and engaging — the facts need to land clearly, but the motion must hold attention. The balance was clarity plus entertainment.",
      creativeDirection:
        "A clean, trustworthy blue palette with clear, legible typography. Motion is engaging but never at the expense of comprehension — every visual element serves the fact being shared.",
      process: [
        "Fact research and script development.",
        "Educational motion design in After Effects.",
        "Typography system optimized for mobile legibility.",
        "Export optimized for YouTube Shorts.",
      ],
      behindTheScenes:
        "Educational motion design is a different discipline — the animation must guide the eye to the information, not distract from it. Every motion decision was tested against comprehension.",
      gallery: [
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234213/pexels-photo-7234213.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "An engaging educational short that delivers bite-sized facts with clarity and craft, published on YouTube Shorts.",
    },
    related: ["toilet-paper-curtain", "pirate-ships-houses"],
  },
  {
    id: "pirate-ships-houses",
    index: "24",
    title: "Pirate Ships & Houses",
    client: "Personal Project",
    year: "2024",
    category: "Experimental Work",
    tags: ["Motion Graphics", "Illustration", "YouTube Short"],
    palette: ["#0891b2", "#0e7490", "#164e63"],
    hero: {
      kind: "youtube",
      ref: "5pRf5qIOStI",
      poster:
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Pirate Ships & Houses — YouTube Short",
    },
    thumbnail:
      "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    excerpt:
      "An experimental motion graphics short featuring pirate ships and houses — playful illustration and animation exploring whimsical visual storytelling.",
    caseStudy: {
      overview:
        "An experimental motion graphics short featuring pirate ships and houses — a playful exploration of whimsical visual storytelling. The piece blends illustration with animation in a vertical YouTube Short format.",
      challenge:
        "Experimental work without a brief means self-defining the purpose. The piece had to find its own logic — why pirate ships and houses? — and commit to it with conviction.",
      creativeDirection:
        "A cool teal palette with playful, illustrative motion. The pirate ships and houses are rendered with a storybook quality, and the motion is gentle and narrative-adjacent without telling a literal story.",
      process: [
        "Creative concept development around the pirate ships and houses motif.",
        "Illustration and motion design in After Effects.",
        "Playful sound design integration.",
        "Export optimized for YouTube Shorts.",
      ],
      behindTheScenes:
        "The piece was an exercise in visual play — pirate ships and houses exist in no obvious relationship, and the animation explored what happens when you put them in the same frame. The answer was: something whimsical.",
      gallery: [
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/7234253/pexels-photo-7234253.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ],
      finalResult:
        "A whimsical, experimental short that finds visual play in the juxtaposition of pirate ships and houses, published on YouTube Shorts.",
    },
    related: ["did-you-know", "toilet-paper-curtain"],
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Reel", href: "#reel" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
