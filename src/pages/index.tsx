import { GetStaticProps } from 'next';
export default function Home(props) {
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, []);

  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

// export async function getServerSideProps() {
//   const response = fetch('http://localhost:3333/episodes');
//   const data = (await response).json();

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // a cada 8 horas
  }
}
