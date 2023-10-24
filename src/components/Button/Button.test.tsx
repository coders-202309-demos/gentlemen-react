import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  const text = "Click here";
  const actionOnClick = vi.fn();

  describe("When it receives a text 'Click here'", () => {
    test("Then it should show a button with 'Click here' inside", async () => {
      render(
        <Button
          modifier=""
          type="button"
          text={text}
          actionOnClick={actionOnClick}
        />
      );

      const button = screen.getByRole("button", {
        name: text,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an action and the user clicks the button", () => {
    test("Then it should call the received action", async () => {
      render(
        <Button
          text={text}
          modifier=""
          type="button"
          actionOnClick={actionOnClick}
        />
      );

      const button = screen.getByRole("button", {
        name: text,
      });

      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
