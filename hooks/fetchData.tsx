import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import { Item, GetAlbumsResponse } from "../types/types";
import { searchAlbumUrl, MARKET } from "../constants";

const useSearchApi = (relogin: () => void): [{ data: Item [], artistName: string, error: boolean }, Dispatch<SetStateAction<string>>] => {
  const [data, setData] = useState<Item[]>([]);
  const [artistName, setArtistName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    if (!artistName) return;

    axios
      .get(searchAlbumUrl({ market: MARKET, artist: artistName || "" }), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if ((response as GetAlbumsResponse).data.albums) {
          setData(() => (response as GetAlbumsResponse).data.albums.items);
          setArtistName(artistName);
        }
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
          relogin();
        }

        setError(true);
      });
  }, [artistName]);

  return [{ data, artistName, error }, setArtistName];
};

export default useSearchApi;
