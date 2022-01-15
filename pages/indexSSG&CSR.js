import Image from 'next/image';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export async function getStaticProps() {
  const data = await fetch('https://randomuser.me/api/?results=500');
  const json = await data.json();

  return {
    props: {
      json,
    },
  };
}

export default function Post({ json }) {
  const { data, error } = useSWR(
    'https://randomuser.me/api/?results=1000',
    fetcher
  );

  if (error) return <div>Failed to load</div>;

  return (
    <div>
      {json.results.map((result) => (
        <Image
          key={result.email}
          src={result.picture.large}
          alt={`${result.name.title} ${result.name.first} ${result.name.last}`}
          width={100}
          height={100}
        />
      ))}
      {data &&
        data.results.map((result) => (
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
