import React from "react";
import "./FlooringSections.css";
import { Laminate } from "./Laminate";
import { LuxuryVinyl } from "./LuxuryVinyl";
import { Tile } from "./Tile";
import { Wood } from "./Wood";

type FlooringModalProps = {
  floor: string;
  onClose: () => void;
};

const floorImages: Record<string, string> = {
  tile: "https://s7d4.scene7.com/is/image/MohawkResidential/63269_941_room_00?scl=2&hei=600&wid=800&align=0,.5&fmt=webp",
  laminate: "https://www.mannington.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fr69d9lchftro%2F2TvgAY1cgC30UYtO6gwM4s%2F747a6cf5e97760b5aacdb3cfbc7fa051%2FBlog_Post_Ultimate_Guide_to_Laminate_Flooring_Image_.jpg&w=2048&q=75",
  luxuryVinyl: "https://shawfloors.widen.net/content/d2zw5plafw/jpeg/ProdigyHDRMXLPlus-2039V-02040-GoldenAge-RM-H.jpg?crop=true&position=c&w=1042&h=1042",
  wood: "https://kenningtonflooring.co.uk/wp-content/uploads//Luxury-Vinyl-Tiles-01.jpg",
};

export const FlooringModal: React.FC<FlooringModalProps> = ({ floor, onClose }) => {
  const components: Record<string, JSX.Element> = {
    tile: <Tile />,
    laminate: <Laminate />,
    luxuryVinyl: <LuxuryVinyl />,
    wood: <Wood />,
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card-two-columns" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image-column">
          <img src={floorImages[floor]} alt={floor} />
        </div>
        <div className="modal-text-column">
          <h2 className="modal-title">{floor}</h2>
          <div className="modal-content-scroll">{components[floor]}</div>
          <button onClick={onClose} className="close-btn">Cerrar</button>
        </div>
      </div>
    </div>
  );
};
