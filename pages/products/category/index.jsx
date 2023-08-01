import { useRouter } from "next/router";
import Image from "next/image";
import {
  StyledProductAnchor,
  StyledProductContainer,
  StyledProductInfo,
  StyledProductPrice,
  StyledProductsContainer,
  StyledProductTitle,
} from "@/pages/products/products.styles";
import axios from "axios";
import { console } from "next/dist/compiled/@edge-runtime/primitives/console";

export default function Products(props) {
  const { products } = props;
  const router = useRouter();
  // console.log(router.query);
  // const { category } = router.query;
  // console.log(category);

  const handleProductClick = (e, targetUrl) => {
    e.preventDefault();
    router.push(
      `${process.env.NEXT_PUBLIC_FETCH_BASEURL}/api/v1/products?category=${targetUrl}`,
    );
    // 체크하기
  };

  // const filteredProduct = categoryValue
  //   ? product.filter((p) => p.category === categoryValue)
  //   : product;

  return (
    <StyledProductsContainer>
      {products === null && (
        <div>상품이 존재하지 않습니다. 잠시 후에 다시 요청해주세요. :)</div>
      )}
      {products &&
        products.length > 0 &&
        products.map((product) => {
          return (
            <StyledProductAnchor
              key={product.id}
              onClick={(e) => handleProductClick(e, product.slug)}
            >
              <StyledProductContainer>
                <Image
                  src={product.image}
                  alt="product-image"
                  width={600}
                  height={600}
                />

                <StyledProductInfo>
                  <StyledProductTitle>{product.title}</StyledProductTitle>
                  <StyledProductPrice>
                    {product.price.toLocaleString()}
                  </StyledProductPrice>
                </StyledProductInfo>
              </StyledProductContainer>
            </StyledProductAnchor>
          );
        })}
    </StyledProductsContainer>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const categoryValue = query.category;

  try {
    const result = await axios.get(
      `${NEXT_PUBLIC_FETCH_BASEURL}/api/v1/products?category=${categoryValue}`,
    );
    console.log(result);
    if (result.status === 200) {
      const filteredData = categoryValue
        ? result.data.filter((p) => p.category === categoryValue)
        : result.data;
      return {
        props: {
          products: filteredData,
        },
      };
    } else {
      return {
        props: {
          products: null,
          error: {
            statusCode: result.status,
            title: `${result.statusText} - ${result.request.url}`,
          },
        },
      };
    }
  } catch (err) {
    console.error(err);
    console.error(err.response);
    const statusCode = err.response ? err.response.status : "에러발생";
    return {
      props: {
        products: null,
        error: {
          statusCode,
          title: err.response ? err.response.status : "에러발생",
        },
      },
    };
  }
}
