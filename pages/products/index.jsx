import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  StyledProductAnchor,
  StyledProductContainer,
  StyledProductInfo,
  StyledProductPrice,
  StyledProductsContainer,
  StyledProductTitle,
} from '@/pages/products/products.styles';

export default function Products(props) {
  const { posts } = props;

  const router = useRouter();

  const handleProductClick = (e, targetUrl) => {
    e.preventDefault();
    router.push(targetUrl);
  };

  return (
    <StyledProductsContainer>
      {posts.map((product) => {
        return (
          <StyledProductAnchor
            key={product.id}
            onClick={(e) => handleProductClick(e, product.slug)}
          >
            <StyledProductContainer>
              <Image
                src={product.image}
                alt="product-image"
                width={300}
                height={300}
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

export async function getServerSideProps() {
  // API를 호출해서 상품 데이터를 가져오는 경우
  // const res = await fetch('http://localhost:3000/api/products');
  // const products = await res.json();

  // 임시 데이터로 대체
  const posts = [
    {
      id: 1,
      title: 'Product 1',
      image: 'https://picsum.photos/500',
      price: 1000,
      slug: 'product-1',
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://picsum.photos/500',
      price: 2000,
      slug: 'product-2',
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      id: 4,
      title: 'Product 4',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      id: 5,
      title: 'Product 5',
      image: 'https://picsum.photos/500',
      price: 7777,
      slug: 'product-3',
    },
    {
      id: 6,
      title: 'Product 6',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      id: 7,
      title: 'Product 7',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      id: 8,
      title: 'Product 8',
      image: 'https://picsum.photos/500',
      price: 3000,
      slug: 'product-3',
    },
    {
      title: 'Product 9',
      image: 'https://picsum.photos/500',
      price: 2000,
      slug: 'product-3',
    },
    {
      id: 9,
      title: 'Product 10',
      image: 'https://picsum.photos/500',
      price: 1000,
      slug: 'product-3',
    },
  ];

  return {
    props: {
      posts,
    },
  };
}
