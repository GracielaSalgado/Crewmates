import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import CrewmateForm from '../components/CrewmateForm'

function EditCrewmatePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [crewmate, setCrewmate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
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

  const handleSubmit = async (values) => {
    setSubmitting(true)
    setError(null)

    const { data, error: updateError } = await supabase
      .from('crewmates')
      .update({
        name: values.name.trim(),
        color: values.color,
        hat: values.hat,
        pet: values.pet,
        catchphrase: values.catchphrase.trim() || null,
      })
      .eq('id', id)
      .select()
      .single()

    setSubmitting(false)

    if (updateError) {
      setError(updateError.message)
      return
    }

    setCrewmate(data)
  }

  const handleDelete = async () => {
    const confirmed = window.confirm(`Delete ${crewmate.name}? This can't be undone.`)
    if (!confirmed) return

    setSubmitting(true)
    const { error: deleteError } = await supabase.from('crewmates').delete().eq('id', id)
    setSubmitting(false)

    if (deleteError) {
      setError(deleteError.message)
      return
    }

    navigate('/crewmates')
  }

  if (loading) {
    return (
      <section className="page">
        <p>Loading crewmate…</p>
      </section>
    )
  }

  if (!crewmate) {
    return (
      <section className="page">
        <p className="form-error">{error ?? 'Crewmate not found.'}</p>
        <Link to="/crewmates">Back to Crew Gallery</Link>
      </section>
    )
  }

  return (
    <section className="page">
      <h1>Edit {crewmate.name}</h1>
      {error && <p className="form-error">{error}</p>}
      <CrewmateForm
        initialValues={crewmate}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        submitting={submitting}
        submitLabel="Save Changes"
      />
    </section>
  )
}

export default EditCrewmatePage
