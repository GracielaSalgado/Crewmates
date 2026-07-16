import { useState } from 'react'
import { COLORS, HATS, PETS } from '../data/attributes'
import AttributePicker from './AttributePicker'
import CrewmateAvatar from './CrewmateAvatar'
import './CrewmateForm.css'

const DEFAULT_VALUES = {
  name: '',
  color: COLORS[0].value,
  hat: HATS[0].value,
  pet: PETS[0].value,
  catchphrase: '',
}

function CrewmateForm({
  initialValues,
  onSubmit,
  onDelete,
  submitLabel = 'Save',
  submitting = false,
}) {
  const [values, setValues] = useState({ ...DEFAULT_VALUES, ...initialValues })

  const setField = (field) => (fieldValue) =>
    setValues((current) => ({ ...current, [field]: fieldValue }))

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!values.name.trim()) return
    onSubmit(values)
  }

  return (
    <form className="crewmate-form" onSubmit={handleSubmit}>
      <div className="crewmate-form-preview">
        <CrewmateAvatar color={values.color} hat={values.hat} pet={values.pet} size={140} />
      </div>

      <label className="crewmate-form-name">
        Name
        <input
          type="text"
          value={values.name}
          onChange={(event) => setField('name')(event.target.value)}
          placeholder="Crewmate name"
          required
        />
      </label>

      <AttributePicker
        label="Color"
        options={COLORS}
        value={values.color}
        onChange={setField('color')}
      />
      <AttributePicker label="Hat" options={HATS} value={values.hat} onChange={setField('hat')} />
      <AttributePicker label="Pet" options={PETS} value={values.pet} onChange={setField('pet')} />

      <label className="crewmate-form-catchphrase">
        Catchphrase <span className="optional-tag">(optional, shown on detail page)</span>
        <textarea
          value={values.catchphrase}
          onChange={(event) => setField('catchphrase')(event.target.value)}
          placeholder="e.g. Sus? I'm the least sus person here."
          rows={2}
        />
      </label>

      <div className="crewmate-form-actions">
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Saving…' : submitLabel}
        </button>
        {onDelete && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={onDelete}
            disabled={submitting}
          >
            Delete Crewmate
          </button>
        )}
      </div>
    </form>
  )
}

export default CrewmateForm
