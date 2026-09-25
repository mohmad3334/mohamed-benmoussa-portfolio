import ProjectCard from "../../../Components/projectCard";
import ProjectsData from "../../../data/projects.json";

export default function AllProjects() {
    return (
        <div className="w-full flex flex-col">
            {ProjectsData.map((project) => (
                <ProjectCard 
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    skills={project.Skills}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </div>
    );
}