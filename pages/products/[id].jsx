import Head from "next/head";
import { useRouter } from "next/router";

export default function aboutId({ data }) {
  const router = useRouter();
  const { id } = router.query;
  const { name } = data;
  const { title } = data;

  return (
    <>
      <Head>
        <title>products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <h1>Products</h1>
        <p>{name}</p>
        <p>{title}</p>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
