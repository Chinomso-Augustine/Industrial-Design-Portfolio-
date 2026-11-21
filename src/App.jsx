import { useEffect, useRef, useState } from 'react'
import { aboutPhotography, aboutPhotos, profile, projects } from './content'
import RhinoModel from './components/RhinoModel'
import './App.css'

function readRoute() {
  return window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '') || 'work'
}

function findProject(route) {
  try {
    return route.startsWith('project/') ? projects.find((item) => item.id === decodeURIComponent(route.slice(8))) : undefined
  } catch {
    return undefined
  }
}

function Navigation({ active }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      toggleRef.current?.focus()
    }
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className="site-header" data-menu-open={menuOpen}>
      <nav id="site-navigation" className="site-nav" aria-label="Main navigation">
        <a href="#/work" aria-current={active === 'work' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#/about" aria-current={active === 'about' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>About</a>
      </nav>
      <a className="site-name" href="#/work" aria-label={`${profile.name}, home`} onClick={() => setMenuOpen(false)}>{profile.name}</a>
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-controls="site-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
    </header>
  )
}

function Footer() {
  function backToTop(event) {
    event.preventDefault()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' })
    document.querySelector('.site-name')?.focus({ preventScroll: true })
  }

  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <a href={`mailto:${profile.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
      <a href="#top" onClick={backToTop}>Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  )
}

function Photo({ photo, onOpen, className = '', eager = false }) {
  return (
    <figure className={`photo ${className}`}>
      <button className="photo-button" type="button" aria-label={`Enlarge: ${photo.alt}`} onClick={onOpen}>
        <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading={eager ? 'eager' : 'lazy'} decoding="async" />
        <span className="photo-enlarge" aria-hidden="true">↗</span>
      </button>
    </figure>
  )
}

function Placeholder({ index }) {
  const number = String(index + 1).padStart(2, '0')
  return (
    <article className="project-placeholder" aria-label={`Project ${number}, coming soon`}>
      <div className="placeholder-image" aria-hidden="true">
        <span className="placeholder-number">{number}</span>
        <span className="placeholder-mark"><i /><i /></span>
        <span className="placeholder-label">A project in the making</span>
      </div>
      <div className="project-caption"><h2>Project {number}</h2><span>Coming soon</span></div>
    </article>
  )
}

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0')
  return (
    <article className="project-card" data-project-slot={index + 1} aria-label={`Project ${number}: ${project.title}`}>
      <a className="project-link" href={`#/project/${encodeURIComponent(project.id)}`}>
        <div className="project-cover">
          {project.cover ? <img src={project.cover} alt={project.coverAlt || project.title} style={{ objectPosition: project.coverPosition }} loading="lazy" decoding="async" /> : <span className="cover-pending">Images coming soon</span>}
          <span className="project-card-number" aria-hidden="true">{number}</span>
          <span className="project-open" aria-hidden="true">View project ↗</span>
        </div>
        <div className="project-caption"><h2>{project.title}</h2><span>{project.category}</span></div>
      </a>
    </article>
  )
}

function Work() {
  const numberedProjects = projects.filter((project) => Number.isInteger(project.slot) && project.slot > 0)
  const slots = Array.from({ length: Math.max(6, projects.length, ...numberedProjects.map((project) => project.slot)) }, () => null)
  const placed = new Set()
  numberedProjects.forEach((project) => {
    if (!slots[project.slot - 1]) {
      slots[project.slot - 1] = project
      placed.add(project)
    }
  })
  projects.filter((project) => !placed.has(project)).forEach((project) => { slots[slots.indexOf(null)] = project })

  return (
    <section className="work-page" aria-labelledby="work-title">
      <div className="work-intro">
        <h1 id="work-title">{profile.discipline}</h1>
        <p>{projects.length ? 'Selected work' : 'Selected work, coming soon'}</p>
      </div>
      <div className="project-grid">
        {slots.map((project, index) => project ? <ProjectCard key={project.id} project={project} index={index} /> : <Placeholder key={`placeholder-${index}`} index={index} />)}
      </div>
      {!projects.length && (
        <div className="work-note">
          <p>A space for objects, ideas, and the process behind them.<br />New projects will be here soon.</p>
          <a className="text-link" href="#/about">A little about me <span aria-hidden="true">↗</span></a>
        </div>
      )}
    </section>
  )
}

