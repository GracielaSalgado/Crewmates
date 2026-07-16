import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import { COLORS, HATS, PETS, findByValue } from '../data/attributes'
import CrewmateAvatar from '../components/CrewmateAvatar'
import './CrewmateDetailPage.css'

function CrewmateDetailPage() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function fetchCrewmate() {
      setLoading(true)
      const { data, error: fetchError } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single()

      if (!isMounted) return

      if (fetchError) {
        setError(fetchError.message)
      } else {
        setCrewmate(data)
      }
      setLoading(false)
    }

    fetchCrewmate()

    return () => {
      isMounted = false
    }
  }, [id])

  if (loading) {
    return (
      <section className="page">
        <p>Loading crewmate…</p>
      </section>
    )
  }

  if (error || !crewmate) {
    return (
      <section className="page">
        <p className="form-error">{error ?? 'Crewmate not found.'}</p>
        <Link to="/crewmates">Back to Crew Gallery</Link>
      </section>
    )
  }

  const colorInfo = findByValue(COLORS, crewmate.color)
  const hatInfo = findByValue(HATS, crewmate.hat)
  const petInfo = findByValue(PETS, crewmate.pet)

  return (
    <section className="page crewmate-detail">
      <CrewmateAvatar color={crewmate.color} hat={crewmate.hat} pet={crewmate.pet} size={180} />
      <h1>{crewmate.name}</h1>

      <dl className="crewmate-detail-attributes">
        <div>
          <dt>Color</dt>
          <dd>{colorInfo.label}</dd>
        </div>
        <div>
          <dt>Hat</dt>
          <dd>{hatInfo.label}</dd>
        </div>
        <div>
          <dt>Pet</dt>
          <dd>{petInfo.label}</dd>
        </div>
        <div>
          <dt>Joined the Crew</dt>
          <dd>
            {new Date(crewmate.created_at).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </dd>
        </div>
      </dl>

      {crewmate.catchphrase && (
        <blockquote className="crewmate-detail-catchphrase">"{crewmate.catchphrase}"</blockquote>
      )}

      <div className="crewmate-detail-actions">
        <Link to={`/crewmates/${crewmate.id}/edit`} className="btn btn-primary">
          Edit Crewmate
        </Link>
        <Link to="/crewmates" className="btn btn-secondary">
          Back to Gallery
        </Link>
      </div>
    </section>
  )
}

export default CrewmateDetailPage
