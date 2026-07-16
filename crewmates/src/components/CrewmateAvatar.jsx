import { COLORS, HATS, PETS, findByValue } from '../data/attributes'
import './CrewmateAvatar.css'

function CrewmateAvatar({ color, hat, pet, size = 96 }) {
  const colorInfo = findByValue(COLORS, color)
  const hatInfo = findByValue(HATS, hat)
  const petInfo = findByValue(PETS, pet)

  return (
    <div className="crewmate-avatar" style={{ width: size, height: size }}>
      <div className="crewmate-avatar-body" style={{ backgroundColor: colorInfo.hex }}>
        <div className="crewmate-avatar-visor" />
      </div>
      {hatInfo.emoji && <span className="crewmate-avatar-hat">{hatInfo.emoji}</span>}
      {petInfo.emoji && <span className="crewmate-avatar-pet">{petInfo.emoji}</span>}
    </div>
  )
}

export default CrewmateAvatar
