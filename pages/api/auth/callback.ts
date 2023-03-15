import type { NextApiRequest, NextApiResponse } from "next";
import querystring from 'querystring';
import {REDIRECT_URI, GET_SPOTIFY_TOKEN} from '../../../constants';
import axios from 'axios';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const code = req.query.code || null;
  axios({
    method: 'post',
    url: GET_SPOTIFY_TOKEN,
    data: querystring.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
    },
  })
    .then(response => {
      if (response.status === 200) {
        const { access_token } = response.data;

        res.setHeader('Set-Cookie', 
          `accessToken=${access_token}; Max-Age=${60000}; path=/; samesite=lax;`,
        );
        res.redirect('/home');
      } else {
        res.send(response);
      }
    })
    .catch(error => {
      debugger
      res.send(error);
    });
}
