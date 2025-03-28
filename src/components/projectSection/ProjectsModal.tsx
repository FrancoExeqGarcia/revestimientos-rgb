import React, { useState } from "react";
import "./ProjectsModal.css";

interface ProjectModalProps {
  gallery: string[];
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectModalProps> = ({ gallery, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = gallery[currentIndex];
  const isVideo = currentMedia.endsWith(".mp4");

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {gallery.length > 1 && (
          <>
            <button className="modal-nav-button modal-prev" onClick={goToPrev}>‹</button>
            <button className="modal-nav-button modal-next" onClick={goToNext}>›</button>
          </>
        )}

        {isVideo ? (
          <video
            src={currentMedia}
            className="modal-video"
            controls
            autoPlay
            muted
            loop
          />
        ) : (
          <img src={currentMedia} alt="Proyecto" className="modal-image" />
        )}
      </div>
    </div>
  );
};

export default ProjectsModal;
