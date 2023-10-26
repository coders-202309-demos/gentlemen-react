import { useMemo } from "react";
import { Gentleman } from "../../types";
import Button from "../Button/Button";
import GentlemanCardStyled from "./GentlemanCardStyled";

interface GentlemanCardProps {
  gentleman: Gentleman;
  toggleGentleman: (gentleman: Gentleman) => void;
  removeGentleman: (gentlemanId: number) => void;
}

const GentlemanCard = ({
  gentleman: { id, picture, name, profession, status, twitter, isSelected },
  gentleman,
  toggleGentleman,
  removeGentleman,
}: GentlemanCardProps): React.ReactElement => {
  const initial = useMemo(() => {
    const nameParts = name.split(" ");

    return nameParts[0].length > 3
      ? nameParts[0][0].toUpperCase()
      : nameParts[1][0].toUpperCase();
  }, [name]);

  return (
    <GentlemanCardStyled
      className={`gentleman${isSelected ? " gentleman--selected" : ""}`}
    >
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${picture}`}
          alt={`${name} apuntándote con el dedo`}
        />
        <span className="gentleman__initial">{initial}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profesión:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Estado:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>
      <div className="gentleman__actions">
        <Button
          text={isSelected ? "deselect" : "select"}
          type="button"
          actionOnClick={() => toggleGentleman(gentleman)}
        />
        <Button
          text="remove"
          type="button"
          actionOnClick={() => removeGentleman(id)}
        />
      </div>
    </GentlemanCardStyled>
  );
};

export default GentlemanCard;
