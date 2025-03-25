import React, { useState } from "react";
import ProjectsModal from "./ProjectsModal";
import "./ProjectsSection.css";

const projects = [
  {
    image:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate_npby1a.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate_npby1a.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate-2_oqh7xl.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate-2_oqh7xl.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573852/Versatile-Vinyl_ufz6ym.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573852/Versatile-Vinyl_ufz6ym.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573850/tile_o9mmul.webp",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573850/tile_o9mmul.webp",
  },
  {
    image:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573848/laminate_gemxq5.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573848/laminate_gemxq5.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1741887016/Imagen_de_WhatsApp_2025-03-13_a_las_14.27.26_c44a338e_e9cegd.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1741887016/Imagen_de_WhatsApp_2025-03-13_a_las_14.27.26_c44a338e_e9cegd.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1741837637/istockphoto-1093284000-2048x2048_m6ye38.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1741837637/istockphoto-1093284000-2048x2048_m6ye38.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742579656/jack_uxt5m2.jpg",
    largeImage:
      "https://res.cloudinary.com/drwacbtjf/image/upload/v1742579656/jack_uxt5m2.jpg",
  },
];

const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="projects-section">
      <h2 className="text-center mb-4">PROYECTOS</h2>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => setSelectedImage(project.largeImage)}
          >
            <img src={project.image} alt="Proyecto" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ProjectsModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;