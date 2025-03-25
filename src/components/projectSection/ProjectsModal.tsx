import React from "react";
import "./ProjectsModal.css";

interface ProjectModalProps {
  image: string;
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectModalProps> = ({ image, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={image} alt="Proyecto" className="modal-image" />
      </div>
    </div>
  );
};

export default ProjectsModal;
