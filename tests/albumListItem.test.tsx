import AlbumListItem from "../components/AlbumListItem";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("AlbumListItem", () => {
  const someImg = 'https://i.scdn.co/image/ab67616d0000b273aff21e7b9470ce4affb09498'
  const defaultProps = {
    images: [
      { url: someImg },
      { url: someImg },
      { url: someImg }
    ],
    name: "Some name",
    release_date: "2023-02-23",
  };
  it("renders an AlbumListItem", () => {
    render(<AlbumListItem {...defaultProps} />);
    expect(screen.getByTestId("albumItemImage")).toBeInTheDocument();
    expect(screen.getByTestId("albumItemName")).toBeInTheDocument();
    expect(screen.getByTestId("albumItemDate")).toBeInTheDocument();
  });
  it("renders an AlbumListItem without image", () => {
    render(<AlbumListItem {...defaultProps} images={undefined} />);
    expect(screen.queryByTestId("albumItemImage")).not.toBeInTheDocument();
  });
  it("renders an AlbumListItem without date", () => {
    render(<AlbumListItem {...defaultProps} release_date={undefined} />);
    expect(screen.queryByTestId("albumItemDate")).not.toBeInTheDocument();
  });
  it("renders an AlbumListItem without name", () => {
    render(<AlbumListItem {...defaultProps} name={undefined} />);
    expect(screen.queryByTestId("albumItemName")).toBeNull();
  });
});
