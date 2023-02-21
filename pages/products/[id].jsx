<<<<<<< HEAD
import Head from "next/head";
import { useRouter } from "next/router";
import ProductsGrid from "../../components/products/products-grid";
=======
import Head from 'next/head';
import { useRouter } from 'next/router';
>>>>>>> 906d0016af37d18aa3c2c705e4d290596cb1b15b

export default function ProductsId({ data }) {
  /* 리액트 컴포넌트 함수는 파스칼 케이스 대문자로 시작 */
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
          minHeight: '100vh',
        }}
      >
        <h1>Products</h1>
        <p>{name}</p>
        <p>{title}</p>
        <ProductsGrid posts={props.posts} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();
  // 임시 데이터로 대체
  const post = [
    {
<<<<<<< HEAD
      title: "Product 1",
      image: "https://picsum.photos/500",
      price: 1000,
      slug: "product-1",
    },
    {
      title: "Product 2",
      image: "https://picsum.photos/500",
      price: 2000,
      slug: "product-2",
    },
    {
      title: "Product 3",
      image: "https://picsum.photos/500",
      price: 3000,
      slug: "product-3",
=======
      title: 'Product 1',
      image: 'https://picsum.photos/500',
      price: 1000,
      slug: 'product-1',
    },
    {
      title: 'Product 2',
      image: 'https://picsum.photos/500',
      price: 2000,
      slug: 'product-2',
    },
    {
      title: 'Product 3',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
>>>>>>> 906d0016af37d18aa3c2c705e4d290596cb1b15b
    },
  ];

  return {
    props: {
      data,
    },
  };
}
