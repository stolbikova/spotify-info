import SpotifyBlock from "../components/SpotifyBlock";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


describe("EmptyBlock", () => {
    it("renders an SpotifyBlock", () => {
      render(<SpotifyBlock title="Some title" />);
      expect(screen.getByTestId("spotifyBlock")).toBeInTheDocument();
    });
  });