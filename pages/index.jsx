import Link from 'next/link';
import Image from 'next/image';
import {
  HomeProductContentStyled,
  HomeProductImageDivStyled,
  HomeProductImageStyled,
  HomeToProductLinkStyled,
  ImageContentColumnStyled,
  HomeProductEventCommentStyled,
  ImageContentColumnItemStyled,
} from '@/pages/index.styles';
import SwiperComponent from '@/components/Swiper/Swiper';

export default function Index() {
  return (
    <>
      <SwiperComponent />
      <HomeProductEventCommentStyled>
        <h2>새로운 학기가 시작되면 설레는 마음이 가득!</h2>
        <p>
          설레는 마음으로 준비한 문구로 채워진 일상, 더욱 멋지게 꾸며보아요!
        </p>
      </HomeProductEventCommentStyled>

      {/* <HomeProductContentStyled>
        <ImageContentColumnStyled>
          <Link href="/products?category=watch">
            <Image
              src="/img/products/clock.png"
              alt="시계"
              width={200}
              height={200}
            />
          </Link>

          <Link href="/products?category=write">
            <Image
              src="/img/products/crayon.png"
              alt="크레용"
              width={250}
              height={200}
            />
          </Link>

          <Link href="/products?category=film">
            <Image
              src="/img/products/flim.png"
              alt="필름"
              width={200}
              height={150}
            />
          </Link>
          <Link href="/products?category=pencil">
            <Image
              src="/img/products/pencil.png"
              alt="연필"
              width={250}
              height={100}
            />
          </Link>

          <Link href="/products">
            <Image
              src="/img/products/postcard.png"
              alt="엽서"
              width={200}
              height={200}
            />
          </Link> 
        </ImageContentColumnStyled>
      </HomeProductContentStyled>*/}
    </>
  );
}
