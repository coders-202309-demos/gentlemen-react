import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Given a Counter component", () => {
  describe("When it receives 10", () => {
    test("Then it should show '10 señores que te apuntan con el dedo marcados'", () => {
      const totalSelectedGentlemen = 10;
      const expectedText = `${totalSelectedGentlemen} señores que te apuntan con el dedo marcados`;

      render(<Counter totalSelectedGentlemen={totalSelectedGentlemen} />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
