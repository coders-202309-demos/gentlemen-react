import "./GentlemanForm.css";

const GentlemanForm = (): React.ReactElement => {
  return (
    <form className="form">
      <div className="form__group">
        <label className="form__label" htmlFor="name">
          Nombre:{" "}
        </label>
        <input className="form__control" type="text" id="name" />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="picture">
          Imagen:{" "}
        </label>
        <input className="form__control" type="url" id="picture" />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="profession">
          Profesión:{" "}
        </label>
        <input className="form__control" type="text" id="profession" />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="status">
          Status:{" "}
        </label>
        <input className="form__control" type="text" id="status" />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="twitter">
          Twitter:{" "}
        </label>
        <input className="form__control" type="text" id="twitter" />
      </div>
    </form>
  );
};

export default GentlemanForm;
