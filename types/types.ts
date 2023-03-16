import { AxiosResponse } from "axios";

export interface ImageI {
  url: string;
}

export interface Item {
    images?: ImageI [];
    name?: string;
    release_date?: string;
  }

  export interface GetAlbumsResponse extends AxiosResponse {
    data: {
      albums: {
        items: Item[];
      };
    };
  }