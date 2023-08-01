import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductContent from "@/components/Products/ProductContent/productContent";
import axios from "axios";
import {
  ProductContentToCartButton,
  StyledProductContainer,
} from "@/pages/products/products.styles";

export default function PostDetailPage(props) {
  const { product, error } = props;
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, [router.isReady]);

  if (error !== null)
    return (
      <div>
        Error {error.statusCode} {error.statusText}
      </div>
    );

  return (
    <div>
      {isLoading ? (
        <p>미아내요 조굼만 더 기다려줘유</p>
      ) : (
        <ul>
          <ProductContent {...product} />
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    // TODO: API 서버 URL 로 연결하기
    // const result = await axios.get(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/products/${params.id}`
    // );

    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_FETCH_BASEURL}/api/v1/products/${params.id}`,
    );

    if (result.status === 200) {
      return {
        props: {
          product: result.data,
          error: null,
        },
      };
    } else {
      return {
        props: {
          product: null,
          error: {
            statusCode: result.status,
            title: `${result.statusText} - ${result.request.url}`,
          },
        },
      };
    }
  } catch (err) {
    console.error(err.response);
    return {
      props: {
        product: null,
        error: {
          statusCode: err.response ? err.response.status : 500,
          title: err.response
            ? err.response.statusText
            : "Internal Server Error",
        },
      },
    };
  }
}
