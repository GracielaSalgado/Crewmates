import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import CrewmateCard from '../components/CrewmateCard'
import './GalleryPage.css'

function GalleryPage() {
  const [crewmates, setCrewmates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function fetchCrewmates() {
      setLoading(true)
      const { data, error: fetchError } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false })

      if (!isMounted) return

      if (fetchError) {
        setError(fetchError.message)
      } else {
        setCrewmates(data)
      }
      setLoading(false)
    }

    fetchCrewmates()

    return () => {
      isMounted = false
    }
  }, [])

  if (loading) {
    return (
      <section className="page">
        <h1>Crew Gallery</h1>
        <p>Loading crew…</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="page">
        <h1>Crew Gallery</h1>
        <p className="form-error">{error}</p>
      </section>
    )
  }

  return (
    <section className="page">
      <h1>Crew Gallery</h1>
      {crewmates.length === 0 ? (
        <div className="gallery-empty">
          <p>You haven't created any crewmates yet.</p>
          <Link to="/new" className="btn btn-primary">
            Create your first crewmate
          </Link>
        </div>
      ) : (
        <div className="gallery-grid">
          {crewmates.map((crewmate) => (
            <CrewmateCard key={crewmate.id} crewmate={crewmate} />
          ))}
        </div>
      )}
    </section>
  )
}

export default GalleryPage
