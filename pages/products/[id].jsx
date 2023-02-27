import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductContent from "@/components/Product/product-detail/product-content";
import axios from "axios";

export default function PostDetailPage(props) {
  const { product, error } = props;
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, []);
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
          {product.map((item) => (
            <ProductContent
              key={product.id}
              productId={product.id}
              productName={product.title}
              productPrice={product.price}
              productMaker={product.maker}
              productContent={product.content}
              productImage={product.image}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  // 콘텍스트 매개변수를 사용하여 구체적인 매개변수 값을 구할 수 있음
  // next.j에서 제공하는 context 객체의 프로퍼티 중 하나
  // params(매개변수)는 키-값 쌍이 들어있는 객체
  // 키의 식별자는 [id]와 같이 대괄호로 감싸진 이름

  try {
    const result = await axios.get(
      `http://localhost:3000/api/products/${params.id}`
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
          statusCode: err.response.status,
          title: err.response.statusText,
        },
      },
    };
  }
}
