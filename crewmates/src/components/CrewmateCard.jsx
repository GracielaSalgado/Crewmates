import { Link } from 'react-router-dom'
import CrewmateAvatar from './CrewmateAvatar'
import './CrewmateCard.css'

function CrewmateCard({ crewmate }) {
  return (
    <Link to={`/crewmates/${crewmate.id}`} className="crewmate-card">
      <CrewmateAvatar color={crewmate.color} hat={crewmate.hat} pet={crewmate.pet} size={72} />
      <span className="crewmate-card-name">{crewmate.name}</span>
    </Link>
  )
}

export default CrewmateCard
