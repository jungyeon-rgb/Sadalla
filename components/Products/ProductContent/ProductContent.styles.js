import styled from '@emotion/styled';

export const ProductContentContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 150px auto;
  height: 650px;
`;

export const ProductContentMain = styled.div`
  display: initial;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 50px;
  width: 400px;
  & p {
    font-size: 15px;
    margin: 10px;
  }
  & h3 {
    font-size: 25px;
    font-weight: 300;
  }
& h4 {
    font-size: 18px;
    font-weight: 500;
}
& hr {
    border: 1px dashed #000000;
}
  }
`;
export const ProductContentButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductContentCountInput = styled.input`
  margin: 10px;
  width: 60px;
  height: 40px;
  font-size: 20px;
  text-align: center;

  border: 2px solid #000000;
`;
export const ProductContentToCartButton = styled.button`
  margin: 10px;
  width: 120px;
  height: 40px;
  font-size: 15px;
  text-align: center;

  background-color: #000000;
  color: #ffffff;
`;
