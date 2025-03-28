// ✅ ProjectsSection.tsx
import { useState } from "react";
import ProjectsModal from "./ProjectsModal";
import "./ProjectsSection.css";

const projects = [
  {
    media: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate_npby1a.jpg",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate_npby1a.jpg",
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate-2_oqh7xl.jpg"
    ]
  },
  {
    media: "https://res.cloudinary.com/drwacbtjf/video/upload/v1743193679/Video_de_WhatsApp_2025-03-28_a_las_15.29.33_b3bb240e_ydjsma.mp4",
    gallery: [
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1743193679/Video_de_WhatsApp_2025-03-28_a_las_15.29.33_b3bb240e_ydjsma.mp4",
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1743193678/Video_de_WhatsApp_2025-03-28_a_las_15.29.00_8eb9916b_yae7sv.mp4"
    ]
  }
];

const ProjectsSection = () => {
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);

  return (
    <section className="projects-section">
      <h2 className="text-center mb-4">PROYECTOS</h2>
      <div className="project-gallery">
        {projects.map((project, index) => {
          const isVideo = project.media.endsWith(".mp4");

          return (
            <div
              key={index}
              className="project-item"
              onClick={() => setSelectedGallery(project.gallery)}
            >
              {isVideo ? (
                <video
                  src={project.media}
                  className="project-thumbnail"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              ) : (
                <img src={project.media} alt="Proyecto" />
              )}
            </div>
          );
        })}
      </div>
      {selectedGallery.length > 0 && (
        <ProjectsModal
          gallery={selectedGallery}
          onClose={() => setSelectedGallery([])}
        />
      )}
    </section>
  );
};

export default ProjectsSection;