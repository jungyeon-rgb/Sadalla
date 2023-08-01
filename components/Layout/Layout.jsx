import Link from 'next/link';
import {
  LayoutHeaderLogoStyled,
  LayoutHeaderNavLiStyled,
  LayoutHeaderNavStyled,
  LayoutHeaderNavUlStyled,
  LayoutHeaderStyled,
} from '@/components/Layout/Layout.styles';

export default function Layout({ children }) {
  return (
    <>
      <LayoutHeaderStyled>
        <LayoutHeaderLogoStyled>
          <Link href="/">Sadalla</Link>
        </LayoutHeaderLogoStyled>
        <LayoutHeaderNavStyled>
          <LayoutHeaderNavUlStyled>
            <LayoutHeaderNavLiStyled>
              <Link href="/products">VIEW ALL</Link>
            </LayoutHeaderNavLiStyled>
            <LayoutHeaderNavLiStyled>
              <Link href="/products?category=note">NOTES</Link>
            </LayoutHeaderNavLiStyled>
            <LayoutHeaderNavLiStyled>
              <Link href="/products?category=sticker">STICKER</Link>
            </LayoutHeaderNavLiStyled>
            <LayoutHeaderNavLiStyled>
              <Link href="/products?category=write">WRITE</Link>
            </LayoutHeaderNavLiStyled>

            <LayoutHeaderNavLiStyled>
              <Link href="/my-page">CART</Link>
            </LayoutHeaderNavLiStyled>
            <LayoutHeaderNavLiStyled>
              <Link href="/order">ORDER</Link>
            </LayoutHeaderNavLiStyled>
          </LayoutHeaderNavUlStyled>
        </LayoutHeaderNavStyled>
      </LayoutHeaderStyled>
      {children}
    </>
  );
}
