import Head from 'next/head';
import Image from 'next/image';

export async function getStaticProps() {
  const data = await fetch('https://randomuser.me/api/?results=1000');
  const json = await data.json();

  return {
    props: {
      json,
    },
  };
}

export default function Ssg({ json }) {
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Duc Nguyen" />
        <meta
          name="description"
          content="A webpage for rendering 1000 images using Static Site Generation"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Frontend, Web Development, React, Next.js, Static Site Generation"
        />
      </Head>
      {json &&
        json.results.map((result) => (
          <Image
            key={result.email}
            src={result.picture.large}
            alt={`${result.name.title} ${result.name.first} ${result.name.last}`}
            width={100}
            height={100}
          />
        ))}
    </div>
  );
}
