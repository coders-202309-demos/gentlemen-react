import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import { Gentleman } from "../../types";
import GentlemenList from "../GentlemenList/GentlemenList";
import GentlemanForm from "../GentlemanForm/GentlemanForm";

const apiUrl = "http://localhost:3001/gentlemen";

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
    (async () => {
      const response = await fetch(apiUrl);
      const gentlemen = (await response.json()) as Gentleman[];

      loadGentlemen(gentlemen);
    })();
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
        <GentlemanForm />
        <GentlemenList gentlemen={gentlemen} />
      </main>
    </div>
  );
};

export default App;
