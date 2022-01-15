import Image from 'next/image';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    'https://randomuser.me/api/?results=1000',
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.results.map((result) => (
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
