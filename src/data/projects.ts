export type Platform = 'youtube' | 'vimeo' | 'instagram'

export type Category =
  | 'Motion Graphics'
  | '2D Animation'
  | '3D Animation'
  | 'Augmented Reality'
  | 'Creative Direction'
  | 'Experimental Work'

export type Project = {
  id: string
  title: string
  category: Category
  platform: Platform
  url: string
  embedId: string
  description: string
  longDescription: string
  role: string
  client: string
  year: string
  thumbnail: string
  featured?: boolean
}

function ytId(url: string): string {
  const m = url.match(/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/)
  return m ? m[1] : ''
}

function vimeoId(url: string): string {
  const m = url.match(/vimeo\.com\/(\d+)/)
  return m ? m[1] : ''
}

function igId(url: string): string {
  const m = url.match(/instagram\.com\/reel\/([\w-]+)/)
  return m ? m[1] : ''
}

function ytThumb(id: string): string {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
}

export const projects: Project[] = [
  {
    id: 'showreel',
    title: 'Portfolio Showreel 2023',
    category: 'Motion Graphics',
    platform: 'vimeo',
    url: 'https://vimeo.com/623651970',
    embedId: '623651970',
    description: 'A cinematic showcase of selected motion design, animation, and visual effects work from 2020–2023.',
    longDescription: 'A curated retrospective of motion design, 2D and 3D animation, augmented reality experiences, and creative direction work produced between 2020 and 2023. This reel brings together music visualizers, brand identity animations, AR activations, and experimental pieces into a single cinematic narrative — demonstrating range across technique, tone, and medium.',
    role: 'Motion Designer, Animator, Editor',
    client: 'Emmykingz Studios',
    year: '2023',
    thumbnail: '',
    featured: true,
  },
  {
    id: 'joeboy-smh',
    title: 'Joeboy & Tempoe — SMH',
    category: 'Motion Graphics',
    platform: 'youtube',
    url: 'https://youtu.be/y-Ab_QHzXWs',
    embedId: ytId('https://youtu.be/y-Ab_QHzXWs'),
    description: 'Official music visualizer for Joeboy and Tempoe\'s collaborative single "SMH".',
    longDescription: 'A high-energy music visualizer crafted for Joeboy and Tempoe\'s single "SMH." The piece blends reactive typographic systems, pulsing geometric forms, and color-driven rhythm to amplify the track\'s bounce. Built to hold attention across social and streaming platforms, the visualizer translates the song\'s attitude into a kinetic visual language that feels native to the afrobeats aesthetic.',
    role: 'Motion Designer, Animator',
    client: 'Joeboy / Tempoe',
    year: '2024',
    thumbnail: ytThumb(ytId('https://youtu.be/y-Ab_QHzXWs')),
  },
  {
    id: 'kizz-daniel-pano-tona',
    title: 'Kizz Daniel & Adekunle Gold — Pano Tona',
    category: 'Motion Graphics',
    platform: 'youtube',
    url: 'https://youtu.be/sGpWXwCJfyo',
    embedId: ytId('https://youtu.be/sGpWXwCJfyo'),
    description: 'Official music visualizer for the Kizz Daniel and Adekunle Gold collaboration "Pano Tona".',
    longDescription: 'A vibrant music visualizer for two of afrobeats\' biggest names. The piece pairs bold typographic treatment with fluid, shape-driven animation that mirrors the track\'s rhythmic complexity. Designed to perform across YouTube and social, the visualizer elevates the listening experience with a polished, shareable visual identity.',
    role: 'Motion Designer, Animator',
    client: 'Kizz Daniel / Adekunle Gold',
    year: '2024',
    thumbnail: ytThumb(ytId('https://youtu.be/sGpWXwCJfyo')),
  },
  {
    id: 'joeboy-taxi-driver',
    title: 'Joeboy — Taxi Driver',
    category: 'Motion Graphics',
    platform: 'youtube',
    url: 'https://youtu.be/TRDfpI-T1eg',
    embedId: ytId('https://youtu.be/TRDfpI-T1eg'),
    description: 'Official music visualizer for Joeboy\'s "Taxi Driver" single.',
    longDescription: 'A narrative-driven music visualizer for Joeboy\'s "Taxi Driver." The animation weaves a loose storyline through the track, using character motifs, road-inspired iconography, and warm color palettes to evoke movement and journey. The result is a visualizer that feels less like a static accompaniment and more like a short film companion to the song.',
    role: 'Motion Designer, Animator',
    client: 'Joeboy',
    year: '2024',
    thumbnail: ytThumb(ytId('https://youtu.be/TRDfpI-T1eg')),
  },
  {
    id: 'boi-heartless-freaky',
    title: 'Boi Heartless — Freaky Freaky',
    category: 'Motion Graphics',
    platform: 'youtube',
    url: 'https://youtu.be/Dqlpwxzw4Pk',
    embedId: ytId('https://youtu.be/Dqlpwxzw4Pk'),
    description: 'Official music visualizer for Boi Heartless\'s "Freaky Freaky".',
    longDescription: 'A playful, high-tempo music visualizer for Boi Heartless\'s "Freaky Freaky." The design leans into bold character animation, reactive text, and saturated color blocks to match the track\'s energy. Optimized for social-first consumption, the piece keeps viewers locked in from first frame to last.',
    role: 'Motion Designer, Animator',
    client: 'Boi Heartless',
    year: '2023',
    thumbnail: ytThumb(ytId('https://youtu.be/Dqlpwxzw4Pk')),
  },
  {
    id: 'badboymajor-afrobeast',
    title: 'BadboyMajor — The First Afrobeast Commando',
    category: 'Creative Direction',
    platform: 'youtube',
    url: 'https://youtu.be/OP4LIfj5Dtc',
    embedId: ytId('https://youtu.be/OP4LIfj5Dtc'),
    description: 'Creative direction and visual identity for BadboyMajor\'s "The First Afrobeast Commando".',
    longDescription: 'A full creative direction package for BadboyMajor\'s ambitious "The First Afrobeast Commando" project. The work spans visual identity, motion design, and narrative framing — building a world around the music that feels cinematic and intentional. The piece demonstrates end-to-end creative leadership, from concept development to final delivery.',
    role: 'Creative Director, Motion Designer',
    client: 'BadboyMajor',
    year: '2024',
    thumbnail: ytThumb(ytId('https://youtu.be/OP4LIfj5Dtc')),
  },
  {
    id: 'rbsm-marketplace',
    title: 'RBSM Marketplace Canada',
    category: 'Motion Graphics',
    platform: 'vimeo',
    url: 'https://vimeo.com/931757738',
    embedId: vimeoId('https://vimeo.com/931757738'),
    description: 'Promotional motion graphics video for RBSM Marketplace, a Canadian e-commerce platform.',
    longDescription: 'A polished promotional motion piece for RBSM Marketplace, a Canada-based e-commerce platform. The animation walks viewers through the platform\'s value proposition using clean iconography, smooth transitions, and a confident visual system. Designed to communicate utility and trust while maintaining a modern, approachable tone.',
    role: 'Motion Designer, Animator',
    client: 'RBSM Marketplace',
    year: '2022',
    thumbnail: '',
  },
  {
    id: 'predeet',
    title: 'Predeet',
    category: 'Motion Graphics',
    platform: 'vimeo',
    url: 'https://vimeo.com/931757637',
    embedId: vimeoId('https://vimeo.com/931757637'),
    description: 'Brand motion graphics and promotional video for Predeet.',
    longDescription: 'A brand-forward motion graphics piece for Predeet. The animation introduces the brand\'s visual language through dynamic typography, shape animation, and a cohesive color system. The result is a concise, engaging introduction that communicates the brand\'s personality in under a minute.',
    role: 'Motion Designer, Animator',
    client: 'Predeet',
    year: '2022',
    thumbnail: '',
  },
  {
    id: 'amapiano-district',
    title: 'Amapiano District',
    category: 'Motion Graphics',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DZ4-Wl_s8p6/',
    embedId: igId('https://www.instagram.com/reel/DZ4-Wl_s8p6/'),
    description: 'Motion graphics reel created for the Amapiano District Instagram channel.',
    longDescription: 'A social-first motion piece created for the Amapiano District Instagram channel. The animation captures the infectious groove of amapiano through rhythmic visual pacing, bold typography, and warm South African-inspired color palettes. Designed for vertical viewing and maximum shareability across social platforms.',
    role: 'Motion Designer, Animator',
    client: 'Amapiano District',
    year: '2024',
    thumbnail: '',
  },
  {
    id: 'along',
    title: 'Along',
    category: '2D Animation',
    platform: 'instagram',
    url: 'https://www.instagram.com/reel/DHQdFMQIWCj/',
    embedId: igId('https://www.instagram.com/reel/DHQdFMQIWCj/'),
    description: 'A 2D animated short shared as an Instagram Reel.',
    longDescription: 'A character-driven 2D animation shared as an Instagram Reel. The piece showcases hand-drawn animation technique with smooth frame-by-frame movement and expressive character performance. The short format is optimized for social viewing while maintaining the craft and polish of a full animation pipeline.',
    role: '2D Animator, Character Designer',
    client: 'Personal',
    year: '2024',
    thumbnail: '',
  },
  {
    id: 'edward-star-trek',
    title: 'EdwardtheCartoonist — Star Trek',
    category: 'Motion Graphics',
    platform: 'youtube',
    url: 'https://youtu.be/ItgE0e6NlVg',
    embedId: ytId('https://youtu.be/ItgE0e6NlVg'),
    description: 'Music visualizer for EdwardtheCartoonist\'s "Star Trek" track.',
    longDescription: 'A space-themed music visualizer for EdwardtheCartoonist\'s "Star Trek." The piece uses cosmic imagery, particle systems, and deep-space color palettes to create an immersive visual journey. The animation syncs tightly with the track\'s atmosphere, building a sense of exploration and wonder throughout.',
    role: 'Motion Designer, Animator',
    client: 'EdwardtheCartoonist',
    year: '2023',
    thumbnail: ytThumb(ytId('https://youtu.be/ItgE0e6NlVg')),
  },
  {
    id: 'edward-hurricane-drive',
    title: 'EdwardtheCartoonist — Hurricane Drive',
    category: 'Motion Graphics',
    platform: 'youtube',
    url: 'https://youtu.be/HEcHiLaWlI8',
    embedId: ytId('https://youtu.be/HEcHiLaWlI8'),
    description: 'Music visualizer for EdwardtheCartoonist\'s "Hurricane Drive" track.',
    longDescription: 'A dynamic music visualizer for EdwardtheCartoonist\'s "Hurricane Drive." The animation channels storm energy through swirling motion graphics, lightning-fast transitions, and a moody blue-and-silver palette. The visualizer matches the track\'s intensity beat-for-beat, creating a visceral audio-visual experience.',
    role: 'Motion Designer, Animator',
    client: 'EdwardtheCartoonist',
    year: '2023',
    thumbnail: ytThumb(ytId('https://youtu.be/HEcHiLaWlI8')),
  },
  {
    id: 'psychoyp-lets-go',
    title: 'PsychoYP — Let\'s Go',
    category: 'Motion Graphics',
    platform: 'youtube',
    url: 'https://youtu.be/6jeQ-HA9Wlg',
    embedId: ytId('https://youtu.be/6jeQ-HA9Wlg'),
    description: 'Music visualizer for PsychoYP\'s "Let\'s Go" single.',
    longDescription: 'A hard-hitting music visualizer for Nigerian hip-hop artist PsychoYP\'s "Let\'s Go." The piece matches the track\'s aggressive energy with sharp cuts, bold typography, and urban-inspired visual textures. Designed to resonate with the hip-hop community while maintaining a premium visual standard.',
    role: 'Motion Designer, Animator',
    client: 'PsychoYP',
    year: '2024',
    thumbnail: ytThumb(ytId('https://youtu.be/6jeQ-HA9Wlg')),
  },
  {
    id: 'window-wonderland',
    title: 'Window Wonderland 2023',
    category: 'Augmented Reality',
    platform: 'youtube',
    url: 'https://youtu.be/6g2mTMJSB-Y',
    embedId: ytId('https://youtu.be/6g2mTMJSB-Y'),
    description: 'Augmented reality window displays for the Window Wonderland 2023 festival in Toronto.',
    longDescription: 'An augmented reality experience created for Window Wonderland 2023, a public art festival in Toronto\'s Junction neighborhood. The project brings storefront windows to life through AR, overlaying animated digital art onto physical retail spaces. Visitors scan QR codes to activate immersive, site-specific animations that transform the streetscape into an interactive gallery.',
    role: 'AR Designer, Animator',
    client: 'The Junction BIA, Toronto',
    year: '2023',
    thumbnail: ytThumb(ytId('https://youtu.be/6g2mTMJSB-Y')),
  },
  {
    id: 'lekexiv-intro',
    title: 'Lekexiv YouTube Intro',
    category: 'Motion Graphics',
    platform: 'vimeo',
    url: 'https://vimeo.com/933186692',
    embedId: vimeoId('https://vimeo.com/933186692'),
    description: 'Custom YouTube channel intro animation for Lekexiv.',
    longDescription: 'A branded YouTube intro animation for content creator Lekexiv. The piece establishes a recognizable visual signature that plays at the start of every video, building brand consistency across the channel. The animation is short, punchy, and designed to be re-watched hundreds of times without losing its impact.',
    role: 'Motion Designer, Animator',
    client: 'Lekexiv',
    year: '2023',
    thumbnail: '',
  },
  {
    id: 'degeneral-intro',
    title: 'Degeneral Intro Animation',
    category: 'Motion Graphics',
    platform: 'vimeo',
    url: 'https://vimeo.com/933186324',
    embedId: vimeoId('https://vimeo.com/933186324'),
    description: 'Brand intro animation for Degeneral.',
    longDescription: 'A brand identity intro animation for Degeneral. The piece distills the brand\'s visual language into a concise, memorable sequence — combining logo animation, signature colors, and motion principles into a reusable asset. The intro serves as a visual handshake, setting expectations for quality before the content even begins.',
    role: 'Motion Designer, Animator',
    client: 'Degeneral',
    year: '2023',
    thumbnail: '',
  },
  {
    id: 'nelsonegh-logo',
    title: 'Nelsonegh Logo Animation',
    category: 'Motion Graphics',
    platform: 'vimeo',
    url: 'https://vimeo.com/497831795',
    embedId: vimeoId('https://vimeo.com/497831795'),
    description: 'Animated logo reveal for Nelsonegh, an Atlanta-based content creator.',
    longDescription: 'A polished logo animation for Nelsonegh, an Atlanta-based content creator and brand. The reveal transforms a static logo into a dynamic, animated asset suitable for video intros, social media, and brand content. The animation balances personality with professionalism, creating a signature that feels both approachable and premium.',
    role: 'Motion Designer, Animator',
    client: 'Nelsonegh',
    year: '2021',
    thumbnail: '',
  },
  {
    id: 'sppace-logo',
    title: 'Sppace Logo Animation',
    category: 'Motion Graphics',
    platform: 'vimeo',
    url: 'https://vimeo.com/559341863',
    embedId: vimeoId('https://vimeo.com/559341863'),
    description: 'Animated logo reveal for Sppace.',
    longDescription: 'A sleek logo animation for Sppace. The reveal uses geometric construction, precise timing, and minimalist motion to build the brand mark from its constituent parts. The result is an animation that feels architectural and intentional — a fitting signature for a brand built on structure and space.',
    role: 'Motion Designer, Animator',
    client: 'Sppace',
    year: '2021',
    thumbnail: '',
  },
  {
    id: 'omah-lay-holy-ghost',
    title: 'Omah Lay — Holy Ghost',
    category: 'Motion Graphics',
    platform: 'vimeo',
    url: 'https://vimeo.com/931748818',
    embedId: vimeoId('https://vimeo.com/931748818'),
    description: 'Music visualizer for Omah Lay\'s "Holy Ghost" single.',
    longDescription: 'A spiritual, atmospheric music visualizer for Omah Lay\'s "Holy Ghost." The piece uses ethereal light effects, flowing particles, and a celestial color palette to match the track\'s transcendent quality. The animation creates a meditative visual space that invites the viewer to sit with the music rather than just watch it.',
    role: 'Motion Designer, Animator',
    client: 'Omah Lay',
    year: '2023',
    thumbnail: '',
  },
  {
    id: 'edward-logo',
    title: 'EdwardtheCartoonist Logo Animation',
    category: 'Motion Graphics',
    platform: 'youtube',
    url: 'https://youtube.com/shorts/zp_wJPN99fo',
    embedId: ytId('https://youtube.com/shorts/zp_wJPN99fo'),
    description: 'Animated logo reveal for EdwardtheCartoonist, shared as a YouTube Short.',
    longDescription: 'A characterful logo animation for EdwardtheCartoonist, delivered as a YouTube Short. The reveal leans into the cartoonist\'s playful brand voice, using hand-drawn aesthetics and bouncy motion to bring the logo to life. The vertical format makes it perfect for social sharing and channel branding.',
    role: 'Motion Designer, Animator',
    client: 'EdwardtheCartoonist',
    year: '2023',
    thumbnail: ytThumb(ytId('https://youtube.com/shorts/zp_wJPN99fo')),
  },
  {
    id: 'highlife-nostalgia',
    title: 'Highlife and Nostalgia',
    category: '2D Animation',
    platform: 'youtube',
    url: 'https://youtube.com/shorts/yXNbvn-glrc',
    embedId: ytId('https://youtube.com/shorts/yXNbvn-glrc'),
    description: 'A 2D animated tribute to Nigerian highlife music and nostalgia, shared as a YouTube Short.',
    longDescription: 'A warm, nostalgic 2D animation celebrating Nigerian highlife music and cultural memory. The piece uses hand-drawn character animation, vintage color grading, and period-inspired design to evoke a sense of musical heritage. Shared as a YouTube Short, the animation connects past and present through visual storytelling.',
    role: '2D Animator, Illustrator',
    client: 'Personal',
    year: '2023',
    thumbnail: ytThumb(ytId('https://youtube.com/shorts/yXNbvn-glrc')),
  },
  {
    id: 'toilet-paper-curtain',
    title: 'What\'s the difference between toilet paper and a curtain?',
    category: 'Experimental Work',
    platform: 'youtube',
    url: 'https://youtube.com/shorts/ifASpG1Ma40',
    embedId: ytId('https://youtube.com/shorts/ifASpG1Ma40'),
    description: 'An experimental animated short built around a comedic premise, shared as a YouTube Short.',
    longDescription: 'An experimental animation piece that turns a simple comedic premise into a playful visual gag. The short demonstrates quick-thinking animation technique, timing, and visual comedy — proving that motion design can be a tool for humor, not just polish. The vertical format and snappy pacing are optimized for social virality.',
    role: 'Animator, Motion Designer',
    client: 'Personal',
    year: '2024',
    thumbnail: ytThumb(ytId('https://youtube.com/shorts/ifASpG1Ma40')),
  },
  {
    id: 'merry-christmas',
    title: 'Merry Christmas and Happy Holidays!',
    category: 'Motion Graphics',
    platform: 'youtube',
    url: 'https://youtube.com/shorts/dZ1LujYGjjA',
    embedId: ytId('https://youtube.com/shorts/dZ1LujYGjjA'),
    description: 'A festive motion graphics greeting card shared as a YouTube Short.',
    longDescription: 'A seasonal motion graphics piece spreading holiday cheer. The animation combines festive iconography, warm lighting, and celebratory motion to create a shareable holiday greeting. The piece demonstrates the ability to adapt visual language to seasonal and emotional contexts.',
    role: 'Motion Designer, Animator',
    client: 'Personal',
    year: '2023',
    thumbnail: ytThumb(ytId('https://youtube.com/shorts/dZ1LujYGjjA')),
  },
  {
    id: 'did-you-know',
    title: 'Did you know?',
    category: 'Motion Graphics',
    platform: 'youtube',
    url: 'https://youtube.com/shorts/iyKhKarBSqA',
    embedId: ytId('https://youtube.com/shorts/iyKhKarBSqA'),
    description: 'An educational motion graphics short sharing an interesting fact, published as a YouTube Short.',
    longDescription: 'An educational motion graphics piece designed for the short-form content format. The animation uses clean infographic-style design, kinetic typography, and clear visual hierarchy to communicate a fact quickly and memorably. The piece demonstrates the ability to make information engaging without sacrificing clarity.',
    role: 'Motion Designer, Animator',
    client: 'Personal',
    year: '2024',
    thumbnail: ytThumb(ytId('https://youtube.com/shorts/iyKhKarBSqA')),
  },
  {
    id: 'pirate-ships-houses',
    title: 'Pirate Ships and Houses',
    category: '3D Animation',
    platform: 'youtube',
    url: 'https://youtube.com/shorts/5pRf5qIOStI',
    embedId: ytId('https://youtube.com/shorts/5pRf5qIOStI'),
    description: 'A 3D animated short featuring pirate ships and houses, shared as a YouTube Short.',
    longDescription: 'A 3D animation experiment featuring stylized pirate ships and houses. The piece showcases 3D scene-building, lighting, and camera work in a short-form vertical format. The animation demonstrates the ability to create immersive 3D worlds even within the constraints of social-first content.',
    role: '3D Animator, Generalist',
    client: 'Personal',
    year: '2024',
    thumbnail: ytThumb(ytId('https://youtube.com/shorts/5pRf5qIOStI')),
  },
]

export const categories: Category[] = [
  'Motion Graphics',
  '2D Animation',
  '3D Animation',
  'Augmented Reality',
  'Creative Direction',
  'Experimental Work',
]

export function getFeaturedReel(): Project {
  return projects.find((p) => p.id === 'showreel')!
}

export function getRelatedProjects(project: Project, count = 3): Project[] {
  return projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, count)
}

export function getAdjacentProjects(project: Project): { prev: Project | null; next: Project | null } {
  const portfolioProjects = projects.filter((p) => p.id !== 'showreel')
  const index = portfolioProjects.findIndex((p) => p.id === project.id)
  return {
    prev: index > 0 ? portfolioProjects[index - 1] : null,
    next: index < portfolioProjects.length - 1 ? portfolioProjects[index + 1] : null,
  }
}
