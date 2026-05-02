import type { FC } from "react"
import { useTranslation } from "react-i18next"

type Project = {
  name: string;
  description: string;
  github: string;
  demo: string | null;
  image?: string;
}

type Props = {
  project: Project;
  index: number;
}

const ProjectCard: FC<Props> = ({ project, index }: Props) => {

    const { t } = useTranslation();

  return (
    <div
      className={`project-card project-card--${index}`}
    >
      {project.image && (
        <div className="project-card__image">
          <img
            className="project-card__img"
            src={project.image}
            alt={project.name}
          />
        </div>
      )}

      <div className="project-card__content">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__description">
          {project.description}
        </p>
      </div>

      <div className="project-card__overlay">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            &gt; {t("work.demo")}
          </a>
        )}

        <a href={project.github} target="_blank" rel="noreferrer">
          &gt; Github
        </a>
      </div>
    </div>
  )
}

export default ProjectCard