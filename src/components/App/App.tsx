import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import { Gentleman } from "../../types";
import GentlemenList from "../GentlemenList/GentlemenList";
import GentlemanForm from "../GentlemanForm/GentlemanForm";
import AppStyled from "./AppStyled";

const apiUrl = import.meta.env.VITE_API_URL;

const App = (): React.ReactElement => {
  const [gentlemen, setGentlemen] = useState<Gentleman[]>([]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((showForm) => !showForm);
  };

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

  const toggleGentleman = async (gentleman: Gentleman) => {
    const response = await fetch(`${apiUrl}/gentlemen/${gentleman.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isSelected: !gentleman.isSelected,
      }),
    });

    if (response.status !== 200) {
      return;
    }

    setGentlemen((gentlemen) =>
      gentlemen.map((currentGentleman) => ({
        ...currentGentleman,
        isSelected:
          currentGentleman.id === gentleman.id
            ? !currentGentleman.isSelected
            : currentGentleman.isSelected,
      }))
    );
  };

  const addGentleman = async (gentleman: Gentleman) => {
    const response = await fetch(`${apiUrl}/gentlemen`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gentleman),
    });

    if (response.status !== 201) {
      return;
    }

    const newGentleman = (await response.json()) as Gentleman;

    setGentlemen((gentlemen) => [...gentlemen, newGentleman]);
  };

  const removeGentleman = async (gentlemanId: number) => {
    const response = await fetch(`${apiUrl}/gentlemen/${gentlemanId}`, {
      method: "DELETE",
    });

    if (response.status !== 200) {
      return;
    }

    setGentlemen((gentlemen) =>
      gentlemen.filter((gentleman) => gentleman.id !== gentlemanId)
    );
  };

  const totalSelectedGentlemen = gentlemen.filter(
    (gentleman) => gentleman.isSelected
  ).length;

  useEffect(() => {
    (async () => {
      const response = await fetch(`${apiUrl}/gentlemen`);
      const gentlemen = (await response.json()) as Gentleman[];

      loadGentlemen(gentlemen);
    })();
  }, []);

  return (
    <AppStyled>
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section className="controls">
        <Counter totalSelectedGentlemen={totalSelectedGentlemen} />
        <Button
          type="button"
          text="Marcar todos"
          actionOnClick={selectAllGentlemen}
        />
        <Button type="button" text="Crear señor" actionOnClick={toggleForm} />
      </section>
      <main className="main">
        {showForm && <GentlemanForm actionOnSubmit={addGentleman} />}
        <GentlemenList
          gentlemen={gentlemen}
          toggleGentleman={toggleGentleman}
          removeGentleman={removeGentleman}
        />
      </main>
    </AppStyled>
  );
};

export default App;
