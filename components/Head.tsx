import Head from 'next/head';

export default function Header() {
  return (
        <Head>
        <title>Spotify App</title>
        <meta name="description" content="Spotify app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  );
}
