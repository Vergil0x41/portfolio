import type { FC } from "react"
import "./Work.scss"
import useWork from "./useWork"
import ProjectCard from "./ProjectCard"
import { useTranslation } from "react-i18next"
import useWorkView from "./useWorkView"


const Work: FC = () => {
  const { projects, loading } = useWork()
  const { ref, isVisible } = useWorkView()
  const { t } = useTranslation()

  return (
    <section ref={ref} className={`work ${isVisible ? "active" : ""} container`} id="work">
      <div className="work__container">
        <p className="work__label">
          {loading ? t('work.loading') : t('work.loaded')}
        </p>

        <h2 className="work__title">{t('work.title')}</h2>

        <div className="work__list">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work