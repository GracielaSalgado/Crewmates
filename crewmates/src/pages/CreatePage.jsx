import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import CrewmateForm from '../components/CrewmateForm'

function CreatePage() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (values) => {
    setSubmitting(true)
    setError(null)

    const { data, error: insertError } = await supabase
      .from('crewmates')
      .insert({
        name: values.name.trim(),
        color: values.color,
        hat: values.hat,
        pet: values.pet,
        catchphrase: values.catchphrase.trim() || null,
      })
      .select()
      .single()

    setSubmitting(false)

    if (insertError) {
      setError(insertError.message)
      return
    }

    navigate(`/crewmates/${data.id}`)
  }

  return (
    <section className="page">
      <h1>Create a Crewmate</h1>
      {error && <p className="form-error">{error}</p>}
      <CrewmateForm onSubmit={handleSubmit} submitting={submitting} submitLabel="Create Crewmate" />
    </section>
  )
}

export default CreatePage
