import { Gentleman } from "../../types";
import GentlemanCard from "../GentlemanCard/GentlemanCard";

interface GentlemenListProps {
  gentlemen: Gentleman[];
}

const GentlemenList = ({
  gentlemen,
}: GentlemenListProps): React.ReactElement => {
  return (
    <ul className="gentlemen">
      {gentlemen.map((gentleman) => (
        <li key={gentleman.id}>
          <GentlemanCard gentleman={gentleman} />
        </li>
      ))}
    </ul>
  );
};

export default GentlemenList;
