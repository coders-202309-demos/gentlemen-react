import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import { Gentleman } from "../../types";
import gentlemenApi from "../../data/gentlemen";
import GentlemenList from "../GentlemenList/GentlemenList";

const App = (): React.ReactElement => {
  const [gentlemen, setGentlemen] = useState<Gentleman[]>([]);

  const loadGentlemen = (gentlemen: Gentleman[]) => {
    setGentlemen(gentlemen);
  };

  const selectAllGentlemen = () => {
    setGentlemen(
      gentlemen.map((gentlemen) => ({
        ...gentlemen,
        isSelected: true,
      }))
    );
  };

  const totalSelectedGentlemen = gentlemen.filter(
    (gentleman) => gentleman.isSelected
  ).length;

  useEffect(() => {
    loadGentlemen(gentlemenApi);
  }, []);

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section className="controls">
        <Counter totalSelectedGentlemen={totalSelectedGentlemen} />
        <Button
          type="button"
          modifier="select"
          text="Marcar todos"
          actionOnClick={selectAllGentlemen}
        />
      </section>
      <main className="main">
        <GentlemenList gentlemen={gentlemen} />
      </main>
    </div>
  );
};

export default App;
