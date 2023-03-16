import Header from "../components/Head";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";


describe("Head", () => {
    it("renders a head", async () => {
      render(<Header />)
      await waitFor(() => {
        expect(document.querySelector('head')).toMatchSnapshot()
      })
    });
  });