import { useState } from 'react'
import { AmbientBackground } from './components/AmbientBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { FeaturedReel } from './components/FeaturedReel'
import { Work } from './components/Work'
import { Services } from './components/Services'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CaseStudy } from './components/CaseStudy'
import type { Project } from './data/projects'

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <FeaturedReel />
        <Work onOpenProject={setActiveProject} />
        <Services />
        <About />
        <Contact />
      </main>
      {activeProject && (
        <CaseStudy
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onNavigate={setActiveProject}
        />
      )}
    </>
  )
}
