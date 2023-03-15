import type { NextApiRequest, NextApiResponse } from "next";
import querystring from  "querystring";
import {generateRandomString} from '../../../lib/generateRandomString';
import {REDIRECT_URI, AUTH_SPOTIFY} from '../../../constants';

console.log("REDIRECT URI", REDIRECT_URI)

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
){
    // generate rando string 16
    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';
  
    res.redirect(AUTH_SPOTIFY +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.CLIENT_ID,
        scope: scope,
        redirect_uri: REDIRECT_URI,
        state: state
      }));
}

export default handler;