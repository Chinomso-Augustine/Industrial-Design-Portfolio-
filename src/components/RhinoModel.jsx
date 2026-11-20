import { useEffect, useRef } from 'react'

export default function RhinoModel({ model }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let disposed = false
    let disposeViewer

    async function loadViewer() {
      try {
        const { default: mountRhinoViewer } = await import('../lib/rhino-viewer.js')
        if (!disposed) disposeViewer = mountRhinoViewer(container)
      } catch (error) {
        if (disposed) return
        console.error('Could not start the model viewer:', error)
        container.setAttribute('aria-busy', 'false')
        container.querySelector('[data-rhino-status]').textContent = 'Could not start the 3D preview. Please reload to try again.'
      }
    }

    // Keep the model and the 3D dependencies off the initial page load.
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      observer.disconnect()
      loadViewer()
    }, { rootMargin: '300px' })
    observer.observe(container)

    return () => {
      disposed = true
      observer.disconnect()
      disposeViewer?.()
    }
  }, [model])

  return (
    <figure className="rhino-model" data-rhino-model>
      <div className="rhino-model-heading">
        <p>{model.title}</p>
        <div className="rhino-model-actions">
          <button type="button" data-rhino-fullscreen aria-label={`Expand ${model.title} to full screen`}>Full screen</button>
          <button type="button" data-rhino-reset disabled>Reset view</button>
          <a href={model.src} download>Download .3dm ↗</a>
        </div>
      </div>
      <div
        ref={containerRef}
        className="rhino-viewer"
        style={{ '--rhino-background': model.background || '#d7e2e8' }}
        data-model-src={model.src}
        data-model-title={model.title}
        data-background={model.background || '#d7e2e8'}
        data-hidden-objects={model.hiddenObjects?.join(',') || ''}
        data-initial-zoom={model.initialZoom || 1}
        aria-busy="true"
      >
        <p className="rhino-viewer-status" data-rhino-status role="status">Loading model…</p>
      </div>
      <figcaption className="rhino-model-instructions">Drag in any direction to rotate 360° · Scroll or pinch to zoom</figcaption>
    </figure>
  )
}
