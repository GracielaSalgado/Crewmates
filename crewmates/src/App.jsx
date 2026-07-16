import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import GalleryPage from './pages/GalleryPage'
import CrewmateDetailPage from './pages/CrewmateDetailPage'
import EditCrewmatePage from './pages/EditCrewmatePage'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<CreatePage />} />
          <Route path="/crewmates" element={<GalleryPage />} />
          <Route path="/crewmates/:id" element={<CrewmateDetailPage />} />
          <Route path="/crewmates/:id/edit" element={<EditCrewmatePage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
