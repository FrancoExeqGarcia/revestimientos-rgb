import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./FlooringSections.css";

type FlooringGridProps = {
  setSelectedFloor: (floor: string, bgImage: string) => void;
  setBgImage: (url: string | null) => void;
  setFadeOut: (fade: boolean) => void;
};

export const FlooringGrid: React.FC<FlooringGridProps> = ({ setSelectedFloor, setBgImage, setFadeOut }) => {
  const { translations } = useContext(LanguageContext)!;

  const floors = [
    { key: "luxuryVinyl", label: "Luxury Vinyl", image: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/luxury-vinyl_ix5qmp.jpg", bgImage: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573852/vinyl_fpoqrp.jpg" },
    { key: "laminate", label: "Laminate", image: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate_npby1a.jpg", bgImage: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573849/laminate-2_oqh7xl.jpg" },
    { key: "tile", label: "Tile", image: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573851/tile_n81qvo.jpg", bgImage: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573851/tile-2_txkpmu.jpg" },
    { key: "wood", label: "Wood", image: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573853/wood_cvzv5g.jpg", bgImage: "https://res.cloudinary.com/drwacbtjf/image/upload/v1742573855/wood-2_iwg1ht.jpg" }
  ];

  return (
    <div className="flooring-grid">
      {floors.map((floor) => (
        <div
          key={floor.key}
          className="flooring-card"
          onClick={() => setSelectedFloor(floor.key, floor.bgImage)}
          onMouseEnter={() => {
            setBgImage(floor.bgImage);
            setFadeOut(false);
          }}
          onMouseLeave={() => setFadeOut(true)}
        >
          <img src={floor.image} alt={floor.label} />
          <div className="floor-label">{floor.label}</div>
        </div>
      ))}
    </div>
  );
};