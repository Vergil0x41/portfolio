import { useEffect, useState } from "react"
import { projectImages } from "../../utils/projectImages"

export type Project = {
  name: string;
  description: string;
  github: string;
  demo: string | null;
  image?: string;
}

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  fork: boolean;
}

const useWork = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/LordGertuser/repos"
        );

        const data: GitHubRepo[] = await res.json();

        const filtered: Project[] = data
          .filter((repo) => !repo.fork && repo.description)
          .slice(0, 6)
          .map((repo) => ({
            name: repo.name,
            description: repo.description!,
            github: repo.html_url,
            demo: repo.homepage,
            image: projectImages[repo.name], 
          }));

        setProjects(filtered);
        console.log(filtered);
        
      } catch (err) {
        console.error("GitHub API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { projects, loading };
}

export default useWork