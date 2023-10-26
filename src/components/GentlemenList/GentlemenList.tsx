import { Gentleman } from "../../types";
import GentlemanCard from "../GentlemanCard/GentlemanCard";

interface GentlemenListProps {
  gentlemen: Gentleman[];
  toggleGentleman: (gentleman: Gentleman) => void;
  removeGentleman: (gentlemanId: number) => void;
}

const GentlemenList = ({
  gentlemen,
  toggleGentleman,
  removeGentleman,
}: GentlemenListProps): React.ReactElement => {
  return (
    <ul className="gentlemen">
      {gentlemen.map((gentleman) => (
        <li key={gentleman.id}>
          <GentlemanCard
            gentleman={gentleman}
            toggleGentleman={toggleGentleman}
            removeGentleman={removeGentleman}
          />
        </li>
      ))}
    </ul>
  );
};

export default GentlemenList;
