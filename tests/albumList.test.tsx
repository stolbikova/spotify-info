import AlbumList from "../components/AlbumList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("AlbumListItem", () => {
  const defaultProps = {
        data: [],
        artistName: 'Some name',
        listenersCount: 1000
  };
  it("renders an AlbumList", () => {
    render(<AlbumList {...defaultProps} />);
    expect(screen.getByTestId("albumListArtistName")).toBeInTheDocument();
  });
});