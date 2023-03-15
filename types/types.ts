import { AxiosResponse } from "axios";

export interface Item {
    images: any[];
    name: string;
    release_date: string;
  }

  export interface GetAlbumsResponse extends AxiosResponse {
    data: {
      albums: {
        items: Item[];
      };
    };
  }