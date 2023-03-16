import EmptyBlock from "../components/EmptyBlock";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


describe("EmptyBlock", () => {
    it("renders an EmptyBlock", () => {
      render(<EmptyBlock error={false} />);
      expect(screen.getByTestId("emptyBlock")).toBeInTheDocument();
    });
    it("renders an EmptyBlock with error", () => {
      render(<EmptyBlock error={true} />);
      expect(screen.getByTestId("emptyBlockError")).toBeInTheDocument();
    });
  });