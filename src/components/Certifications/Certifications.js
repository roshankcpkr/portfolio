import uniqid from 'uniqid'
import { certifications } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Certifications.css'

const Certifications = () => {
  if (!certifications.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Certifications</h2>

      <div className='projects__grid'>
        {certifications.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Certifications
