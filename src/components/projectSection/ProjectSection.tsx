import { useState } from "react";
import ProjectsModal from "./ProjectsModal";
import "./ProjectsSection.css";

const projects = [
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate_npby1a.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate_npby1a.jpg",
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate-2_oqh7xl.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate-2_oqh7xl.jpg",
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573852/Versatile-Vinyl_ufz6ym.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573852/Versatile-Vinyl_ufz6ym.jpg",
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573850/tile_o9mmul.webp",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573850/tile_o9mmul.webp",
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573848/laminate_gemxq5.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573848/laminate_gemxq5.jpg",
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1741887016/Imagen_de_WhatsApp_2025-03-13_a_las_14.27.26_c44a338e_e9cegd.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1741887016/Imagen_de_WhatsApp_2025-03-13_a_las_14.27.26_c44a338e_e9cegd.jpg",
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1741837637/istockphoto-1093284000-2048x2048_m6ye38.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1741837637/istockphoto-1093284000-2048x2048_m6ye38.jpg",
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742579656/jack_uxt5m2.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742579656/jack_uxt5m2.jpg",
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1743193679/Video_de_WhatsApp_2025-03-28_a_las_15.29.33_b3bb240e_ydjsma.mp4",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1743193679/Video_de_WhatsApp_2025-03-28_a_las_15.29.33_b3bb240e_ydjsma.mp4",
  },
  {
    media:
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1743193678/Video_de_WhatsApp_2025-03-28_a_las_15.29.00_8eb9916b_yae7sv.mp4",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/video/upload/v1743193678/Video_de_WhatsApp_2025-03-28_a_las_15.29.00_8eb9916b_yae7sv.mp4",
  },
];

const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              onClick={() => setSelectedImage(project.largeImage)}
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
      {selectedImage && (
        <ProjectsModal
          media={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
