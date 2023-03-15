import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import querystring from 'querystring';
import {GET_SPOTIFY_TOKEN} from '../../../constants';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
){
    const { refresh_token } = req.query;

    axios({
      method: 'post',
      url: GET_SPOTIFY_TOKEN,
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
      },
    })
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        res.send(error);
      });
}

export default handler;