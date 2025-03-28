import React from "react";
import "./ProjectsModal.css";
interface ProjectModalProps {
  media: string;
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectModalProps> = ({ media, onClose }) => {
  const isVideo = media.endsWith(".mp4");
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>

        {isVideo ? (
          <video
            src={media}
            controls
            autoPlay
            muted
            loop
            className="modal-video"
          />
        ) : (
          <img src={media} alt="Proyecto" className="modal-image" />
        )}
      </div>
    </div>
  );
};

export default ProjectsModal;
