import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Duc Nguyen" />
        <meta
          name="description"
          content="A webpage for rendering 1000 images using different stategies like Client Side Rendering, Static Site Generation, Static Site Generation and Client Side Rendering, Server Side Rendering and Client Side Rendering"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Frontend, Web Development, React, Next.js, Client Side Rendering, Static Site Generation, Server Side Rendering"
        />
      </Head>
      <p>Home</p>
    </div>
  );
}
