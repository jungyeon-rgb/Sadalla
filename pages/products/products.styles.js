import styled from '@emotion/styled';

export const StyledProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 50px auto;
  max-width: 1200px;

  text-align: center;
  justify-content: center;
`;

export const StyledProductAnchor = styled.a`
  text-decoration: none;
  width: 100%;
  max-width: 350px;
  flex: 0 1 350px;
`;

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const StyledProductInfo = styled.div`
  padding-top: 12px;
  color: #000;
  text-decoration: none;
  &:hover {
    color: #7b808c;
  }
`;

export const StyledProductTitle = styled.h3`
  font-size: 16px;
  margin: 15px 0 0 0;
  padding: 0;
  text-decoration: none;

  cursor: pointer;
`;

export const StyledProductPrice = styled.p`
  font-size: 14px;
  margin: 0 0 0 0;
  padding: 0;
  text-decoration: none;

  cursor: pointer;
`;

// [id].styles.js

export const ProductContentToCartButton = styled.button``;
