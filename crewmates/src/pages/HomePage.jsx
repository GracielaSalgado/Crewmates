import { Link } from 'react-router-dom'
import CrewmateAvatar from '../components/CrewmateAvatar'
import './HomePage.css'

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-hero-avatars">
        <CrewmateAvatar color="red" hat="crown" pet="mini-crewmate" size={110} />
        <CrewmateAvatar color="cyan" hat="party-hat" pet="cat" size={110} />
        <CrewmateAvatar color="lime" hat="none" pet="dog" size={110} />
      </div>
      <h1>Build Your Crew</h1>
      <p>
        Create custom crewmates, give them a name and a look, then keep track of your whole crew
        in one place.
      </p>
      <div className="home-actions">
        <Link to="/new" className="btn btn-primary">
          Create a Crewmate
        </Link>
        <Link to="/crewmates" className="btn btn-secondary">
          View Crew Gallery
        </Link>
      </div>
    </section>
  )
}

export default HomePage
