import ReactMarkdown from 'react-markdown';
import classes from './ProductContent.styles';
import ProductHeader from '@/components/Products/ProductContent/ProductContentHeader/ProductContentHeader';
import {
  ProductContentContainer,
  ProductContentMain,
  ProductContentToCartButton,
  ProductContentCountInput,
  ProductContentButtonContainer,
} from '@/components/Products/ProductContent/ProductContent.styles';
import Image from 'next/image';
export default function ProductContent(props) {
  const { id, company, title, content, price, image } = props;
  return (
    <ProductContentContainer>
      <Image src={image} alt="상품 이미지" width={500} height={500} />
      <ProductContentMain>
        <ProductHeader title={title} />
        <p>{company}</p>
        <h3>{price}원</h3>
        <hr />

        <ProductContentButtonContainer>
          <ProductContentCountInput />
          <ProductContentToCartButton>ADD TO BAG</ProductContentToCartButton>
        </ProductContentButtonContainer>
        <hr />
        <h4>{content}</h4>
        {/* <ReactMarkdown className="productmarkdown">{content}</ReactMarkdown> */}
      </ProductContentMain>
    </ProductContentContainer>
  );
}
