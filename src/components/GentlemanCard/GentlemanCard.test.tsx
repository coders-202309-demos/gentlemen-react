import { render, screen } from "@testing-library/react";
import GentlemanCard from "./GentlemanCard";
import { Gentleman } from "../../types";

describe("Given a GentlemanCard component", () => {
  describe("When it receives Mario González's data", () => {
    test("Then it should show 'Mario González' inside a heading", () => {
      const mario: Gentleman = {
        id: 1,
        name: "Mario González",
        picture: "",
        status: "",
        profession: "",
        twitter: "",
        isSelected: false,
      };

      render(<GentlemanCard gentleman={mario} />);

      const name = screen.getByRole("heading", {
        name: mario.name,
      });

      expect(name).toBeInTheDocument();
    });
  });
});
