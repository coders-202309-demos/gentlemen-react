interface CounterProps {
  totalSelectedGentlemen: number;
}

const Counter = ({
  totalSelectedGentlemen,
}: CounterProps): React.ReactElement => {
  return (
    <p className="info">
      {totalSelectedGentlemen} señor{totalSelectedGentlemen === 1 ? "" : "es"}{" "}
      que te apuntan con el dedo marcados
    </p>
  );
};

export default Counter;