function About({ onOpen }) {
  const photos = [profile.portrait, ...aboutPhotos, ...aboutPhotography].filter(Boolean)
  return (
    <section className="about-page" aria-labelledby="about-title">
      <div className="about-intro">
        <div className="about-copy">
          <h1 id="about-title">{profile.greeting}</h1>
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="contact-block">
            <h2>Let’s connect.</h2>
            <div className="contact-links">
              {profile.socials.map((social) => (
                <a className="text-link" key={social.url} href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
              <a className="email-link text-link" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </div>
        {profile.portrait && <Photo photo={profile.portrait} className="about-portrait" eager onOpen={() => onOpen(photos, 0)} />}
      </div>
      {aboutPhotos.length > 0 && (
        <div className="about-photo-grid" role="group" aria-label="Selected drawings, models, and studio work">
          {aboutPhotos.map((photo, index) => <Photo key={photo.src} photo={photo} onOpen={() => onOpen(photos, index + (profile.portrait ? 1 : 0))} />)}
        </div>
      )}
      {aboutPhotography.length > 0 && (
        <div className="about-photography-grid" role="group" aria-label="Selected sports photography">
          {aboutPhotography.map((photo, index) => <Photo key={photo.src} photo={photo} onOpen={() => onOpen(photos, index + aboutPhotos.length + (profile.portrait ? 1 : 0))} />)}
        </div>
      )}
    </section>
  )
}

function CaseStudySection({ section, projectId, onOpenPhoto }) {
  const headingId = `${projectId}-${section.id}`
  return (
    <section className={`case-study-section case-study-section--${section.layout || 'wide'}`} aria-labelledby={headingId}>
      <div className="case-section-copy">
        <h2 id={headingId}>{section.title}</h2>
        {section.body && <p className="case-section-body">{section.body}</p>}
        {section.bullets?.length > 0 && <ul className="case-section-bullets">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
        {section.cutList?.length > 0 && (
          <table className="case-cut-list">
            <caption>Lumber cut list</caption>
            <thead>
              <tr><th scope="col">Size (in.)</th><th scope="col">Pieces</th></tr>
            </thead>
            <tbody>
              {section.cutList.map(([size, pieces]) => (
                <tr key={size}><th scope="row">{size}</th><td>{pieces}</td></tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="case-section-media">
        {section.model && <RhinoModel model={section.model} />}
        {section.images?.map((photo, index) => <Photo key={`${photo.src}-${index}`} photo={photo} className="editorial-photo" onOpen={() => onOpenPhoto(photo)} />)}
      </div>
    </section>
  )
}

function Project({ project, onOpen }) {
  const editorial = Boolean(project.sections?.length)
  const hero = project.hero || (project.cover ? { src: project.cover, alt: project.coverAlt || project.title } : null)
  const gallery = editorial ? [hero, ...project.sections.flatMap((section) => section.images || [])].filter(Boolean) : project.images?.length ? project.images : hero ? [hero] : []
  const openPhoto = (photo) => onOpen(gallery, gallery.indexOf(photo))
  const nextProject = projects.length > 1 ? projects[(projects.indexOf(project) + 1) % projects.length] : null
  const metadata = project.metadata || [['Discipline', project.category], ['Year', project.year], ['Type', project.role], ['Tools', project.tools]].filter(([, value]) => value)
  return (
    <article className={`case-study${editorial ? ' case-study--editorial' : ''}`} aria-labelledby="project-title">
      <a className="text-link return-link" href="#/work">← All work</a>
      <header className="project-header">
        <div>
          <p className="eyebrow">{project.slot ? `Project ${String(project.slot).padStart(2, '0')} / ` : ''}{project.category}</p>
          <h1 id="project-title">{project.title}</h1>
          {project.summary && <p className="project-summary">{project.summary}</p>}
        </div>
        {metadata.length > 0 && <dl className="project-metadata">{metadata.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
      </header>
      {editorial ? (
        <>
          {hero && <Photo photo={hero} className="case-study-hero editorial-photo" eager onOpen={() => openPhoto(hero)} />}
          {project.overview && (
            <section className={`case-study-overview${project.overview.layout === 'centered' ? ' case-study-overview--centered' : ''}`} aria-labelledby="overview-title">
              <h2 id="overview-title">{project.overview.title}</h2>
              <div className="case-overview-body">{project.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              {project.overview.features && <dl className="case-features">{project.overview.features.map((feature) => <div key={feature.title}><dt>{feature.title}</dt><dd>{feature.body}</dd></div>)}</dl>}
            </section>
          )}
          {project.sections.map((section) => <CaseStudySection key={section.id} section={section} projectId={project.id} onOpenPhoto={openPhoto} />)}
        </>
      ) : <div className="project-gallery">{gallery.map((photo, index) => <Photo key={`${photo.src}-${index}`} photo={photo} onOpen={() => onOpen(gallery, index)} />)}</div>}
      <nav className="project-pagination" aria-label="Project navigation">
        <a className="text-link" href="#/work">← All work</a>
        {nextProject && <a className="text-link" href={`#/project/${encodeURIComponent(nextProject.id)}`}>Next: {nextProject.title} →</a>}
      </nav>
    </article>
  )
}

function Lightbox({ selection, onClose, onStep }) {
  const dialogRef = useRef(null)
  const open = Boolean(selection)

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  const photo = selection?.images[selection.index]
  const multiple = (selection?.images.length || 0) > 1
  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Image preview"
      onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
      onKeyDown={(event) => {
        if (!multiple) return
        if (event.key === 'ArrowRight') { event.preventDefault(); onStep(1) }
        if (event.key === 'ArrowLeft') { event.preventDefault(); onStep(-1) }
      }}
    >
      <button className="lightbox-close" type="button" onClick={onClose} aria-label="Close image preview">Close <span aria-hidden="true">×</span></button>
      {multiple && <button className="lightbox-arrow lightbox-previous" type="button" aria-label="Previous image" onClick={() => onStep(-1)}>←</button>}
      {multiple && <span className="lightbox-count" aria-live="polite">{selection.index + 1} / {selection.images.length}</span>}
      {photo && <figure className="lightbox-figure"><img className="lightbox-image" src={photo.src} alt={photo.alt} /></figure>}
      {multiple && <button className="lightbox-arrow lightbox-next" type="button" aria-label="Next image" onClick={() => onStep(1)}>→</button>}
    </dialog>
  )
}

function RouteContent({ route }) {
  const [selection, setSelection] = useState(null)
  function onOpen(images, index) { setSelection({ images, index }) }
  function onStep(direction) {
    setSelection((current) => current ? { ...current, index: (current.index + direction + current.images.length) % current.images.length } : null)
  }
  let page
  if (route === 'work') page = <Work />
  else if (route === 'about' || route === 'contact') page = <About onOpen={onOpen} />
  else {
    const project = findProject(route)
    page = project ? <Project project={project} onOpen={onOpen} /> : <section className="not-found"><p className="eyebrow">404</p><h1>This page isn’t here.</h1><p>Let’s get you back to the work.</p><a className="text-link" href="#/work">View all work ↗</a></section>
  }
  return <>{page}<Lightbox selection={selection} onClose={() => setSelection(null)} onStep={onStep} /></>
}

function App() {
  const [route, setRoute] = useState(readRoute)
  const mainRef = useRef(null)
  const previousRoute = useRef(route)
  const isAbout = route === 'about' || route === 'contact'
  const project = findProject(route)
  const active = isAbout ? 'about' : route === 'work' || project ? 'work' : null
  const pageTitle = isAbout ? 'About' : project?.title || (route === 'work' ? 'Work' : 'Page not found')

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    document.title = `${pageTitle} — ${profile.name} | Industrial Design`
    if (previousRoute.current !== route) {
      mainRef.current?.focus({ preventScroll: true })
      window.scrollTo({ top: 0, behavior: 'instant' })
      previousRoute.current = route
    }
  }, [route, pageTitle])

  return (
    <>
      <a className="skip-link" href="#main" onClick={(event) => { event.preventDefault(); mainRef.current?.focus() }}>Skip to content</a>
      <Navigation key={route} active={active} />
      <main id="main" ref={mainRef} className="site-main" tabIndex={-1}><RouteContent key={route} route={route} /></main>
      <Footer />
    </>
  )
}

export default App
