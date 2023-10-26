import { useState } from "react";
import { Gentleman } from "../../types";
import Button from "../Button/Button";
import GentlemanFormStyled from "./GentlemanFormStyled";

interface GentlemanFormProps {
  actionOnSubmit: (gentleman: Gentleman) => void;
}

const GentlemanForm = ({
  actionOnSubmit,
}: GentlemanFormProps): React.ReactElement => {
  const initialNewGentleman: Gentleman = {
    id: 0,
    name: "",
    picture: "",
    profession: "",
    twitter: "",
    status: "",
    isSelected: false,
  };

  const [newGentleman, setNewGentleman] = useState(initialNewGentleman);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGentleman((newGentleman) => ({
      ...newGentleman,
      [event.target.id]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(newGentleman);

    setNewGentleman(initialNewGentleman);
  };

  return (
    <GentlemanFormStyled
      className="form"
      autoComplete="off"
      onSubmit={onFormSubmit}
    >
      <div className="form__group">
        <label className="form__label" htmlFor="name">
          Nombre:{" "}
        </label>
        <input
          className="form__control"
          type="text"
          id="name"
          value={newGentleman.name}
          onChange={onChangeData}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="picture">
          Imagen:{" "}
        </label>
        <input
          className="form__control"
          type="text"
          id="picture"
          value={newGentleman.picture}
          onChange={onChangeData}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="profession">
          Profesión:{" "}
        </label>
        <input
          className="form__control"
          type="text"
          id="profession"
          value={newGentleman.profession}
          onChange={onChangeData}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="status">
          Status:{" "}
        </label>
        <input
          className="form__control"
          type="text"
          id="status"
          value={newGentleman.status}
          onChange={onChangeData}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="twitter">
          Twitter:{" "}
        </label>
        <input
          className="form__control"
          type="text"
          id="twitter"
          value={newGentleman.twitter}
          onChange={onChangeData}
        />
      </div>
      <div className="form__group">
        <Button text="Crear" type="submit" />
      </div>
    </GentlemanFormStyled>
  );
};

export default GentlemanForm;
